/**
 * 出行建议引擎
 * ---------------------------------------------------------------
 * 目标：不把气象数据丢给游客自己解读，而是直接给出「可执行建议」。
 *
 * 设计要点：
 * 1. 规则是**纯数据**（可序列化），因此服务端渲染与浏览器静默刷新
 *    共用同一份规则，不会出现两处文案不一致。
 * 2. 规则分四类：alert（风险，置顶）/ outfit（出行穿搭）/
 *    plan（游玩安排）/ gear（随身物品）。
 * 3. 不满足条件的规则直接不输出；同一 group 只保留优先级最高的一条，
 *    避免「下雨 + 小雨 + 阵雨」这类重复堆叠。
 * 4. 面向的是「海边礁石」场景：除常规天气外，还接入了浪高、海水温度
 *    与潮汐，覆盖下海、赶海、礁石湿滑这些普通城市天气预报不会提的事。
 */
import type { WeatherData } from './weather-types';
import { beaufort, worstCode } from './wmo';
import { minutesUntil } from './weather-parse';

export type AdviceCategory = 'alert' | 'outfit' | 'plan' | 'gear';

/** 参与判断的指标集合（数值或已格式化的时间字符串） */
export interface Metrics {
  [key: string]: number | string;
}

export type Op = 'gte' | 'gt' | 'lte' | 'lt' | 'eq' | 'in';

export interface Cond {
  m: string;
  op: Op;
  v: number | number[];
}

export interface AdviceRule {
  id: string;
  cat: AdviceCategory;
  /** 优先级，数值越大越先输出 */
  pri: number;
  /** 同一 group 内只保留优先级最高的一条 */
  group?: string;
  all?: Cond[];
  any?: Cond[];
  icon: string;
  text: { zh: string; en: string; es: string; pt: string };
}

export interface AdviceItem {
  id: string;
  cat: AdviceCategory;
  icon: string;
  text: string;
}

/* ── 指标计算 ─────────────────────────────────────────────── */

const T = (zh: string, en: string, es: string, pt: string) => ({ zh, en, es, pt });

export function buildMetrics(d: WeatherData): Metrics {
  const c = d.current;
  const today = d.daily[0];
  const hourly = d.hourly;
  const marine = d.marine;

  const probs = hourly.map((h) => h.precipProb);
  const precipProb = probs.length ? Math.max(...probs) : today?.precipProb ?? 0;
  const codeWorst = worstCode([c.code, ...hourly.map((h) => h.code), ...d.daily.slice(0, 2).map((x) => x.code)]);

  const windMax = Math.max(c.wind, c.gust, ...d.daily.map((x) => x.windMax), 0);
  const gustMax = Math.max(c.gust, ...d.daily.map((x) => x.windMax), 0);
  const windLevel = beaufort(Math.max(c.wind, c.gust));

  const tempMax = today?.max ?? c.temp;
  const tempMin = today?.min ?? c.temp;

  const now = c.time;
  const nextTide = (type: 'high' | 'low') =>
    d.tides.find((t) => t.type === type && minutesUntil(t.time, now) >= 0);

  const low = nextTide('low');
  const high = nextTide('high');

  const sunsetIn = today?.sunset ? minutesUntil(today.sunset, now) : -1;

  return {
    tempNow: c.temp,
    feelsNow: c.feels,
    tempMax,
    tempMin,
    tempRange: Math.max(0, tempMax - tempMin),
    uvMax: today?.uvMax ?? 0,

    precipProb,
    precipProbToday: today?.precipProb ?? 0,
    precipSum: today?.precipSum ?? 0,
    precipNow: c.precip,

    windNow: c.wind,
    windMax,
    gustMax,
    windLevel,

    codeNow: c.code,
    codeWorst,
    humidity: c.humidity,
    visibility: c.visibility,

    waveHeight: marine ? marine.waveHeight : -1,
    wavePeriod: marine ? marine.wavePeriod : -1,
    seaTemp: marine ? marine.seaTemp : -1,
    hasMarine: marine ? 1 : 0,

    tideLowIn: low ? minutesUntil(low.time, now) : -1,
    tideHighIn: high ? minutesUntil(high.time, now) : -1,
    tideLowAt: low ? low.time.slice(11, 16) : '',
    tideHighAt: high ? high.time.slice(11, 16) : '',

    sunsetIn,
    sunsetAt: today?.sunset ? today.sunset.slice(11, 16) : '',
    isDay: c.isDay ? 1 : 0,
    month: Number(now.slice(5, 7)) || 0,
  };
}

/* ── 规则库 ───────────────────────────────────────────────── */

const MARINE = { m: 'hasMarine', op: 'eq' as Op, v: 1 };

