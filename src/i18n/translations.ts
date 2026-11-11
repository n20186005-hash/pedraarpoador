import type { Lang } from './utils';

type T = Record<Lang, string>;

export const t = (s: Record<string, string> | string, lang: Lang): string =>
  typeof s === 'string' ? s : (s[lang] || s.pt || '');

// ── Nav ──
export const nav = {
  overview: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo' } as T,
  highlights: { zh: '亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' } as T,
  guide: { zh: '游览指南', en: 'Guide', es: 'Guía', pt: 'Guia' } as T,
  transport: { zh: '交通', en: 'Transport', es: 'Transporte', pt: 'Transporte' } as T,
  reviews: { zh: '评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' } as T,
  encyclopedia: { zh: '百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' } as T,
  ecology: { zh: '生态', en: 'Ecology', es: 'Ecología', pt: 'Ecologia' } as T,
  gallery: { zh: '图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' } as T,
  location: { zh: '位置', en: 'Location', es: 'Ubicación', pt: 'Localização' } as T,
  sources: { zh: '来源', en: 'Sources', es: 'Fuentes', pt: 'Fontes' } as T,
  faq: { zh: '问答', en: 'FAQ', es: 'Preguntas', pt: 'Perguntas' } as T,
  weather: { zh: '天气', en: 'Weather', es: 'Clima', pt: 'Clima' } as T,
  sunset: { zh: '日落', en: 'Sunset', es: 'Atardecer', pt: 'Pôr do Sol' } as T,
  tides: { zh: '潮汐', en: 'Tides', es: 'Mareas', pt: 'Marés' } as T,
  climate: { zh: '季节', en: 'Seasons', es: 'Estaciones', pt: 'Estações' } as T,
  facilities: { zh: '设施', en: 'Facilities', es: 'Servicios', pt: 'Serviços' } as T,
  timeline: { zh: '历史', en: 'History', es: 'Historia', pt: 'História' } as T,
  stories: { zh: '传说', en: 'Legends', es: 'Leyendas', pt: 'Lendas' } as T,
  more: { zh: '更多', en: 'More', es: 'Más', pt: 'Mais' } as T,
};

// ── Hero ──
export const hero = {
  title: {
    zh: '里约的<br/><span class="italic text-[color:var(--color-sun)]">落日之约</span>',
    en: 'Where the city<br/><span class="italic text-[color:var(--color-sun)]">meets the sunset</span>.',
    es: 'Donde la ciudad<br/><span class="italic text-[color:var(--color-sun)]">se encuentra con el sol</span>.',
    pt: 'Onde a cidade<br/><span class="italic text-[color:var(--color-sun)]">encontra o pôr do sol</span>.',
  } as T,
  subtitle: {
    zh: 'Pedra do Arpoador · 伊帕内玛海角的观景巨石 —— 里约最负盛名的冲浪点，也是全城集体为落日鼓掌的地方。',
    en: 'Pedra do Arpoador · The rocky headland at the edge of Ipanema — Rio\'s most iconic surf break and the city\'s favourite spot to applaud the sunset.',
    es: 'Pedra do Arpoador · El promontorio rocoso en el borde de Ipanema — el point de surf más icónico de Río y el lugar donde la ciudad aplaude la puesta de sol.',
    pt: 'Pedra do Arpoador · O pontão rochoso na ponta de Ipanema — o point de surf mais icônico do Rio e o lugar favorito da cidade para aplaudir o pôr do sol.',
  } as T,
  statReviews: { zh: '评价', en: 'reviews', es: 'reseñas', pt: 'avaliações' } as T,
  statLength: { zh: '门票', en: 'Admission', es: 'Entrada', pt: 'Entrada' } as T,
  statFalls: { zh: '时间', en: 'Hours', es: 'Horario', pt: 'Horário' } as T,
  statFlow: { zh: '冲浪始于', en: 'Surf since', es: 'Surf desde', pt: 'Surfe desde' } as T,
  ctaSunset: { zh: '查看今日日落时刻', en: 'See today\'s sunset time', es: 'Ver la hora del atardecer de hoy', pt: 'Ver horário do pôr do sol hoje' } as T,
  ctaTransport: { zh: '怎么去 Arpoador', en: 'How to get to Arpoador', es: 'Cómo llegar a Arpoador', pt: 'Como chegar ao Arpoador' } as T,
};

