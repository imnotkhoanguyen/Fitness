import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getPathInLang(currentPath: string, targetLang: string) {
  const segments = currentPath.split('/').filter(Boolean);
  
  if (Object.keys(ui).includes(segments[0])) {
    segments.shift();
  }
  
  if (targetLang !== defaultLang) {
    return `/${targetLang}/${segments.join('/')}`;
  }
  return `/${segments.join('/')}` || '/';
}