export const ADVICE_RULES: AdviceRule[] = [
  /* ═══ 风险提醒（优先级最高，置顶红色） ═══ */
  {
    id: 'alert-thunder',
    cat: 'alert',
    pri: 100,
    icon: '⛈️',
    any: [
      { m: 'codeNow', op: 'in', v: [95, 96, 99] },
      { m: 'codeWorst', op: 'in', v: [95, 96, 99] },
    ],
    text: T(
      '雷暴天气：不要登上礁石高处，不要下海或站在湿沙上，也不要在大树下避雨；海滩与水上项目可能临时关闭。',
      'Thunderstorms: stay off the top of the rock, do not swim or stand on wet sand, and do not shelter under trees. Beach and water activities may be suspended.',
      'Tormentas eléctricas: no suba a lo alto de la roca, no nade ni permanezca en arena mojada y no se refugie bajo árboles. Las actividades de playa y acuáticas pueden suspenderse.',
      'Trovoadas: não suba ao topo da rocha, não entre no mar nem fique em areia molhada e não se abrigue sob árvores. Atividades de praia e aquáticas podem ser suspensas.',
    ),
  },
  {
    id: 'alert-heavyrain',
    cat: 'alert',
    pri: 95,
    icon: '🌧️',
    any: [
      { m: 'precipSum', op: 'gte', v: 20 },
      { m: 'codeWorst', op: 'in', v: [65, 67, 82] },
    ],
    text: T(
      '降雨较强（今日累计约 {precipSum} mm）：避开低洼地带与湿滑礁面，留意积水、落石与临时关闭的通道。',
      'Heavy rain (about {precipSum} mm today): avoid low-lying areas and wet rock surfaces; watch for flooding, falling stones and closed paths.',
      'Lluvia intensa (unos {precipSum} mm hoy): evite zonas bajas y la roca mojada; atención a inundaciones, desprendimientos y pasos cerrados.',
      'Chuva forte (cerca de {precipSum} mm hoje): evite áreas baixas e rocha molhada; atenção a alagamentos, queda de pedras e acessos fechados.',
    ),
  },
  {
    id: 'alert-gale',
    cat: 'alert',
    pri: 92,
    icon: '💨',
    all: [{ m: 'windLevel', op: 'gte', v: 7 }],
    text: T(
      '大风天气（约 {windLevel} 级）：远离礁石边缘、海边护栏与广告牌，帽子、阳伞和轻便物品容易被吹走。',
      'Strong wind (force {windLevel}): keep away from the rock edge, seafront railings and signage — hats, parasols and light items blow away easily.',
      'Viento fuerte (fuerza {windLevel}): aléjese del borde de la roca, barandillas y carteles; sombreros, sombrillas y objetos ligeros salen volando.',
      'Vento forte (força {windLevel}): afaste-se da borda da rocha, grades e placas — chapéus, guarda-sóis e objetos leves voam facilmente.',
    ),
  },
  {
    id: 'alert-roughsea',
    cat: 'alert',
    pri: 90,
    icon: '🌊',
    all: [MARINE, { m: 'waveHeight', op: 'gte', v: 2.5 }],
    text: T(
      '海浪较高（约 {waveHeight} m）：礁石与低位通道会被浪打湿，请勿靠近水边拍照，观浪请留在安全平台。',
      'High surf (about {waveHeight} m): waves wash over the rock and lower paths — do not go near the water for photos, watch from the safe platform.',
      'Oleaje alto (unos {waveHeight} m): las olas cubren la roca y los pasos bajos; no se acerque al agua para fotos, observe desde la plataforma segura.',
      'Mar agitado (cerca de {waveHeight} m): as ondas lavam a rocha e os acessos baixos — não se aproxime da água para fotos, observe da plataforma segura.',
    ),
  },
  {
    id: 'alert-heat',
    cat: 'alert',
    pri: 88,
    icon: '🔥',
    all: [{ m: 'tempMax', op: 'gte', v: 38 }],
    text: T(
      '高温天气（最高 {tempMax}）：正午前后尽量待在阴凉处，少量多次补水，出现头晕乏力立即休息。',
      'Extreme heat (high of {tempMax}): stay in the shade around midday, drink water in small amounts often, and rest at once if you feel dizzy.',
      'Calor extremo (máx. {tempMax}): permanezca a la sombra al mediodía, beba agua a sorbos con frecuencia y descanse si se marea.',
      'Calor extremo (máx. {tempMax}): fique na sombra no meio do dia, beba água em pequenos goles e descanse se sentir tontura.',
    ),
  },
  {
    id: 'alert-fog',
    cat: 'alert',
    pri: 86,
    icon: '🌫️',
    all: [
      { m: 'visibility', op: 'gt', v: 0 },
      { m: 'visibility', op: 'lte', v: 1000 },
    ],
    text: T(
      '能见度很低（不足 1 km）：不适合看海与远景，轮渡、航班可能延误，步行与驾车请放慢速度。',
      'Very low visibility (under 1 km): poor conditions for sea views, ferries and flights may be delayed — slow down on foot and on the road.',
      'Visibilidad muy baja (menos de 1 km): mal momento para vistas al mar, ferris y vuelos pueden retrasarse; camine y conduzca con calma.',
      'Visibilidade muito baixa (menos de 1 km): ruim para vistas do mar, balsas e voos podem atrasar — vá devagar a pé e ao volante.',
    ),
  },

  /* ═══ 出行穿搭 ═══ */
  {
    id: 'outfit-temp-hot',
    cat: 'outfit',
    pri: 60,
    group: 'outfit-temp',
    icon: '👕',
    all: [{ m: 'tempMax', op: 'gte', v: 32 }],
    text: T(
      '气温偏高（最高 {tempMax}）：轻薄透气的短袖短裤，速干面料更舒服，颜色浅一些更防晒。',
      'Hot day (high of {tempMax}): light, breathable T-shirt and shorts; quick-dry fabrics are more comfortable and lighter colours reflect heat.',
      'Día caluroso (máx. {tempMax}): camiseta y pantalón corto ligeros y transpirables; los tejidos de secado rápido y los colores claros son mejores.',
      'Dia quente (máx. {tempMax}): camiseta e shorts leves e respiráveis; tecidos de secagem rápida e cores claras ajudam.',
    ),
  },
  {
    id: 'outfit-temp-warm',
    cat: 'outfit',
    pri: 58,
    group: 'outfit-temp',
    icon: '👕',
    all: [{ m: 'tempMax', op: 'gte', v: 26 }],
    text: T(
      '天气温暖（最高 {tempMax}）：短袖加一件薄外搭就够，海边起风时可以随手穿上。',
      'Warm weather (high of {tempMax}): a T-shirt plus a light layer is enough — keep it handy for the sea breeze.',
      'Tiempo cálido (máx. {tempMax}): camiseta y una capa ligera bastan; téngala a mano por la brisa marina.',
      'Tempo quente (máx. {tempMax}): camiseta e uma camada leve bastam; deixe à mão por causa da brisa do mar.',
    ),
  },
  {
    id: 'outfit-temp-mild',
    cat: 'outfit',
    pri: 56,
    group: 'outfit-temp',
    icon: '🧥',
    all: [{ m: 'tempMax', op: 'gte', v: 20 }],
    text: T(
      '气温温和（最高 {tempMax}）：长袖或薄外套较合适，清晨和傍晚在礁石上会更凉。',
      'Mild day (high of {tempMax}): long sleeves or a light jacket suit best — it feels cooler on the rock at dawn and dusk.',
      'Día templado (máx. {tempMax}): manga larga o chaqueta ligera; sobre la roca refresca al amanecer y al anochecer.',
      'Dia ameno (máx. {tempMax}): manga longa ou jaqueta leve; sobre a rocha esfria de manhã cedo e à noite.',
    ),
  },
  {
    id: 'outfit-temp-cool',
    cat: 'outfit',
    pri: 54,
    group: 'outfit-temp',
    icon: '🧥',
    all: [{ m: 'tempMax', op: 'gte', v: 12 }],
    text: T(
      '天气偏凉（最高 {tempMax}）：建议穿外套并备一件防风衣物，海风会明显拉低体感温度。',
      'Cool day (high of {tempMax}): wear a jacket and bring a windproof layer — the sea breeze makes it feel colder.',
      'Día fresco (máx. {tempMax}): lleve chaqueta y una capa cortavientos; la brisa marina baja la sensación térmica.',
      'Dia frio (máx. {tempMax}): use jaqueta e leve uma camada corta-vento; a brisa do mar baixa a sensação térmica.',
    ),
  },
  {
    id: 'outfit-temp-cold',
    cat: 'outfit',
    pri: 52,
    group: 'outfit-temp',
    icon: '🧣',
    all: [{ m: 'tempMax', op: 'lt', v: 12 }],
    text: T(
      '气温较低（最高 {tempMax}）：注意保暖，厚外套加长裤；清晨礁石上风大，挡风比厚度更重要。',
      'Cold day (high of {tempMax}): dress warm with a thick jacket and trousers; the windy rock top at dawn needs wind protection more than bulk.',
      'Día frío (máx. {tempMax}): abríguese con chaqueta gruesa y pantalón largo; en la roca con viento al amanecer importa más cortar el viento.',
      'Dia frio (máx. {tempMax}): agasalhe-se com jaqueta grossa e calça; no topo da rocha com vento, cortar o vento importa mais que a espessura.',
    ),
  },
  {
    id: 'outfit-rain',
    cat: 'outfit',
    pri: 50,
    group: 'outfit-rain',
    icon: '🧥',
    all: [{ m: 'precipProb', op: 'gte', v: 60 }],
    text: T(
      '降雨概率约 {precipProb}：建议穿防水或速干外套，避免牛仔裤这类吸水后长时间不干的衣物。',
      'Rain chance around {precipProb}: wear a waterproof or quick-dry jacket and skip jeans, which stay damp for hours.',
      'Probabilidad de lluvia del {precipProb}: use chaqueta impermeable o de secado rápido y evite los vaqueros, que tardan en secar.',
      'Chance de chuva de {precipProb}: use jaqueta impermeável ou de secagem rápida e evite jeans, que demoram a secar.',
    ),
  },
  {
    id: 'outfit-shower',
    cat: 'outfit',
    pri: 48,
    group: 'outfit-rain',
    icon: '🧥',
    all: [{ m: 'precipProb', op: 'gte', v: 35 }],
    text: T(
      '可能有短时阵雨（约 {precipProb}）：选速干衣物，随身带一件薄外套挡雨就够了。',
      'Possible showers (about {precipProb}): quick-dry clothing plus a thin jacket for the rain is all you need.',
      'Posibles chubascos ({precipProb}): ropa de secado rápido y una chaqueta fina para la lluvia bastan.',
      'Pancadas possíveis ({precipProb}): roupa de secagem rápida e uma jaqueta fina para a chuva resolvem.',
    ),
  },
  {
    id: 'outfit-wind',
    cat: 'outfit',
    pri: 46,
    icon: '🧢',
    all: [{ m: 'windLevel', op: 'gte', v: 5 }],
    text: T(
      '风力约 {windLevel} 级：帽子容易被吹落，不建议穿宽松长裙或戴大檐帽。',
      'Wind force {windLevel}: hats blow off easily — avoid loose long skirts and wide-brimmed hats.',
      'Viento de fuerza {windLevel}: los sombreros vuelan; evite faldas largas sueltas y sombreros de ala ancha.',
      'Vento força {windLevel}: chapéus voam facilmente; evite saias longas soltas e chapéus de aba larga.',
    ),
  },
  {
    id: 'outfit-range',
    cat: 'outfit',
    pri: 44,
    icon: '🎒',
    all: [{ m: 'tempRange', op: 'gt', v: 8 }],
    text: T(
      '昼夜温差约 {tempRange}：早晚与正午体感差别明显，建议带一件方便穿脱的外套。',
      'Day–night swing of about {tempRange}: mornings, evenings and midday feel very different — bring a layer you can add or remove.',
      'Amplitud térmica de unos {tempRange}: mañana, noche y mediodía se sienten muy distintos; lleve una capa fácil de poner y quitar.',
      'Amplitude térmica de cerca de {tempRange}: manhã, noite e meio-dia são bem diferentes; leve uma camada fácil de vestir e tirar.',
    ),
  },

  /* ═══ 游玩安排 ═══ */
  {
    id: 'plan-thunder',
    cat: 'plan',
    pri: 80,
    icon: '🏛️',
    any: [
      { m: 'codeNow', op: 'in', v: [95, 96, 99] },
      { m: 'codeWorst', op: 'in', v: [95, 96, 99] },
    ],
    text: T(
      '雷雨天气不建议安排户外游览：海滩与礁石属于开阔地，水上项目大概率关闭，可改走博物馆等室内路线。',
      'Thunderstorms rule out outdoor plans: the beach and rock are wide-open ground, water activities will most likely close — switch to museums and indoor stops.',
      'Con tormentas, mejor nada al aire libre: playa y roca son zonas abiertas y los deportes acuáticos cerrarán; opte por museos y lugares cubiertos.',
      'Com trovoadas, nada de programa ao ar livre: praia e rocha são áreas abertas e as atividades aquáticas devem fechar — prefira museus e locais cobertos.',
    ),
  },
  {
    id: 'plan-heavyrain',
    cat: 'plan',
    pri: 78,
    icon: '🏛️',
    any: [
      { m: 'precipSum', op: 'gte', v: 20 },
      { m: 'codeWorst', op: 'in', v: [65, 67, 82] },
    ],
    text: T(
      '雨势较强，露天体验会大打折扣：建议把海滩行程顺延，优先安排室内场所，并预留交通延误时间。',
      'Heavy rain will spoil open-air plans: postpone the beach, prefer indoor stops, and allow extra time for transport delays.',
      'La lluvia fuerte arruina los planes al aire libre: aplace la playa, prefiera lugares cubiertos y deje margen por retrasos de transporte.',
      'Chuva forte estraga programas ao ar livre: adie a praia, prefira locais cobertos e deixe margem para atrasos no transporte.',
    ),
  },
  {
    id: 'plan-rough',
    cat: 'plan',
    pri: 76,
    icon: '🌊',
    all: [MARINE, { m: 'waveHeight', op: 'gte', v: 2 }],
    text: T(
      '浪高约 {waveHeight} m，不适合下水：今天是看浪的好日子，请在安全平台观赏，远离湿滑礁面。',
      'Waves around {waveHeight} m — not a day to swim. It is a good day to watch the surf from the safe platform, well away from the wet rock.',
      'Olas de {waveHeight} m: no es día para nadar. Sí para ver el oleaje desde la plataforma segura, lejos de la roca mojada.',
      'Ondas de cerca de {waveHeight} m — não é dia de nadar. É bom para ver o mar da plataforma segura, longe da rocha molhada.',
    ),
  },
  {
    id: 'plan-swim-ok',
    cat: 'plan',
    pri: 75,
    icon: '🏊',
    all: [MARINE, { m: 'waveHeight', op: 'lt', v: 1.2 }, { m: 'seaTemp', op: 'gte', v: 20 }],
    text: T(
      '海况平缓（浪高约 {waveHeight} m，水温约 {seaTemp}），适合下水：仍要留意离岸流，尽量待在救生员视线范围内。',
      'Calm sea (waves about {waveHeight} m, water about {seaTemp}) — good for a swim, but watch for rip currents and stay within sight of the lifeguards.',
      'Mar tranquilo (olas de {waveHeight} m, agua a {seaTemp}): bueno para bañarse, pero ojo con las corrientes de retorno y quédese a la vista de los socorristas.',
      'Mar calmo (ondas de {waveHeight} m, água a {seaTemp}): bom para banho, mas atenção às correntes de retorno e fique à vista dos salva-vidas.',
    ),
  },
  {
    id: 'plan-lowtide',
    cat: 'plan',
    pri: 73,
    icon: '🦀',
    all: [
      { m: 'tideLowIn', op: 'gte', v: 0 },
      { m: 'tideLowIn', op: 'lte', v: 240 },
    ],
    text: T(
      '低潮约在 {tideLowAt}：退潮后礁石边缘的潮汐岩池会露出来，适合观察小生物；涨潮前请回到岸上。',
      'Low tide around {tideLowAt}: afterwards the tide pools along the rock edge are exposed — good for spotting small marine life. Head back before the water rises.',
      'Bajamar hacia las {tideLowAt}: después quedan al descubierto las pozas de la roca, buenas para observar vida marina; vuelva antes de que suba el agua.',
      'Baixa-mar por volta de {tideLowAt}: depois as poças na borda da rocha ficam expostas, boas para observar vida marinha — volte antes de a água subir.',
    ),
  },
  {
    id: 'plan-hightide',
    cat: 'plan',
    pri: 72,
    icon: '🌊',
    all: [
      { m: 'tideHighIn', op: 'gte', v: 0 },
      { m: 'tideHighIn', op: 'lte', v: 180 },
    ],
    text: T(
      '涨潮临近（高潮约 {tideHighAt}）：礁石下部的通道与平台会被浪覆盖，请提前移到高处，不要逗留。',
      'High tide approaching (around {tideHighAt}): the lower paths and ledges will be covered — move up to higher ground in good time.',
      'Se acerca la pleamar (hacia las {tideHighAt}): los pasos y repisas bajas quedarán cubiertos; súbase a terreno alto con antelación.',
      'Maré alta se aproximando (por volta de {tideHighAt}): os acessos e plataformas baixas ficarão cobertos — suba para o alto com antecedência.',
    ),
  },
  {
    id: 'plan-rain',
    cat: 'plan',
    pri: 70,
    group: 'plan-rain',
    icon: '☔',
    all: [{ m: 'precipProb', op: 'gte', v: 60 }],
    text: T(
      '降雨概率约 {precipProb}：露天项目体验一般，建议把户外行程安排在雨隙之间，并留一个室内备选方案。',
      'Rain chance around {precipProb}: open-air plans will be hit or miss — fit outdoor time into the gaps and keep an indoor backup.',
      'Probabilidad de lluvia del {precipProb}: los planes al aire libre serán irregulares; aproveche los claros y tenga un plan alternativo.',
      'Chance de chuva de {precipProb}: programas ao ar livre ficam irregulares — aproveite as tréguas e tenha um plano B.',
    ),
  },
  {
    id: 'plan-showers',
    cat: 'plan',
    pri: 68,
    group: 'plan-rain',
    icon: '🌦️',
    all: [{ m: 'precipProb', op: 'gte', v: 35 }],
    text: T(
      '可能有零星阵雨（约 {precipProb}）：多数时段仍可户外活动，随身带把伞就能应对。',
      'Scattered showers possible (about {precipProb}): most of the day is still fine outdoors — an umbrella covers the rest.',
      'Chubascos dispersos ({precipProb}): la mayor parte del día sigue siendo apta; con un paraguas basta.',
      'Pancadas isoladas ({precipProb}): a maior parte do dia segue boa — um guarda-chuva resolve.',
    ),
  },
  {
    id: 'plan-heat',
    cat: 'plan',
    pri: 66,
    icon: '🌡️',
    all: [{ m: 'tempMax', op: 'gte', v: 32 }],
    text: T(
      '白天最高约 {tempMax}：把礁石与海滩行程放到清晨或傍晚，避开 11:00–15:00 的暴晒时段。',
      'Highs near {tempMax}: plan the rock and beach for early morning or late afternoon and avoid the 11:00–15:00 glare.',
      'Máximas de {tempMax}: programe roca y playa al amanecer o al atardecer y evite el sol fuerte de 11:00 a 15:00.',
      'Máximas perto de {tempMax}: programe rocha e praia para o início da manhã ou fim de tarde e evite o sol forte das 11h às 15h.',
    ),
  },
  {
    id: 'plan-fog',
    cat: 'plan',
    pri: 64,
    icon: '🌫️',
    all: [
      { m: 'visibility', op: 'gt', v: 0 },
      { m: 'visibility', op: 'lte', v: 2000 },
    ],
    text: T(
      '有雾、能见度偏低：不适合看海与远景，观景平台上的照片效果也会打折，可改去街区内的室内景点。',
      'Foggy with low visibility: not the day for sea views or long-distance shots — the viewpoint photos will suffer too. Consider indoor sights inland.',
      'Niebla y baja visibilidad: no es día para vistas al mar ni fotos de larga distancia; las del mirador saldrán pobres. Mejor lugares cubiertos.',
      'Nevoeiro e baixa visibilidade: não é dia para vistas do mar nem fotos de longe; as do mirante sairão fracas. Melhor locais cobertos.',
    ),
  },
  {
    id: 'plan-clear',
    cat: 'plan',
    pri: 62,
    icon: '🌇',
    all: [
      { m: 'isDay', op: 'eq', v: 1 },
      { m: 'codeNow', op: 'in', v: [0, 1] },
    ],
    text: T(
      '天气晴朗，适合户外游览，也是看日落的好时机：日落约在 {sunsetAt}，礁石一带是里约经典日落机位。',
      'Clear skies: great for being outdoors and a good day for sunset, around {sunsetAt}. The rock is one of Rio\'s classic sunset spots.',
      'Cielo despejado: ideal para estar al aire libre y buen día para el atardecer, hacia las {sunsetAt}. La roca es un clásico carioca.',
      'Céu limpo: ótimo para ficar ao ar livre e bom dia para o pôr do sol, por volta de {sunsetAt}. A rocha é um clássico carioca.',
    ),
  },
  {
    id: 'plan-cloudy',
    cat: 'plan',
    pri: 60,
    icon: '📷',
    all: [{ m: 'codeNow', op: 'in', v: [2, 3] }],
    text: T(
      '阴天光线柔和，没有暴晒：很适合长时间逛海滩、拍照，皮肤也不容易晒伤。',
      'Overcast means soft light and no harsh sun — comfortable for long walks on the beach and good for photos.',
      'Nublado: luz suave y sin sol fuerte, cómodo para caminar largo rato por la playa y bueno para fotos.',
      'Encoberto: luz suave e sem sol forte — confortável para caminhar bastante na praia e bom para fotos.',
    ),
  },
  {
    id: 'plan-slippery',
    cat: 'plan',
    pri: 58,
    icon: '👟',
    any: [
      { m: 'precipProb', op: 'gte', v: 40 },
      { m: 'waveHeight', op: 'gte', v: 1.5 },
    ],
    text: T(
      '礁石表面可能湿滑：建议穿有纹路的防滑鞋，上下台阶扶好扶手、放慢脚步。',
      'The rock may be slippery: wear shoes with grip and take the steps slowly, holding the handrail.',
      'La roca puede estar resbaladiza: use calzado con agarre y baje las escaleras despacio, apoyándose en la baranda.',
      'A rocha pode estar escorregadia: use calçado com aderência e desça os degraus devagar, apoiando-se no corrimão.',
    ),
  },
  {
    id: 'plan-whale',
    cat: 'plan',
    pri: 30,
    icon: '🐋',
    all: [{ m: 'month', op: 'in', v: [6, 7, 8, 9, 10, 11] }],
    text: T(
      '6–11 月是鲸类沿南大西洋近岸活动的季节：清晨在礁石上朝开阔海面眺望，有机会看到喷潮或跃身。',
      'June to November is when whales move along this stretch of the South Atlantic: at dawn, scan the open water from the rock for a blow or a breach.',
      'De junio a noviembre las ballenas recorren esta costa del Atlántico Sur: al amanecer, otee el mar abierto desde la roca en busca de soplidos o saltos.',
      'De junho a novembro, baleias passam por esta costa do Atlântico Sul: ao amanhecer, observe o mar aberto da rocha em busca de sopros ou saltos.',
    ),
  },

  /* ═══ 随身物品 ═══ */
  {
    id: 'gear-strongsun',
    cat: 'gear',
    pri: 60,
    group: 'gear-sun',
    icon: '🧴',
    all: [{ m: 'uvMax', op: 'gte', v: 8 }],
    text: T(
      '紫外线很强（指数 {uvMax}）：高倍防晒霜、墨镜、遮阳帽，户外每两小时补涂一次。',
      'Very high UV (index {uvMax}): high-SPF sunscreen, sunglasses and a hat — reapply every two hours outdoors.',
      'UV muy alto (índice {uvMax}): protector de FPS alto, gafas y sombrero, reaplicando cada dos horas.',
      'UV muito alto (índice {uvMax}): protetor de FPS alto, óculos e boné — reaplique a cada duas horas.',
    ),
  },
  {
    id: 'gear-sun',
    cat: 'gear',
    pri: 58,
    group: 'gear-sun',
    icon: '🕶️',
    all: [{ m: 'uvMax', op: 'gte', v: 3 }],
    text: T(
      '紫外线指数约 {uvMax}：防晒霜、墨镜与遮阳帽；长时间户外建议加一件防晒衣。',
      'UV index around {uvMax}: sunscreen, sunglasses and a hat; a UV shirt helps for long spells outside.',
      'Índice UV de {uvMax}: protector solar, gafas y sombrero; para largas horas al aire libre, camiseta UV.',
      'Índice UV de {uvMax}: protetor solar, óculos e boné; para longas horas ao ar livre, camiseta UV.',
    ),
  },
  {
    id: 'gear-raincoat',
    cat: 'gear',
    pri: 56,
    group: 'gear-rain',
    icon: '🧥',
    all: [{ m: 'precipProb', op: 'gte', v: 60 }],
    text: T(
      '轻便雨衣或防水外套；风大时不建议带长柄雨伞，容易被吹翻。',
      'A light rain jacket or poncho; in strong wind avoid a long umbrella — it will be blown inside out.',
      'Chubasquero o chaqueta impermeable ligera; con viento, evite el paraguas largo, se da vuelta.',
      'Capa ou jaqueta impermeável leve; com vento, evite guarda-chuva de cabo longo — ele vira.',
    ),
  },
  {
    id: 'gear-umbrella',
    cat: 'gear',
    pri: 54,
    group: 'gear-rain',
    icon: '☂️',
    all: [{ m: 'precipProb', op: 'gte', v: 35 }],
    text: T(
      '折叠伞或轻便雨衣，放在包里不占地方。',
      'A folding umbrella or a light rain jacket — easy to keep in your bag.',
      'Paraguas plegable o chubasquero ligero, fácil de llevar en la mochila.',
      'Guarda-chuva dobrável ou capa leve — fácil de levar na mochila.',
    ),
  },
  {
    id: 'gear-water',
    cat: 'gear',
    pri: 52,
    icon: '💧',
    all: [{ m: 'tempMax', op: 'gte', v: 30 }],
    text: T(
      '充足的饮用水（建议每人 1–1.5 L），可重复使用的水壶可在海滨步道的饮水点补水。',
      'Plenty of drinking water (1–1.5 L per person); refillable bottles can be topped up at the fountains along the seafront promenade.',
      'Agua suficiente (1–1,5 L por persona); las botellas reutilizables se rellenan en las fuentes del paseo marítimo.',
      'Água suficiente (1–1,5 L por pessoa); garrafas reutilizáveis podem ser reabastecidas nos bebedouros do calçadão.',
    ),
  },
  {
    id: 'gear-windbreak',
    cat: 'gear',
    pri: 50,
    icon: '🧥',
    all: [{ m: 'windLevel', op: 'gte', v: 5 }],
    text: T(
      '一件防风外套：礁石顶部与海边风口体感会明显更凉。',
      'A windproof jacket — the top of the rock and the exposed seafront feel noticeably colder.',
      'Una chaqueta cortavientos: en lo alto de la roca y en la orilla expuesta hace bastante más frío.',
      'Uma jaqueta corta-vento — no topo da rocha e na orla exposta esfria bem mais.',
    ),
  },
  {
    id: 'gear-grip',
    cat: 'gear',
    pri: 48,
    icon: '👟',
    any: [
      { m: 'precipProb', op: 'gte', v: 40 },
      { m: 'waveHeight', op: 'gte', v: 1.5 },
    ],
    text: T(
      '防滑、包脚的鞋：礁面有湿滑青苔与细沙，人字拖很容易打滑。',
      'Grippy closed shoes: the rock has wet algae and loose sand, and flip-flops slip easily.',
      'Calzado cerrado con agarre: la roca tiene algas húmedas y arena suelta, y las chanclas resbalan.',
      'Calçado fechado com aderência: a rocha tem algas molhadas e areia solta, e o chinelo escorrega.',
    ),
  },
  {
    id: 'gear-swim',
    cat: 'gear',
    pri: 46,
    icon: '🩱',
    all: [MARINE, { m: 'waveHeight', op: 'lt', v: 1.2 }, { m: 'seaTemp', op: 'gte', v: 20 }],
    text: T(
      '泳衣、沙滩巾与防水袋；下水前先确认救生员岗位位置与离岸流警示旗。',
      'Swimsuit, beach towel and a dry bag; check where the lifeguard post is and look for rip-current warning flags before getting in.',
      'Bañador, toalla y bolsa estanca; compruebe el puesto de socorristas y las banderas de corrientes de retorno antes de entrar.',
      'Maiô/sunga, toalha e saco estanque; confira o posto de salva-vidas e as bandeiras de corrente de retorno antes de entrar.',
    ),
  },
  {
    id: 'gear-mosquito-dusk',
    cat: 'gear',
    pri: 44,
    group: 'gear-mosquito',
    icon: '🦟',
    all: [
      { m: 'humidity', op: 'gte', v: 70 },
      { m: 'sunsetIn', op: 'gte', v: 0 },
      { m: 'sunsetIn', op: 'lte', v: 240 },
    ],
    text: T(
      '驱蚊液：日落后湿度高，礁石后方大西洋雨林边缘的蚊虫会明显变多。',
      'Insect repellent: after sunset humidity rises and mosquitoes gather along the edge of the rainforest behind the rock.',
      'Repelente de insectos: tras el atardecer sube la humedad y hay más mosquitos en el borde de la selva tras la roca.',
      'Repelente: depois do pôr do sol a umidade sobe e os mosquitos aumentam na borda da mata atrás da rocha.',
    ),
  },
  {
    id: 'gear-mosquito-night',
    cat: 'gear',
    pri: 43,
    group: 'gear-mosquito',
    icon: '🦟',
    all: [
      { m: 'humidity', op: 'gte', v: 70 },
      { m: 'isDay', op: 'eq', v: 0 },
    ],
    text: T(
      '驱蚊液：夜间湿度高，礁石后方大西洋雨林边缘的蚊虫会明显变多。',
      'Insect repellent: at night humidity is high and mosquitoes gather along the edge of the rainforest behind the rock.',
      'Repelente de insectos: de noche la humedad es alta y hay más mosquitos en el borde de la selva tras la roca.',
      'Repelente: à noite a umidade é alta e os mosquitos aumentam na borda da mata atrás da rocha.',
    ),
  },
  {
    id: 'gear-mask',
    cat: 'gear',
    pri: 42,
    icon: '😷',
    all: [
      { m: 'visibility', op: 'gt', v: 0 },
      { m: 'visibility', op: 'lte', v: 2000 },
    ],
    text: T(
      '口罩：能见度偏低时，海滨道路的车辆尾气不易扩散。',
      'A face mask: with low visibility, traffic fumes along the seafront disperse poorly.',
      'Mascarilla: con baja visibilidad, los gases del tráfico en la orilla se dispersan mal.',
      'Máscara: com visibilidade baixa, os gases do tráfego na orla se dispersam mal.',
    ),
  },
];

