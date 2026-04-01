/**
 * Stránka Portfolio: hero jako O nás / Reference, pod ním mřížka screenshotů vybraných webů.
 */
export interface PortfolioPageContent {
  title: string;
  heroLabel: string;
  heroTitle: string;
  heroSubLeft: string;
  intro?: string;
}

export const portfolioPageContent: Record<'cs' | 'sk' | 'en', PortfolioPageContent> = {
  cs: {
    title: 'Portfolio — digitance.',
    heroLabel: 'Založeno 2025',
    heroTitle: 'Portfolio',
    heroSubLeft: 'působíme v Česku a na Slovensku',
    intro: 'Vybrané weby a e-shopy, na kterých jsme pracovali.',
  },
  sk: {
    title: 'Portfolio — digitance.',
    heroLabel: 'Založené 2025',
    heroTitle: 'Portfolio',
    heroSubLeft: 'pôsobíme v Česku a na Slovensku',
    intro: 'Vybrané weby a e-shopy, na ktorých sme pracovali.',
  },
  en: {
    title: 'Portfolio — digitance.',
    heroLabel: 'Founded 2025',
    heroTitle: 'Portfolio',
    heroSubLeft: 'we operate in the Czech Republic and Slovakia',
    intro: 'A selection of websites and e-shops we have worked on.',
  },
};

/** Položka portfolia: screenshot + odkaz na web */
export interface PortfolioItem {
  /** Název projektu / doména */
  title: string;
  /** URL webu (s https://) */
  url: string;
  /** Cesta k screenshotu (v public/) nebo URL obrázku */
  screenshot: string;
  /** Volitelné logo projektu */
  logo?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'mircinamydla.cz',
    url: 'https://mircinamydla.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2025/05/Mircina-mydla.webp',
    logo: 'https://cdn.myshoptet.com/usr/www.mircinamydla.cz/user/logos/velke_logo-1.png',
  },
  {
    title: 'sleepsheep.cz',
    url: 'https://sleepsheep.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2025/05/sleep-sheep-eshop.webp',
    logo: 'https://cdn.myshoptet.com/usr/www.sleepsheep.cz/user/logos/logo.svg',
  },
  {
    title: 'applejoy.cz',
    url: 'https://applejoy.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2026/02/Applejoy-eshop.webp',
    logo: 'https://cdn.myshoptet.com/usr/www.applejoy.cz/user/logos/logo-1.svg',
  },
  {
    title: 'pantheraleo.cz',
    url: 'https://pantheraleo.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2024/04/panthera-scaled-3.jpg',
    logo: 'https://cdn.myshoptet.com/usr/www.pantheraleo.cz/user/logos/panthera_logo-h-white-vetsi_text.png',
  },
  {
    title: 'primadora.cz',
    url: 'https://primadora.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2025/05/primadora.webp',
    logo: 'https://cdn.myshoptet.com/usr/www.primadora.cz/user/logos/shop-logo-primadora_white.png',
  },
  { title: 'venusamoda.sk', url: 'https://venusamoda.sk', screenshot: '/images/portfolio/venusamoda.jpg' },
  { title: 'eatgreen.eco', url: 'https://eatgreen.eco', screenshot: '/images/portfolio/eatgreen.jpg' },
  { title: 'cisimefasady.sk', url: 'https://cisimefasady.sk', screenshot: '/images/portfolio/cisimefasady.jpg' },
  {
    title: 'kurovky.cz',
    url: 'https://kurovky.cz',
    screenshot: 'https://lukaskoula.com/wp-content/uploads/2025/07/screencapture-kurovky-cz-2025-07-15-15_09_53.webp',
    logo: 'https://cdn.myshoptet.com/usr/www.kurovky.cz/user/documents/upload/LOGO/logo_logo.svg',
  },
];
