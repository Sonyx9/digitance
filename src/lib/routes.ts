/**
 * Mapování slugů stránek na lokální cesty.
 * Použijte getRelativeLocaleUrl(locale, path) pro odkazy.
 */
export const routePaths = {
  home: '',
  about: 'o-nas',
  services: 'sluzby',
  serviceDetail: (slug: string) => `sluzby/${slug}`,
  contact: 'kontakt',
} as const;

export type RoutePathKey = keyof typeof routePaths;

/** Slugs stránek pro navigaci (bez detailu služby) */
export const navPaths: { key: RoutePathKey; path: string }[] = [
  { key: 'home', path: routePaths.home },
  { key: 'about', path: routePaths.about },
  { key: 'services', path: routePaths.services },
  { key: 'contact', path: routePaths.contact },
];
