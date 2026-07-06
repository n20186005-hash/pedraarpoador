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
  faq: { zh: '问答', en: 'FAQ', es: 'Preguntas', pt: 'Perguntas' } as T,
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
    { icon: '🚲', title: { zh: '步行或骑行', en: 'On foot / by bike', es: 'A pie o en bici', pt: 'A pé ou de bike' } as T, meta: 'Orla de Ipanema', details: [{ icon: '', text: { zh: '<strong>海滨步道</strong> · 从科帕卡巴纳沿 Copacabana 海滨向北步行约 20 分钟，穿过 Forte de Copacabana 即抵达；沿途设有 BikeRio 自行车租赁点。', en: '<strong>Seafront promenade</strong> · From Copacabana, walk north along the beach ~20 min, past Forte de Copacabana; BikeRio rental stands line the way.', es: '<strong>Paseo marítimo</strong> · Desde Copacabana, camine al norte unos 20 min, pasando el Forte de Copacabana; hay BikeRio en el camino.', pt: '<strong>Calçadão</strong> · De Copacabana, caminhe norte pela praia ~20 min, passando o Forte de Copacabana; há BikeRio no caminho.' } as T }] },
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
        zh: '<p>Arpoador 普遍被认为是里约冲浪文化的发源地。20 世纪 70 年代，第一批巴西冲浪者在这里学着驾驭礁石外的右跑浪；当时还没有紧身胶衣，他们穿着短裤、光脚上板。</p><p>今天，礁石外侧的浪点依旧是里约水平最高的本地好手（locais）的"主场"。每年在此举办的 Arpoador 冲浪赛，是里约海滨日历上最受瞩目的赛事之一。若要追溯这项运动在巴西的轨迹，紧邻 Posto 6 的冲浪博物馆（Museu do Surf）就在几步之遥。</p>',
        en: '<p>Arpoador is widely regarded as the birthplace of Rio\'s surf culture. In the 1970s the first Brazilian surfers learned to ride the right-hand break off the rock — no wetsuits yet, just shorts and bare feet on the board.</p><p>Today the break just outside the rock remains the "home" of Rio\'s best local riders (locais). The annual Arpoador surf event is one of the most watched dates on the carioca calendar. To trace the sport\'s path in Brazil, the Museu do Surf sits a few steps away at Posto 6.</p>',
        es: '<p>Arpoador se considera la cuna del surf carioca. En los años 70, los primeros surfistas brasileños aprendieron a montar la derecha de la roca: aún sin neopreno, solo shorts y pies descalzos.</p><p>Hoy la rompiente junto a la roca sigue siendo la "casa" de los mejores locales de Río. El campeonato anual de Arpoador es una de las citas más esperadas. Para seguir la huella del surf en Brasil, el Museu do Surf está a pocos pasos, en el Posto 6.</p>',
        pt: '<p>O Arpoador é considerado o berço do surf carioca. Nos anos 70, os primeiros surfistas brasileiros aprenderam a pegar a direita da rocha — ainda sem neoprene, só shorts e pé no pé.</p><p>Hoje a quebra junto à rocha continua sendo a "casa" dos melhores locais do Rio. O campeonato anual do Arpoador é uma das datas mais aguardadas. Para seguir a trilha do surf no Brasil, o Museu do Surf fica a poucos passos, no Posto 6.</p>',
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
        zh: '<p>Arpoador 的礁石主要由古老的片麻岩与花岗岩构成，是里约地质基底的露出部分，被海浪打磨了上亿年。它恰好位于伊帕内玛与科帕卡巴纳之间狭窄的颈状岬角，两侧海湾在此交汇，形成独特的"双滩"地貌。</p><p>礁石后方是 Parque Garota de Ipanema——一片残存的大西洋雨林小块，藤蔓与榕树间栖息着嬉皮笑脸的僧帽猴（sauá）与数十种鸟类。在寸土寸金的南区，这片绿意是城市与海洋之间最后的缓冲带。</p>',
        en: '<p>The Arpoador rock is mostly ancient gneiss and granite — exposed basement of Rio\'s geology, polished by the surf for hundreds of millions of years. It sits exactly on the narrow neck between Ipanema and Copacabana, where two bays meet and form a rare "twin-beach" landform.</p><p>Behind the rock lies Parque Garota de Ipanema — a small remnant of the Atlantic Rainforest, where vines and fig trees shelter cheeky capuchin monkeys (sauá) and dozens of bird species. In the built-up South Zone, this green strip is the last buffer between city and sea.</p>',
        es: '<p>La roca de Arpoador es sobre todo gneis y granito antiguos: el basamento geológico de Río, pulido por el mar durante cientos de millones de años. Se sitúa justo en el istmo entre Ipanema y Copacabana, donde dos bahías se encuentran y forman un raro relieve de "doble playa".</p><p>Detrás de la roca está el Parque Garota de Ipanema, un pequeño remanente de la Mata Atlântica donde lianas e higueras cobijan a monos capuchinos (sauá) y decenas de aves. En la densa Zona Sur, esta franja verde es el último amortiguador entre la ciudad y el mar.</p>',
        pt: '<p>A rocha do Arpoador é majoritariamente gnaisse e granito antigos — o embasamento geológico do Rio, polido pelo mar por centenas de milhões de anos. Fica exatamente no istmo entre Ipanema e Copacabana, onde duas baías se encontram e formam um raro relevo de "praia dupla".</p><p>Atrás da rocha está o Parque Garota de Ipanema, pequeno remanescente da Mata Atlântica, onde cipós e figueiras abrigam saguis (sauá) e dezenas de aves. Na densa Zona Sul, essa faixa verde é o último amortecedor entre cidade e mar.</p>',
      } as T,
      img: '/gallery/pedra-do-arpoador (8).jpg',
    },
  ],
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
  heading: { zh: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 32,786 位旅行者', en: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · from 32,786 travelers', es: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · de 32.786 viajeros', pt: '4.8<span class="text-[color:var(--color-emerald)]">/5</span> · de 32.786 viajantes' } as T,
  viewMoreReviews: { zh: '在 Google 地图上查看更多评价', en: 'View more reviews on Google Maps', es: 'Ver más reseñas en Google Maps', pt: 'Ver mais avaliações no Google Maps' } as T,
  items: [
    { stars: '★★★★★', date: '2025-05', title: { zh: '"大自然的免费演唱会"', en: '"Nature\'s free concert"', es: '"El concierto gratis de la naturaleza"', pt: '"O show gratuito da natureza"' } as T, desc: { zh: '比任何收费观景台都震撼。日落前赶到，整片海滩为你鼓掌的那一刻，鸡皮疙瘩都起来了。一定要提前占位！', en: 'More moving than any paid viewpoint. Arrive before sunset — when the whole beach applauds, goosebumps. Get there early to claim a spot!', es: 'Más conmovedor que cualquier mirador de pago. Llegue antes del sol: cuando toda la playa aplaude, se le pone la piel de gallina. ¡Llegue temprano!', pt: 'Mais emocionante que qualquer mirante pago. Chegue antes do pôr do sol — quando a praia inteira aplaude, arrepios. Chegue cedo!' } as T, author: 'Maria S. · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: '"冲浪者的圣地"', en: '"Surfers\' sanctuary"', es: '"Santuario de surfistas"', pt: '"Santuário dos surfistas"' } as T, desc: { zh: '早上七点来的，礁石外浪点已经挤满本地好手。看着他们乘着又长又陡的右跑浪，相机根本停不下来。', en: 'Came at 7 AM — the break was already packed with locals. Watching them ride those long, steep right-handers, my camera never stopped.', es: 'Llegué a las 7 AM: la rompiente ya llena de locales. Verlos montar esas derechas largas y empinadas: cámara imparable.', pt: 'Fui às 7h — a quebra já cheia de locais. Vê-los pegar aquelas direitas longas e íngremes: câmera imparável.' } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: '"礁石很滑，注意安全"', en: '"Slippery rock — be careful"', es: '"Roca resbalosa, cuidado"', pt: '"Rocha escorregadia, cuidado"' } as T, desc: { zh: '风景满分，但黄昏人真的多，礁石被浪打湿后非常滑。我朋友差点摔了。建议穿防滑鞋，别靠浪太近。', en: 'Scenery is perfect, but it gets crowded at dusk and the rock is very slippery when wet. My friend almost fell. Wear grippy shoes, stay off the surf line.', es: 'Paisaje perfecto, pero al atardecer hay mucha gente y la roca resbala mojada. Mi amigo casi cae. Calzado con suela, lejos de la ola.', pt: 'Paisagem perfeita, mas lota no entardecer e a rocha escorrega molhada. Meu amigo quase caiu. Calçado com sola, longe da onda.' } as T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: '"里约之行的高光时刻"', en: '"The highlight of Rio"', es: '"Lo mejor de Río"', pt: '"O ponto alto do Rio"' } as T, desc: { zh: '我们在伊帕内玛住了一周，每天黄昏都来。看落日鼓掌已经成了我们的固定仪式，连民宿老板都说我们比本地人还 carioca。', en: 'We stayed in Ipanema a week and came every dusk. The sunset applause became our ritual — even our host said we\'re more carioca than the locals.', es: 'Estuvimos una semana en Ipanema y veníamos cada atardecer. El aplauso se volvió rutina; hasta el anfitrión dijo que somos más cariocas que los locales.', pt: 'Ficamos uma semana em Ipanema e fomos todo entardecer. O aplauso virou ritual — o anfitrião disse que somos mais cariocas que os locais.' } as T, author: 'Sofía R. · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: '"免费却世界级"', en: '"Free yet world-class"', es: '"Gratis y de nivel mundial"', pt: '"Grátis e de nível mundial"' } as T, desc: { zh: '不收一分钱，却比很多收费景点更难忘。潮汐岩池里的小蟹和小鱼特别可爱，带孩子的家庭会很喜欢。', en: 'Costs nothing yet more memorable than many paid sights. The little crabs and fish in the tide pools are adorable — great for families with kids.', es: 'No cuesta nada y es más memorable que muchos lugares de pago. Los cangrejitos de las pozas son adorables: ideal para familias.', pt: 'Não custa nada e é mais memorável que muitos pontos pagos. Os caranguejinhos das piscinas de maré são fofos: ótimo para famílias.' } as T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★★', date: '2024-11', title: { zh: '"蜜月最浪漫的黄昏"', en: '"Most romantic dusk of our honeymoon"', es: '"El atardecer más romántico"', pt: '"O entardecer mais romântico"' } as T, desc: { zh: '和先生坐在礁石上，身后是无尽的伊帕内玛海滩，面前是燃烧的橙色海平线。当掌声响起，他偷偷吻了我。一辈子难忘。', en: 'Sat on the rock with my husband, Ipanema behind us, a burning orange horizon ahead. When the applause rose, he kissed me. Unforgettable.', es: 'Sentados en la roca, Ipanema atrás y un horizonte naranja al frente. Cuando sonó el aplauso, me besó. Inolvidable.', pt: 'Sentados na rocha, Ipanema atrás e um horizonte laranja à frente. Quando o aplauso subiu, ele me beijou. Inesquecível.' } as T, author: 'Emily & Tom H. · 🇬🇧' },
    { stars: '★★★★★', date: '2025-01', title: { zh: '"步行可达一切"', en: '"Walkable to everything"', es: '"Caminable a todo"', pt: '"Caminhável a tudo"' } as T, desc: { zh: '从科帕卡巴纳沿海滨一路走过来，穿过要塞就到。沿途还能顺道逛伊帕内玛的集市。交通对自由行太友好了。', en: 'Walked over from Copacabana along the seafront, past the fort. Even caught the Ipanema market on the way. Public access couldn\'t be easier.', es: 'Caminamos desde Copacabana por la orilla, pasando el fuerte. Hasta pescamos la feria de Ipanema. Acceso impecable.', pt: 'Fomos a pé de Copacabana pela orla, passando o forte. Pegamos até a feira de Ipanema no caminho. Acesso impecável.' } as T, author: 'Kenji T. · 🇯🇵' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-12', title: { zh: '"人多但值得"', en: '"Crowded but worth it"', es: '"Lleno pero vale la pena"', pt: '"Lota mas vale a pena"' } as T, desc: { zh: '周末黄昏人确实多，几乎要侧身站。但落日的质量摆在那里，值得忍耐。建议工作日来，体验会好很多。', en: 'Weekend dusk is packed, you\'re practically shoulder to shoulder. But the sunset quality is there — worth it. Go on a weekday for a calmer experience.', es: 'El fin de semana al atardecer se llena, casi hombro con hombro. Pero el sol vale la pena. Venga entre semana para más calma.', pt: 'Fim de semana no entardecer lota, quase ombro a ombro. Mas o pôr do sol compensa. Vá entre semana para mais calma.' } as T, author: 'Wang H. · 🇨🇳' },
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

