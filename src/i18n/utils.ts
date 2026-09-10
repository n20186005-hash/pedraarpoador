export const LANGUAGES = ['zh', 'en', 'es', 'pt'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'pt';
export const LANG_LABELS: Record<Lang, string> = { zh: '中', en: 'EN', es: 'ES', pt: 'PT' };

/** BCP-47 语言标签：hreflang、schema inLanguage 与 og:locale 均由它派生 */
export const HREFLANG: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
};

/** BCP-47 → Open Graph locale（下划线形式） */
export const OG_LOCALE: Record<Lang, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
};

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (LANGUAGES.includes(seg as Lang)) return seg as Lang;
  return DEFAULT_LANG;
}
