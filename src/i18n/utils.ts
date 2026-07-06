export const LANGUAGES = ['zh', 'en', 'es', 'pt'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'pt';
export const LANG_LABELS: Record<Lang, string> = { zh: '中', en: 'EN', es: 'ES', pt: 'PT' };

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (LANGUAGES.includes(seg as Lang)) return seg as Lang;
  return DEFAULT_LANG;
}