// ── Manifesto (网站前言) ──
export const manifesto = {
  sectionNum: { zh: '前言', en: 'Preamble', es: 'Preámbulo', pt: 'Preâmbulo' } as T,
  heading: {
    zh: '一块石头<br/><em class="text-[color:var(--color-emerald)]">半座城市</em>',
    en: 'A single rock.<br/><em class="text-[color:var(--color-emerald)]">Half a city\'s soul.</em>',
    es: 'Una sola roca.<br/><em class="text-[color:var(--color-emerald)]">La mitad del alma de una ciudad.</em>',
    pt: 'Uma só rocha.<br/><em class="text-[color:var(--color-emerald)]">Metade da alma de uma cidade.</em>',
  } as T,
  subheading: {
    zh: '致每一位里约的注视者',
    en: 'To every observer of Rio',
    es: 'A cada observador do Rio',
    pt: 'A cada observador do Rio',
  } as T,
  p1: {
    zh: '欢迎来到 Pedra do Arpoador。在葡萄牙语中，"Arpoador" 意为"鱼叉手"——很久以前，这片礁石曾是捕鲸人潜伏、投出鱼叉的地方。今天，它依然是里约热内卢最富戏剧性的海岸线：一侧是伊帕内玛的金色沙滩，另一侧是魔鬼海滩（Praia do Diabo）翻涌的浪涌，而它自己，是一座供全城仰望落日的天然看台。',
    en: 'Welcome to Pedra do Arpoador. In Portuguese, "Arpoador" means "harpooner" — centuries ago, this very rock was where whalers lurked and cast their harpoons. Today it remains the most theatrical stretch of Rio\'s coastline: golden Ipanema beach on one side, the churning surf of Praia do Diabo on the other, and the rock itself a natural grandstand where the whole city gathers to watch the sun go down.',
    es: 'Bienvenido a la Pedra do Arpoador. En portugués, "Arpoador" significa "arponero": hace siglos, esta misma roca era donde los balleneros acechaban y lanzaban sus arpones. Hoy sigue siendo el tramo más teatral de la costa de Río: la dorada playa de Ipanema a un lado, el oleaje bravo de la Praia do Diabo al otro, y la propia roca, una grada natural donde toda la ciudad se reúne para ver caer el sol.',
    pt: 'Bem-vindo à Pedra do Arpoador. Em português, "Arpoador" significa "arpoador" — séculos atrás, esta mesma rocha era onde baleeiros se escondiam e lançavam seus arpões. Hoje continua sendo o trecho mais teatral do litoral do Rio: a dourada praia de Ipanema de um lado, o mar bravo da Praia do Diabo do outro, e a própria rocha, uma arquibancada natural onde a cidade inteira se reúne para ver o sol se pôr.',
  } as T,
  p2: {
    zh: '这里没有门票，没有围栏，只有潮水、礁石与无数双仰望天空的眼睛。每天黄昏，当太阳坠入两山之间的海平线，人群中会自发爆发出一阵掌声——"落日之掌声"（Aplauso do Sol）。这是里约人写给水与光的情书，也是 Arpoador 最动人的仪式。',
    en: 'There is no ticket, no fence — only the tide, the rock, and countless pairs of eyes turned to the sky. Every dusk, as the sun drops into the seam between the mountains and the sea, the crowd erupts into spontaneous applause — the "Sunset Applause" (Aplauso do Sol). It is Rio\'s love letter to water and light, and Arpoador\'s most moving ritual.',
    es: 'No hay entrada, ni valla: solo la marea, la roca y milenarios ojos vueltos al cielo. Cada atardecer, cuando el sol cae en la costura entre las montañas y el mar, la multitud estalla en un aplauso espontáneo: el "Aplauso del Sol" (Aplauso do Sol). Es la carta de amor de Río al agua y a la luz, y el ritual más conmovedor de Arpoador.',
    pt: 'Não há ingresso, nem grade — apenas a maré, a rocha e incontáveis olhos voltados para o céu. Cada entardecer, quando o sol cai na fenda entre as montanhas e o mar, a multidão explode em aplauso espontâneo: o "Aplauso do Sol". É a carta de amor do Rio à água e à luz, e o ritual mais tocante do Arpoador.',
  } as T,
  p3: {
    zh: '作为一家独立科普团队，我们搭建本网站，不仅为了告诉你如何抵达这片礁石，更想邀请你以"参与者"而非"旁观者"的身份来到这里。当你踩着被海浪打磨了亿万年的花岗岩，你既是里约海滨生活的见证者，也是这场落日仪式的共谋者。',
    en: 'As an independent editorial team, we built this site not only to tell you how to reach this rock, but to invite you to arrive as a participant rather than a spectator. When you stand on granite polished by the surf for aeons, you become both a witness to Rio\'s beach life and a co-conspirator in its sunset ritual.',
    es: 'Como un equipo editorial independiente, creamos este sitio no solo para decirle cómo llegar a esta roca, sino para invitarle a venir como participante, no como espectador. Cuando pisa el granito pulido por el oleaje durante eones, se convierte en testigo de la vida playera de Río y en cómplice de su ritual del sol.',
    pt: 'Como uma equipe editorial independente, criamos este site não apenas para lhe dizer como chegar a esta rocha, mas para convidá-lo a chegar como participante, não como espectador. Quando você pisa no granito polido pelo mar durante éons, torna-se tanto testemunha da vida praiana do Rio quanto cúmplice de seu ritual do sol.',
  } as T,
  closing: {
    zh: '带走一张落日的照片，留下礁石本来的样子。<br/>让"落日之掌声"，在每个黄昏依旧为里约响起。',
    en: 'Take a photo of the sunset. Leave the rock as you found it.<br/>Let the Sunset Applause keep ringing for Rio, every single dusk.',
    es: 'Llévese una foto del sol. Deje la roca como la encontró.<br/>Que el Aplauso del Sol siga sonando para Río, cada atardecer.',
    pt: 'Leve uma foto do pôr do sol. Deixe a rocha como a encontrou.<br/>Que o Aplauso do Sol continue ecoando para o Rio, a cada entardecer.',
  } as T,
  chip1: { zh: '免费开放', en: 'Free entry', es: 'Entrada libre', pt: 'Entrada livre' } as T,
  chip2: { zh: '冲浪圣地', en: 'Surf landmark', es: 'Punto de surf', pt: 'Point de surf' } as T,
  chip3: { zh: '落日之掌声', en: 'Sunset Applause', es: 'Aplauso del Sol', pt: 'Aplauso do Sol' } as T,
  chip4: { zh: '伊帕内玛 · 里约', en: 'Ipanema · Rio', es: 'Ipanema · Río', pt: 'Ipanema · Rio' } as T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: '游览亮点', en: 'Highlights', es: 'Destacados', pt: 'Destaques' } as T,
  heading: {
    zh: '三重<em class="text-[color:var(--color-sun)]">体验</em>',
    en: 'Three ways<br/><em class="text-[color:var(--color-sun)]">to feel it</em>',
    es: 'Tres formas<br/><em class="text-[color:var(--color-sun)]">de sentirlo</em>',
    pt: 'Três formas<br/><em class="text-[color:var(--color-sun)]">de senti-lo</em>',
  } as T,
  items: [
    {
      icon: '🌅', num: '01',
      title: { zh: '观赏落日', en: 'Watch the sunset', es: 'Ver el sol', pt: 'Ver o pôr do sol' } as T,
      desc: { zh: '黄昏前 30 分钟占据礁石顶端。当太阳沉入两山之间的海平线，整片海滩会为你鼓掌。这是里约最浪漫的免费演出。', en: 'Claim the top of the rock 30 minutes before dusk. As the sun sinks into the seam of the mountains, the whole beach applauds you. Rio\'s most romantic free show.', es: 'Ocupe la cima de la roca 30 minutos antes del atardecer. Cuando el sol se hunde en la costura de las montañas, toda la playa le aplaude. El espectáculo gratuito más romántico de Río.', pt: 'Ocupe o topo da rocha 30 minutos antes do entardecer. Quando o sol se afunda na fenda das montanhas, toda a praia aplaude. O show gratuito mais romântico do Rio.' } as T,
      img: '/gallery/pedra-do-arpoador (2).jpg',
    },
    {
      icon: '🏄', num: '02',
      title: { zh: '看冲浪', en: 'Watch the surfers', es: 'Ver a los surfistas', pt: 'Ver os surfistas' } as T,
      desc: { zh: 'Arpoador 是里约最适合右跑浪的冲浪点之一。清晨和黄昏，本地好手在礁石外划水、起乘，浪墙又长又陡，是摄影与观浪的绝佳位置。', en: 'Arpoador is one of Rio\'s finest right-hand point breaks. At dawn and dusk local riders paddle out past the rock; the walls are long and steep — perfect for photography and wave-watching.', es: 'Arpoador es uno de los mejores point de derecha de Río. Al amanecer y al atardecer, los locales reman más allá de la roca; las paredes son largas y empinadas: ideales para fotografiar y observar.', pt: 'O Arpoador é um dos melhores point de direita do Rio. Ao amanhecer e entardecer, os locais remam além da rocha; as paredes são longas e íngremes — perfeitas para fotografar e observar.' } as T,
      img: '/gallery/pedra-do-arpoador (3).jpg',
    },
    {
      icon: '🐚', num: '03',
      title: { zh: '潮汐岩池与海滨徒步', en: 'Tide pools & coastal walk', es: 'Pozas de marea y caminata', pt: 'Piscinas de maré e caminhada' } as T,
      desc: { zh: '落潮时，礁石边缘露出小型潮汐岩池，藏着海葵、蟹与小鱼。沿木栈道向西可步行至科帕卡巴纳，向东则通往魔鬼海滩与迪亚博小径。', en: 'At low tide, small tide pools appear along the rock\'s edge, hiding anemones, crabs and tiny fish. A wooden walkway leads west to Copacabana and east to Praia do Diabo and the Diabo trail.', es: 'En bajamar aparecen pequeñas pozas de marea en el borde de la roca, con anémonas, cangrejos y pececillos. Una pasarela de madera lleva al oeste a Copacabana y al este a la Praia do Diabo.', pt: 'Na baixa-mar, pequenas piscinas de maré surgem à beira da rocha, escondendo anêmonas, caranguejos e peixinhos. Uma passarela de madeira leva a oeste para Copacabana e a leste para a Praia do Diabo.' } as T,
      img: '/gallery/pedra-do-arpoador (4).jpg',
    },
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: '实用游览指南', en: 'Practical Guide', es: 'Guía práctica', pt: 'Guia prático' } as T,
  heading: { zh: '出发前<em class="text-[color:var(--color-emerald)]">必读</em>', en: 'Read this<em class="text-[color:var(--color-emerald)]"> before you go</em>.', es: 'Léelo<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.', pt: 'Leia<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.' } as T,
  cards: [
    { icon: '🕒', label: { zh: '开放时间', en: 'Hours', es: 'Horario', pt: 'Horário' } as T, value: '24h', desc: { zh: '全天开放，无围栏、无门票。观赏落日的最佳时间是日落前 30–60 分钟。', en: 'Open around the clock, no fences, no ticket. Best around 30–60 min before sunset.', es: 'Abierto las 24 horas, sin vallas ni entrada. Lo mejor: 30–60 min antes del atardecer.', pt: 'Aberto 24 horas, sem grades nem ingresso. O melhor: 30–60 min antes do pôr do sol.' } as T },
    { icon: '🎟️', label: { zh: '门票与入口', en: 'Ticket & entry', es: 'Entrada', pt: 'Ingresso' } as T, value: { zh: '免费', en: 'Free', es: 'Gratis', pt: 'Grátis' } as T, desc: { zh: '完全免费、对公众开放。直接从伊帕内玛海滩东端步行上礁石即可，无需预约或购票。', en: 'Completely free and open to the public. Simply walk up the rock from the east end of Ipanema beach — no booking, no ticket.', es: 'Totalmente gratis y abierto al público. Camine directo por la roca desde el extremo este de Ipanema: sin reserva ni entrada.', pt: 'Totalmente grátis e aberto ao público. Suba a rocha direto do extremo leste de Ipanema: sem reserva nem ingresso.' } as T },
    { icon: '⏱️', label: { zh: '游览时长', en: 'Duration', es: 'Duración', pt: 'Duração' } as T, value: '30–90 min', desc: { zh: '只看落日约 30 分钟；若加上观浪、潮汐岩池与海滨散步，可轻松逗留 1–2 小时。', en: 'Just the sunset: ~30 min. Add wave-watching, tide pools and a beach walk and you can linger 1–2 h.', es: 'Solo el sol: ~30 min. Con surf, pozas y paseo, pueden ser 1–2 h.', pt: 'Só o pôr do sol: ~30 min. Com surf, piscinas de maré e caminhada, dá para ficar 1–2 h.' } as T },
    { icon: '⚠️', label: { zh: '重要贴士', en: 'Key tips', es: 'Consejos', pt: 'Dicas' } as T, value: '', desc: '', tips: [{ zh: '黄昏人潮极多，建议提前 30 分钟占位', en: 'Crowds peak at dusk — arrive 30 min early to claim a spot', es: 'Mucha gente al atardecer — llegue 30 min antes', pt: 'Muita gente no entardecer — chegue 30 min antes' } as T, { zh: '礁石湿滑，请穿防滑鞋、远离浪花区', en: 'Rocks are slippery — wear grippy shoes, stay clear of the surf zone', es: 'Rocas resbalosas — calzado con suela, lejos del oleaje', pt: 'Rochas escorregadias — calçado com sola, longe da arrebentação' } as T, { zh: '尊重冲浪者，勿在浪点下礁石游泳', en: 'Respect surfers — don\'t swim off the rock right in the break', es: 'Respete a los surfistas — no nade en la rompiente', pt: 'Respeite os surfistas — não nade na quebra da onda' } as T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: '交通指南', en: 'Transport', es: 'Transporte', pt: 'Transporte' } as T,
  heading: { zh: '三种方式<br/><em class="text-[color:var(--color-emerald)]">到达礁石</em>', en: 'Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>', es: 'Tres formas<br/><em class="text-[color:var(--color-emerald)]">de llegar</em>', pt: 'Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>' } as T,
  subtitle: { zh: '位于伊帕内玛海滩东端，步行即可串联科帕卡巴纳与魔鬼海滩，地铁与公交直达周边。', en: 'At the east end of Ipanema beach — walkable to both Copacabana and Praia do Diabo, with metro and bus stops nearby.', es: 'En el extremo este de Ipanema: caminable hasta Copacabana y Praia do Diabo, con metro y bus cerca.', pt: 'No extremo leste de Ipanema: caminhável até Copacabana e Praia do Diabo, com metrô e ônibus por perto.' } as T,
  items: [
    { icon: '🚇', title: { zh: '从地铁（General Osório 站）', en: 'From Metro (General Osório)', es: 'Desde el Metro (General Osório)', pt: 'Do Metrô (General Osório)' } as T, meta: '900 m · 10-12 min', details: [{ icon: '🚶', text: { zh: '<strong>步行</strong> · 从 General Osório 站沿 Rua Visconde de Pirajá 向东直行，穿过伊帕内玛海滩东端即到，约 10 分钟。', en: '<strong>Walking</strong> · From General Osório station, head east along Rua Visconde de Pirajá, cross the east end of Ipanema beach — about 10 min.', es: '<strong>A pie</strong> · Desde General Osório, siga al este por Rua Visconde de Pirajá y cruce el extremo este de Ipanema: unos 10 min.', pt: '<strong>A pé</strong> · Da estação General Osório, siga leste pela Rua Visconde de Pirajá e atravesse o extremo leste de Ipanema: uns 10 min.' } as T }, { icon: '🗺️', text: { zh: '<strong>备选</strong> · 也可从 Nossa Senhora da Paz 站出发，沿 Av. Vieira Souto 海滨步道向西约 15 分钟。', en: '<strong>Alternative</strong> · Or from Nossa Senhora da Paz station, follow the Av. Vieira Souto seafront west ~15 min.', es: '<strong>Alternativa</strong> · O desde Nossa Senhora da Paz, por el paseo de Av. Vieira Souto al oeste, ~15 min.', pt: '<strong>Alternativa</strong> · Ou da estação Nossa Senhora da Paz, pelo calçadão de Av. Vieira Souto a oeste, ~15 min.' } as T }] },
    { icon: '🚌', title: { zh: '从公交', en: 'From Bus', es: 'Desde el bus', pt: 'Do ônibus' } as T, meta: 'Linha 512 / 571', details: [{ icon: '🚌', text: { zh: '<strong>512 / 571</strong> · 沿海滨连接 Leblon、伊帕内玛与科帕卡巴纳，在 Posto 9 附近下车后步行约 5 分钟。', en: '<strong>512 / 571</strong> · Seafront lines linking Leblon, Ipanema and Copacabana; hop off near Posto 9 and walk ~5 min.', es: '<strong>512 / 571</strong> · Líneas costeras entre Leblon, Ipanema y Copacabana; baje cerca de Posto 9 y camine 5 min.', pt: '<strong>512 / 571</strong> · Linhas à beira-mar ligando Leblon, Ipanema e Copacabana; desça perto do Posto 9 e caminhe ~5 min.' } as T }, { icon: '📱', text: { zh: '<strong>Uber / 99</strong> · 定位 "Arpoador" 或 "Estrela da Búzios"，下车即到礁石脚下。', en: '<strong>Uber / 99</strong> · Set the pin to "Arpoador" or "Estrela da Búzios"; you\'ll be dropped at the foot of the rock.', es: '<strong>Uber / 99</strong> · Ponga el pin en "Arpoador" o "Estrela da Búzios"; lo dejan al pie de la roca.', pt: '<strong>Uber / 99</strong> · Marque o pin em "Arpoador" ou "Estrela da Búzios"; você desce ao pé da rocha.' } as T }] },
    { icon: '🚲', title: { zh: '步行或骑行', en: 'On foot / by bike', es: 'A pie o en bici', pt: 'A pé ou de bike' } as T, meta: 'Orla de Ipanema', details: [{ icon: '', text: { zh: '<strong>海滨步道</strong> · 从科帕卡巴纳沿海滨向南步行约 20 分钟，穿过 Forte de Copacabana 即抵达；沿途设有 BikeRio 自行车租赁点。', en: '<strong>Seafront promenade</strong> · From Copacabana, walk south along the beach ~20 min, past Forte de Copacabana; BikeRio rental stands line the way.', es: '<strong>Paseo marítimo</strong> · Desde Copacabana, camine al sur unos 20 min, pasando el Forte de Copacabana; hay BikeRio en el camino.', pt: '<strong>Calçadão</strong> · De Copacabana, caminhe sul pela praia ~20 min, passando o Forte de Copacabana; há BikeRio no caminho.' } as T }] },
  ],
};

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: '深度百科', en: 'Encyclopedia', es: 'Enciclopedia', pt: 'Enciclopédia' } as T,
  heading: { zh: '名字、浪与<em class="text-[color:var(--color-emerald)]">一座城市的仪式</em>', en: 'Name, waves &amp;<br/><em class="text-[color:var(--color-emerald)]"> a city\'s ritual</em>', es: 'Nombre, olas y<br/><em class="text-[color:var(--color-emerald)]"> el rito de una ciudad</em>', pt: 'Nome, ondas e<br/><em class="text-[color:var(--color-emerald)]"> o rito de uma cidade</em>' } as T,
  subtitle: {
    zh: '从捕鲸人的鱼叉，到改变里约的冲浪文化，再到全城为落日鼓掌——这块礁石背后，藏着里约海滨生活的几段关键记忆。',
    en: 'From the whaler\'s harpoon to the surf culture that reshaped Rio, to a city applauding the sunset — behind this rock lie a few key memories of carioca beach life.',
    es: 'De la arpón del ballenero a la cultura del surf que transformó Río, hasta la ciudad aplaudiendo el sol: tras esta roca hay varios recuerdos clave de la vida playera carioca.',
    pt: 'Da arpão do baleeiro à cultura do surf que refez o Rio, até a cidade aplaudindo o sol: atrás desta rocha estão algumas memórias-chave da vida praiana carioca.',
  } as T,
  items: [
    {
      icon: '🪝',
      title: { zh: '"Arpoador" 名字的由来', en: 'The name "Arpoador"', es: 'El nombre "Arpoador"', pt: 'O nome "Arpoador"' } as T,
      body: {
        zh: '<p>"Arpoador" 一词源自葡萄牙语 arpão（鱼叉）。在 18 世纪乃至更早，伊帕内玛外海是露脊鲸的迁徙通道，当地的捕鲸人会潜伏在这块礁石后，等待时机投出鱼叉。</p><p>如今鲸群早已远离，但名字留了下来。它提醒我们：在成为旅游符号之前，这片海岸曾是人类与海洋直接博弈的猎场。</p>',
        en: '<p>"Arpoador" comes from the Portuguese arpão — harpoon. As far back as the 18th century, right whales migrated past Ipanema, and local whalers would lurk behind this rock, waiting to cast their harpoons.</p><p>The whales are long gone, but the name remains. It reminds us that before it became a tourist symbol, this coast was a hunting ground where humans met the ocean face to face.</p>',
        es: '<p>"Arpoador" viene del portugués arpão, arpón. Ya en el siglo XVIII, las ballenas francas migraban frente a Ipanema y los balleneros locales acechaban tras esta roca para lanzar sus arpones.</p><p>Las ballenas desaparecieron hace tiempo, pero el nombre quedó. Recuerda que, antes de ser símbolo turístico, esta costa fue una zona de caza donde el ser humano se enfrentaba al mar cara a cara.</p>',
        pt: '<p>"Arpoador" vem do português arpão. Já no século XVIII, as baleias francas migravam frente a Ipanema e os baleeiros locais se escondiam atrás desta rocha para lançar seus arpões.</p><p>As baleias há muito sumiram, mas o nome ficou. Lembra que, antes de virar símbolo turístico, este litoral foi zona de caça onde o humano encarava o mar frente a frente.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (5).jpg',
    },
    {
      icon: '🏄',
      title: { zh: '里约冲浪的发源地', en: 'Birthplace of Rio surfing', es: 'Cuna del surf carioca', pt: 'Berço do surf carioca' } as T,
      body: {
        zh: '<p>Arpoador 普遍被认为是里约冲浪文化的发源地。20 世纪 70 年代，第一批巴西冲浪者在这里学着驾驭礁石外的右跑浪；当时还没有紧身胶衣，他们穿着短裤、光脚上板。</p><p>今天，礁石外侧的浪点依旧是里约水平最高的本地好手（locais）的"主场"。每年在此举办的 Arpoador 冲浪赛，是里约海滨日历上最受瞩目的赛事之一。若要追溯这项运动在巴西的轨迹，里约的冲浪人口与赛事档案由本地冲浪社群及相关博物馆共同保存（见页底参考资源）。</p>',
        en: '<p>Arpoador is widely regarded as the birthplace of Rio\'s surf culture. In the 1970s the first Brazilian surfers learned to ride the right-hand break off the rock — no wetsuits yet, just shorts and bare feet on the board.</p><p>Today the break just outside the rock remains the "home" of Rio\'s best local riders (locais). The annual Arpoador surf event is one of the most watched dates on the carioca calendar. To trace the sport\'s path in Brazil, Rio\'s surfing community and related museums preserve the records (see reference resources at the bottom).</p>',
        es: '<p>Arpoador se considera la cuna del surf carioca. En los años 70, los primeros surfistas brasileños aprendieron a montar la derecha de la roca: aún sin neopreno, solo shorts y pies descalzos.</p><p>Hoy la rompiente junto a la roca sigue siendo la "casa" de los mejores locales de Río. El campeonato anual de Arpoador es una de las citas más esperadas. Para seguir la huella del surf en Brasil, la comunidad carioca y museos afines guardan los archivos (véanse los recursos al pie).</p>',
        pt: '<p>O Arpoador é considerado o berço do surf carioca. Nos anos 70, os primeiros surfistas brasileiros aprenderam a pegar a direita da rocha — ainda sem neoprene, só shorts e pé no pé.</p><p>Hoje a quebra junto à rocha continua sendo a "casa" dos melhores locais do Rio. O campeonato anual do Arpoador é uma das datas mais aguardadas. Para seguir a trilha do surf no Brasil, a comunidade carioca e museus afins guardam os arquivos (veja os recursos ao pé da página).</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (6).jpg',
    },
    {
      icon: '🌅',
      title: { zh: '"落日之掌声"的由来', en: 'The "Sunset Applause"', es: 'El "Aplauso del Sol"', pt: 'O "Aplauso do Sol"' } as T,
      body: {
        zh: '<p>在里约，看落日是一种全民仪式，而 Arpoador 是仪式的最高潮。当太阳沉入科帕卡巴纳与莱梅之间的海平线（里约是少数能正面看落日入海的城市之一），人群会自发鼓掌——这便是 "Aplauso do Sol"。</p><p>没有人组织，没有指挥，却像彩排过千百次般整齐。有人认为这是对自然之美的本能赞叹，有人认为这是 carioca 对生活热爱的集体流露。无论缘何，请加入其中：当掌声响起，你便真正成为了里约人。</p>',
        en: '<p>In Rio, watching the sunset is a civic ritual — and Arpoador is its climax. As the sun drops into the sea between Copacabana and Leme (Rio is one of the few cities where you watch the sun set over the ocean), the crowd breaks into spontaneous applause — the "Sunset Applause" (Aplauso do Sol).</p><p>No one organises it, no conductor — yet it lands like a rehearsed encore. Some call it an instinctive tribute to beauty; others, the collective outpouring of carioca love for life. Whatever the reason, join in: when the applause rises, you become a carioca.</p>',
        es: '<p>En Río, ver el sol es un rito cívico, y Arpoador es su clímax. Cuando el sol cae al mar entre Copacabana y Leme (Río es una de las pocas ciudades donde el sol se pone sobre el océano), la multitud estalla en aplausos: el "Aplauso del Sol".</p><p>Nadie lo organiza, no hay director, y sin embargo suena como un bis ensayado. Unos lo ven como un homenaje instintivo a la belleza; otros, como la explosión colectiva del carioca por la vida. Sea como sea, únete: cuando suena el aplauso, ya eres carioca.</p>',
        pt: '<p>No Rio, ver o pôr do sol é um rito cívico — e o Arpoador é o clímax. Quando o sol cai no mar entre Copacabana e Leme (o Rio é uma das poucas cidades onde o sol se põe no oceano), a multidão explode em aplauso: o "Aplauso do Sol".</p><p>Ninguém organiza, não há regente — e mesmo assim soa como um bis ensaiado. Uns chamam de homenagem instintiva à beleza; outros, do derramamento coletivo do carioca pela vida. Seja como for, participe: quando o aplauso sobe, você vira carioca.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (7).jpg',
    },
    {
      icon: '🪨',
      title: { zh: '礁石与残存的大西洋雨林', en: 'The rock & the Atlantic Forest', es: 'La roca y la Mata Atlântica', pt: 'A rocha e a Mata Atlântica' } as T,
      body: {
        zh: '<p>Arpoador 的礁石属于新元古代（Neoproterozoic）巴西利亚造山运动的产物，主要由古老的眼球状片麻岩（augen gneiss）与花岗岩构成，是里约地质基底的天然露头，被海浪打磨了上亿年。它恰好位于伊帕内玛与科帕卡巴纳之间狭窄的颈状岬角，两侧海湾在此交汇，形成独特的"双滩"地貌。</p><p>礁石后方是 Parque Garota de Ipanema——一片残存的大西洋雨林小块，藤蔓与榕树间栖息着嬉皮笑脸的僧帽猴（sauá）与数十种鸟类。在寸土寸金的南区，这片绿意是城市与海洋之间最后的缓冲带。</p>',
        en: '<p>The Arpoador rock is the product of the Neoproterozoic Brasiliano orogeny, made mainly of ancient augen gneiss and granite — a natural outcrop of the local geological basement\'s geology, polished by the surf for hundreds of millions of years. It sits exactly on the narrow neck between Ipanema and Copacabana, where two bays meet and form a rare "twin-beach" landform.</p><p>Behind the rock lies Parque Garota de Ipanema — a small remnant of the Atlantic Rainforest, where vines and fig trees shelter cheeky capuchin monkeys (sauá) and dozens of bird species. In the built-up South Zone, this green strip is the last buffer between city and sea.</p>',
        es: '<p>La roca de Arpoador es producto del orógeno Brasiliano del Neoproterozoico, formada sobre todo por gneis ojival (augen gneiss) y granito antiguos: un afloramiento natural del basamento geológico de Río, pulido por el mar durante cientos de millones de años. Se sitúa justo en el istmo entre Ipanema y Copacabana, donde dos bahías se encuentran y forman un raro relieve de "doble playa".</p><p>Detrás de la roca está el Parque Garota de Ipanema, un pequeño remanente de la Mata Atlântica donde lianas e higueras cobijan a monos capuchinos (sauá) y decenas de aves. En la densa Zona Sur, esta franja verde es el último amortiguador entre la ciudad y el mar.</p>',
        pt: '<p>A rocha do Arpoador é produto da orogenia Brasiliana do Neoproterozoico, feita majoritariamente de gnaisse augen (gnaisse ojival) e granito antigos — um afloramento natural do embasamento geológico do Rio, polido pelo mar por centenas de milhões de anos. Fica exatamente no istmo entre Ipanema e Copacabana, onde duas baías se encontram e formam um raro relevo de "praia dupla".</p><p>Atrás da rocha está o Parque Garota de Ipanema, pequeno remanescente da Mata Atlântica, onde cipós e figueiras abrigam saguis (sauá) e dezenas de aves. Na densa Zona Sul, essa faixa verde é o último amortecedor entre cidade e mar.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (8).jpg',
    },
    {
      icon: '🧭',
      title: { zh: '礁石为何在这里：冈瓦纳裂解与瓜纳巴拉湾', en: 'Why the rock is here: Gondwana, rifting & Guanabara Bay', es: 'Por qué está aquí: Gondwana y la bahía de Guanabara', pt: 'Por que a rocha está aqui: Gondwana e a baía de Guanabara' } as T,
      body: {
        zh: '<p>大约 1.3 亿年前，冈瓦纳古陆开始裂解，南大西洋由此张开。随着非洲与南美板块分离，今天的巴西东海岸被整体抬升，形成了沿海的 Serra do Mar 山脉与破碎的花岗岩—片麻岩基底。</p><p>Arpoador 的礁石正是这套基底的天然露头。它不是珊瑚礁，也不是沉积岩，而是深部岩浆岩与变质岩在漫长地质时间中冷却、变形，再被海浪沿节理反复侵蚀后留下的"硬骨头"。伊帕内玛与科帕卡巴纳之间的颈状岬角，正是两侧海湾同时侵蚀、掏空较软岩层之后的结果——换句话说，这块礁石是被"剩"下来的。</p>',
        en: '<p>Around 130 million years ago Gondwana began to break apart and the South Atlantic opened. As the African and South American plates separated, what is now Brazil\'s east coast was uplifted, raising the coastal Serra do Mar range and fracturing its granite–gneiss basement.</p><p>The Arpoador rock is a natural outcrop of that basement. It is neither coral nor sedimentary rock, but deep igneous and metamorphic rock that cooled, deformed, and was then repeatedly eroded by waves along its joints — the "hard bone" left behind. The narrow neck between Ipanema and Copacabana is what remains after two bays eroded the softer layers away. In other words, this rock is what was left over.</p>',
        es: '<p>Hace unos 130 millones de años Gondwana empezó a fragmentarse y se abrió el Atlántico Sur. Al separarse África y Sudamérica, el actual litoral brasileño se elevó, formando la Serra do Mar y fracturando su basamento de granito y gneis.</p><p>La roca de Arpoador es un afloramiento natural de ese basamento. No es coral ni roca sedimentaria, sino roca ígnea y metamórfica profunda que se enfrió, se deformó y luego fue erosionada por el mar a lo largo de sus diaclasas: el "hueso duro" que quedó. El istmo entre Ipanema y Copacabana es lo que resta tras el vaciado de las capas más blandas por dos bahías. Es decir, esta roca es lo que sobró.</p>',
        pt: '<p>Há cerca de 130 milhões de anos Gondwana começou a se fragmentar e o Atlântico Sul se abriu. Com a separação das placas africana e sul-americana, o atual litoral brasileiro foi soerguido, erguendo a Serra do Mar e fraturando seu embasamento de granito e gnaisse.</p><p>A rocha do Arpoador é um afloramento natural desse embasamento. Não é coral nem rocha sedimentar, mas rocha ígnea e metamórfica profunda que esfriou, deformou-se e depois foi erodida pelo mar ao longo das fraturas — o "osso duro" que sobrou. O istmo entre Ipanema e Copacabana é o que resta após duas baías escavarem as camadas mais moles. Ou seja, esta rocha é o que sobrou.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (16).jpg',
    },
    {
      icon: '🐋',
      title: { zh: '从捕鲸到观鲸：鲸类的离去与回归', en: 'From whaling to whale-watching: departure and return', es: 'De la caza al avistamiento: ida y regreso de las ballenas', pt: 'Da caça ao avistamento: a ida e a volta das baleias' } as T,
      body: {
        zh: '<p>18 至 20 世纪，南大西洋的捕鲸活动使南露脊鲸等物种数量急剧下降，伊帕内玛外海曾经繁忙的猎场逐渐安静下来。1987 年，巴西通过法律全面禁止捕鲸，为种群恢复留出了空间。</p><p>此后数十年间，鲸类在里约近海的目击记录逐步增加。如今在合适的季节，站在 Arpoador 的礁石上望向开阔海面，偶尔能看到喷潮或跃身。对一座曾以鱼叉命名的礁石来说，这是一种意味深长的角色转换：从猎场，变成观察与保护的窗口。</p>',
        en: '<p>From the 18th to the 20th century, whaling in the South Atlantic sharply reduced species such as the southern right whale, and the once-busy hunting grounds off Ipanema fell quiet. In 1987 Brazil passed legislation banning whaling outright, leaving room for populations to recover.</p><p>In the decades since, sightings off Rio have gradually increased. Today, in the right season, standing on the Arpoador rock and looking out to open water you may catch a blow or a breach. For a rock named after a harpoon, it is a telling change of role: from hunting ground to a window for observation and protection.</p>',
        es: '<p>Entre los siglos XVIII y XX la caza de ballenas en el Atlántico Sur redujo drásticamente especies como la ballena franca austral, y los otrora concurridos caladeros frente a Ipanema quedaron en silencio. En 1987 Brasil prohibió por ley la caza, dejando espacio para la recuperación.</p><p>Décadas después, los avistamientos frente a Río aumentaron. Hoy, en la estación adecuada, desde la roca puede verse un soplido o un salto. Para una roca bautizada por el arpón, es un cambio de papel revelador: de coto de caza a ventana de observación y protección.</p>',
        pt: '<p>Entre os séculos XVIII e XX a caça de baleias no Atlântico Sul reduziu drasticamente espécies como a baleia-franca-austral, e os outrora movimentados pesqueiros frente a Ipanema silenciaram. Em 1987 o Brasil proibiu por lei a caça, abrindo espaço para a recuperação.</p><p>Décadas depois, os avistamentos frente ao Rio aumentaram. Hoje, na estação certa, do alto da rocha pode-se ver um sopro ou um salto. Para uma rocha batizada pelo arpão, é uma troca de papel reveladora: de caçada a janela de observação e proteção.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (17).jpg',
    },
    {
      icon: '🌗',
      title: { zh: '潮汐：这块礁石的时间刻度', en: 'Tides: the rock\'s own clock', es: 'Las mareas: el reloj de la roca', pt: 'As marés: o relógio da rocha' } as T,
      body: {
        zh: '<p>里约海岸属于半日潮，一天之内大致出现两次高潮与两次低潮，相邻两次高潮相隔约 12 小时 25 分钟——这个多出来的 25 分钟，正是月球公转留下的痕迹。</p><p>当月相处于新月或满月，太阳与月球的引潮力叠加形成大潮（spring tide），礁石边缘的潮汐岩池暴露得最充分；上弦与下弦月时则为小潮，水位变化平缓。想观察岩池生物或走上更远的礁面，请先查当日潮位表，并始终留出退路：涨潮时的礁面会很快被浪覆盖。</p>',
        en: '<p>Rio\'s coast has semi-diurnal tides: roughly two highs and two lows a day, with successive highs about 12 hours 25 minutes apart — that extra 25 minutes is the trace of the Moon\'s orbit.</p><p>At new and full moon the sun and moon pull together to produce spring tides, when the tide pools along the rock\'s edge are exposed most fully; at the quarters, neap tides bring gentler changes in water level. To look at pool life or walk further across the rock, check the day\'s tide table first and always keep an escape route: rising water covers the rock surface fast.</p>',
        es: '<p>La costa de Río tiene mareas semidiurnas: unas dos pleamares y dos bajamares al día, con pleamares sucesivas separadas por 12 h 25 min; esos 25 minutos extra son la huella de la órbita lunar.</p><p>En luna nueva o llena, sol y luna suman fuerzas y producen mareas vivas, cuando las pozas del borde de la roca quedan más expuestas; en cuarto creciente o menguante, las mareas muertas cambian el nivel con suavidad. Para observar las pozas o caminar más lejos, consulte la tabla del día y conserve siempre una vía de salida: la subida cubre la roca con rapidez.</p>',
        pt: '<p>O litoral do Rio tem marés semidiurnas: cerca de duas cheias e duas baixas por dia, com cheias sucessivas separadas por 12 h 25 min — esses 25 minutos extras são a marca da órbita da Lua.</p><p>Na lua nova ou cheia, sol e lua somam forças e geram marés de sizígia, quando as poças na borda da rocha ficam mais expostas; nos quartos, as marés de quadratura mudam o nível suavemente. Para observar as poças ou caminhar mais longe, consulte a tábua do dia e mantenha sempre uma rota de saída: a subida cobre a rocha rápido.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (18).jpg',
    },
  ],
};

// ── Climate (气候与季节) ──
export const climate = {
  sectionNum: { zh: '气候与季节', en: 'Climate & Seasons', es: 'Clima y estaciones', pt: 'Clima e estações' } as T,
  heading: { zh: '一年之中，<em class="text-[color:var(--color-emerald)]">什么时候来最好</em>', en: 'Across the year,<br/><em class="text-[color:var(--color-emerald)]"> when to come</em>', es: 'A lo largo del año,<br/><em class="text-[color:var(--color-emerald)]"> cuándo venir</em>', pt: 'Ao longo do ano,<br/><em class="text-[color:var(--color-emerald)]"> quando vir</em>' } as T,
  subtitle: { zh: '里约属热带气候，全年可游；但雨季、气温与海水温度会明显改变同一块礁石的体验。先看季节规律，再决定行程。', en: 'Rio has a tropical climate and can be visited year-round, but the rainy season, air temperature and sea temperature change what the same rock feels like. Read the seasonal pattern first, then plan.', es: 'Río tiene clima tropical y se puede visitar todo el año, pero la estación de lluvias, la temperatura del aire y del mar cambian la experiencia. Lea primero el patrón estacional.', pt: 'O Rio tem clima tropical e pode ser visitado o ano todo, mas a estação chuvosa, a temperatura do ar e do mar mudam a experiência. Veja primeiro o padrão sazonal.' } as T,
  seasonsHeading: { zh: '四季与旅行季', en: 'The four seasons', es: 'Las cuatro estaciones', pt: 'As quatro estações' } as T,
  seasons: [
    {
      icon: '🔥',
      period: { zh: '12 月 – 2 月 · 盛夏', en: 'Dec – Feb · High summer', es: 'Dic – Feb · Pleno verano', pt: 'Dez – Fev · Verão' } as T,
      title: { zh: '最热闹，也最湿热', en: 'Busiest, hottest and wettest', es: 'Lo más concurrido, caluroso y húmedo', pt: 'O mais movimentado, quente e úmido' } as T,
      body: { zh: '气温常在 25–35°C，午后雷阵雨频繁且来得快。海滩人气最高，跨年与狂欢节期间人流与住宿价格达到全年峰值；礁石上要注意防暑与雷雨。', en: 'Temperatures often run 25–35°C with fast, frequent afternoon thunderstorms. The beach is at its liveliest, and crowds and hotel prices peak around New Year and Carnival. Watch for heat and lightning on the rock.', es: 'De 25 a 35°C con tormentas de tarde frecuentes y repentinas. La playa está en su punto más vivo y los precios y la gente alcanzan su máximo en Año Nuevo y Carnaval. Cuidado con el calor y los rayos.', pt: 'Entre 25 e 35°C, com pancadas de tarde frequentes e rápidas. A praia fica no auge, e público e preços atingem o pico no Réveillon e no Carnaval. Atenção ao calor e aos raios.' } as T,
    },
    {
      icon: '🍂',
      period: { zh: '3 月 – 5 月 · 秋季', en: 'Mar – May · Autumn', es: 'Mar – May · Otoño', pt: 'Mar – Mai · Outono' } as T,
      title: { zh: '综合体验最好的时段', en: 'The sweet spot', es: 'El mejor equilibrio', pt: 'O melhor equilíbrio' } as T,
      body: { zh: '气温回落到 22–30°C，降雨减少而海水仍然温暖，天空通透度高。很多当地人认为这是登礁石、看日落与下水都最舒服的季节。', en: 'Temperatures ease to 22–30°C, rain decreases while the sea stays warm, and the air is clear. Many locals consider this the most comfortable season for the rock, sunsets and swimming.', es: 'Baja a 22–30°C, llueve menos y el mar sigue cálido, con aire limpio. Muchos locales lo consideran la mejor estación para la roca, el atardecer y el baño.', pt: 'Cai para 22–30°C, chove menos e o mar segue quente, com ar limpo. Muitos locais consideram a melhor estação para a rocha, o pôr do sol e o banho.' } as T,
    },
    {
      icon: '🐋',
      period: { zh: '6 月 – 8 月 · 冬季', en: 'Jun – Aug · Winter', es: 'Jun – Ago · Invierno', pt: 'Jun – Ago · Inverno' } as T,
      title: { zh: '干燥少雨，观鲸季节', en: 'Dry, clear — and whale season', es: 'Seco y despejado: temporada de ballenas', pt: 'Seco e claro — temporada de baleias' } as T,
      body: { zh: '气温约 18–27°C，降雨最少、能见度最好，是看日出、长距离海景与鲸类活动的季节。海水偏凉（约 21°C），清晨礁石上风大，需要一件外套。', en: 'Around 18–27°C with the least rain and the clearest air — the season for sunrises, long sea views and whale activity. The water is cooler (about 21°C) and the rock is windy at dawn, so bring a jacket.', es: 'Unos 18–27°C, con menos lluvia y aire más limpio: temporada de amaneceres, vistas largas y ballenas. El agua está más fría (unos 21°C) y en la roca hace viento al alba: lleve chaqueta.', pt: 'Cerca de 18–27°C, com menos chuva e ar mais limpo — estação de amanheceres, vistas longas e baleias. A água fica mais fria (cerca de 21°C) e a rocha venta de manhã: leve jaqueta.' } as T,
    },
    {
      icon: '🌬️',
      period: { zh: '9 月 – 11 月 · 春季', en: 'Sep – Nov · Spring', es: 'Sep – Nov · Primavera', pt: 'Set – Nov · Primavera' } as T,
      title: { zh: '天气多变，浪况活跃', en: 'Changeable, with livelier surf', es: 'Cambiante, con más oleaje', pt: 'Variável, com mar mais ativo' } as T,
      body: { zh: '气温 20–28°C，天气转换频繁、风力偏大，海面常有可观的浪。对观赏冲浪与拍摄浪花是好季节，但下水需更谨慎，也要留意阵雨。', en: 'Temperatures of 20–28°C with shifting weather and stronger wind, which often builds a decent swell. A good season for watching surf and photographing spray, but swim with more caution and expect showers.', es: 'De 20 a 28°C con tiempo cambiante y más viento, que suele levantar oleaje. Buena estación para ver surf y fotografiar espuma, pero báñese con más cautela y espere chubascos.', pt: 'Entre 20 e 28°C, com tempo instável e mais vento, que costuma levantar onda. Boa estação para ver surfe e fotografar espuma, mas entre no mar com mais cautela e conte com pancadas.' } as T,
    },
  ],
  packingHeading: { zh: '全年都用得上的行李', en: 'Gear that works all year', es: 'Equipo útil todo el año', pt: 'Itens úteis o ano todo' } as T,
  packing: [
    {
      icon: '🧴',
      title: { zh: '高倍防晒', en: 'Strong sunscreen', es: 'Protector solar alto', pt: 'Protetor solar forte' } as T,
      body: { zh: '景点位于南纬约 23°，全年紫外线都强，礁石顶部没有遮阴。防晒霜、帽子与墨镜建议常备。', en: 'At roughly 23°S the UV is strong year-round and the top of the rock has no shade. Sunscreen, a hat and sunglasses are worth carrying every trip.', es: 'A unos 23°S el UV es fuerte todo el año y la cima no tiene sombra. Conviene llevar protector, sombrero y gafas.', pt: 'A cerca de 23°S o UV é forte o ano todo e o topo da rocha não tem sombra. Vale levar protetor, boné e óculos.' } as T,
    },
    {
      icon: '👟',
      title: { zh: '防滑鞋', en: 'Shoes with grip', es: 'Calzado con agarre', pt: 'Calçado com aderência' } as T,
      body: { zh: '礁石表面粗糙但常有湿滑青苔，人字拖不适合攀爬。运动鞋或溯溪鞋更稳，上下礁石都安心。', en: 'The rock is rough but often covered in slippery algae, and flip-flops are a poor choice for climbing. Trainers or water shoes give much better footing.', es: 'La roca es rugosa pero suele tener algas resbaladizas y las chanclas no sirven para trepar. Zapatillas o calzado de agua dan mucha más seguridad.', pt: 'A rocha é rugosa, mas costuma ter algas escorregadias, e chinelo não serve para escalar. Tênis ou calçado de água dão muito mais firmeza.' } as T,
    },
    {
      icon: '🧥',
      title: { zh: '一件薄外套', en: 'A light jacket', es: 'Una chaqueta ligera', pt: 'Uma jaqueta leve' } as T,
      body: { zh: '清晨与冬季（6–8 月）海风偏凉，等日出时体感会比市区低几度，一件防风外套很实用。', en: 'Sea breezes make dawn feel cooler than downtown, especially in winter (June–August) — a windproof layer helps while you wait for sunrise.', es: 'La brisa marina hace que el amanecer se sienta más fresco que en el centro, sobre todo en invierno (junio–agosto): una capa cortavientos ayuda.', pt: 'A brisa do mar deixa o amanhecer mais fresco que no centro, sobretudo no inverno (junho–agosto) — uma camada corta-vento ajuda.' } as T,
    },
    {
      icon: '💧',
      title: { zh: '饮用水', en: 'Drinking water', es: 'Agua potable', pt: 'Água potável' } as T,
      body: { zh: '礁石上没有商店，登顶并等待日落通常需要 1–2 小时，自备水比临时折返从容得多。', en: 'There are no shops on the rock, and climbing up plus waiting for sunset usually takes 1–2 hours — carrying water saves a trip back.', es: 'No hay tiendas en la roca, y subir y esperar el atardecer lleva 1–2 horas: llevar agua evita tener que volver.', pt: 'Não há lojas na rocha, e subir e esperar o pôr do sol leva 1–2 horas — levar água evita ter que voltar.' } as T,
    },
  ],
  note: { zh: '以上为气候层面的长期规律；当天的天气、海况与潮汐请见上方实时板块。', en: 'These are long-term seasonal patterns; for today\'s weather, sea state and tides see the live sections above.', es: 'Son patrones estacionales de largo plazo; para el tiempo, el mar y las mareas de hoy vea las secciones en vivo de arriba.', pt: 'São padrões sazonais de longo prazo; para o tempo, o mar e as marés de hoje veja as seções ao vivo acima.' } as T,
};

// ── Tides (潮汐时刻) ──
export const tides = {
  sectionNum: { zh: '潮汐时刻', en: 'Tides', es: 'Mareas', pt: 'Marés' } as T,
  heading: { zh: '潮起潮落，<em class="text-[color:var(--color-emerald)]">决定你能走多远</em>', en: 'The tide decides<br/><em class="text-[color:var(--color-emerald)]"> how far you can walk</em>', es: 'La marea decide<br/><em class="text-[color:var(--color-emerald)]"> hasta dónde llegar</em>', pt: 'A maré decide<br/><em class="text-[color:var(--color-emerald)]"> até onde ir</em>' } as T,
  subtitle: { zh: '礁石下部的平台与潮汐岩池只在退潮时露出。看懂今天的潮位曲线，再决定什么时候上礁石、什么时候看日落。', en: 'The lower ledges and tide pools only appear at low water. Read today\'s tide curve before you decide when to climb the rock and when to stay for sunset.', es: 'Las repisas bajas y las pozas solo aparecen con la marea baja. Lea la curva de hoy antes de decidir cuándo subir y cuándo quedarse al atardecer.', pt: 'As plataformas baixas e as poças só aparecem na maré baixa. Veja a curva de hoje antes de decidir quando subir e quando ficar para o pôr do sol.' } as T,

  tideTypeLabel: { zh: '今日潮型', en: 'Today\'s tide type', es: 'Tipo de marea de hoy', pt: 'Tipo de maré de hoje' } as T,
  stateLabel: { zh: '当前潮汐', en: 'Current tide', es: 'Marea actual', pt: 'Maré atual' } as T,
  updatedLabel: { zh: '数据时间', en: 'Data updated', es: 'Datos de', pt: 'Dados de' } as T,
  typeSpring: { zh: '大潮', en: 'Spring tide', es: 'Marea viva', pt: 'Maré de sizígia' } as T,
  typeNeap: { zh: '小潮', en: 'Neap tide', es: 'Marea muerta', pt: 'Maré de quadratura' } as T,
  typeMid: { zh: '中潮', en: 'Mid range', es: 'Marea media', pt: 'Maré intermediária' } as T,
  typeNoteSpring: { zh: '朔望前后潮差最大：退潮时岩池暴露最完整，涨潮时礁石下部也最容易被浪覆盖。', en: 'Around new and full moon the range peaks: pools are exposed most fully at low water, and the lower rock floods fastest on the rising tide.', es: 'En luna nueva o llena el rango es máximo: las pozas quedan más expuestas en bajamar y la parte baja se inunda antes al subir.', pt: 'Na lua nova ou cheia a amplitude é máxima: as poças ficam mais expostas na baixa-mar e a parte baixa alaga mais rápido na enchente.' } as T,
  typeNoteNeap: { zh: '上下弦前后潮差最小，水位变化平缓，礁石下部的可通行时间更长。', en: 'Around the quarters the range is smallest, the water moves gently, and the lower rock stays walkable longer.', es: 'En los cuartos el rango es mínimo, el agua se mueve suave y la parte baja sigue transitable más tiempo.', pt: 'Nos quartos a amplitude é mínima, a água se move devagar e a parte baixa fica transitável por mais tempo.' } as T,
  typeNoteMid: { zh: '潮差介于大潮与小潮之间，按当日时刻表安排行程即可。', en: 'The range sits between spring and neap — just follow today\'s timetable.', es: 'El rango está entre viva y muerta: siga el horario del día.', pt: 'A amplitude fica entre sizígia e quadratura — siga a tábua do dia.' } as T,

  stateRising: { zh: '涨潮中', en: 'Rising', es: 'Subiendo', pt: 'Subindo' } as T,
  stateFalling: { zh: '退潮中', en: 'Falling', es: 'Bajando', pt: 'Baixando' } as T,
  nextLabel: { zh: '下一次', en: 'Next', es: 'Próxima', pt: 'Próxima' } as T,
  high: { zh: '高潮', en: 'High', es: 'Pleamar', pt: 'Cheia' } as T,
  low: { zh: '低潮', en: 'Low', es: 'Bajamar', pt: 'Baixa' } as T,
  rangeLabel: { zh: '今日潮差', en: 'Today\'s range', es: 'Rango de hoy', pt: 'Amplitude de hoje' } as T,

  chartHeading: { zh: '今日潮位曲线', en: 'Today\'s tide curve', es: 'Curva de marea de hoy', pt: 'Curva da maré de hoje' } as T,
  chartNow: { zh: '现在', en: 'Now', es: 'Ahora', pt: 'Agora' } as T,
  chartAxis: { zh: '水位（米）', en: 'Level (m)', es: 'Nivel (m)', pt: 'Nível (m)' } as T,

  tableHeading: { zh: '潮汐时刻表', en: 'Tide timetable', es: 'Horario de mareas', pt: 'Tábua de marés' } as T,
  tableToday: { zh: '今天', en: 'Today', es: 'Hoy', pt: 'Hoje' } as T,
  tableTomorrow: { zh: '明天', en: 'Tomorrow', es: 'Mañana', pt: 'Amanhã' } as T,

  bestHeading: { zh: '按潮汐安排行程', en: 'Plan around the tide', es: 'Organice el día según la marea', pt: 'Planeje o dia pela maré' } as T,
  bestLowTitle: { zh: '潮汐岩池与赶海', en: 'Tide pools and rock-pooling', es: 'Pozas de marea', pt: 'Poças de maré' } as T,
  bestLowBody: { zh: '低潮前后各约 1 小时，礁石上的岩池露出最完整，适合观察小蟹、海葵与小鱼。', en: 'Within about an hour either side of low water the rock pools are fully exposed — the best window for crabs, anemones and small fish.', es: 'Alrededor de una hora a cada lado de la bajamar las pozas quedan al descubierto: la mejor ventana para cangrejos, anémonas y peces pequeños.', pt: 'Cerca de uma hora antes e depois da baixa-mar as poças ficam expostas — a melhor janela para caranguejos, anêmonas e peixinhos.' } as T,
  bestSunsetTitle: { zh: '登礁石与日落机位', en: 'Climb the rock for sunset', es: 'Subir a la roca al atardecer', pt: 'Subir a rocha no pôr do sol' } as T,
  bestSunsetBody: { zh: '日落前 60–90 分钟到位，既避开正午暴晒，也能占到礁石顶部的好位置。', en: 'Arrive 60–90 minutes before sunset to skip the midday heat and still claim a good spot on top.', es: 'Llegue 60–90 minutos antes del atardecer para evitar el calor del mediodía y conseguir buen sitio arriba.', pt: 'Chegue 60–90 minutos antes do pôr do sol para evitar o calor do meio-dia e garantir um bom lugar no topo.' } as T,
  bestSurfTitle: { zh: '下水与冲浪', en: 'Swimming and surfing', es: 'Baño y surf', pt: 'Banho e surfe' } as T,
  bestSurfBody: { zh: '涨潮中段通常浪型更规整；退潮时礁石附近浅滩水流增强，注意脚下与离岸流。', en: 'Mid-rising tide usually gives the cleanest shape; on the ebb the shallows near the rock pull harder, so watch your footing and rip currents.', es: 'Con la marea subiendo suele haber mejor forma; en el reflujo las aguas someras junto a la roca tiran más: cuidado con el fondo y las corrientes.', pt: 'Na enchente o mar costuma ficar mais bem formado; na vazante as águas rasas junto à rocha puxam mais — atenção ao pé e às correntes de retorno.' } as T,

  scienceHeading: { zh: '读懂潮汐', en: 'Reading the tides', es: 'Leer las mareas', pt: 'Entender as marés' } as T,
  science: [
    { zh: '里约海岸属半日潮：一天大致两次高潮、两次低潮，相邻两次高潮相隔约 12 小时 25 分钟——多出来的 25 分钟来自月球公转。', en: 'Rio\'s coast has semi-diurnal tides: roughly two highs and two lows a day, with successive highs about 12 hours 25 minutes apart — the extra 25 minutes come from the Moon\'s orbit.', es: 'La costa de Río tiene mareas semidiurnas: dos pleamares y dos bajamares al día, con pleamares separadas por 12 h 25 min; esos 25 minutos extra son de la órbita lunar.', pt: 'O litoral do Rio tem marés semidiurnas: cerca de duas cheias e duas baixas por dia, com cheias sucessivas separadas por 12 h 25 min — os 25 minutos extras vêm da órbita da Lua.' } as T,
    { zh: '新月与满月前后，太阳与月球的引潮力叠加形成大潮，礁石边缘的潮汐岩池暴露得最充分；上弦与下弦月时潮差最小。', en: 'Around new and full moon the sun and moon pull together to create spring tides, when the tide pools along the rock are exposed most fully; at the quarters the range is smallest.', es: 'En luna nueva o llena, sol y luna suman fuerzas y crean mareas vivas, cuando las pozas de la roca quedan más expuestas; en los cuartos el rango es mínimo.', pt: 'Na lua nova ou cheia, sol e lua somam forças e criam marés de sizígia, quando as poças da rocha ficam mais expostas; nos quartos, a amplitude é mínima.' } as T,
    { zh: '涨潮时礁石下部的通道与平台会被浪覆盖，务必提前查潮位、留出退路；礁面常有湿滑青苔，请穿防滑鞋。', en: 'At high tide the lower paths and ledges on the rock are covered — check the tide table in advance and keep an escape route. The surface often has slippery algae, so wear shoes with grip.', es: 'En pleamar los pasos y repisas bajas quedan cubiertos: consulte la tabla y conserve una vía de salida. La superficie suele tener algas resbaladizas: use calzado con agarre.', pt: 'Na maré alta, os acessos e plataformas baixas ficam cobertos — consulte a tábua antes e mantenha rota de saída. A superfície costuma ter algas escorregadias: use calçado com aderência.' } as T,
  ],
  note: { zh: '潮位为模型预报值，时间为当地时间，实际涨落可能相差数十分钟；礁石活动请提前留出余量。', en: 'Tide heights are model forecasts and times are local; actual tides may differ by tens of minutes — leave a margin when exploring the rock.', es: 'Las alturas son de modelo y las horas son locales; la marea real puede variar decenas de minutos: deje margen en la roca.', pt: 'As alturas são de modelo e os horários são locais; a maré real pode variar dezenas de minutos — deixe margem na rocha.' } as T,
  unavailable: { zh: '实时潮汐数据暂时不可用，请以现场标识与当地预报为准。', en: 'Live tide data is temporarily unavailable — follow on-site signage and local forecasts.', es: 'Datos de marea no disponibles: siga la señalización del lugar y los pronósticos locales.', pt: 'Dados de maré indisponíveis — siga a sinalização local e as previsões.' } as T,
};

// ── Sunset (日落指南) ──
export const sunset = {
  sectionNum: { zh: '日落指南', en: 'Sunset', es: 'Atardecer', pt: 'Pôr do Sol' } as T,
  heading: {
    zh: '落日之约，<br/><em class="text-[color:var(--color-sun)]">为什么所有人都在鼓掌</em>',
    en: 'The sunset ritual,<br/><em class="text-[color:var(--color-sun)]"> and why everyone applauds</em>',
    es: 'La cita del atardecer,<br/><em class="text-[color:var(--color-sun)]"> y por qué todos aplauden</em>',
    pt: 'O ritual do pôr do sol,<br/><em class="text-[color:var(--color-sun)]"> e por que todos aplaudem</em>',
  } as T,
  subtitle: {
    zh: '日落是这里唯一每天准时上演的节目，也是「Arpoador」最常被搜索的理由。下面是今天的准确时刻、该几点到、站在哪里拍，以及掌声的来历。',
    en: 'Sunset is the one show that runs on time every day — and the main reason people search for Arpoador. Here are today\'s exact time, when to arrive, where to stand, and where the applause comes from.',
    es: 'El atardecer es el único espectáculo que empieza puntual cada día, y el motivo principal por el que se busca Arpoador. Aquí están la hora exacta de hoy, cuándo llegar, dónde colocarse y de dónde viene el aplauso.',
    pt: 'O pôr do sol é o único espetáculo que começa na hora todos os dias — e o principal motivo pelo qual as pessoas procuram Arpoador. Veja a hora exata de hoje, quando chegar, onde ficar e de onde vem o aplauso.',
  } as T,

  todayLabel: { zh: '今日日落', en: 'Sunset today', es: 'Atardecer hoy', pt: 'Pôr do sol hoje' } as T,
  arriveLabel: { zh: '建议到达', en: 'Arrive by', es: 'Llegue antes de', pt: 'Chegue às' } as T,
  applauseLabel: { zh: '掌声时刻', en: 'Applause at', es: 'Aplauso a las', pt: 'Aplausos às' } as T,
  blueHourLabel: { zh: '蓝调时刻', en: 'Blue hour', es: 'Hora azul', pt: 'Hora azul' } as T,
  countdownIn: { zh: '距日落还有', en: 'Sunset in', es: 'Faltan', pt: 'Faltam' } as T,
  countdownUnit: { zh: '分钟', en: 'min', es: 'min', pt: 'min' } as T,
  countdownPast: { zh: '今日日落已过 · 明天同一时间再见', en: 'Today\'s sunset has passed — same time tomorrow', es: 'El atardecer de hoy ya pasó; mañana a la misma hora', pt: 'O pôr do sol de hoje já passou — amanhã no mesmo horário' } as T,
  arriveHint: { zh: '日落前 45 分钟到场占位', en: '45 minutes before sunset', es: '45 minutos antes del atardecer', pt: '45 minutos antes do pôr do sol' } as T,

  timelineHeading: { zh: '日落前后的 90 分钟', en: 'The 90 minutes around sunset', es: 'Los 90 minutos alrededor del atardecer', pt: 'Os 90 minutos em volta do pôr do sol' } as T,
  timeline: [
    {
      title: { zh: '到达与占位', en: 'Arrive and claim a spot', es: 'Llegar y coger sitio', pt: 'Chegar e garantir lugar' } as T,
      body: { zh: '礁石顶部与东侧木栈道同时开始拥挤。旺季（12–3 月）与周末请再提前 15 分钟，日落前 30 分钟到场通常已无好机位。', en: 'The top of the rock and the east boardwalk get crowded at the same time. In high season (Dec–Mar) and at weekends come 15 minutes earlier — by 30 minutes before sunset the good spots are usually gone.', es: 'La cima de la roca y el paseo del este se llenan a la vez. En temporada alta (dic–mar) y los fines de semana llegue 15 minutos antes: a 30 minutos del atardecer ya no suele haber buen sitio.', pt: 'O topo da rocha e a passarela leste ficam cheios ao mesmo tempo. Na alta temporada (dez–mar) e nos fins de semana chegue 15 minutos antes — a 30 minutos do pôr do sol os bons lugares já acabaram.' } as T,
    },
    {
      title: { zh: '金色时刻', en: 'Golden hour', es: 'Hora dorada', pt: 'Hora dourada' } as T,
      body: { zh: '太阳降到两山之间的高度，海面出现一条金色反光带。此时拍人像肤色最暖，也是沙滩上人相对最少的一刻。', en: 'The sun drops to the height of the gap between the two mountains and a golden band appears on the water. Skin tones are warmest now, and the beach is at its emptiest.', es: 'El sol baja a la altura del hueco entre los dos montes y aparece una franja dorada en el mar. Es el momento de tonos más cálidos y de playa más vacía.', pt: 'O sol desce até a altura do vão entre os dois morros e surge uma faixa dourada no mar. É o momento de tons mais quentes e de praia mais vazia.' } as T,
    },
    {
      title: { zh: '太阳沉入山脊 · 掌声响起', en: 'Sun sets, applause starts', es: 'El sol se pone, empieza el aplauso', pt: 'O sol se põe, começa o aplauso' } as T,
      body: { zh: '太阳从科帕卡巴纳一侧的山脊后落下，天空由金转橙再转红，整个过程通常只有 3–5 分钟。太阳消失的那一刻，沙滩与礁石上的人群会同时鼓掌。', en: 'The sun sinks behind the ridge on the Copacabana side and the sky turns from gold to orange to red in just 3–5 minutes. The moment it disappears, everyone on the beach and the rock applauds at once.', es: 'El sol se hunde tras la cresta del lado de Copacabana y el cielo pasa de dorado a naranja y rojo en solo 3–5 minutos. En el instante en que desaparece, todos aplauden a la vez.', pt: 'O sol se esconde atrás da crista do lado de Copacabana e o céu vai do dourado ao laranja e ao vermelho em apenas 3–5 minutos. No instante em que ele some, todos aplaudem ao mesmo tempo.' } as T,
    },
    {
      title: { zh: '蓝调时刻', en: 'Blue hour', es: 'Hora azul', pt: 'Hora azul' } as T,
      body: { zh: '天光转为深蓝，城市灯火与路灯亮起。这是长曝光、车轨与夜景人像的最佳窗口，约持续 20 分钟，之后礁石上会迅速变暗。', en: 'The sky turns deep blue as the city lights come on. This is the best window for long exposures, light trails and night portraits — it lasts about 20 minutes, then the rock gets dark fast.', es: 'El cielo se vuelve azul profundo y se encienden las luces. Es la mejor ventana para larga exposición, estelas de luz y retratos nocturnos; dura unos 20 minutos.', pt: 'O céu fica azul-profundo e as luzes da cidade acendem. É a melhor janela para longa exposição, rastros de luz e retratos noturnos — dura cerca de 20 minutos.' } as T,
    },
  ],

  spotsHeading: { zh: '四个最佳机位', en: 'Four best viewpoints', es: 'Cuatro mejores miradores', pt: 'Quatro melhores ângulos' } as T,
  spots: [
    {
      icon: '🪨',
      title: { zh: '礁石顶部平台', en: 'Top of the rock', es: 'Cima de la roca', pt: 'Topo da rocha' } as T,
      body: { zh: '正对科帕卡巴纳方向，是鼓掌仪式的主场；落日方位恰好落在两山之间的缺口。完全无遮阴，务必提前占位。', en: 'Facing Copacabana, this is where the applause happens; the sun sets exactly in the gap between the two mountains. No shade at all, so claim your spot early.', es: 'Mirando a Copacabana, es el escenario del aplauso; el sol cae justo en el hueco entre los dos montes. Sin sombra: llegue temprano.', pt: 'De frente para Copacabana, é onde o aplauso acontece; o sol se põe exatamente no vão entre os dois morros. Sem sombra alguma — chegue cedo.' } as T,
    },
    {
      icon: '🪵',
      title: { zh: '东侧木栈道', en: 'East boardwalk', es: 'Paseo del este', pt: 'Passarela leste' } as T,
      body: { zh: '通往科帕卡巴纳的木栈道，能把礁石剪影与太阳同时收进画面，人像构图最稳，也不用爬上礁石。', en: 'The boardwalk towards Copacabana lets you frame the rock silhouette and the sun together — the steadiest portrait composition, with no climbing.', es: 'El paseo hacia Copacabana permite encuadrar la silueta de la roca y el sol a la vez: la composición de retrato más estable, sin subir.', pt: 'A passarela em direção a Copacabana permite enquadrar a silhueta da rocha e o sol juntos — a composição de retrato mais estável, sem escalar.' } as T,
    },
    {
      icon: '📐',
      title: { zh: '伊帕内玛沙滩侧', en: 'Ipanema beach side', es: 'Lado de la playa de Ipanema', pt: 'Lado da praia de Ipanema' } as T,
      body: { zh: '退到 Posto 9 与礁石之间的沙滩，用广角把整块礁石、人群剪影与落日一起拍下，是最像明信片的角度。', en: 'Step back onto the sand between Posto 9 and the rock and use a wide lens to capture the whole rock, the crowd silhouettes and the sun — the postcard angle.', es: 'Retroceda a la arena entre el Posto 9 y la roca y use un gran angular para capturar la roca, las siluetas y el sol: el ángulo de postal.', pt: 'Volte para a areia entre o Posto 9 e a rocha e use uma grande angular para pegar a rocha inteira, as silhuetas e o sol — o ângulo de cartão-postal.' } as T,
    },
    {
      icon: '🌊',
      title: { zh: '魔鬼海滩一侧', en: 'Praia do Diabo side', es: 'Lado de Praia do Diabo', pt: 'Lado da Praia do Diabo' } as T,
      body: { zh: '面向伊帕内玛双子峰（Dois Irmãos），侧光打在礁石上层次分明，适合长焦拍细节，人也比正面少。', en: 'Facing the Dois Irmãos peaks, side light sculpts the rock with strong contrast — ideal for telephoto detail shots, and far less crowded than the front.', es: 'Frente a los picos Dois Irmãos, la luz lateral da volumen a la roca: ideal para teleobjetivo y con mucha menos gente.', pt: 'De frente para o Dois Irmãos, a luz lateral dá volume à rocha — ideal para teleobjetiva e bem menos cheio.' } as T,
    },
  ],

  applauseHeading: { zh: '掌声从哪里来', en: 'Where the applause comes from', es: 'De dónde viene el aplauso', pt: 'De onde vem o aplauso' } as T,
  applauseBody: {
    zh: '「落日之掌声」（Aplauso do Sol）是里约的非正式传统：当太阳完全沉入山脊，聚集在沙滩与礁石上的人群会自发鼓掌。它没有组织者、没有门票，也没有固定流程——只是本地人与游客共享的一个瞬间。1970 年代冲浪文化在此兴起，等浪的人们顺带把看日落变成了集体习惯，掌声便延续至今。',
    en: 'The Sunset Applause (Aplauso do Sol) is an informal Rio tradition: when the sun finally drops behind the ridge, everyone gathered on the sand and on the rock claps spontaneously. No organiser, no ticket, no fixed script — just a shared moment between locals and visitors. When surf culture took off here in the 1970s, people waiting for swell turned sunset watching into a collective habit, and the applause stuck.',
    es: 'El Aplauso del Sol (Aplauso do Sol) es una tradición informal de Río: cuando el sol desaparece tras la cresta, todos los que están en la arena y en la roca aplauden de forma espontánea. Sin organizador, sin entrada y sin guion: solo un momento compartido. Cuando el surf despegó aquí en los años 70, quienes esperaban olas convirtieron el atardecer en una costumbre colectiva, y el aplauso se quedó.',
    pt: 'O Aplauso do Sol é uma tradição informal do Rio: quando o sol desaparece atrás da crista, todo mundo que está na areia e na rocha aplaude espontaneamente. Sem organizador, sem ingresso e sem roteiro — apenas um momento compartilhado. Quando o surfe despontou aqui nos anos 1970, quem esperava onda transformou o pôr do sol em hábito coletivo, e o aplauso ficou.',
  } as T,

  tableHeading: { zh: '全年日落时刻表', en: 'Sunset times all year', es: 'Horario del atardecer todo el año', pt: 'Horário do pôr do sol o ano todo' } as T,
  tableSunset: { zh: '日落', en: 'Sunset', es: 'Atardecer', pt: 'Pôr do sol' } as T,
  tableSunrise: { zh: '日出', en: 'Sunrise', es: 'Amanecer', pt: 'Nascer do sol' } as T,
  tableNote: { zh: '取每月 15 日、当地时间（UTC−3），按里约坐标计算，误差约 ±2 分钟。巴西自 2019 年起不再实行夏令时，因此表中全年与此刻一致。', en: 'Taken on the 15th of each month, local time (UTC−3), computed for Rio coordinates with roughly ±2 minutes of error. Brazil dropped daylight saving in 2019, so these times hold all year.', es: 'Calculado para el día 15 de cada mes, hora local (UTC−3) y coordenadas de Río, con ±2 minutos de error. Brasil abandonó el horario de verano en 2019.', pt: 'Calculado para o dia 15 de cada mês, hora local (UTC−3) e coordenadas do Rio, com cerca de ±2 minutos de erro. O Brasil não adota mais horário de verão desde 2019.' } as T,

  safetyHeading: { zh: '日落之后的三件事', en: 'Three things after sunset', es: 'Tres cosas tras el atardecer', pt: 'Três coisas depois do pôr do sol' } as T,
  safety: [
    { zh: '礁石表面粗糙但常有湿滑青苔，请穿防滑鞋；下礁石时不要背对海浪。', en: 'The rock is rough but often covered in slippery algae — wear shoes with grip and never turn your back on the waves on the way down.', es: 'La roca es rugosa pero suele tener algas resbaladizas: use calzado con agarre y no dé la espalda a las olas al bajar.', pt: 'A rocha é rugosa, mas costuma ter algas escorregadias — use calçado com aderência e não fique de costas para as ondas na descida.' } as T,
    { zh: '日落前 30 分钟到日落后 30 分钟人流最密集，请看好手机、相机与随身包。', en: 'From 30 minutes before to 30 minutes after sunset is the busiest window — keep an eye on your phone, camera and bag.', es: 'Desde 30 minutos antes hasta 30 minutos después del atardecer es el momento de más gente: vigile móvil, cámara y bolso.', pt: 'De 30 minutos antes a 30 minutos depois do pôr do sol é o período mais cheio — fique atento a celular, câmera e bolsa.' } as T,
    { zh: '日落后礁石上没有照明，光线下降很快；建议沿木栈道返回有路灯的区域，不要独自留在礁石深处。', en: 'There is no lighting on the rock and it gets dark quickly after sunset — walk back along the boardwalk to the lit area rather than staying out on the rock alone.', es: 'No hay iluminación en la roca y oscurece rápido: vuelva por el paseo hacia la zona iluminada y no se quede solo en la roca.', pt: 'Não há iluminação na rocha e escurece rápido — volte pela passarela até a área iluminada e não fique sozinho na rocha.' } as T,
  ],
  note: { zh: '日落时刻为当地时间的官方预报值；实际受地形与大气折射影响可能有 1–2 分钟差异。', en: 'Sunset times are official local forecasts; terrain and atmospheric refraction can shift the visible moment by 1–2 minutes.', es: 'Las horas son previsiones oficiales en hora local; el relieve y la refracción pueden desviar el momento visible 1–2 minutos.', pt: 'Os horários são previsões oficiais em hora local; relevo e refração atmosférica podem deslocar o momento visível em 1–2 minutos.' } as T,
  unavailable: { zh: '日落数据暂时不可用，请参考上方天气板块的日出日落时刻。', en: 'Sunset data is temporarily unavailable — see the sunrise/sunset times in the weather section above.', es: 'Datos del atardecer no disponibles: consulte las horas de la sección de clima arriba.', pt: 'Dados do pôr do sol indisponíveis — veja os horários na seção de clima acima.' } as T,

  // 站内关键词内链（锚文本带完整搜索词）
  relatedHeading: { zh: '接着看', en: 'Keep reading', es: 'Sigue leyendo', pt: 'Continue lendo' } as T,
  relatedTides: { zh: '潮汐时刻与赶海窗口', en: 'Tide times and low-tide windows', es: 'Horario de mareas y ventanas de bajamar', pt: 'Tábua de marés e janelas de maré baixa' } as T,
  relatedTransport: { zh: '怎么去 Arpoador：地铁与步行路线', en: 'How to get to Arpoador: metro and walking routes', es: 'Cómo llegar a Arpoador: metro y a pie', pt: 'Como chegar ao Arpoador: metrô e a pé' } as T,
  relatedWeather: { zh: '今日天气、海温与浪高', en: 'Today\'s weather, sea temperature and waves', es: 'Tiempo, temperatura del mar y olas de hoy', pt: 'Tempo, temperatura do mar e ondas hoje' } as T,
  relatedHistory: { zh: '「Arpoador」这个名字的含义与历史', en: 'What the name "Arpoador" means and its history', es: 'El significado del nombre "Arpoador" y su historia', pt: 'O significado do nome "Arpoador" e sua história' } as T,
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: '视觉图集', en: 'Gallery', es: 'Galería', pt: 'Galeria' } as T,
  heading: { zh: '浪、石、光、掌声', en: 'Wave. Rock. Light. Applause.', es: 'Ola. Roca. Luz. Aplauso.', pt: 'Onda. Rocha. Luz. Aplauso.' } as T,
  viewMorePhotos: { zh: '在 Google 地图上查看更多照片', en: 'View more photos on Google Maps', es: 'Ver más fotos en Google Maps', pt: 'Ver mais fotos no Google Maps' } as T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: '游客评价', en: 'Reviews', es: 'Reseñas', pt: 'Avaliações' } as T,
  heading: { zh: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 32,964 位旅行者', en: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · from 32,964 travelers', es: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · de 32.964 viajeros', pt: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · de 32.964 viajantes' } as T,
  viewMoreReviews: { zh: '在 Google 地图上查看更多评价', en: 'View more reviews on Google Maps', es: 'Ver más reseñas en Google Maps', pt: 'Ver mais avaliações no Google Maps' } as T,
  items: [
    { stars: '★★★★★', date: '2025-05', title: { zh: '"潮间带的小课堂"', en: '"A tide-pool classroom"', es: '"Un aula de pozas"', pt: '"Uma sala de maré"' } as T, desc: { zh: '绝佳的潮间带生态观察点。退潮时能在同一片岩池里清晰记录到石莼（海藻）与军士鱼的共生关系，是给初学者最好的现场教材。', en: 'A superb intertidal observation spot. At low tide you can clearly document the symbiosis between sea lettuce (Ulva) and sergeant majors in the same pool — a perfect field lesson for beginners.', es: 'Punto de observación intermareal excelente. En bajamar se documenta la simbiosis entre lechuga de mar (Ulva) y sargentos en la misma poza: una lección de campo perfecta.', pt: 'Excelente ponto de observação entremarés. Na baixa-mar dá para registrar a simbiose entre alface-do-mar (Ulva) e castanhetas na mesma poça: aula de campo perfeita.' } as T, author: 'Marina C. · 海洋生物系学生 · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: '"冲浪者的圣地"', en: '"Surfers\' sanctuary"', es: '"Santuario de surfistas"', pt: '"Santuário dos surfistas"' } as T, desc: { zh: '早上七点来的，礁石外浪点已经挤满本地好手。看着他们乘着又长又陡的右跑浪，相机根本停不下来。', en: 'Came at 7 AM — the break was already packed with locals. Watching them ride those long, steep right-handers, my camera never stopped.', es: 'Llegué a las 7 AM: la rompiente ya llena de locales. Verlos montar esas derechas largas y empinadas: cámara imparable.', pt: 'Fui às 7h — a quebra já cheia de locais. Vê-los pegar aquelas direitas longas e íngremes: câmera imparável.' } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: '"礁石很滑，注意安全"', en: '"Slippery rock — be careful"', es: '"Roca resbalosa, cuidado"', pt: '"Rocha escorregadia, cuidado"' } as T, desc: { zh: '风景满分，但黄昏人真的多，礁石被浪打湿后非常滑。我朋友差点摔了。建议穿防滑鞋，别靠浪太近。', en: 'Scenery is perfect, but it gets crowded at dusk and the rock is very slippery when wet. My friend almost fell. Wear grippy shoes, stay off the surf line.', es: 'Paisaje perfecto, pero al atardecer hay mucha gente y la roca resbala mojada. Mi amigo casi cae. Calzado con suela, lejos de la ola.', pt: 'Paisagem perfeita, mas lota no entardecer e a rocha escorrega molhada. Meu amigo quase caiu. Calçado com sola, longe da onda.' } as T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: '"公民科学的落日仪式"', en: '"Citizen science at sunset"', es: '"Ciencia ciudadana al sol"', pt: '"Ciência cidadã no pôr do sol"' } as T, desc: { zh: '连着几个黄昏做鸟类计数，发现落日时分鸬鹚会集体归巢。更惊喜的是，公约推行后礁石上的塑料垃圾明显少了——公共空间靠每个人守护。', en: 'Counted birds across several dusks and noticed cormorants roost together at sunset. Even better: since the visitor code spread, plastic on the rock has visibly dropped — a shared space guarded by everyone.', es: 'Varias tardes contando aves: los biguás duermen juntos al sol. Y tras el código de visita, menos plástico en la roca: un espacio común cuidado por todos.', pt: 'Várias tardes contando aves: os biguás dormem juntos no pôr do sol. E com o código de visita, menos plástico na rocha: espaço comum cuidado por todos.' } as T, author: 'Sofía R. · 环保志愿者 · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: '"免费却世界级"', en: '"Free yet world-class"', es: '"Gratis y de nivel mundial"', pt: '"Grátis e de nível mundial"' } as T, desc: { zh: '不收一分钱，却比很多收费景点更难忘。潮汐岩池里的小蟹和小鱼特别可爱，带孩子的家庭会很喜欢。', en: 'Costs nothing yet more memorable than many paid sights. The little crabs and fish in the tide pools are adorable — great for families with kids.', es: 'No cuesta nada y es más memorable que muchos lugares de pago. Los cangrejitos de las pozas son adorables: ideal para familias.', pt: 'Não custa nada e é mais memorável que muitos pontos pagos. Os caranguejinhos das piscinas de maré são fofos: ótimo para famílias.' } as T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★★', date: '2024-11', title: { zh: '"城市与荒野的边界"', en: '"Where city meets wild"', es: '"Donde la ciudad toca lo salvaje"', pt: '"Onde a cidade encontra o selvagem"' } as T, desc: { zh: '这里是拍摄城市光污染边缘与大西洋夜空的完美过渡带。日落收尾后别急着走，向南天抬眼，能拍到礁石剪影上空的银河初现。', en: 'A perfect transition zone to shoot the edge of light pollution against the open Atlantic night. After sunset, don\'t rush off — look south and you can catch the first Milky Way above the rock\'s silhouette.', es: 'Zona de transición perfecta para fotografiar el borde de la contaminación lumínica contra la noche del Atlántico. Tras el sol, mire al sur: la Vía Láctea sobre la roca.', pt: 'Zona de transição perfeita para fotografiar a borda da poluição luminosa contra a noite do Atlântico. Após o sol, olhe ao sul: a Via Láctea sobre a rocha.' } as T, author: 'Emily H. · 独立风光摄影师 · 🇬🇧' },
    { stars: '★★★★★', date: '2025-01', title: { zh: '"露天的地质教科书"', en: '"An open-air geology textbook"', es: '"Un libro de geología al aire"', pt: '"Um livro de geologia a céu aberto"' } as T, desc: { zh: '眼球状片麻岩的纹理在夕照下特别清楚，能看到新元古代造山运动留下的拉伸线理。对里约这座"山海之城"来说，这块露头比任何博物馆都直观。', en: 'The augen gneiss texture reads clearly in the last light, showing stretching lineations from the Neoproterozoic orogeny. For a "city between mountain and sea", this outcrop is more direct than any museum.', es: 'La textura del gneis ojival se lee bien al sol: lineaciones del orógeno neoproterozoico. Para una "ciudad entre mar y montaña", este afloramiento enseña más que un museo.', pt: 'A textura do gnaisse augen aparece bem na luz final, com lineações do orógeno neoproterozoico. Para uma "cidade entre mar e montanha", o afloramento ensina mais que um museo.' } as T, author: 'Kenji T. · 地质爱好者 · 🇯🇵' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-12', title: { zh: '"浪墙外的常客"', en: '"Regulars beyond the break"', es: '"Habitués tras la rompiente"', pt: '"Habitués além da quebra"' } as T, desc: { zh: '黑鸬鹚总在浪墙外一字排开潜水，军士鱼在岩池里巡游。带一副望远镜，一个黄昏就能记到十几种海岸鸟类，比很多湿地都热闹。', en: 'Neotropic cormorants line up beyond the wave wall to dive; sergeant majors patrol the pools. Bring binoculars and you can log a dozen coastal birds in one dusk — livelier than many wetlands.', es: 'Los biguás se alinean tras la pared para zambullirse; los sargentos patrullan las pozas. Con prismáticos, una docena de aves costeras en un atardecer.', pt: 'Os biguás se alinham além da parede para mergulhar; as castanhetas patrulham as poças. Com binóculos, uma dúzia de aves costeiras num entardecer.' } as T, author: 'Wang H. · 鸟类观察者 · 🇨🇳' },
    { stars: '★★★★★', date: '2025-05', title: { zh: '"摄影师的 dream spot"', en: '"A photographer\'s dream"', es: '"El sueño de un fotógrafo"', pt: '"O sonho de um fotógrafo"' } as T, desc: { zh: '黄金时刻的侧向光打在礁石和浪墙上，色彩层次爆炸。带了三脚架，长曝拍浪沫太爽了。强烈推荐给同好。', en: 'Golden-hour side light on the rock and the wave walls — the colour range explodes. Brought a tripod, long-exposure spray shots were a joy. Recommended for fellow shooters.', es: 'La luz dorada rasante sobre la roca y las paredes: el color estalla. Con trípode, las largas de espuma son un gusto. Recomendado a fotógrafos.', pt: 'A luz dourada rasante na rocha e nas paredes: o colorido explode. Levei tripé, longas da espuma foram um prazer. Recomendo a fotógrafos.' } as T, author: 'Anna K. · 🇩🇪' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: '周边联动', en: 'Nearby', es: 'Alrededores', pt: 'Arredores' } as T,
  heading: { zh: '还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>', en: 'Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>', es: 'Extiende tu viaje<em class="text-[color:var(--color-emerald)]"> aún más</em>', pt: 'Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>' } as T,
  items: [
    { img: '/gallery/pedra-do-arpoador (9).jpg', title: '🏖️ Praia de Ipanema', desc: { zh: 'Arpoador 就坐落在伊帕内玛东端。向西是著名的"邮局 9 号"（Posto 9）阳光沙滩，色彩斑斓的遮阳伞与沙滩排球是里约田园诗的代表。', en: 'Arpoador sits at Ipanema\'s east end. To the west lies the famous Posto 9 sunshine beach — colourful parasols and beach volleyball, the very picture of the carioca idyll.', es: 'Arpoador está en el extremo este de Ipanema. Al oeste queda el famoso Posto 9: sombrillas y vóley, el idilio carioca.', pt: 'O Arpoador fica no extremo leste de Ipanema. A oeste, a famosa Praia do Posto 9: guarda-sóis e vôlei, o idílio carioca.' } as T },
    { img: '/gallery/pedra-do-arpoador (11).jpg', title: '🏰 Forte de Copacabana', desc: { zh: '沿海滨向北步行约 20 分钟即抵。这座军事要塞如今设有陆军历史博物馆与咖啡馆，屋顶平台可俯瞰整个 Copacabana 海湾，也是看日出的好去处。', en: 'A ~20 min walk north along the seafront. This military fort now houses an army history museum and café; its rooftop overlooks all of Copacabana bay and is a fine sunrise spot.', es: 'A 20 min norte por la orilla. El fuerte alberga un museo del ejército y cafetería; su azotea mira toda Copacabana y es buena para el amanecer.', pt: 'A ~20 min norte pela orla. O forte abriga museu do exército e café; o terraço avista toda Copacabana e é bom para o amanhecer.' } as T },
    { img: '/gallery/pedra-do-arpoador (12).jpg', title: '🌿 Parque Garota de Ipanema', desc: { zh: '礁石后方的小公园，残存的大西洋雨林与观景平台。清晨可见僧帽猴与数十种鸟类，是城市喧嚣中的一片静谧绿洲。', en: 'The small park behind the rock — remnant Atlantic Rainforest with a viewpoint. Mornings bring capuchin monkeys and dozens of bird species, an oasis of calm amid the city.', es: 'El parque tras la roca: remanente de Mata Atlântica con mirador. Por la mañana, monos capuchinos y decenas de aves: oasis de calma.', pt: 'O pequeno parque atrás da rocha: remanescente de Mata Atlântica com mirante. De manhã, saguis e dezenas de aves: oásis de calma.' } as T },
  ],
};

// ── Ecology (礁石间的生命脉动：海岸生态与物种名录) ──
export const ecology = {
  sectionNum: { zh: '生态名录', en: 'Ecology', es: 'Ecología', pt: 'Ecologia' } as T,
  heading: { zh: '礁石间的<em class="text-[color:var(--color-emerald)]">生命脉动</em>', en: 'The pulse of life<br/><em class="text-[color:var(--color-emerald)]"> between the rocks</em>', es: 'El pulso de la vida<br/><em class="text-[color:var(--color-emerald)]"> entre las rocas</em>', pt: 'O pulso da vida<br/><em class="text-[color:var(--color-emerald)]"> entre as rochas</em>' } as T,
  intro: {
    zh: 'Arpoador 虽身处都市，却是海陆交汇的生态节点。礁石上的潮汐岩池、海滩后的残存雨林，以及掠过海面的飞鸟，共同构成里约海滨最容易被忽略的生命网络。请放慢脚步，你与这些海岸居民的相遇，往往只在一潮之间。',
    en: 'Though it sits in the city, Arpoador is an ecological node where land meets sea. The tide pools on the rock, the remnant rainforest behind the beach, and the birds skimming the waves together form the most overlooked web of life along Rio\'s shore. Slow down — your encounter with these coastal dwellers often lasts but a single tide.',
    es: 'Aunque está en la ciudad, Arpoador es un nodo ecológico donde tierra y mar se encuentran. Las pozas de marea, el remanente de selva tras la playa y las aves sobre las olas forman la red de vida más ignorada de la costa de Río. Vaya despacio: su encuentro dura solo una marea.',
    pt: 'Embora no meio da cidade, o Arpoador é um nó ecológico onde terra e mar se encontram. As piscinas de maré, o remanescente de mata após a praia e as aves sobre as ondas formam a teia de vida mais esquecida do litoral do Rio. Vá devagar — seu encontro com esses habitantes costeiros dura só uma maré.',
  } as T,
  // IUCN badge labels
  iucnVU: { zh: '易危 VU', en: 'Vulnerable VU', es: 'Vulnerable VU', pt: 'Vulnerável VU' } as T,
  iucnNT: { zh: '近危 NT', en: 'Near Threatened NT', es: 'Casi Amenazado NT', pt: 'Quase Ameaçado NT' } as T,
  iucnLC: { zh: '无危 LC', en: 'Least Concern LC', es: 'Preocupación Menor LC', pt: 'Pouco Preocupante LC' } as T,
  iucnEN: { zh: '极危 EN', en: 'Endangered EN', es: 'En Peligro EN', pt: 'Em Perigo EN' } as T,
  // Section labels
  secUmbrella: { zh: '旗舰与伞护物种', en: 'Flagship & Umbrella Species', es: 'Especies Bandera y Paraguas', pt: 'Espécies Bandeira e Guarda-chuva' } as T,
  secCommensal: { zh: '常见共生物种', en: 'Commensal & Observable Species', es: 'Especies Comensales y Observables', pt: 'Espécies Comensais e Observáveis' } as T,
  secFlora: { zh: '珍稀植物群', en: 'Endemic Flora', es: 'Flora Endémica', pt: 'Flora Endêmica' } as T,
  // Species
  species: [
    {
      name: { zh: '玉黍螺', en: 'Periwinkle', es: 'Caracol de roca', pt: 'Caramujo' } as T,
      latin: 'Littorina angulifera',
      niche: { zh: '岩池清道夫', en: 'Tide-pool cleaner', es: 'Limpiador de pozas', pt: 'Limpador de piscinas de maré' } as T,
      desc: {
        zh: '退潮后，礁石上密布着这些小螺。它们以附着的藻类和有机碎屑为食，是潮汐岩池生态的"清道夫"，也是许多海鸟的口粮。',
        en: 'At low tide the rock is studded with these tiny snails. They graze on algae and detritus, the "cleaners" of the tide pool and prey for many seabirds.',
        es: 'En bajamar, la roca se cubre de estos caracolitos. Comen algas y detritos: "limpiadores" de la poza y presa de aves.',
        pt: 'Na baixa-mar, a rocha se cobre desses caramujinhos. Comem algas e detritos: "limpadores" da piscina e presa de aves.',
      } as T,
      iucn: 'LC',
      icon: '🐚',
    },
    {
      name: { zh: '岩蟹', en: 'Sally Lightfoot crab', es: 'Cangrejo de roca', pt: 'Caranguejo' } as T,
      latin: 'Grapsus grapsus',
      niche: { zh: '礁石清道夫', en: 'Rock scavenger', es: 'Carroñero de roca', pt: 'Carniça de rocha' } as T,
      desc: {
        zh: '橙红相间的礁石蟹，在浪花边缘飞快爬行。它们以藻类、死鱼与落果为食，是海岸线重要的分解者，也是观潮时最活跃的"小丑"。',
        en: 'Orange-and-red rock crabs scuttling at the water\'s edge. They eat algae, dead fish and fallen fruit — key decomposers of the shoreline and the liveliest "clowns" at the tide line.',
        es: 'Cangrejos rojo-anaranjados que corren en el borde de la ola. Comen algas y peces muertos: descomponedores clave y los "payasos" más vivos.',
        pt: 'Caranguejos vermelho-alaranjados que correm na borda da onda. Comem algas e peixes mortos: decompositores-chave e os "palhaços" mais vivos.',
      } as T,
      iucn: 'LC',
      icon: '🦀',
    },
    {
      name: { zh: '黑鸬鹚', en: 'Neotropic Cormorant', es: 'Cormorán neotropical', pt: 'Biguá' } as T,
      latin: 'Nannopterum brasilianum',
      niche: { zh: '捕鱼者', en: 'Fish hunter', es: 'Pescador', pt: 'Pescador' } as T,
      desc: {
        zh: '伸展双翼在礁石上晾翅的黑色水鸟。它们成群在浪墙外潜水捕鱼，是 Arpoador 天空与海面之间最常见的剪影。',
        en: 'Black waterbirds spreading their wings to dry on the rock. They dive for fish just outside the wave wall — the most common silhouette between Arpoador\'s sky and sea.',
        es: 'Aves negras que secan las alas en la roca. Se zambullen tras peces fuera de la pared: la silueta más común entre cielo y mar.',
        pt: 'Aves negras que secam as asas na rocha. Mergulham atrás de peixes fora da parede: a silhueta mais comum entre céu e mar.',
      } as T,
      iucn: 'LC',
      icon: '🐦',
    },
    {
      name: { zh: '军士鱼', en: 'Sergeant major', es: 'Sargento', pt: 'Castanheta' } as T,
      latin: 'Abudefduf saxatilis',
      niche: { zh: '岩池居民', en: 'Tide-pool resident', es: 'Residente de poza', pt: 'Morador de piscina de maré' } as T,
      desc: {
        zh: '潮池里黄蓝相间的斑马纹小鱼，胆大不怕人。它们守护自己的小领地，是礁石边缘最容易观察的海洋生物之一。',
        en: 'Yellow-and-blue zebra-striped fish in the tide pools, bold and unafraid. They guard their little territories — among the easiest marine life to observe at the rock\'s edge.',
        es: 'Pececitos amarillo-azules en las pozas, audaces. Defienden su territorio: la vida marina más fácil de observar.',
        pt: 'Peixinhos amarelo-azuis nas piscinas, audazes. Defendem seu território: a vida marinha mais fácil de observar.',
      } as T,
      iucn: 'LC',
      icon: '🐠',
    },
    {
      name: { zh: '僧帽猴', en: 'Capuchin monkey', es: 'Mono capuchino', pt: 'Sagui' } as T,
      latin: 'Sapajus sp.',
      niche: { zh: '雨林居民', en: 'Rainforest resident', es: 'Residente de selva', pt: 'Morador da mata' } as T,
      desc: {
        zh: '公园深处榕树间的灵长类"小丑"，常在栈道栏杆上向游客讨食（请勿投喂）。它们是残存大西洋雨林的指示物种，见证着城市绿地的生态价值。',
        en: 'Primate "clowns" among the fig trees deep in the park, often begging at the railings (please don\'t feed). They are indicator species of the remnant Atlantic Rainforest, proof of the ecological value of urban green.',
        es: 'Primates "payasos" entre las higueras, a veces pidiendo comida (no alimente). Indicadores de la Mata Atlântica remanente.',
        pt: 'Primatas "palhaços" entre as figueiras, às vezes pedindo comida (não alimente). Indicadores da Mata Atlântica remanescente.',
      } as T,
      iucn: 'LC',
      icon: '🐒',
    },
    {
      name: { zh: '榕树', en: 'Fig tree', es: 'Higuera', pt: 'Figueira' } as T,
      latin: 'Ficus sp.',
      niche: { zh: '林冠巨木', en: 'Canopy giant', es: 'Gigante del dosel', pt: 'Gigante do dossel' } as T,
      desc: {
        zh: '公园里撑起绿伞的榕树，气生根垂落如帘。它们是残存大西洋雨林的骨架树种，为猴群、鸟类与昆虫提供家园，也是夏日里难得的浓荫。',
        en: 'The fig trees that lift green umbrellas across the park, their aerial roots hanging like curtains. Backbone species of the remnant Atlantic Rainforest, home to monkeys, birds and insects, and rare deep shade in summer.',
        es: 'Las higueras que alzan sombrillas verdes, con raíces colgantes. Esqueleto de la Mata Atlântica remanente, hogar de monos, aves e insectos.',
        pt: 'As figueiras que abrem guarda-sóis verdes, raízes aéreas como cortinas. Espécie-esqueleto da Mata Atlântica remanescente, lar de macacos, aves e insetos.',
      } as T,
      iucn: 'LC',
      icon: '🌿',
    },
  ],
};

// ── FAQ (独立访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: '独立访客指南', en: 'Independent Visitor Guide', es: 'Guía Independiente del Visitante', pt: 'Guia Independente do Visitante' } as T,
  heading: { zh: '访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>', en: 'Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>', es: 'Guía del visitante &<em class="text-[color:var(--color-emerald)]"> preguntas frecuentes</em>', pt: 'Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>' } as T,
  disclaimer: {
    zh: '以下信息由 pedraarpoador 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过里约热内卢官方旅游渠道核实最新政策。',
    en: 'The following information has been compiled by the independent pedraarpoador editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Rio de Janeiro channels before your visit.',
    es: 'La siguiente información ha sido recopilada por el equipo editorial independiente de pedraarpoador a partir de fuentes públicas y se proporciona solo como referencia. Verifique las políticas más recientes por canales oficiales de Río antes de su visita.',
    pt: 'As informações a seguir foram compiladas pela equipe editorial independente do pedraarpoador a partir de fontes públicas e são fornecidas apenas para referência. Verifique as políticas mais recentes pelos canais oficiais do Rio de Janeiro antes de sua visita.',
  } as T,
  items: [
    {
      q: { zh: '需要门票吗？开放时间是？', en: 'Is there an entrance fee? What are the hours?', es: '¿Hay entrada? ¿Cuál es el horario?', pt: 'Tem entrada? Qual o horário?' } as T,
      a: {
        zh: 'Pedra do Arpoador 是一处对公众免费开放的公共空间，全天 24 小时可达，没有围栏、没有售票处。随时可以步行上礁石；不过观赏落日的最佳时间是日落前 30–60 分钟，届时人流最密。',
        en: 'Pedra do Arpoador is a public space, free and open 24 hours a day — no fences, no ticket office. You can walk up the rock at any time; the best window for the sunset is 30–60 minutes before dusk, when crowds peak.',
        es: 'La Pedra do Arpoador es un espacio público, gratis y abierto 24 horas: sin vallas ni taquilla. Puede subir a la roca cuando quiera; lo mejor para el sol es 30–60 min antes del atardecer, cuando más gente hay.',
        pt: 'A Pedra do Arpoador é um espaço público, grátis e aberto 24 horas — sem grades nem bilheteria. Pode subir na rocha a qualquer hora; a melhor janela para o pôr do sol é 30–60 min antes do entardecer, quando a multidão cresce.',
      } as T,
    },
    {
      q: { zh: '如何前往 Arpoador？', en: 'How do I get to Arpoador?', es: '¿Cómo llego a Arpoador?', pt: 'Como chego ao Arpoador?' } as T,
      a: {
        zh: '最便捷的方式是地铁：乘至 General Osório 站，沿 Rua Visconde de Pirajá 向东步行约 10 分钟穿过伊帕内玛海滩即到。也可乘坐沿海滨的公交 512 / 571 在 Posto 9 附近下车，或从科帕卡巴纳沿海滨向北步行约 20 分钟。',
        en: 'The easiest way is the metro: take it to General Osório and walk east along Rua Visconde de Pirajá ~10 min across Ipanema beach. Or catch seafront bus 512 / 571 and hop off near Posto 9, or simply walk ~20 min north along the beach from Copacabana.',
        es: 'Lo más fácil es el metro: hasta General Osório y camine al este unos 10 min por Ipanema. O coja el bus 512/571 y baje en Posto 9, o camine 20 min desde Copacabana.',
        pt: 'O mais fácil é o metrô: desça em General Osório e caminhe leste pela Rua Visconde de Pirajá uns 10 min por Ipanema. Ou pegue o ônibus 512/571 e desça no Posto 9, ou caminhe ~20 min norte pela praia de Copacabana.',
      } as T,
    },
    {
      q: { zh: '什么时候是最佳到访时间？', en: 'When is the best time to visit?', es: '¿Cuál es el mejor momento para visitar?', pt: 'Qual o melhor horário para visitar?' } as T,
      a: {
        zh: '<strong>落日：</strong>日落前 30–60 分钟到达，占据礁石顶端，等待全城自发的"落日之掌声"。<br/><br/><strong>清晨与上午：</strong>浪点最活跃、光线最柔、人最少，是观浪与摄影的黄金时段；退潮时还能探索潮汐岩池。',
        en: '<strong>Sunset:</strong> Arrive 30–60 minutes before dusk, claim the top of the rock, and wait for the city\'s spontaneous Sunset Applause.<br/><br/><strong>Early morning:</strong> The break is most active, the light softest and the crowds thinnest — prime time for wave-watching, photography, and exploring the tide pools at low tide.',
        es: '<strong>Atardecer:</strong> Llegue 30–60 min antes, ocupe la cima y espere el Aplauso del Sol.<br/><br/><strong>Mañana:</strong> La rompiente está activa, la luz es suave y hay poca gente: ideal para surf, fotos y pozas de marea.',
        pt: '<strong>Pôr do sol:</strong> Chegue 30–60 min antes, ocupe o topo e espere o Aplauso do Sol.<br/><br/><strong>Manhã:</strong> A quebra está ativa, a luz é suave e a multidão rala: hora ideal para surf, fotos e piscinas de maré.',
      } as T,
    },
    {
      q: { zh: '登礁石安全吗？', en: 'Is it safe to climb the rock?', es: '¿Es seguro subir a la roca?', pt: 'É seguro subir na rocha?' } as T,
      a: {
        zh: '礁石风景绝佳，但长期被海水打湿、非常湿滑，大浪来袭时还会没过脚下的平台。请穿防滑鞋、与浪花保持距离，并切勿背对大海——海浪远比看上去更近、更猛。带小孩的家长请全程牵好。',
        en: 'The rock is beautiful but constantly wet and very slippery, and big waves can wash over the platform. Wear grippy shoes, keep clear of the surf line, and never turn your back on the sea — the waves are closer and stronger than they look. Keep children close at all times.',
        es: 'La roca es bella pero mojada y resbalosa; las olas grandes cubren la plataforma. Calzado con suela, lejos de la ola y nunca de espaldas al mar. Vigile a los niños.',
        pt: 'A rocha é bela mas molhada e escorregadia; ondas grandes cobrem a plataforma. Calçado com sola, longe da onda e nunca de costas para o mar. Fique com as crianças por perto.',
      } as T,
    },
    {
      q: { zh: '什么是"落日之掌声"（Aplauso do Sol）？', en: 'What is the "Sunset Applause" (Aplauso do Sol)?', es: '¿Qué es el "Aplauso del Sol"?', pt: 'O que é o "Aplauso do Sol"?' } as T,
      a: {
        zh: '每当太阳沉入科帕卡巴纳与莱梅之间的海平线，礁石与海滩上的人群会自发鼓掌，这就是"落日之掌声"。它没有组织者，是里约人对自然之美与生活热爱的集体表达。请在日落前 30–60 分钟到场，找个位置，当掌声响起时加入其中。',
        en: 'Every dusk, as the sun sinks into the sea between Copacabana and Leme, the crowd on the rock and the beach breaks into spontaneous applause — the "Sunset Applause". It has no organiser; it is Rio\'s collective tribute to beauty and to life. Arrive 30–60 minutes before sunset, find a spot, and join in when the clapping starts.',
        es: 'Cada atardecer, cuando el sol se hunde en el mar entre Copacabana y Leme, la multitud en la roca y la playa rompe en aplausos espontáneos: el "Aplauso del Sol". No tiene organizador; es el homenaje colectivo de Río a la belleza y a la vida. Llegue 30–60 min antes y únase cuando empiece.',
        pt: 'A cada entardecer, quando o sol afunda no mar entre Copacabana e Leme, a multidão na rocha e na praia explode em aplausos espontâneos — o "Aplauso do Sol". Não tem organizador; é a homenagem coletiva do Rio à beleza e à vida. Chegue 30–60 min antes e participe quando começar.',
      } as T,
    },
    {
      q: { zh: 'Arpoador 适合冲浪吗？', en: 'Is Arpoador good for surfing?', es: '¿Es Arpoador bueno para el surf?', pt: 'O Arpoador é bom para surfar?' } as T,
      a: {
        zh: '是的。Arpoador 被认为是里约冲浪文化的发源地，礁石外侧是一道优质的长右跑浪（point break），适合中高级冲浪者。清晨与黄昏浪况最好。请注意：这里没有常驻救生员，浪点下方水流较强，初学者不宜在此下水。',
        en: 'Yes. Arpoador is regarded as the birthplace of Rio\'s surf culture, and the right-hand point break just off the rock suits intermediate and advanced surfers. Dawn and dusk usually bring the best waves. Note that there is no permanent lifeguard here and the currents in the break can be strong — beginners should not paddle out.',
        es: 'Sí. Arpoador se considera la cuna del surf carioca y su derecha junto a la roca es para surfistas intermedios y avanzados. Amanecer y atardecer suelen dar las mejores olas. No hay socorrista permanente y las corrientes pueden ser fuertes: los principiantes no deberían entrar.',
        pt: 'Sim. O Arpoador é considerado o berço do surf carioca, e a direita junto à rocha é para surfistas intermediários e avançados. Amanhecer e entardecer costumam trazer as melhores ondas. Não há salva-vidas permanente e as correntes podem ser fortes — iniciantes não devem entrar.',
      } as T,
    },
    {
      q: { zh: '附近有卫生间或餐饮设施吗？', en: 'Are there toilets or food nearby?', es: '¿Hay baños o comida cerca?', pt: 'Há banheiros ou comida por perto?' } as T,
      a: {
        zh: '礁石本身没有卫生间或商店。步行数分钟即可到达伊帕内玛或科帕卡巴纳海滨，那里有海滩售货亭（quiosques）、咖啡馆与餐厅，提供饮品、小吃与洗手间。建议自带饮用水。',
        en: 'The rock itself has no toilets or shops. A few minutes\' walk brings you to the Ipanema or Copacabana seafront, where beach kiosks (quiosques), cafés and restaurants offer drinks, snacks and restrooms. Bring your own drinking water.',
        es: 'La roca no tiene baños ni tiendas. A pocos minutos está la orilla de Ipanema o Copacabana, con quioscos, cafés y restaurantes con bebidas, snacks y baños. Lleve agua.',
        pt: 'A rocha em si não tem banheiros nem lojas. A poucos minutos está a orla de Ipanema ou Copacabana, com quiosques, cafés e restaurantes com bebidas, petiscos e banheiros. Leve água.',
      } as T,
    },
    {
      q: { zh: '游览需要携带什么？', en: 'What should I bring?', es: '¿Qué debo llevar?', pt: 'O que devo levar?' } as T,
      a: {
        zh: '建议携带：防滑鞋（礁石湿滑）、防晒霜与帽子、饮用水、薄外套（海风）、以及相机或望远镜。黄昏观落日时请提前到场，并随身带走所有垃圾。',
        en: 'Bring grippy shoes (the rock is slippery), sunscreen and a hat, drinking water, a light layer for the sea breeze, and a camera or binoculars. For sunset, arrive early and carry out all your rubbish.',
        es: 'Lleve calzado con suela (la roca resbala), protector solar y gorra, agua, una capa ligera por la brisa y cámara o prismáticos. Para el atardecer, llegue temprano y llévese su basura.',
        pt: 'Leve calçado com sola (a rocha escorrega), protetor solar e boné, água, uma camada leve para a brisa e câmera ou binóculos. Para o pôr do sol, chegue cedo e leve seu lixo embora.',
      } as T,
    },
    {
      q: { zh: '在 Arpoador 哪里看日落最好？', en: 'Where is the best spot to watch the sunset in Arpoador?', es: '¿Cuál es el mejor lugar para ver el atardecer en Arpoador?', pt: 'Qual o melhor lugar para ver o pôr do sol no Arpoador?' } as T,
      a: {
        zh: '礁石顶部平台视野最开阔，日落方位正好落在科帕卡巴纳与莱梅之间的山脊缺口，也是"落日之掌声"的主场；东侧通往科帕卡巴纳的木栈道适合拍人像剪影；退到 Posto 9 与礁石之间的沙滩，用广角可以拍下整块礁石与人群；想拍双子峰（Dois Irmãos）与侧光层次，请到魔鬼海滩（Praia do Diabo）一侧。',
        en: 'The flat top of the rock has the widest view, with the sun setting exactly in the gap between the Copacabana and Leme ridges — and it is where the Sunset Applause happens. The east boardwalk towards Copacabana is best for backlit portraits; step back onto the sand between Posto 9 and the rock for a wide shot of the whole rock and the crowd; and head to the Praia do Diabo side for side-lit frames of the Dois Irmãos peaks.',
        es: 'La cima plana de la roca ofrece la vista más amplia, con el sol cayendo justo en el hueco entre Copacabana y Leme, y es donde ocurre el Aplauso del Sol. El paseo del este hacia Copacabana es ideal para retratos a contraluz; retroceda a la arena entre el Posto 9 y la roca para un gran angular con toda la roca y la gente; y vaya al lado de Praia do Diabo para el Dois Irmãos con luz lateral.',
        pt: 'O topo plano da rocha tem a vista mais ampla, com o sol se pondo exatamente no vão entre Copacabana e Leme — e é onde acontece o Aplauso do Sol. A passarela leste em direção a Copacabana é a melhor para retratos contra a luz; volte para a areia entre o Posto 9 e a rocha para uma grande angular com a rocha inteira e a multidão; e vá ao lado da Praia do Diabo para enquadrar o Dois Irmãos com luz lateral.',
      } as T,
    },
    {
      q: { zh: '附近哪里可以租冲浪板？', en: 'Where can I rent a surfboard nearby?', es: '¿Dónde puedo alquilar una tabla de surf cerca?', pt: 'Onde alugar prancha de surf perto do Arpoador?' } as T,
      a: {
        zh: '礁石旁与伊帕内玛海滨步道沿线有多家冲浪学校与租赁店，通常按小时或按天计价，费用含冲浪板与脚绳，旺季建议提前预订。只想体验的话，多数店家提供 1–2 小时的入门课程。提醒：Arpoador 礁石外是一道面向中高级冲浪者的右跑浪，初学者请选择有救生员值守的沙滩段，并在教练陪同下下水。',
        en: 'Several surf schools and rental shops sit right beside the rock and along the Ipanema seafront promenade. They usually charge by the hour or by the day, board and leash included, and booking ahead is wise in high season. If you just want to try it, most offer a 1–2 hour beginner lesson. Note that the point break off Arpoador suits intermediate and advanced surfers — beginners should choose a lifeguarded stretch of beach and paddle out with an instructor.',
        es: 'Hay varias escuelas y tiendas de alquiler junto a la roca y a lo largo del paseo de Ipanema. Suelen cobrar por hora o por día, con tabla y leash incluidos, y conviene reservar en temporada alta. Si solo quiere probar, la mayoría ofrece clases de iniciación de 1–2 horas. Atención: la derecha de Arpoador es para surfistas intermedios y avanzados; los principiantes deben elegir un tramo con socorrista y entrar con instructor.',
        pt: 'Há várias escolas e lojas de aluguel ao lado da rocha e ao longo do calçadão de Ipanema. Costumam cobrar por hora ou por dia, com prancha e leash incluídos, e vale reservar na alta temporada. Se quiser apenas experimentar, a maioria oferece aula de iniciação de 1–2 horas. Atenção: a direita do Arpoador é para surfistas intermediários e avançados — iniciantes devem escolher um trecho com salva-vidas e entrar com instrutor.',
      } as T,
    },
  ],
};

// ── Leave No Trace (海岸游览公约) ──
export const leaveNoTrace = {
  sectionNum: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante' } as T,
  heading: { zh: '海岸游览<em class="text-[color:var(--color-emerald)]">公约</em>', en: 'Leave No Trace<em class="text-[color:var(--color-emerald)]"> Code</em>', es: 'Código de<em class="text-[color:var(--color-emerald)]"> No Deje Rastro</em>', pt: 'Código de<em class="text-[color:var(--color-emerald)]"> Não Deixe Rastros</em>' } as T,
  subtitle: {
    zh: '作为里约海滨的公共空间，Arpoador 属于每一位市民与旅人。请在到访前阅读并承诺遵守以下行为准则，让这片礁石长久美好。',
    en: 'As a public space on Rio\'s shore, Arpoador belongs to every citizen and traveller. Please read and commit to the following code before your visit, so this rock stays beautiful for all.',
    es: 'Como espacio público de la costa de Río, Arpoador es de todos. Lea y comprométase con este código antes de ir, para que la roca siga hermosa.',
    pt: 'Como espaço público do litoral do Rio, o Arpoador é de todos. Leia e comprometa-se com este código antes de ir, para a rocha seguir bela.',
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: '不留垃圾', en: 'Pack It In, Pack It Out', es: 'Llévese su basura', pt: 'Leve seu lixo embora' } as T,
      desc: {
        zh: '海滩与礁石上没有垃圾桶。所有个人废弃物（包括果皮、纸巾、烟蒂）请自行带走。塑料会随风或被浪卷入海中，伤害海洋生物。',
        en: 'There are no bins on the beach or rock. Carry out all personal waste (peels, tissues, butts). Plastic blows or washes into the sea and harms marine life.',
        es: 'No hay basureros en la playa ni en la roca. Llévese todo (cáscaras, pañuelos, colillas). El plástico entra al mar y daña la vida marina.',
        pt: 'Não há lixeiras na praia nem na rocha. Leve tudo (cascas, lenços, bitucas). O plástico vai para o mar e fere a vida marinha.',
      } as T,
    },
    {
      icon: '👣',
      title: { zh: '不偏离步道', en: 'Stay on Paths', es: 'Permanezca en los senderos', pt: 'Permaneça nos caminhos' } as T,
      desc: {
        zh: '礁石间的潮汐岩池生态极其脆弱。请走木栈道与既有小径，不要踩踏岩池与附着的贝类，以免破坏微小生命。',
        en: 'The tide-pool life between the rocks is extremely fragile. Use the walkways and existing paths; don\'t trample pools or the attached shellfish.',
        es: 'La vida de las pozas es frágil. Use pasarelas y senderos; no pise pozas ni moluscos adheridos.',
        pt: 'A vida das piscinas de maré é frágil. Use passarelas e caminhos; não pise poças nem moluscos presos.',
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: '保持安静，尊重仪式', en: 'Keep Quiet, Respect the Ritual', es: 'Guarde silencio, respete el rito', pt: 'Mantenha silêncio, respeite o rito' } as T,
      desc: {
        zh: '落日时分，请收起外放音响，将交谈声降到最低。当"落日之掌声"响起，请加入，而非用喧哗盖过它。',
        en: 'At sunset, put away speakers and lower your voice. When the Sunset Applause rises, join in — don\'t drown it out with noise.',
        es: 'Al atardecer, guarde silencio y baje la voz. Cuando suena el Aplauso del Sol, únase, no lo tape con ruido.',
        pt: 'No pôr do sol, guarde silêncio e baixe a voz. Quando sobe o Aplauso do Sol, participe, não o abafe.',
      } as T,
    },
    {
      icon: '🐒',
      title: { zh: '不喂食野生动物', en: 'No Feeding Wildlife', es: 'No alimente a la fauna', pt: 'Não alimente a fauna' } as T,
      desc: {
        zh: '公园里的僧帽猴看似可爱，但投喂会改变其行为并带来健康风险。请只远观，把食物收好。',
        en: 'The capuchins look cute, but feeding changes their behaviour and risks their health. Observe from afar and keep food stowed.',
        es: 'Los capuchinos son monos, pero alimentarlos cambia su conducta y los enferma. Mire de lejos y guarde la comida.',
        pt: 'Os saguis parecem fofos, mas alimentá-los muda o comportamento e adoece. Observe de longe e guarde a comida.',
      } as T,
    },
    {
      icon: '🏄',
      title: { zh: '尊重冲浪者', en: 'Respect the Surfers', es: 'Respete a los surfistas', pt: 'Respeite os surfistas' } as T,
      desc: {
        zh: '礁石外侧是活跃的冲浪浪点。请勿在浪点正下方游泳或跳水，避免与冲浪板相撞；拍摄时也不要挡住他人视线。',
        en: 'The water off the rock is an active surf break. Don\'t swim or dive right in the break, and don\'t block others\' view while shooting.',
        es: 'El agua junto a la roca es rompiente activa. No nade ni se tire en la ola; al fotografiar, no tape la vista ajena.',
        pt: 'A água junto à rocha é quebra ativa. Não nade nem pule na onda; ao fotografar, não bloqueie a vista alheia.',
      } as T,
    },
    {
      icon: '🪨',
      title: { zh: '注意安全，远离浪花', en: 'Stay Safe, Off the Surf Line', es: 'Cuidado, lejos de la ola', pt: 'Cuidado, longe da onda' } as T,
      desc: {
        zh: '礁石长期被海水打湿，极其湿滑；大浪来袭时会没过脚下的平台。请穿防滑鞋，与浪花保持距离，切勿背对大海。',
        en: 'The rock is constantly wet and very slippery; big waves can wash over the platform. Wear grippy shoes, keep clear of the surf, and never turn your back on the sea.',
        es: 'La roca está mojada y resbalosa; las olas grandes cubren la plataforma. Calzado con suela, lejos de la ola, nunca de espaldas al mar.',
        pt: 'A rocha fica molhada e escorregadia; ondas grandes cobrem a plataforma. Calçado com sola, longe da onda, nunca de costas para o mar.',
      } as T,
    },
  ],
  closing: {
    zh: '带走一张落日的照片，留下礁石本来的样子。<br/>让"落日之掌声"，在每个黄昏依旧为里约响起。',
    en: 'Take a photo of the sunset. Leave the rock as you found it.<br/>Let the Sunset Applause keep ringing for Rio, every single dusk.',
    es: 'Llévese una foto del sol. Deje la roca como la encontró.<br/>Que el Aplauso del Sol siga sonando para Río, cada atardecer.',
    pt: 'Leve uma foto do pôr do sol. Deixe a rocha como a encontrou.<br/>Que o Aplauso do Sol continue ecoando para o Rio, a cada entardecer.',
  } as T,
};

// ── Partners (参考资源与官方伙伴) ──
export const partners = {
  heading: {
    zh: '参考资源与官方伙伴',
    en: 'Reference Resources & Partners',
    es: 'Recursos y Socios Oficiales',
    pt: 'Recursos e Parceiros Oficiais',
  } as T,
  items: [
    {
      name: { zh: '联合国教科文组织 (UNESCO)', en: 'UNESCO World Heritage Centre', es: 'UNESCO — Patrimonio Mundial', pt: 'UNESCO — Patrimônio Mundial' } as T,
      url: 'https://whc.unesco.org/en/list/1100/',
      abbr: 'UNESCO',
      note: { zh: '世界遗产价值与景观评估参考', en: 'World Heritage value & landscape reference', es: 'Referencia de valor y paisaje UNESCO', pt: 'Referência de valor e paisagem UNESCO' } as T,
    },
    {
      name: { zh: '巴西国家地理与统计局 (IBGE)', en: 'Brazilian Institute of Geography and Statistics (IBGE)', es: 'IBGE — Instituto Brasileño de Geografía y Estadística', pt: 'IBGE — Instituto Brasileiro de Geografia e Estatística' } as T,
      url: 'https://www.ibge.gov.br/',
      abbr: 'IBGE',
      note: { zh: '地质与地理基础数据来源', en: 'Source for geological & geographic base data', es: 'Fuente de datos geológicos y geográficos', pt: 'Fonte de dados geológicos e geográficos' } as T,
    },
    {
      name: { zh: '巴西国家历史与艺术遗产研究所 (IPHAN)', en: 'National Institute of Historic and Artistic Heritage (IPHAN)', es: 'IPHAN — Instituto Nacional del Patrimonio Histórico', pt: 'IPHAN — Instituto do Patrimônio Histórico e Artístico Nacional' } as T,
      url: 'http://portal.iphan.gov.br/',
      abbr: 'IPHAN',
      note: { zh: '历史与文化遗产档案', en: 'Archive of historical & cultural heritage', es: 'Archivo de patrimonio histórico', pt: 'Acervo de patrimônio histórico' } as T,
    },
    {
      name: { zh: '里约热内卢州环境研究所 (INEA)', en: 'INEA — Rio State Environmental Institute', es: 'INEA — Instituto Estatal del Ambiente', pt: 'INEA — Instituto Estadual do Ambiente' } as T,
      url: 'https://www.inea.rj.gov.br/',
      abbr: 'INEA',
      note: { zh: '里约州生态与环境数据', en: 'Rio State ecological & environmental data', es: 'Datos ecológicos del estado de Río', pt: 'Dados ecológicos do estado do Rio' } as T,
    },
    {
      name: { zh: '里约热内卢市政府 (Prefeitura do Rio)', en: 'Rio de Janeiro City Hall', es: 'Ayuntamiento de Río de Janeiro', pt: 'Prefeitura da Cidade do Rio de Janeiro' } as T,
      url: 'https://prefeitura.rio/',
      abbr: 'RIO',
      note: { zh: '官方旅游与开放信息', en: 'Official tourism & opening info', es: 'Información turística oficial', pt: 'Informações oficiais de turismo' } as T,
    },
    {
      name: { zh: '世界自然保护联盟 (IUCN) 红色名录', en: 'IUCN Red List of Threatened Species', es: 'Lista Roja de la UICN', pt: 'Lista Vermelha da IUCN' } as T,
      url: 'https://www.iucnredlist.org/',
      abbr: 'IUCN',
      note: { zh: '物种保护级别（红色名录）参考', en: 'Source for species conservation status', es: 'Referencia de estatus de conservación', pt: 'Referência de status de conservação' } as T,
    },
    {
      name: { zh: '里约冲浪文化档案 / Museu do Surf', en: 'Rio surf heritage / Museu do Surf', es: 'Archivo del surf carioca / Museu do Surf', pt: 'Acervo do surf carioca / Museu do Surf' } as T,
      url: 'https://www.waves.com.br/colunas/museu-do-surf/',
      abbr: 'SURF',
      note: { zh: '冲浪文化资料（博物馆位于里约州 Cabo Frio / Recreio 展区）', en: 'Surf culture archive (museum in Cabo Frio / Recreio, RJ)', es: 'Archivo del surf (museo en Cabo Frio / Recreio, RJ)', pt: 'Acervo do surf (museu em Cabo Frio / Recreio, RJ)' } as T,
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: '今天，去<br/><em class="text-[color:var(--color-sun)]">迎接落日</em>。', en: 'Today, go<br/><em class="text-[color:var(--color-sun)]">meet the sunset</em>.', es: 'Hoy, vaya<br/><em class="text-[color:var(--color-sun)]">a recibir el sol</em>.', pt: 'Hoje, vá<br/><em class="text-[color:var(--color-sun)]">encontrar o pôr do sol</em>.' } as T,
  address: { zh: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, 22080-050 · 巴西', en: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, 22080-050, Brazil', es: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Río de Janeiro — RJ, 22080-050, Brasil', pt: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, 22080-050, Brasil' } as T,
  copyright: { zh: '© 2026 pedraarpoador 保留所有权利。', en: '© 2026 pedraarpoador. All rights reserved.', es: '© 2026 pedraarpoador. Todos los derechos reservados.', pt: '© 2026 pedraarpoador. Todos os direitos reservados.' } as T,
  disclaimer: { zh: '本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。', en: 'This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.', es: 'Este sitio web es un proyecto independiente de información turística de terceros. No estamos afiliados a ningún gobierno local ni entidad oficial.', pt: 'Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.' } as T,
  privacy: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade' } as T,
  terms: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  cookies: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies' } as T,
  leaveNoTrace: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante' } as T,
  imageRights: { zh: '本网站所展示的所有图片产权及版权均归原摄影者所有。', en: 'All images displayed on this website remain the property and copyright of their original photographers.', es: 'Todas las imágenes mostradas en este sitio web son propiedad y están protegidas por los derechos de autor de sus fotógrafos originales.', pt: 'Todas as imagens exibidas neste site permanecem como propriedade e sob direitos autorais de seus fotógrafos originais.' } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: '隐私政策 — pedraarpoador', en: 'Privacy Policy — pedraarpoador', es: 'Política de Privacidad — pedraarpoador', pt: 'Política de Privacidade — pedraarpoador' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade' } as T,
  h2_collect: { zh: '我们收集的信息', en: 'Information We Collect', es: 'Información que recopilamos', pt: 'Informações que coletamos' } as T,
  p_collect: {
    zh: '我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。',
    en: 'We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.',
    es: 'Recopilamos solo los datos mínimos necesarios para proporcionar nuestros servicios. Estos pueden incluir: datos de navegación (dirección IP, tipo de navegador, páginas visitadas), cookies y tecnologías similares, y cualquier información que usted proporcione voluntariamente a través de formularios de contacto o correo electrónico.',
    pt: 'Coletamos apenas os dados mínimos necessários para fornecer nossos serviços. Isso pode incluir: dados de navegação (endereço IP, tipo de navegador, páginas visitadas), cookies e tecnologias similares, e qualquer informação que você fornecer voluntariamente por meio de formulários de contato ou e-mail.',
  } as T,
  h2_use: { zh: '我们如何使用您的信息', en: 'How We Use Your Information', es: 'Cómo utilizamos su información', pt: 'Como usamos suas informações' } as T,
  p_use: {
    zh: '我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。',
    en: 'We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.',
    es: 'Utilizamos la información recopilada para: mejorar el contenido del sitio web y la experiencia del usuario, analizar el tráfico y los patrones de uso, responder a solicitudes, y cumplir con nuestras obligaciones legales.',
    pt: 'Usamos as informações coletadas para: melhorar o conteúdo do site e a experiência do usuário, analisar o tráfego e padrões de uso, responder a solicitações, e cumprir nossas obrigações legais.',
  } as T,
  h2_third: { zh: '第三方服务', en: 'Third-Party Services', es: 'Servicios de terceros', pt: 'Serviços de terceiros' } as T,
  p_third: {
    zh: '我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）和谷歌分析（用于流量分析）。本站图片均为 Arpoador 实地拍摄并存储于本服务器。这些服务均有各自的隐私政策。',
    en: 'Our website may use third-party services, such as Google Maps (for embedded maps and location data) and Google Analytics (for traffic analysis). All photographs on this site are taken at Arpoador and hosted on our own server. These services have their own privacy policies.',
    es: 'Nuestro sitio web puede utilizar servicios de terceros, como Google Maps (para mapas integrados y datos de ubicación) y Google Analytics (para análisis de tráfico). Todas las fotos del sitio se tomaron en Arpoador y se alojan en nuestro propio servidor. Estos servicios tienen sus propias políticas de privacidad.',
    pt: 'Nosso site pode usar serviços de terceiros, como Google Maps (para mapas incorporados e dados de localização) e Google Analytics (para análise de tráfego). Todas as fotos do site foram feitas no Arpoador e hospedadas em nosso próprio servidor. Esses serviços têm suas próprias políticas de privacidade.',
  } as T,
  h2_rights: { zh: '您的权利', en: 'Your Rights', es: 'Sus derechos', pt: 'Seus direitos' } as T,
  p_rights: {
    zh: '根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。',
    en: 'Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.',
    es: 'De acuerdo con el Reglamento General de Protección de Datos (GDPR) y las regulaciones relacionadas, usted tiene los siguientes derechos: acceder a sus datos personales, solicitar la corrección o eliminación, oponerse al procesamiento, y presentar una queja ante una autoridad de control.',
    pt: 'De acordo com o Regulamento Geral de Proteção de Dados (GDPR) e regulamentações relacionadas, você tem os seguintes direitos: acessar seus dados pessoais, solicitar correção ou exclusão, opor-se ao processamento, e apresentar uma reclamação a uma autoridade supervisora.',
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: '服务条款 — pedraarpoador', en: 'Terms of Service — pedraarpoador', es: 'Términos de Servicio — pedraarpoador', pt: 'Termos de Serviço — pedraarpoador' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  h2_acceptance: { zh: '接受条款', en: 'Acceptance of Terms', es: 'Aceptación de los términos', pt: 'Aceitação dos termos' } as T,
  p_acceptance: {
    zh: '访问和使用 pedraarpoador.com，即表示您同意受这些服务条款的约束。',
    en: 'By accessing and using pedraarpoador.com, you agree to be bound by these Terms of Service.',
    es: 'Al acceder y utilizar pedraarpoador.com, usted acepta estar sujeto a estos Términos de Servicio.',
    pt: 'Ao acessar e usar pedraarpoador.com, você concorda em ficar vinculado a estes Termos de Serviço.',
  } as T,
  h2_content: { zh: '内容使用', en: 'Content Usage', es: 'Uso del contenido', pt: 'Uso do conteúdo' } as T,
  p_content: {
    zh: '本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。',
    en: 'All content on this website is for informational purposes only. We are an independent third-party tourism information website and are not affiliated with any tourist attractions, government agencies, or commercial operators.',
    es: 'Todo el contenido de este sitio web es solo para fines informativos. Somos un sitio web independiente de información turística de terceros y no estamos afiliados a ninguna atracción turística, agencia gubernamental u operador comercial.',
    pt: 'Todo o conteúdo deste site é apenas para fins informativos. Somos um site independente de informações turísticas de terceiros e não temos vínculo com nenhuma atração turística, agência governamental ou operador comercial.',
  } as T,
  h2_accuracy: { zh: '信息的准确性', en: 'Accuracy of Information', es: 'Exactitud de la información', pt: 'Precisão das informações' } as T,
  p_accuracy: {
    zh: '我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。',
    en: 'We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.',
    es: 'Nos esforzamos por proporcionar información precisa y oportuna, pero no podemos garantizar la integridad o exactitud de la información. Los horarios, condiciones y servicios están sujetos a cambios sin previo aviso. Por favor, verifique siempre la información importante a través de los canales oficiales antes de viajar.',
    pt: 'Nos esforçamos para fornecer informações precisas e oportunas, mas não podemos garantir a integridade ou exatidão das informações. Horários, condições e serviços estão sujeitos a alterações sem aviso prévio. Sempre verifique informações importantes pelos canais oficiais antes de viajar.',
  } as T,
  h2_ip: { zh: '知识产权', en: 'Intellectual Property', es: 'Propiedad intelectual', pt: 'Propriedade intelectual' } as T,
  p_ip: {
    zh: '本网站设计和原创内容受版权保护。站内图片均为 Arpoador 实地拍摄，版权归本网站所有。Google 地图数据的使用符合 Google 的服务条款。',
    en: 'The website design and original content are protected by copyright. All photographs on this site are taken at Arpoador and are owned by this website. Google Maps data is used in accordance with Google\'s Terms of Service.',
    es: 'El diseño del sitio web y el contenido original están protegidos por derechos de autor. Las fotos del sitio se tomaron en Arpoador y pertenecen a este sitio. Los datos de Google Maps se utilizan de acuerdo con los Términos de Servicio de Google.',
    pt: 'O design do site e o conteúdo original são protegidos por direitos autorais. Todas as fotos do site foram feitas no Arpoador e pertencem a este site. Os dados do Google Maps são usados de acordo com os Termos de Serviço do Google.',
  } as T,
  h2_liability: { zh: '责任限制', en: 'Limitation of Liability', es: 'Limitación de responsabilidad', pt: 'Limitação de responsabilidade' } as T,
  p_liability: {
    zh: '本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。',
    en: 'This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.',
    es: 'Este sitio web se proporciona "tal cual" sin ninguna garantía. No somos responsables de ninguna pérdida resultante del uso de la información de este sitio web, incluidos, entre otros, las decisiones de viaje tomadas en base al contenido de este sitio web.',
    pt: 'Este site é fornecido "como está" sem qualquer garantia. Não nos responsabilizamos por quaisquer perdas resultantes do uso das informações deste site, incluindo, mas não se limitando a, decisões de viagem tomadas com base no conteúdo deste site.',
  } as T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início' } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: 'Cookie 设置 — pedraarpoador', en: 'Cookie Settings — pedraarpoador', es: 'Configuración de Cookies — pedraarpoador', pt: 'Configurações de Cookies — pedraarpoador' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies' } as T,
  intro: {
    zh: '我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。',
    en: 'We use cookies to improve your browsing experience. You can manage your preferences below.',
    es: 'Utilizamos cookies para mejorar su experiencia de navegación. Puede gestionar sus preferencias a continuación.',
    pt: 'Usamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências abaixo.',
  } as T,

  // Necessary Cookies
  cat_necessary: { zh: '必要 Cookie', en: 'Necessary Cookies', es: 'Cookies necesarias', pt: 'Cookies necessários' } as T,
  cat_necessary_desc: { zh: '这些 Cookie 对于网站正常运行至关重要，无法禁用。', en: 'These cookies are essential for the website to function properly and cannot be disabled.', es: 'Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.', pt: 'Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.' } as T,
  alwaysActive: { zh: '始终保持活跃', en: 'Always active', es: 'Siempre activo', pt: 'Sempre ativo' } as T,

  // Analytics Cookies
  cat_analytics: { zh: '分析型 Cookie', en: 'Analytics Cookies', es: 'Cookies analíticas', pt: 'Cookies analíticos' } as T,
  cat_analytics_desc: { zh: '它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。', en: 'They help us understand how visitors interact with our website by collecting anonymous usage data.', es: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web mediante la recopilación de datos de uso anónimos.', pt: 'Eles nos ajudam a entender como os visitantes interagem com nosso site, coletando dados de uso anônimos.' } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: '它会收集访客如何使用我们网站的匿名信息。', en: 'Collects anonymous information about how visitors use our website.', es: 'Recopila información anónima sobre cómo los visitantes utilizan nuestro sitio web.', pt: 'Coleta informações anônimas sobre como os visitantes usam nosso site.' } as T,
  activated: { zh: '激活', en: 'Active', es: 'Activado', pt: 'Ativado' } as T,

  // Preference Cookies
  cat_preference: { zh: '偏好 Cookie', en: 'Preference Cookies', es: 'Cookies de preferencia', pt: 'Cookies de preferência' } as T,
  cat_preference_desc: { zh: '它们会记住您的设置，例如语言和主题偏好。', en: 'They remember your settings, such as language and theme preferences.', es: 'Recuerdan sus configuraciones, como las preferencias de idioma y tema.', pt: 'Eles lembram suas configurações, como preferências de idioma e tema.' } as T,
  pref_label: { zh: '用户偏好', en: 'User Preferences', es: 'Preferencias de usuario', pt: 'Preferências do usuário' } as T,
  pref_desc: { zh: '保存您的语言偏好和网站设置。', en: 'Saves your language preferences and website settings.', es: 'Guarda sus preferencias de idioma y configuración del sitio web.', pt: 'Salva suas preferências de idioma e configurações do site.' } as T,

  // Marketing Cookies
  cat_marketing: { zh: '营销 Cookie', en: 'Marketing Cookies', es: 'Cookies de marketing', pt: 'Cookies de marketing' } as T,
  cat_marketing_desc: { zh: '它们用于展示相关广告并衡量广告活动的有效性。', en: 'They are used to display relevant advertisements and measure the effectiveness of ad campaigns.', es: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.', pt: 'São usados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.' } as T,
  ads_label: { zh: '个性化广告', en: 'Personalized Ads', es: 'Anuncios personalizados', pt: 'Anúncios personalizados' } as T,
  ads_desc: { zh: '它可以根据你的兴趣为你展示相关的广告。', en: 'Shows you relevant ads based on your interests.', es: 'Le muestra anuncios relevantes según sus intereses.', pt: 'Mostra anúncios relevantes com base nos seus interesses.' } as T,
  deactivated: { zh: '停用', en: 'Inactive', es: 'Desactivado', pt: 'Desativado' } as T,

  // Consent Management
  consent_title: { zh: '同意管理', en: 'Consent Management', es: 'Gestión de consentimiento', pt: 'Gerenciamento de consentimento' } as T,
  consent_desc: { zh: '您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。', en: 'You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website\'s functionality.', es: 'Puede cambiar su configuración de cookies en cualquier momento. Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio web.', pt: 'Você pode alterar suas configurações de cookies a qualquer momento. Observe que desativar certos cookies pode afetar a funcionalidade do site.' } as T,
  savePrefs: { zh: '保存偏好设置', en: 'Save Preferences', es: 'Guardar preferencias', pt: 'Salvar preferências' } as T,
  rejectAll: { zh: '拒绝一切', en: 'Reject All', es: 'Rechazar todo', pt: 'Rejeitar tudo' } as T,
  backLink: { zh: '← 返回首页', en: '← Back to home', es: '← Volver al inicio', pt: '← Voltar ao início' } as T,
};

// ── Entity Binding (单景点实体语义绑定) ──
export const entity = {
  breadcrumbHome: { zh: '首页', en: 'Home', es: 'Inicio', pt: 'Início' } as T,
  breadcrumbNeighborhood: { zh: '伊帕内玛', en: 'Ipanema', es: 'Ipanema', pt: 'Ipanema' } as T,
  breadcrumbCity: { zh: '里约热内卢', en: 'Rio de Janeiro', es: 'Río de Janeiro', pt: 'Rio de Janeiro' } as T,
  breadcrumbCountry: { zh: '巴西', en: 'Brazil', es: 'Brasil', pt: 'Brasil' } as T,
  kicker: { zh: '独立访客指南', en: 'Independent Visitor Guide', es: 'Guía Independiente del Visitante', pt: 'Guia Independente do Visitante' } as T,
  h1: {
    zh: 'Pedra do Arpoador（里约热内卢 · 伊帕内玛）',
    en: 'Pedra do Arpoador (Rio de Janeiro)',
    es: 'Pedra do Arpoador (Río de Janeiro)',
    pt: 'Pedra do Arpoador (Rio de Janeiro)',
  } as T,
  aboutHeading: { zh: '关于 Pedra do Arpoador', en: 'About Pedra do Arpoador', es: 'Sobre la Pedra do Arpoador', pt: 'Sobre a Pedra do Arpoador' } as T,
  intro: {
    zh: '欢迎来到 <strong>Pedra do Arpoador</strong>——人们通常直接称它为 <strong>Arpoador</strong>。它位于<strong>巴西里约热内卢</strong>的伊帕内玛东端，是这一地区最核心的地标，也是旅行者到访里约南区的起点。',
    en: 'Welcome to <strong>Pedra do Arpoador</strong>, widely recognized simply as <strong>Arpoador</strong>. Located in the heart of <strong>Ipanema, Rio de Janeiro, Brazil</strong>, this destination serves as a primary hub for travelers visiting the region.',
    es: 'Bienvenido a la <strong>Pedra do Arpoador</strong>, conocida simplemente como <strong>Arpoador</strong>. Situada en el corazón de <strong>Ipanema, Río de Janeiro, Brasil</strong>, es el punto de referencia para los viajeros que visitan la región.',
    pt: 'Bem-vindo à <strong>Pedra do Arpoador</strong>, conhecida simplesmente como <strong>Arpoador</strong>. Localizada no coração de <strong>Ipanema, Rio de Janeiro, Brasil</strong>, é o ponto de referência para os viajantes que visitam a região.',
  } as T,
  hierarchyHeading: { zh: '地理归属层级', en: 'Geographic hierarchy', es: 'Jerarquía geográfica', pt: 'Hierarquia geográfica' } as T,
  nearbyHeading: { zh: 'Arpoador 周边地标与景点', en: 'Landmarks & Attractions Around Arpoador', es: 'Lugares y atracciones cerca de Arpoador', pt: 'Pontos e atrações ao redor do Arpoador' } as T,
  nearbyText: {
    zh: '在游览 <strong>Pedra do Arpoador</strong> 时，访客可以轻松探索周边的历史地标与景点，包括 <strong>Praia de Ipanema</strong> 与 <strong>Forte de Copacabana</strong>，以及礁石后方残存的大西洋雨林 Parque Garota de Ipanema。',
    en: 'When visiting <strong>Pedra do Arpoador</strong>, travelers can easily explore surrounding historical landmarks and points of interest, including <strong>Praia de Ipanema</strong> and <strong>Forte de Copacabana</strong>, as well as Parque Garota de Ipanema, the remnant Atlantic Forest behind the rock.',
    es: 'Al visitar la <strong>Pedra do Arpoador</strong>, los viajeros pueden explorar fácilmente lugares históricos y puntos de interés cercanos, como <strong>Praia de Ipanema</strong> y <strong>Forte de Copacabana</strong>, además del Parque Garota de Ipanema.',
    pt: 'Ao visitar a <strong>Pedra do Arpoador</strong>, os viajantes podem explorar facilmente pontos históricos e de interesse próximos, como a <strong>Praia de Ipanema</strong> e o <strong>Forte de Copacabana</strong>, além do Parque Garota de Ipanema.',
  } as T,
  historyHeading: { zh: 'Pedra do Arpoador 的历史与意义', en: 'History & Significance of Pedra do Arpoador', es: 'Historia y significado de la Pedra do Arpoador', pt: 'História e significado da Pedra do Arpoador' } as T,
  historyText: {
    zh: '从 18 世纪捕鲸人的鱼叉，到 20 世纪 70 年代里约冲浪文化的发源，再到全城为落日鼓掌的 "Aplauso do Sol"，这块礁石承载着里约海滨生活的关键记忆，也是理解里约"山海之城"性格的一把钥匙。',
    en: 'From the whaler\'s harpoon of the 18th century to the birth of Rio\'s surf culture in the 1970s and the city-wide "Sunset Applause" (Aplauso do Sol), this rock holds key memories of carioca beach life — and a key to the character of Rio, the city between mountain and sea.',
    es: 'Del arpón ballenero del siglo XVIII al nacimiento del surf carioca en los años 70 y al "Aplauso del Sol", esta roca guarda recuerdos clave de la vida playera de Río, y una clave para entender la ciudad entre mar y montaña.',
    pt: 'Do arpão baleeiro do século XVIII ao nascimento do surf carioca nos anos 70 e ao "Aplauso do Sol", esta rocha guarda memórias-chave da vida praiana do Rio — e uma chave para entender a cidade entre mar e montanha.',
  } as T,
  historyLink: { zh: '阅读深度百科 →', en: 'Read the full encyclopedia →', es: 'Leer la enciclopedia completa →', pt: 'Ler a enciclopédia completa →' } as T,
  badgeFree: { zh: '免费开放', en: 'Free entry', es: 'Entrada libre', pt: 'Entrada livre' } as T,
  badgeOpen: { zh: '全天 24 小时', en: 'Open 24 hours', es: 'Abierto 24 horas', pt: 'Aberto 24 horas' } as T,
  badgeSurf: { zh: '冲浪浪点', en: 'Surf break', es: 'Punto de surf', pt: 'Ponto de surf' } as T,
};

// ── Location & Map (位置与到达) ──
export const location = {
  sectionNum: { zh: '位置与到达', en: 'Location', es: 'Ubicación', pt: 'Localização' } as T,
  heading: {
    zh: '位置与到达：里约热内卢的 Arpoador',
    en: 'Location & How to Visit Arpoador in Rio de Janeiro',
    es: 'Ubicación y cómo visitar Arpoador en Río de Janeiro',
    pt: 'Localização e como visitar o Arpoador no Rio de Janeiro',
  } as T,
  subtitle: {
    zh: 'Arpoador 位于伊帕内玛海滩东端、伊帕内玛与科帕卡巴纳之间的颈状岬角上。可步行、乘地铁或公交抵达，全天免费开放。',
    en: 'Arpoador sits on the narrow headland at the east end of Ipanema, between Ipanema and Copacabana. Reach it on foot, by metro or by bus — free and open around the clock.',
    es: 'Arpoador se sitúa en el istmo del extremo este de Ipanema, entre Ipanema y Copacabana. Se llega a pie, en metro o en bus; gratis y abierto 24 h.',
    pt: 'O Arpoador fica no istmo do extremo leste de Ipanema, entre Ipanema e Copacabana. Chega-se a pé, de metrô ou ônibus — grátis e aberto 24 h.',
  } as T,
  addressHeading: { zh: '官方地址（NAP）', en: 'Official address (NAP)', es: 'Dirección oficial (NAP)', pt: 'Endereço oficial (NAP)' } as T,
  plusCodeLabel: { zh: 'Plus Code', en: 'Plus Code', es: 'Plus Code', pt: 'Plus Code' } as T,
  coordsLabel: { zh: '坐标', en: 'Coordinates', es: 'Coordenadas', pt: 'Coordenadas' } as T,
  openMaps: { zh: '在 Google 地图中打开', en: 'Open in Google Maps', es: 'Abrir en Google Maps', pt: 'Abrir no Google Maps' } as T,
  visitHeading: { zh: '如何到达', en: 'How to get there', es: 'Cómo llegar', pt: 'Como chegar' } as T,
  visitText: {
    zh: '<strong>地铁：</strong>乘至 General Osório 站，沿 Rua Visconde de Pirajá 向东步行约 10 分钟穿过伊帕内玛海滩即到。<br/><strong>公交：</strong>乘坐沿海滨的 512 / 571 路，在 Posto 9 附近下车后步行约 5 分钟。<br/><strong>步行 / 骑行：</strong>从科帕卡巴纳沿海滨向南步行约 20 分钟，沿途设有 BikeRio 自行车租赁点。',
    en: '<strong>Metro:</strong> take it to General Osório, then walk east along Rua Visconde de Pirajá (~10 min) across Ipanema beach.<br/><strong>Bus:</strong> ride seafront lines 512 / 571 and hop off near Posto 9 — about a 5-minute walk.<br/><strong>On foot / bike:</strong> from Copacabana, walk south along the seafront ~20 min; BikeRio stands line the way.',
    es: '<strong>Metro:</strong> hasta General Osório y camine al este por Rua Visconde de Pirajá (~10 min) cruzando Ipanema.<br/><strong>Bus:</strong> líneas 512 / 571, baje cerca de Posto 9 y camine 5 min.<br/><strong>A pie / bici:</strong> desde Copacabana, camine al sur ~20 min; hay estaciones BikeRio.',
    pt: '<strong>Metrô:</strong> desça em General Osório e caminhe a leste pela Rua Visconde de Pirajá (~10 min) atravessando Ipanema.<br/><strong>Ônibus:</strong> linhas 512 / 571, desça perto do Posto 9 e caminhe 5 min.<br/><strong>A pé / bike:</strong> de Copacabana, caminhe ao sul ~20 min; há estações BikeRio.',
  } as T,
  mapCaption: {
    zh: 'Pedra do Arpoador 在 Google 地图上的位置（Av. Francisco Bhering, s/n — Ipanema, Rio de Janeiro）。',
    en: 'Pedra do Arpoador on Google Maps (Av. Francisco Bhering, s/n — Ipanema, Rio de Janeiro).',
    es: 'Pedra do Arpoador en Google Maps (Av. Francisco Bhering, s/n — Ipanema, Río de Janeiro).',
    pt: 'Pedra do Arpoador no Google Maps (Av. Francisco Bhering, s/n — Ipanema, Rio de Janeiro).',
  } as T,
  officialPrefix: {
    zh: '如需官方更新与地区旅游信息，请访问',
    en: 'For official updates and regional tourism information, visit',
    es: 'Para actualizaciones oficiales e información turística regional, visite',
    pt: 'Para atualizações oficiais e informações turísticas regionais, visite',
  } as T,
  officialLink: {
    zh: '巴西 / 里约热内卢官方旅游门户',
    en: 'Brazil / Rio de Janeiro Official Tourism Portal',
    es: 'Portal oficial de turismo de Brasil / Río de Janeiro',
    pt: 'Portal oficial de turismo do Brasil / Rio de Janeiro',
  } as T,
};

// ── Sources (资料来源 / E-E-A-T) ──
export const sources = {
  sectionNum: { zh: '参考来源', en: 'Sources', es: 'Fuentes', pt: 'Fontes' } as T,
  heading: { zh: '资料来源与<em class="text-[color:var(--color-emerald)]">官方资源</em>', en: 'Sources &amp;<em class="text-[color:var(--color-emerald)]"> Official Resources</em>', es: 'Fuentes y<em class="text-[color:var(--color-emerald)]"> recursos oficiales</em>', pt: 'Fontes e<em class="text-[color:var(--color-emerald)]"> recursos oficiais</em>' } as T,
  subtitle: {
    zh: '本页内容由独立编辑团队依据公开资料与权威机构数据整理，并标注来源，以便访客进一步核实。',
    en: 'This page was compiled by an independent editorial team from public sources and authoritative institutional data, with sources cited so visitors can verify further.',
    es: 'Esta página fue elaborada por un equipo editorial independiente a partir de fuentes públicas y datos institucionales, con las fuentes citadas para su verificación.',
    pt: 'Esta página foi elaborada por uma equipe editorial independente a partir de fontes públicas e dados institucionais, com as fontes citadas para verificação.',
  } as T,
  linksHeading: { zh: '权威来源与官方链接', en: 'Authoritative sources & official links', es: 'Fuentes autorizadas y enlaces oficiales', pt: 'Fontes autorizadas e links oficiais' } as T,
  imageRightsHeading: { zh: '图片版权', en: 'Image credits', es: 'Créditos de imagen', pt: 'Créditos de imagem' } as T,
  editorial: {
    zh: '本网站是一个独立的第三方旅游资讯项目，与当地政府或其他官方机构没有任何关联。',
    en: 'This website is an independent third-party tourism information project, not affiliated with any local government or official entity.',
    es: 'Este sitio web es un proyecto independiente de información turística de terceros, sin vínculo con ningún gobierno local ni entidad oficial.',
    pt: 'Este site é um projeto independente de informações turísticas de terceiros, sem vínculo com nenhum governo local ou entidade oficial.',
  } as T,
};

// ── Meta ──
// 标题按 SERP 像素宽度控制在 ~60 字符内，优先覆盖「日落 / 交通 / 开放时间」三大高意图词
export const meta = {
  title: {
    zh: 'Pedra do Arpoador 礁石（里约热内卢）· 日落时刻、交通与访客指南',
    en: 'Arpoador Rock Rio: Best Sunset Spot, Hours & Visitor Guide',
    es: 'Piedra de Arpoador Río de Janeiro: Horario y Atardecer',
    pt: 'Pedra do Arpoador: Guia do Pôr do Sol, Como Chegar e Dicas',
  } as T,
  description: {
    zh: '里约热内卢伊帕内玛的 Pedra do Arpoador 访客指南：今日日落时刻与最佳观赏时间、落日掌声文化、地铁与步行路线、潮汐时刻、开放时间与安全贴士。',
    en: 'Plan your visit to Arpoador Rock (Pedra do Arpoador) in Rio de Janeiro. Get exact sunset times, directions from Copacabana & Ipanema, and beach safety tips.',
    es: 'Guía completa para visitar la Piedra de Arpoador en Río de Janeiro. Descubre la mejor hora para ver el atardecer, cómo llegar y qué hacer en Ipanema.',
    pt: 'Descubra a Pedra do Arpoador no Rio de Janeiro. Saiba o melhor horário para o pôr do sol, como chegar de Ipanema ou Copacabana e dicas de segurança.',
  } as T,
};

// ── Weather (实时天气与多日预报) ──
export const weather = {
  sectionNum: { zh: '实时天气', en: 'Live Weather', es: 'Clima en vivo', pt: 'Clima ao vivo' } as T,
  heading: {
    zh: '出门前，看一眼<br/><em class="text-[color:var(--color-emerald)]">海与天</em>',
    en: 'Before you go,<br/><em class="text-[color:var(--color-emerald)]"> check sea &amp; sky</em>',
    es: 'Antes de salir,<br/><em class="text-[color:var(--color-emerald)]"> mire mar y cielo</em>',
    pt: 'Antes de sair,<br/><em class="text-[color:var(--color-emerald)]"> veja mar e céu</em>',
  } as T,
  subtitle: {
    zh: '实时气温、降雨概率与未来七天趋势，帮你判断要不要带伞、几点上礁石、值不值得等一场落日。',
    en: 'Live temperature, rain chance and a 7-day outlook to help you decide whether to pack an umbrella, when to climb the rock, and whether the sunset is worth the wait.',
    es: 'Temperatura, probabilidad de lluvia y tendencia a 7 días para decidir si llevar paraguas, cuándo subir a la roca y si vale esperar el atardecer.',
    pt: 'Temperatura, chance de chuva e tendência de 7 dias para decidir se leva guarda-chuva, quando subir à rocha e se vale esperar o pôr do sol.',
  } as T,
  nowLabel: { zh: '当前实况', en: 'Right now', es: 'Ahora mismo', pt: 'Agora' } as T,
  feelsLike: { zh: '体感温度', en: 'Feels like', es: 'Sensación', pt: 'Sensação' } as T,
  humidity: { zh: '相对湿度', en: 'Humidity', es: 'Humedad', pt: 'Umidade' } as T,
  wind: { zh: '风速', en: 'Wind', es: 'Viento', pt: 'Vento' } as T,
  gust: { zh: '阵风', en: 'Gusts', es: 'Ráfagas', pt: 'Rajadas' } as T,
  precipNow: { zh: '当前降水', en: 'Precipitation', es: 'Precipitación', pt: 'Precipitação' } as T,
  rainChance: { zh: '降雨概率', en: 'Rain chance', es: 'Prob. de lluvia', pt: 'Chance de chuva' } as T,
  uvIndex: { zh: '紫外线指数', en: 'UV index', es: 'Índice UV', pt: 'Índice UV' } as T,
  sunrise: { zh: '日出', en: 'Sunrise', es: 'Amanecer', pt: 'Nascer do sol' } as T,
  sunset: { zh: '日落', en: 'Sunset', es: 'Atardecer', pt: 'Pôr do sol' } as T,
  next12h: { zh: '未来 12 小时', en: 'Next 12 hours', es: 'Próximas 12 horas', pt: 'Próximas 12 horas' } as T,
  forecast7: { zh: '未来 7 天', en: '7-day forecast', es: 'Pronóstico a 7 días', pt: 'Previsão de 7 dias' } as T,
  high: { zh: '最高', en: 'High', es: 'Máx.', pt: 'Máx.' } as T,
  low: { zh: '最低', en: 'Low', es: 'Mín.', pt: 'Mín.' } as T,
  today: { zh: '今天', en: 'Today', es: 'Hoy', pt: 'Hoje' } as T,
  tomorrow: { zh: '明天', en: 'Tomorrow', es: 'Mañana', pt: 'Amanhã' } as T,
  marineHeading: { zh: '海况参考（冲浪与下水）', en: 'Sea conditions (surf &amp; swim)', es: 'Condiciones del mar (surf y baño)', pt: 'Condições do mar (surf e banho)' } as T,
  waveHeight: { zh: '有效浪高', en: 'Wave height', es: 'Altura de ola', pt: 'Altura de onda' } as T,
  wavePeriod: { zh: '波浪周期', en: 'Wave period', es: 'Período', pt: 'Período' } as T,
  seaTemp: { zh: '海表温度', en: 'Sea temperature', es: 'Temp. del mar', pt: 'Temp. do mar' } as T,
  updatedAt: { zh: '更新于', en: 'Updated', es: 'Actualizado', pt: 'Atualizado' } as T,
  adviceHeading: { zh: '出行建议', en: 'What it means for you', es: 'Qué significa para ti', pt: 'O que isso significa para você' } as T,
  adviceSubtitle: {
    zh: '根据实时天气、紫外线、风力、海况与潮汐自动生成，只显示当下用得上的条目。',
    en: 'Generated automatically from live weather, UV, wind, sea state and tides — only what actually applies right now is shown.',
    es: 'Generado automáticamente a partir del tiempo, UV, viento, estado del mar y mareas; solo se muestra lo que aplica ahora.',
    pt: 'Gerado automaticamente a partir do tempo, UV, vento, condições do mar e marés — só aparece o que se aplica agora.',
  } as T,
  catOutfit: { zh: '出行穿搭', en: 'What to wear', es: 'Qué ponerse', pt: 'O que vestir' } as T,
  catPlan: { zh: '游玩安排', en: 'How to plan the day', es: 'Cómo organizar el día', pt: 'Como planejar o dia' } as T,
  catGear: { zh: '随身物品', en: 'What to pack', es: 'Qué llevar', pt: 'O que levar' } as T,
  catOutfitHint: { zh: '穿衣与体感', en: 'Clothing and comfort', es: 'Ropa y confort', pt: 'Roupa e conforto' } as T,
  catPlanHint: { zh: '海边 / 礁石场景', en: 'Beach & rock scenarios', es: 'Escenarios de playa y roca', pt: 'Cenários de praia e rocha' } as T,
  catGearHint: { zh: '带什么出门', en: 'Put it in your bag', es: 'Ponlo en la mochila', pt: 'Coloque na mochila' } as T,
  alertsTitle: { zh: '风险提醒', en: 'Risk alerts', es: 'Avisos de riesgo', pt: 'Alertas de risco' } as T,
  alertsNote: {
    zh: '以上提醒由实时预报数据自动生成，并非官方预警。请以当地民防与气象部门发布的信息为准。',
    en: 'These alerts are generated automatically from live forecast data and are not official warnings. Always follow your local civil defence and weather authority.',
    es: 'Estos avisos se generan automáticamente con datos de pronóstico y no son alertas oficiales. Siga siempre a la defensa civil y al servicio meteorológico local.',
    pt: 'Estes alertas são gerados automaticamente a partir de dados de previsão e não são avisos oficiais. Siga sempre a Defesa Civil e o serviço meteorológico local.',
  } as T,
  noAdvice: {
    zh: '当前天气平稳，按常规准备即可。',
    en: 'Conditions are calm — no special preparation needed.',
    es: 'Condiciones tranquilas: no hace falta preparación especial.',
    pt: 'Condições tranquilas — não é preciso preparo especial.',
  } as T,
  tidesHeading: { zh: '潮汐时刻', en: 'Tide times', es: 'Horario de mareas', pt: 'Tábua de marés' } as T,
  uvLow: { zh: '低', en: 'Low', es: 'Bajo', pt: 'Baixo' } as T,
  uvModerate: { zh: '中等', en: 'Moderate', es: 'Moderado', pt: 'Moderado' } as T,
  uvHigh: { zh: '高', en: 'High', es: 'Alto', pt: 'Alto' } as T,
  uvVeryHigh: { zh: '很高', en: 'Very high', es: 'Muy alto', pt: 'Muito alto' } as T,
  uvExtreme: { zh: '极高', en: 'Extreme', es: 'Extremo', pt: 'Extremo' } as T,
  unavailable: { zh: '天气数据暂时不可用，请以现场情况为准。', en: 'Weather data is temporarily unavailable — check conditions on site.', es: 'Datos no disponibles: compruebe las condiciones in situ.', pt: 'Dados indisponíveis — confira as condições no local.' } as T,
  windUnit: { zh: 'km/h', en: 'km/h', es: 'km/h', pt: 'km/h' } as T,
};

// ── Facilities (实用设施：只说明类型，不推荐任何具体商户) ──
export const facilities = {
  sectionNum: { zh: '实用设施', en: 'Practical Facilities', es: 'Servicios prácticos', pt: 'Serviços práticos' } as T,
  heading: {
    zh: '到了现场，<br/><em class="text-[color:var(--color-emerald)]">这些设施心里有数</em>',
    en: 'On site,<br/><em class="text-[color:var(--color-emerald)]"> here\'s what to expect</em>',
    es: 'En el lugar,<br/><em class="text-[color:var(--color-emerald)]"> esto es lo que hay</em>',
    pt: 'No local,<br/><em class="text-[color:var(--color-emerald)]"> é isto que existe</em>',
  } as T,
  subtitle: {
    zh: '以下内容只说明设施的类型与分布规律，帮助访客自行判断；本站不推荐、不链接任何具体商户。',
    en: 'The notes below describe only the types of facilities and how they are distributed, to help you judge for yourself. This site does not recommend or link any specific business.',
    es: 'Lo siguiente describe solo los tipos de servicios y su distribución, para que usted decida. Este sitio no recomienda ni enlaza ningún comercio concreto.',
    pt: 'As notas abaixo descrevem apenas os tipos de serviço e sua distribuição, para você decidir. Este site não recomenda nem indica nenhum estabelecimento específico.',
  } as T,
  neutralNote: {
    zh: '本站为非营利科普项目，所有信息依据公开资料整理，不构成商业推荐或导流。',
    en: 'This is a non-profit educational project. All information is compiled from public sources and constitutes neither a commercial recommendation nor a referral.',
    es: 'Este es un proyecto educativo sin ánimo de lucro. La información proviene de fuentes públicas y no constituye recomendación ni derivación comercial.',
    pt: 'Este é um projeto educativo sem fins lucrativos. As informações vêm de fontes públicas e não constituem recomendação nem encaminhamento comercial.',
  } as T,
  items: [
    {
      icon: '🚻',
      title: { zh: '卫生间与更衣', en: 'Toilets & changing', es: 'Baños y vestuarios', pt: 'Banheiros e troca de roupa' } as T,
      body: {
        zh: '礁石本体没有固定卫生间。最近的公共卫生间位于伊帕内玛与科帕卡巴纳海滨步道沿线；海滩售货亭通常提供付费使用。更衣与冲淋集中在海滩服务点，步行数分钟可达。',
        en: 'The rock itself has no permanent toilets. The nearest public restrooms are along the Ipanema and Copacabana seafront promenades; beach kiosks usually offer paid use. Changing rooms and showers are concentrated at beach service points a few minutes\' walk away.',
        es: 'La roca no tiene baños fijos. Los más cercanos están en el paseo de Ipanema y Copacabana; los quioscos suelen ofrecer uso de pago. Vestuarios y duchas se concentran en los puntos de servicio de la playa, a pocos minutos.',
        pt: 'A rocha não tem banheiros fixos. Os mais próximos ficam no calçadão de Ipanema e Copacabana; os quiosques costumam oferecer uso pago. Vestiários e chuveiros ficam nos postos de serviço da praia, a poucos minutos.',
      } as T,
    },
    {
      icon: '🅿️',
      title: { zh: '停车', en: 'Parking', es: 'Aparcamiento', pt: 'Estacionamento' } as T,
      body: {
        zh: '礁石旁没有专属停车场。周边街区多为付费路边停车（划区计时制），旺季与落日时段车位紧张。自驾可考虑街区内陆的商业停车场与立体车库；多数访客选择地铁或公交抵达。',
        en: 'There is no dedicated car park at the rock. Surrounding streets mostly use paid, metered kerbside parking, which fills up fast in high season and around sunset. Drivers can look for commercial or multi-storey garages inland; most visitors arrive by metro or bus.',
        es: 'No hay aparcamiento propio junto a la roca. Las calles cercanas usan estacionamiento regulado de pago, que se llena en temporada alta y al atardecer. Los conductores pueden buscar garajes comerciales tierra adentro; la mayoría llega en metro o bus.',
        pt: 'Não há estacionamento próprio junto à rocha. As ruas ao redor usam estacionamento rotativo pago, que lota na alta temporada e no entardecer. Quem vai de carro pode buscar garagens comerciais mais para dentro do bairro; a maioria chega de metrô ou ônibus.',
      } as T,
    },
    {
      icon: '🍽️',
      title: { zh: '餐饮', en: 'Food & drink', es: 'Comida y bebida', pt: 'Alimentação' } as T,
      body: {
        zh: '海滨步道沿线分布着海滩售货亭、咖啡馆、按重量计价的自助餐厅与街头小食摊，类型丰富但营业时间差异较大，清晨与深夜选择有限。礁石上没有餐饮点，建议自备饮用水。',
        en: 'Along the seafront promenade you will find beach kiosks, cafés, pay-by-weight buffet restaurants and street food stalls. Options are varied but opening hours differ widely, and early-morning or late-night choices are limited. There is no food service on the rock itself — bring your own water.',
        es: 'En el paseo marítimo hay quioscos, cafeterías, restaurantes de buffet por peso y puestos callejeros. La oferta es variada pero los horarios difieren y de madrugada hay poco. En la roca no hay servicio de comida: lleve agua.',
        pt: 'No calçadão há quiosques, cafés, restaurantes de buffet por quilo e barracas de rua. A oferta é variada, mas os horários variam bastante e de madrugada há pouca opção. Na rocha não há serviço de alimentação — leve água.',
      } as T,
    },
    {
      icon: '🏨',
      title: { zh: '住宿', en: 'Accommodation', es: 'Alojamiento', pt: 'Hospedagem' } as T,
      body: {
        zh: '伊帕内玛与科帕卡巴纳沿线集中了各档次住宿类型：酒店、青旅、公寓式短租与家庭旅馆，多数步行即可到达礁石。旺季（12 月至次年 3 月、跨年与狂欢节）价格显著上涨，建议提前预订。',
        en: 'Ipanema and Copacabana offer accommodation at every level: hotels, hostels, serviced apartment rentals and guesthouses, most within walking distance of the rock. Prices rise sharply in high season (December to March, New Year and Carnival), so book early.',
        es: 'Ipanema y Copacabana concentran alojamiento de todos los niveles: hoteles, hostales, apartamentos turísticos y casas de huéspedes, casi todos a pie de la roca. En temporada alta (diciembre a marzo, Año Nuevo y Carnaval) los precios suben: reserve con antelación.',
        pt: 'Ipanema e Copacabana concentram hospedagem de todos os níveis: hotéis, hostels, apartamentos por temporada e pousadas, quase todos a pé da rocha. Na alta temporada (dezembro a março, Réveillon e Carnaval) os preços sobem — reserve com antecedência.',
      } as T,
    },
    {
      icon: '🛒',
      title: { zh: '商超与药房', en: 'Shops & pharmacy', es: 'Comercios y farmacia', pt: 'Mercados e farmácia' } as T,
      body: {
        zh: '街区内陆的商业街一带分布着便利店（含 24 小时类型）、中小型超市与药房，日常补给方便。旅游区的部分便利店营业至深夜，节假日时间可能调整。',
        en: 'The inland shopping streets of the neighbourhood have convenience stores (including 24-hour formats), small to mid-size supermarkets and pharmacies for everyday supplies. Some tourist-area convenience stores stay open late; holiday hours may change.',
        es: 'Las calles comerciales tierra adentro tienen tiendas de conveniencia (incluidas de 24 h), supermercados medianos y farmacias. Algunas tiendas de zona turística abren hasta tarde; en festivos los horarios cambian.',
        pt: 'As ruas comerciais mais para dentro do bairro têm lojas de conveniência (inclusive 24 h), supermercados de pequeno e médio porte e farmácias. Algumas lojas da área turística abrem até tarde; em feriados o horário muda.',
      } as T,
    },
    {
      icon: '⛽',
      title: { zh: '加油与充电', en: 'Fuel & EV charging', es: 'Combustible y carga', pt: 'Combustível e recarga' } as T,
      body: {
        zh: '礁石周边没有加油站，机动车加油站主要分布在街区内陆与城市干道沿线。电动车充电桩数量有限，多见于商业停车场与酒店车库；如驾驶电动车，建议出发前确认可用点位与接口类型。',
        en: 'There is no fuel station beside the rock; petrol stations are found inland and along the city\'s main arteries. EV chargers are limited and mostly located in commercial car parks and hotel garages — if you drive electric, confirm an available point and connector type before setting out.',
        es: 'No hay gasolinera junto a la roca; están tierra adentro y en las vías principales. Los cargadores eléctricos son escasos y suelen estar en aparcamientos comerciales y garajes de hotel: si conduce un eléctrico, confirme punto y conector antes de salir.',
        pt: 'Não há posto de combustível junto à rocha; eles ficam mais para dentro do bairro e nas vias principais. Carregadores elétricos são poucos e ficam sobretudo em garagens comerciais e de hotéis — se dirige elétrico, confirme ponto e conector antes de sair.',
      } as T,
    },
    {
      icon: '🚰',
      title: { zh: '饮水与淋浴', en: 'Drinking water & showers', es: 'Agua y duchas', pt: 'Água e chuveiros' } as T,
      body: {
        zh: '海滨步道沿线设有公共饮水点与露天淋浴。礁石上没有任何补给，炎热时段请自备可重复使用的水壶并及时补水，避免正午长时间暴晒。',
        en: 'Public drinking fountains and open-air showers are spaced along the seafront promenade. There is no supply point on the rock itself — carry a refillable bottle, drink regularly in the heat and avoid long exposure at midday.',
        es: 'El paseo tiene fuentes públicas y duchas al aire libre. En la roca no hay suministro: lleve botella reutilizable, beba con frecuencia y evite el mediodía.',
        pt: 'O calçadão tem bebedouros públicos e chuveiros ao ar livre. Na rocha não há ponto de apoio — leve garrafa reutilizável, beba água com frequência e evite o meio-dia.',
      } as T,
    },
    {
      icon: '♿',
      title: { zh: '无障碍与婴儿车', en: 'Accessibility & strollers', es: 'Accesibilidad y carritos', pt: 'Acessibilidade e carrinhos' } as T,
      body: {
        zh: '海滨步道与礁石下方的平坦区域基本可通行。通往礁石顶部的通道有台阶、沙石与湿滑路面，轮椅与婴儿车通行困难；行动不便的访客建议在步道沿线观景。',
        en: 'The seafront promenade and the flatter area at the foot of the rock are broadly passable. The path up to the top involves steps, sand, loose stone and wet surfaces, which is difficult for wheelchairs and strollers; visitors with reduced mobility are better off viewing from the promenade.',
        es: 'El paseo y la zona llana al pie de la roca son transitables. El acceso a la cima tiene escalones, arena, piedra suelta y humedad: difícil para sillas de ruedas y carritos. Con movilidad reducida, mejor contemplar desde el paseo.',
        pt: 'O calçadão e a área plana ao pé da rocha são em geral acessíveis. A subida ao topo tem degraus, areia, pedra solta e piso molhado — difícil para cadeira de rodas e carrinho de bebê. Com mobilidade reduzida, prefira observar do calçadão.',
      } as T,
    },
    {
      icon: '🏥',
      title: { zh: '医疗与急救', en: 'Medical & emergency', es: 'Salud y emergencias', pt: 'Saúde e emergência' } as T,
      body: {
        zh: '海滩在旺季设有季节性救生员岗位，礁石本身没有常驻救护点。紧急情况请拨打 192（SAMU 医疗急救）或 193（消防）。最近的综合医院位于街区内陆，建议提前记下位置。',
        en: 'Seasonal lifeguard posts operate on the beach in high season; the rock itself has no permanent first-aid station. In an emergency call 192 (SAMU ambulance) or 193 (fire service). The nearest general hospital is inland in the neighbourhood — note its location in advance.',
        es: 'En temporada alta hay puestos de socorristas en la playa; la roca no tiene puesto de primeros auxilios. En emergencia llame al 192 (SAMU) o 193 (bomberos). El hospital general más cercano está tierra adentro: anote su ubicación.',
        pt: 'Na alta temporada há postos de salva-vidas na praia; a rocha não tem posto fixo de primeiros socorros. Em emergência ligue 192 (SAMU) ou 193 (Bombeiros). O hospital geral mais próximo fica mais para dentro do bairro — anote a localização.',
      } as T,
    },
    {
      icon: '💳',
      title: { zh: '支付与取现', en: 'Payment & cash', es: 'Pago y efectivo', pt: 'Pagamento e dinheiro' } as T,
      body: {
        zh: '银行卡与 Pix 即时转账普及度高，多数商户接受刷卡与移动支付；街头摊贩可能只收现金，建议随身备少量零钞。街区内陆设有自动取款机，夜间取现请留意周围环境。',
        en: 'Card payments and instant Pix transfers are widely accepted; street vendors may take cash only, so carry a little change. ATMs are available inland in the neighbourhood — take extra care when withdrawing at night.',
        es: 'Se aceptan tarjetas y pagos Pix; los vendedores callejeros pueden aceptar solo efectivo, lleve cambio. Hay cajeros tierra adentro; al retirar de noche, extreme la precaución.',
        pt: 'Cartão e Pix são amplamente aceitos; vendedores de rua podem aceitar apenas dinheiro — leve trocado. Há caixas eletrônicos mais para dentro do bairro; ao sacar à noite, redobre a atenção.',
      } as T,
    },
    {
      icon: '🎒',
      title: { zh: '寄存与租赁', en: 'Storage & rentals', es: 'Consigna y alquiler', pt: 'Guarda-volumes e aluguel' } as T,
      body: {
        zh: '海滩沿线有付费的储物、沙滩椅与遮阳伞租赁服务，也有城市公共自行车共享站点。贵重物品建议随身携带，不要留在礁石上无人看管。',
        en: 'Paid storage, beach chairs and parasol rentals are available along the beach, alongside the city bike-share stations. Keep valuables on you rather than leaving them unattended on the rock.',
        es: 'Hay consigna de pago, alquiler de sillas y sombrillas, y estaciones de bici pública. Lleve consigo los objetos de valor; no los deje sin vigilancia en la roca.',
        pt: 'Há guarda-volumes pago, aluguel de cadeiras e guarda-sóis, além das estações de bike compartilhada. Leve objetos de valor com você; não os deixe sem vigilância na rocha.',
      } as T,
    },
    {
      icon: '🌂',
      title: { zh: '雨具与防晒', en: 'Rain gear & sun protection', es: 'Paraguas y protección solar', pt: 'Chuva e proteção solar' } as T,
      body: {
        zh: '里约天气多变，夏季（12 月至 3 月）午后常见短时强降雨，冬季则可能遇到海雾与大风。建议随身携带轻便雨具、防晒霜、帽子与一件挡风外套。',
        en: 'Rio\'s weather shifts quickly: summer afternoons (December to March) often bring short, heavy showers, while winter can bring sea fog and strong wind. Carry light rain gear, sunscreen, a hat and a windproof layer.',
        es: 'El tiempo cambia rápido: en verano (diciembre a marzo) hay chubascos fuertes por la tarde; en invierno, niebla marina y viento. Lleve paraguas ligero, protector solar, sombrero y una capa cortavientos.',
        pt: 'O tempo muda rápido: no verão (dezembro a março) as tardes trazem pancadas fortes; no inverno pode haver névoa marítima e vento. Leve capa leve, protetor solar, boné e uma jaqueta corta-vento.',
      } as T,
    },
  ],
};

// ── Timeline (历史编年) ──
export const timeline = {
  sectionNum: { zh: '历史编年', en: 'Chronology', es: 'Cronología', pt: 'Cronologia' } as T,
  heading: {
    zh: '五个世纪，<br/><em class="text-[color:var(--color-emerald)]">一块礁石的位置</em>',
    en: 'Five centuries,<br/><em class="text-[color:var(--color-emerald)]"> one rock\'s position</em>',
    es: 'Cinco siglos,<br/><em class="text-[color:var(--color-emerald)]"> la posición de una roca</em>',
    pt: 'Cinco séculos,<br/><em class="text-[color:var(--color-emerald)]"> a posição de uma rocha</em>',
  } as T,
  subtitle: {
    zh: '从欧洲航海者的到来，到捕鲸时代、城市扩张、冲浪文化的兴起，再到今天的观景与生态保护——礁石始终在同一坐标上，见证海岸的每一次转身。',
    en: 'From the arrival of European navigators to the whaling era, urban expansion, the rise of surf culture and today\'s conservation — the rock has never moved, watching every turn of the coast.',
    es: 'Desde la llegada de los navegantes europeos hasta la era ballenera, la expansión urbana, el surf y la conservación actual: la roca nunca se movió y observó cada giro de la costa.',
    pt: 'Da chegada dos navegadores europeus à era baleeira, à expansão urbana, à cultura do surf e à conservação atual — a rocha nunca saiu do lugar e assistiu a cada virada do litoral.',
  } as T,
  disclaimer: {
    zh: '以下年份依据公开史料与官方机构资料整理，用于梳理脉络；具体日期请以权威档案为准。',
    en: 'The dates below are compiled from public historical records and official institutional sources to outline the sequence; for precise dates please consult authoritative archives.',
    es: 'Las fechas provienen de fuentes históricas públicas y datos institucionales para trazar la secuencia; para fechas precisas consulte archivos autorizados.',
    pt: 'As datas abaixo vêm de registros históricos públicos e fontes institucionais, para traçar a sequência; para datas precisas, consulte arquivos autorizados.',
  } as T,
  events: [
    {
      year: '1502',
      title: { zh: '海湾得名 "Rio de Janeiro"', en: 'The bay is named "Rio de Janeiro"', es: 'La bahía recibe el nombre "Rio de Janeiro"', pt: 'A baía ganha o nome "Rio de Janeiro"' } as T,
      body: { zh: '葡萄牙航海者抵达瓜纳巴拉湾，误将海湾当作河口，因而命名为"一月之河"（Rio de Janeiro）。伊帕内玛一带当时仍是图皮语族原住民活动的海岸。', en: 'Portuguese navigators reached Guanabara Bay and mistook it for a river mouth, naming it "River of January" (Rio de Janeiro). The Ipanema shore was then still Tupi-speaking indigenous territory.', es: 'Los navegantes portugueses llegaron a la bahía de Guanabara y la tomaron por un río: "Río de Enero". La costa de Ipanema era aún territorio indígena de lengua tupí.', pt: 'Navegadores portugueses chegaram à baía de Guanabara e a confundiram com um rio, batizando-a "Rio de Janeiro". A orla de Ipanema era ainda território indígena de língua tupi.' } as T,
    },
    {
      year: '1565',
      title: { zh: '里约建城', en: 'The city is founded', es: 'Se funda la ciudad', pt: 'A cidade é fundada' } as T,
      body: { zh: 'Estácio de Sá 在瓜纳巴拉湾口建立 São Sebastião do Rio de Janeiro，城市正式奠基。此后两个世纪，人口与防御工事都集中在湾内的老城区。', en: 'Estácio de Sá founded São Sebastião do Rio de Janeiro at the mouth of Guanabara Bay. For the next two centuries, population and defences stayed concentrated in the old town inside the bay.', es: 'Estácio de Sá fundó São Sebastião do Rio de Janeiro en la boca de la bahía. Durante dos siglos, población y defensas se concentraron en el casco antiguo interior.', pt: 'Estácio de Sá fundou São Sebastião do Rio de Janeiro na boca da baía. Por dois séculos, população e defesas ficaram no centro antigo, dentro da baía.' } as T,
    },
    {
      year: '17–18',
      title: { zh: '捕鲸时代与"鱼叉手"之名', en: 'The whaling era and the "harpooner" name', es: 'La era ballenera y el nombre "arpoador"', pt: 'A era baleeira e o nome "arpoador"' } as T,
      body: { zh: '捕鲸活动在里约海岸兴盛，鲸群沿伊帕内玛外海迁徙。这块便于瞭望的礁石成为捕鲸人潜伏与投叉的位置，"Arpoador"（鱼叉手）由此成为地名。', en: 'Whaling flourished along the Rio coast as whales migrated past Ipanema. This rock, ideal for keeping watch, became the whalers\' lurking and harpooning point — giving the place its name, "Arpoador" (harpooner).', es: 'La caza de ballenas prosperó en la costa carioca, con migraciones frente a Ipanema. Esta roca, buen observatorio, fue el punto de acecho y arpón: de ahí el topónimo "Arpoador" (arponero).', pt: 'A caça de baleias prosperou no litoral carioca, com migrações frente a Ipanema. Esta rocha, ótima para vigiar, virou ponto de espera e arpão — daí o topônimo "Arpoador".' } as T,
    },
    {
      year: '1894',
      title: { zh: '科帕卡巴纳炮台建成', en: 'Forte de Copacabana is completed', es: 'Se completa el Fuerte de Copacabana', pt: 'Conclui-se o Forte de Copacabana' } as T,
      body: { zh: '海岸防御体系强化，科帕卡巴纳炮台落成。伊帕内玛与科帕卡巴纳之间这片原本荒僻的沙岸，开始被纳入城市的视野。', en: 'The coastal defence system was reinforced with the completion of Forte de Copacabana. The once-remote sandy shore between Ipanema and Copacabana began to enter the city\'s field of view.', es: 'Se refuerza la defensa costera con el Fuerte de Copacabana. La antes remota orilla arenosa entre Ipanema y Copacabana empieza a mirarse desde la ciudad.', pt: 'O sistema defensivo costeiro é reforçado com o Forte de Copacabana. A orla arenosa então remota entre Ipanema e Copacabana começa a entrar no horizonte da cidade.' } as T,
    },
    {
      year: '1900s',
      title: { zh: '有轨电车把海滩变成城市客厅', en: 'Trams turn the beach into a city living room', es: 'El tranvía convierte la playa en salón urbano', pt: 'O bonde transforma a praia em sala de estar' } as T,
      body: { zh: '随着有轨电车与海滨道路延伸，伊帕内玛从荒僻海岸转变为城市休闲空间，礁石成为市民散步、观海与垂钓的日常去处。', en: 'As trams and coastal roads extended, Ipanema shifted from remote shore to urban leisure space, and the rock became an everyday spot for walking, sea-gazing and fishing.', es: 'Con el tranvía y las vías costeras, Ipanema pasó de orilla remota a espacio de ocio urbano; la roca se volvió lugar cotidiano para pasear, mirar el mar y pescar.', pt: 'Com o bonde e as vias costeiras, Ipanema deixou de ser orla remota e virou espaço de lazer urbano; a rocha tornou-se ponto cotidiano de caminhada, contemplação e pesca.' } as T,
    },
    {
      year: '1962',
      title: { zh: '《伊帕内玛女孩》与 Bossa Nova', en: '"The Girl from Ipanema" and Bossa Nova', es: '"Garota de Ipanema" y la bossa nova', pt: '"Garota de Ipanema" e a bossa nova' } as T,
      body: { zh: 'Tom Jobim 与 Vinicius de Moraes 创作《Garota de Ipanema》，灵感来自常经过这一带的少女；1964 年的国际录音版本让伊帕内玛成为全球流行文化地标。', en: 'Tom Jobim and Vinicius de Moraes wrote "Garota de Ipanema", inspired by a young woman who often passed this way; the 1964 international recording turned Ipanema into a global pop-culture landmark.', es: 'Tom Jobim y Vinicius de Moraes compusieron "Garota de Ipanema", inspirada en una joven que pasaba por aquí; la grabación internacional de 1964 convirtió Ipanema en icono global.', pt: 'Tom Jobim e Vinicius de Moraes compuseram "Garota de Ipanema", inspirada em uma jovem que passava por aqui; a gravação internacional de 1964 tornou Ipanema um marco pop global.' } as T,
    },
    {
      year: '1960s',
      title: { zh: '冲浪传入里约', en: 'Surfing arrives in Rio', es: 'El surf llega a Río', pt: 'O surfe chega ao Rio' } as T,
      body: { zh: '冲浪运动经由外来水手与留学生传入里约。Arpoador 因礁石外稳定的右跑浪，成为最早被本地人练习与聚集的浪点之一。', en: 'Surfing reached Rio through visiting sailors and students abroad. Thanks to the steady right-hand point break off the rock, Arpoador became one of the first breaks where locals practised and gathered.', es: 'El surf llegó a Río con marinos y estudiantes en el extranjero. Por su derecha estable, Arpoador fue una de las primeras rompientes donde los locales practicaron y se reunieron.', pt: 'O surfe chegou ao Rio com marinheiros e estudantes no exterior. Pela direita constante junto à rocha, o Arpoador foi uma das primeiras quebras onde os locais treinaram e se reuniram.' } as T,
    },
    {
      year: '1970s',
      title: { zh: '冲浪文化成形与"落日之掌声"', en: 'Surf culture takes shape & the Sunset Applause', es: 'Cuaja la cultura del surf y el Aplauso del Sol', pt: 'A cultura do surfe se firma e surge o Aplauso do Sol' } as T,
      body: { zh: 'Arpoador 成为里约冲浪文化的核心地带，礁石上的日落聚会逐渐固定为自发鼓掌的仪式，即后来广为人知的 "Aplauso do Sol"。', en: 'Arpoador became the heart of Rio\'s surf culture, and sunset gatherings on the rock gradually settled into the ritual of spontaneous applause later known as the "Aplauso do Sol".', es: 'Arpoador se volvió el corazón del surf carioca y las reuniones al atardecer se fijaron como el rito de aplausos conocido como "Aplauso del Sol".', pt: 'O Arpoador virou o coração do surfe carioca, e os encontros ao entardecer se firmaram como o rito de aplausos conhecido como "Aplauso do Sol".' } as T,
    },
    {
      year: '1987',
      title: { zh: '巴西立法全面禁止捕鲸', en: 'Brazil bans whaling', es: 'Brasil prohíbe la caza de ballenas', pt: 'O Brasil proíbe a caça de baleias' } as T,
      body: { zh: '巴西通过法律全面禁止捕鲸活动，南大西洋的鲸类种群获得恢复机会。此后数十年，鲸类在里约近海的目击记录逐步增加，捕鲸的历史以另一种方式被记住。', en: 'Brazil passed legislation banning whaling outright, giving South Atlantic whale populations a chance to recover. Over the following decades sightings off Rio gradually increased, and the whaling past is remembered in a different way.', es: 'Brasil prohibió por ley la caza de ballenas, dando oportunidad de recuperación a las poblaciones del Atlántico Sur. Décadas después, los avistamientos frente a Río aumentaron y la historia ballenera se recuerda de otro modo.', pt: 'O Brasil proibiu por lei a caça de baleias, dando chance de recuperação às populações do Atlântico Sul. Nas décadas seguintes, os avistamentos frente ao Rio aumentaram e a história baleeira passou a ser lembrada de outro modo.' } as T,
    },
    {
      year: '20C late',
      title: { zh: '礁石后方的雨林被保留为城市绿地', en: 'The rainforest behind the rock is kept as green space', es: 'La selva tras la roca se conserva como espacio verde', pt: 'A mata atrás da rocha é mantida como área verde' } as T,
      body: { zh: '随着南区城市建设密度上升，礁石后方残存的大西洋雨林小块被保留为城市绿地（Parque Garota de Ipanema），成为观景、休憩与生态教育的场所。', en: 'As the South Zone grew denser, the small remnant of Atlantic Rainforest behind the rock was kept as urban green space (Parque Garota de Ipanema), serving for viewpoints, rest and ecological education.', es: 'Al densificarse la Zona Sur, el remanente de Mata Atlântica tras la roca se conservó como espacio verde (Parque Garota de Ipanema): mirador, descanso y educación ecológica.', pt: 'Com a densificação da Zona Sul, o remanescente de Mata Atlântica atrás da rocha foi mantido como área verde (Parque Garota de Ipanema): mirante, descanso e educação ecológica.' } as T,
    },
    {
      year: '2016',
      title: { zh: '里约奥运会与全球目光', en: 'Rio Olympics and global attention', es: 'Los Juegos de Río y la mirada global', pt: 'As Olimpíadas do Rio e o olhar global' } as T,
      body: { zh: '里约举办夏季奥运会，帆船赛事在瓜纳巴拉湾举行。伊帕内玛与 Arpoador 一带的海岸景观获得新一轮国际关注。', en: 'Rio hosted the Summer Olympics, with sailing events on Guanabara Bay. The coastline around Ipanema and Arpoador drew a new wave of international attention.', es: 'Río acogió los Juegos Olímpicos, con vela en la bahía de Guanabara. El litoral de Ipanema y Arpoador recibió nueva atención internacional.', pt: 'O Rio sediou os Jogos Olímpicos, com as regatas na baía de Guanabara. A orla de Ipanema e do Arpoador ganhou nova atenção internacional.' } as T,
    },
    {
      year: '2021',
      title: { zh: '冲浪成为奥运正式项目', en: 'Surfing becomes an Olympic sport', es: 'El surf entra en los Juegos', pt: 'O surfe vira esporte olímpico' } as T,
      body: { zh: '冲浪首次作为正式项目登上奥运赛场（东京），里约的浪点文化与传统受到新一轮关注。Arpoador 作为巴西冲浪的重要起点，再次被写进这项运动的叙事。', en: 'Surfing debuted as an official Olympic event (Tokyo), renewing interest in Rio\'s break culture and tradition. As a key starting point for Brazilian surfing, Arpoador was written into the sport\'s story once more.', es: 'El surf debutó como deporte olímpico (Tokio), renovando el interés por la cultura de rompientes de Río. Como punto de partida del surf brasileño, Arpoador volvió al relato del deporte.', pt: 'O surfe estreou como esporte olímpico (Tóquio), renovando o interesse pela cultura de quebras do Rio. Ponto de partida do surfe brasileiro, o Arpoador voltou à narrativa do esporte.' } as T,
    },
  ],
};

// ── Legends (民间传说：明确标注为非史料的当地叙事) ──
export const legends = {
  sectionNum: { zh: '民间传说', en: 'Local Legends', es: 'Leyendas locales', pt: 'Lendas locais' } as T,
  heading: {
    zh: '人们怎样<em class="text-[color:var(--color-emerald)]">讲述这块石头</em>',
    en: 'How people<em class="text-[color:var(--color-emerald)]"> tell this rock</em>',
    es: 'Cómo se<em class="text-[color:var(--color-emerald)]"> cuenta esta roca</em>',
    pt: 'Como se<em class="text-[color:var(--color-emerald)]"> conta esta rocha</em>',
  } as T,
  subtitle: {
    zh: '地名往往比史料更早被讲述。以下内容属于当地口述传统与民间叙事，用于理解地名与文化意象，不作为史实依据。',
    en: 'Place names are often told long before they are documented. What follows belongs to local oral tradition and folk narrative — useful for understanding the name and its imagery, not as historical evidence.',
    es: 'Los topónimos se cuentan antes de documentarse. Lo siguiente pertenece a la tradición oral y la narrativa popular: sirve para entender el nombre y su imaginería, no como prueba histórica.',
    pt: 'Topônimos são contados antes de serem documentados. O que segue pertence à tradição oral e à narrativa popular — ajuda a entender o nome e seu imaginário, não como prova histórica.',
  } as T,
  badge: { zh: '民间叙事 · 非史料', en: 'Folk narrative · not a record', es: 'Narrativa popular · no histórica', pt: 'Narrativa popular · não histórica' } as T,
  items: [
    {
      icon: '🌊',
      title: { zh: '"Guanabara" 的两种读法', en: 'Two readings of "Guanabara"', es: 'Dos lecturas de "Guanabara"', pt: 'Duas leituras de "Guanabara"' } as T,
      body: {
        zh: '语言学上，Guanabara 一般被认为源自图皮语，常被解释为"海之湾"或"像海一样的湾"。而在当地的讲述里，它还有另一层想象：一位张开双臂、把大海抱在怀里的巨人，礁石与群山是他的骨架。',
        en: 'Linguistically, Guanabara is generally traced to Tupi and often rendered as "arm of the sea" or "bay like the sea". Local storytelling adds another layer: a giant with open arms embracing the ocean, with the rock and the mountains as his frame.',
        es: 'Lingüísticamente, Guanabara se remonta al tupí y suele traducirse como "brazo de mar" o "bahía como el mar". El relato local añade otra capa: un gigante con los brazos abiertos abrazando el océano, con la roca y los montes como esqueleto.',
        pt: 'Linguisticamente, Guanabara é geralmente ligada ao tupi e traduzida como "braço de mar" ou "baía como o mar". A narrativa local acrescenta outra camada: um gigante de braços abertos abraçando o oceano, tendo a rocha e os morros como esqueleto.',
      } as T,
    },
    {
      icon: '🗿',
      title: { zh: '被定格在海陆之间的守望者', en: 'A sentinel frozen between land and sea', es: 'Un centinela fijo entre tierra y mar', pt: 'Um vigia parado entre terra e mar' } as T,
      body: {
        zh: '在伊帕内玛渔民家庭的口头讲述中，这块礁石常被拟人化为"守望者"——他站在陆地与海洋的交界处，替出海的人看护归航的船。故事没有文献记载，却解释了为什么这里总有人愿意停下来望向海面。',
        en: 'In the oral storytelling of Ipanema fishing families, the rock is often personified as a sentinel — standing where land meets sea, watching over boats returning home. The story is undocumented, yet it explains why people still stop here to look out at the water.',
        es: 'En la tradición oral de las familias pescadoras de Ipanema, la roca se personifica como centinela: de pie donde tierra y mar se tocan, cuidando el regreso de las barcas. No está documentado, pero explica por qué la gente se detiene aquí a mirar el mar.',
        pt: 'Na tradição oral das famílias de pescadores de Ipanema, a rocha é personificada como vigia — de pé onde terra e mar se tocam, cuidando o retorno dos barcos. Não há registro escrito, mas explica por que as pessoas param aqui para olhar o mar.',
      } as T,
    },
    {
      icon: '👏',
      title: { zh: '掌声从哪里来', en: 'Where the applause comes from', es: 'De dónde viene el aplauso', pt: 'De onde vem o aplauso' } as T,
      body: {
        zh: '关于"落日之掌声"的起源，流传着不止一种说法：有人说是渔民向海致谢的旧俗，有人说是 1970 年代海滩青年即兴而起，也有人认为是随影像与社交传播被放大的城市默契。没有定论，但它如今确实属于每一个在场的人。',
        en: 'More than one account circulates about the origin of the Sunset Applause: some say it is an old fishermen\'s custom of thanking the sea, some that it began as an impromptu gesture among beach youth in the 1970s, others that it grew as a shared urban understanding amplified by film and social media. There is no settled answer — and today it belongs to everyone present.',
        es: 'Sobre el origen del Aplauso del Sol circula más de una versión: una costumbre antigua de pescadores que agradecían al mar; una improvisación juvenil de los años 70; o un acuerdo urbano amplificado por el cine y las redes. No hay respuesta cerrada, y hoy pertenece a quien esté allí.',
        pt: 'Sobre a origem do Aplauso do Sol circula mais de uma versão: costume antigo de pescadores agradecendo ao mar; gesto improvisado da juventude praiana nos anos 70; ou um acordo urbano amplificado pelo cinema e pelas redes. Não há resposta fechada — e hoje ele pertence a quem está ali.',
      } as T,
    },
    {
      icon: '🌑',
      title: { zh: '魔鬼海滩的名字', en: 'The name of Devil\'s Beach', es: 'El nombre de la Playa del Diablo', pt: 'O nome da Praia do Diabo' } as T,
      body: {
        zh: '礁石东侧的 Praia do Diabo（魔鬼海滩）以湍急的浪涌著称，关于名字的民间解释也不止一种：有人归因于浪形险恶、下水危险，也有人把它与旧时海难与失事船只的记忆联系起来。无论哪种说法，它都提醒人们尊重这片海的力量。',
        en: 'Praia do Diabo, on the east side of the rock, is known for its churning surf, and folk explanations of the name vary: some attribute it to the dangerous waves, others link it to memories of shipwrecks and losses at sea. Whichever account you hear, it is a reminder to respect the power of this water.',
        es: 'La Praia do Diabo, al este de la roca, es famosa por su oleaje revuelto, y las explicaciones populares del nombre varían: unos lo atribuyen al peligro de las olas, otros a recuerdos de naufragios. En cualquier versión, recuerda respetar la fuerza del mar.',
        pt: 'A Praia do Diabo, a leste da rocha, é conhecida pela arrebentação forte, e as explicações populares do nome variam: uns atribuem ao perigo das ondas, outros a memórias de naufrágios. Em qualquer versão, é um lembrete para respeitar a força do mar.',
      } as T,
    },
  ],
};

// ── Byline (编辑署名与更新信息：E-E-A-T) ──
export const byline = {
  updated: { zh: '最后更新', en: 'Last updated', es: 'Última actualización', pt: 'Última atualização' } as T,
  lastUpdate: { zh: '2026 年 9 月', en: 'September 2026', es: 'Septiembre de 2026', pt: 'Setembro de 2026' } as T,
  readingTime: { zh: '阅读时长', en: 'Reading time', es: 'Tiempo de lectura', pt: 'Tempo de leitura' } as T,
  minutes: { zh: '约 {n} 分钟', en: 'about {n} min', es: 'unos {n} min', pt: 'cerca de {n} min' } as T,
  reviewedBy: { zh: '由独立编辑团队整理与审校', en: 'Compiled and reviewed by an independent editorial team', es: 'Elaborado y revisado por un equipo editorial independiente', pt: 'Elaborado e revisado por uma equipe editorial independente' } as T,
  reviewedByShort: { zh: '独立编辑团队审校', en: 'Independent editorial review', es: 'Revisión editorial independiente', pt: 'Revisão editorial independente' } as T,
  onSiteNote: { zh: '现场信息可能随季节与天气变化，请以实地公告为准。', en: 'On-site information may change with season and weather — follow local notices.', es: 'La información puede variar según temporada y clima: siga los avisos locales.', pt: 'As informações podem mudar conforme estação e clima — siga os avisos locais.' } as T,
};