/* ── 规则求值 ─────────────────────────────────────────────── */

const FMT: Record<string, (v: number) => string> = {
  tempNow: (v) => Math.round(v) + '°',
  tempMax: (v) => Math.round(v) + '°',
  tempMin: (v) => Math.round(v) + '°',
  tempRange: (v) => Math.round(v) + '°',
  uvMax: (v) => String(Math.round(v)),
  precipProb: (v) => Math.round(v) + '%',
  precipSum: (v) => String(Math.round(v * 10) / 10),
  windLevel: (v) => String(Math.round(v)),
  windNow: (v) => Math.round(v) + ' km/h',
  waveHeight: (v) => (Math.round(v * 10) / 10).toFixed(1),
  seaTemp: (v) => (Math.round(v * 10) / 10).toFixed(1) + '°C',
};

function evalCond(c: Cond, m: Metrics): boolean {
  const raw = m[c.m];
  if (c.op === 'in') {
    const list = Array.isArray(c.v) ? c.v : [c.v];
    return typeof raw === 'number' && list.indexOf(raw) >= 0;
  }
  if (typeof raw !== 'number') return false;
  const t = c.v as number;
  switch (c.op) {
    case 'gte': return raw >= t;
    case 'gt': return raw > t;
    case 'lte': return raw <= t;
    case 'lt': return raw < t;
    case 'eq': return raw === t;
    default: return false;
  }
}

