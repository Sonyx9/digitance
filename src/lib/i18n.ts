export type Locale = 'cs' | 'sk' | 'en';

export const localeLabels: Record<Locale, string> = {
  cs: 'Čeština',
  sk: 'Slovenčina',
  en: 'English',
};

export const localeCodes: Record<Locale, string> = {
  cs: 'cs',
  sk: 'sk',
  en: 'en',
};

/** Názvy stránek v menu dle jazyka */
export const navLabels: Record<Locale, Record<string, string>> = {
  cs: {
    home: 'Domů',
    about: 'Kdo jsme',
    services: 'Služby',
    pricing: 'Ceník',
    portfolio: 'Portfolio',
    reference: 'Reference',
    contact: 'Kontakt',
  },
  sk: {
    home: 'Domov',
    about: 'Kto sme',
    services: 'Služby',
    pricing: 'Cenník',
    portfolio: 'Portfolio',
    reference: 'Referencie',
    contact: 'Kontakt',
  },
  en: {
    home: 'Home',
    about: 'Who we are',
    services: 'Services',
    pricing: 'Pricing',
    portfolio: 'Portfolio',
    reference: 'Reviews',
    contact: 'Contact',
  },
};

/** Cesty v URL dle jazyka (path bez úvodního /) */
export const pathByLocale: Record<Locale, Record<string, string>> = {
  cs: { home: '', about: 'o-nas', services: 'sluzby', pricing: 'cenik', contact: 'kontakt', portfolio: 'portfolio', reference: 'reference' },
  sk: { home: '', about: 'o-nas', services: 'sluzby', pricing: 'cennik', contact: 'kontakt', portfolio: 'portfolio', reference: 'referencie' },
  en: { home: '', about: 'about-us', services: 'services', pricing: 'pricing', contact: 'contact', portfolio: 'portfolio', reference: 'references' },
};

export function getPathForLocale(locale: Locale, key: string): string {
  return pathByLocale[locale][key] ?? pathByLocale.cs[key] ?? key;
}

/** Vrátí page key a volitelný slug z path (bez úvodního /). */
export function pathToPageKey(path: string): { key: string; slug?: string } {
  if (!path) return { key: 'home' };
  if (path === 'o-nas' || path === 'about-us') return { key: 'about' };
  if (path === 'kontakt' || path === 'contact') return { key: 'contact' };
  if (path === 'sluzby' || path === 'services') return { key: 'services' };
  if (path === 'cenik' || path === 'cennik' || path === 'pricing') return { key: 'pricing' };
  if (path.startsWith('sluzby/')) return { key: 'services', slug: path.slice(7) };
  if (path.startsWith('services/')) return { key: 'services', slug: path.slice(9) };
  if (path === 'portfolio') return { key: 'portfolio' };
  if (path === 'reference' || path === 'referencie' || path === 'references') return { key: 'reference' };
  if (path.startsWith('reference/')) return { key: 'reference', slug: path.slice(10) };
  if (path.startsWith('referencie/')) return { key: 'reference', slug: path.slice(11) };
  if (path.startsWith('references/')) return { key: 'reference', slug: path.slice(11) };
  return { key: 'home' };
}

/** Sestaví cestu (bez locale a base) pro daný locale podle page key a slug. */
export function getPathForLocaleWithSlug(locale: Locale, key: string, slug?: string): string {
  const basePath = getPathForLocale(locale, key);
  return slug ? `${basePath}/${slug}` : basePath;
}