// ── FAQ (官方访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: '官方访客指南', en: 'Official Visitor Guide', es: 'Guía Oficial del Visitante', pt: 'Guia Oficial do Visitante' } as T,
  heading: { zh: '访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>', en: 'Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>', es: 'Guía del visitante &<em class="text-[color:var(--color-emerald)]"> preguntas frecuentes</em>', pt: 'Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>' } as T,
  disclaimer: {
    zh: '以下信息由 pedradarpoador 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过里约热内卢官方旅游渠道核实最新政策。',
    en: 'The following information has been compiled by the independent pedradarpoador editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Rio de Janeiro channels before your visit.',
    es: 'La siguiente información ha sido recopilada por el equipo editorial independiente de pedradarpoador a partir de fuentes públicas y se proporciona solo como referencia. Verifique las políticas más recientes por canales oficiales de Río antes de su visita.',
    pt: 'As informações a seguir foram compiladas pela equipe editorial independente do pedradarpoador a partir de fontes públicas e são fornecidas apenas para referência. Verifique as políticas mais recentes pelos canais oficiais do Rio de Janeiro antes de sua visita.',
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
    },
    {
      name: { zh: '巴西国家地理与统计局 (IBGE)', en: 'Brazilian Institute of Geography and Statistics (IBGE)', es: 'IBGE — Instituto Brasileño de Geografía y Estadística', pt: 'IBGE — Instituto Brasileiro de Geografia e Estatística' } as T,
      url: 'https://www.ibge.gov.br/',
      abbr: 'IBGE',
    },
    {
      name: { zh: '巴西国家历史与艺术遗产研究所 (IPHAN)', en: 'National Institute of Historic and Artistic Heritage (IPHAN)', es: 'IPHAN — Instituto Nacional del Patrimonio Histórico', pt: 'IPHAN — Instituto do Patrimônio Histórico e Artístico Nacional' } as T,
      url: 'http://portal.iphan.gov.br/',
      abbr: 'IPHAN',
    },
    {
      name: { zh: '里约热内卢州环境研究所 (INEA)', en: 'INEA — Rio State Environmental Institute', es: 'INEA — Instituto Estatal del Ambiente', pt: 'INEA — Instituto Estadual do Ambiente' } as T,
      url: 'https://www.inea.rj.gov.br/',
      abbr: 'INEA',
    },
    {
      name: { zh: '里约热内卢市政府 (Prefeitura do Rio)', en: 'Rio de Janeiro City Hall', es: 'Ayuntamiento de Río de Janeiro', pt: 'Prefeitura da Cidade do Rio de Janeiro' } as T,
      url: 'https://prefeitura.rio/',
      abbr: 'RIO',
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: '今天，去<br/><em class="text-[color:var(--color-sun)]">迎接落日</em>。', en: 'Today, go<br/><em class="text-[color:var(--color-sun)]">meet the sunset</em>.', es: 'Hoy, vaya<br/><em class="text-[color:var(--color-sun)]">a recibir el sol</em>.', pt: 'Hoje, vá<br/><em class="text-[color:var(--color-sun)]">encontrar o pôr do sol</em>.' } as T,
  address: { zh: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, 巴西', en: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, Brazil', es: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Río de Janeiro — RJ, Brasil', pt: 'Pedra do Arpoador · Av. Francisco Bhering, s/n · Ipanema, Rio de Janeiro — RJ, Brasil' } as T,
  copyright: { zh: '© 2026 pedradarpoador 保留所有权利。', en: '© 2026 pedradarpoador. All rights reserved.', es: '© 2026 pedradarpoador. Todos los derechos reservados.', pt: '© 2026 pedradarpoador. Todos os direitos reservados.' } as T,
  disclaimer: { zh: '本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。', en: 'This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.', es: 'Este sitio web es un proyecto independiente de información turística de terceros. No estamos afiliados a ningún gobierno local ni entidad oficial.', pt: 'Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.' } as T,
  privacy: { zh: '隐私政策', en: 'Privacy Policy', es: 'Política de Privacidad', pt: 'Política de Privacidade' } as T,
  terms: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  cookies: { zh: 'Cookie 设置', en: 'Cookie Settings', es: 'Configuración de Cookies', pt: 'Configurações de Cookies' } as T,
  leaveNoTrace: { zh: '游览公约', en: 'Visitor Code', es: 'Código del Visitante', pt: 'Código do Visitante' } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: '隐私政策 — pedradarpoador', en: 'Privacy Policy — pedradarpoador', es: 'Política de Privacidad — pedradarpoador', pt: 'Política de Privacidade — pedradarpoador' } as T,
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
  title: { zh: '服务条款 — pedradarpoador', en: 'Terms of Service — pedradarpoador', es: 'Términos de Servicio — pedradarpoador', pt: 'Termos de Serviço — pedradarpoador' } as T,
  lastUpdated: { zh: '最后更新时间：2026年7月', en: 'Last updated: July 2026', es: 'Última actualización: Julio de 2026', pt: 'Última atualização: Julho de 2026' } as T,
  h1: { zh: '服务条款', en: 'Terms of Service', es: 'Términos de Servicio', pt: 'Termos de Serviço' } as T,
  h2_acceptance: { zh: '接受条款', en: 'Acceptance of Terms', es: 'Aceptación de los términos', pt: 'Aceitação dos termos' } as T,
  p_acceptance: {
    zh: '访问和使用 pedradarpoador.com，即表示您同意受这些服务条款的约束。',
    en: 'By accessing and using pedradarpoador.com, you agree to be bound by these Terms of Service.',
    es: 'Al acceder y utilizar pedradarpoador.com, usted acepta estar sujeto a estos Términos de Servicio.',
    pt: 'Ao acessar e usar pedradarpoador.com, você concorda em ficar vinculado a estes Termos de Serviço.',
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
  title: { zh: 'Cookie 设置 — pedradarpoador', en: 'Cookie Settings — pedradarpoador', es: 'Configuración de Cookies — pedradarpoador', pt: 'Configurações de Cookies — pedradarpoador' } as T,
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

// ── Meta ──
export const meta = {
  title: { zh: 'Pedra do Arpoador · 里约伊帕内玛的落日与冲浪礁石', en: 'Pedra do Arpoador · Rio\'s Sunset & Surf Rock in Ipanema', es: 'Pedra do Arpoador · La roca del sol y el surf de Ipanema, Río', pt: 'Pedra do Arpoador · A rocha do pôr do sol e do surf em Ipanema' } as T,
  description: { zh: 'Pedra do Arpoador（伊帕内玛礁石）完整指南：落日之掌声、冲浪圣地、潮汐岩池、免费开放与交通、9 条真实评价与常见问题。', en: 'The complete guide to Pedra do Arpoador in Ipanema, Rio: the Sunset Applause, surf break, tide pools, free access & transport, 9 real reviews, FAQ.', es: 'Guía completa de la Pedra do Arpoador en Ipanema, Río: Aplauso del Sol, surf, pozas de marea, acceso gratis y transporte, 9 reseñas y FAQ.', pt: 'Guia completo da Pedra do Arpoador em Ipanema, Rio: Aplauso do Sol, surf, piscinas de maré, acesso grátis e transporte, 9 avaliações e FAQ.' } as T,
};
