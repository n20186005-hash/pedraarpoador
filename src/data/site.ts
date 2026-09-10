// ─────────────────────────────────────────────────────────────
// 单景点 SEO 实体绑定配置
// 集中维护景点实体变量，供 <head>、结构化数据、正文语义绑定复用
// ─────────────────────────────────────────────────────────────
export const SITE = {
  domain: 'pedraarpoador.com',
  url: 'https://pedraarpoador.com',

  // 实体名称
  fullName: 'Pedra do Arpoador',
  shortName: 'Arpoador',
  alternateNames: ['Arpoador', 'Pedra do Arpoador Ipanema', 'Mirante do Arpoador'],

  // 归属层级
  neighborhood: 'Ipanema',
  city: 'Rio de Janeiro',
  state: 'Rio de Janeiro',
  stateCode: 'RJ',
  country: 'Brazil',
  countryCode: 'BR',
  countryZh: '巴西',
  cityZh: '里约热内卢',
  neighborhoodZh: '伊帕内玛',
  postalCode: '22080-050',
  street: 'Av. Francisco Bhering, s/n',
  plusCode: '2R55+RJ',

  // 地理坐标（取自 Google Maps 官方嵌入）
  latitude: -22.99038287910964,
  longitude: -43.19356778730037,

  // 评分与评价
  ratingValue: '4.8',
  reviewCount: 32964,
  reviewCountLabel: '32,964',

  // 地图
  mapsShareUrl: 'https://maps.app.goo.gl/QkqmJ96Y6g84iAzK6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6532.803837847181!2d-43.19356778730037!3d-22.99038287910964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd523a8c55c7d%3A0xc97bba8924651150!2sPedra%20do%20Arpoador!5e1!3m2!1szh-CN!2s!4v1789006427823!5m2!1szh-CN!2s',

  // 周边核心地标
  nearbyLandmark1: 'Praia de Ipanema',
  nearbyLandmark2: 'Forte de Copacabana',

  // 官方 / 权威出站链接
  govtTourismUrl: 'https://prefeitura.rio/',
  visitRioUrl: 'https://visit.rio/',
  ministryTourismUrl: 'https://www.gov.br/turismo/pt-br',

  // 视觉资源
  heroImage: '/gallery/pedra-do-arpoador (1).jpg',
  heroImageUrl: 'https://pedraarpoador.com/gallery/pedra-do-arpoador%20(1).jpg',
  ogImage: '/og-cover.jpg',
  ogImageUrl: 'https://pedraarpoador.com/og-cover.jpg',

  // 分析与 PWA
  ga4: 'G-HXM22WWPKP',
  themeColor: '#0B1F1A',
} as const;

export const SITE_URL = SITE.url;