function matches(r: AdviceRule, m: Metrics): boolean {
  if (!r.all && !r.any) return false;
  if (r.all && !r.all.every((c) => evalCond(c, m))) return false;
  if (r.any && !r.any.some((c) => evalCond(c, m))) return false;
  return true;
}

/** 填充模板占位符；只要有一个占位符取不到值，就放弃这条规则，避免出现半截文案 */
function interpolate(text: string, m: Metrics): string | null {
  let ok = true;
  const out = text.replace(/\{(\w+)\}/g, (_all, key: string) => {
    const v = m[key];
    if (v === undefined || v === null || v === '') {
      ok = false;
      return '';
    }
    if (typeof v === 'number') return (FMT[key] ?? ((x: number) => String(Math.round(x))))(v);
    return String(v);
  });
  return ok ? out : null;
}

export interface AdviceCaps {
  alert?: number;
  outfit?: number;
  plan?: number;
  gear?: number;
}

/**
 * 根据指标挑选建议。
 * - 同一 group 只保留优先级最高的一条
 * - 每类有数量上限，避免把所有条目堆在页面上
 */
export function selectAdvice(
  m: Metrics,
  lang: string,
  caps: AdviceCaps = { alert: 3, outfit: 3, plan: 4, gear: 4 },
): AdviceItem[] {
  const usedGroups = new Set<string>();
  const counts: Record<AdviceCategory, number> = { alert: 0, outfit: 0, plan: 0, gear: 0 };
  const out: AdviceItem[] = [];

  const rules = [...ADVICE_RULES].sort((a, b) => b.pri - a.pri);

  for (const r of rules) {
    if (r.group && usedGroups.has(r.group)) continue;
    if (counts[r.cat] >= (caps[r.cat] ?? 4)) continue;
    if (!matches(r, m)) continue;

    const text = interpolate((r.text as any)[lang] ?? r.text.en, m);
    if (!text) continue;

    if (r.group) usedGroups.add(r.group);
    counts[r.cat] += 1;
    out.push({ id: r.id, cat: r.cat, icon: r.icon, text });
  }

  return out;
}
