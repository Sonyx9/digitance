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
}

export const portfolioItems: PortfolioItem[] = [
  { title: 'mircinamydla.cz', url: 'https://mircinamydla.cz', screenshot: '/images/portfolio/mircinamydla.jpg' },
  { title: 'sleepsheep.cz', url: 'https://sleepsheep.cz', screenshot: '/images/portfolio/sleepsheep.jpg' },
  { title: 'joy-sperky.cz', url: 'https://joy-sperky.cz', screenshot: '/images/portfolio/joy-sperky.jpg' },
  { title: 'pantheraleo.cz', url: 'https://pantheraleo.cz', screenshot: '/images/portfolio/pantheraleo.jpg' },
  { title: 'primadora.cz', url: 'https://primadora.cz', screenshot: '/images/portfolio/primadora.jpg' },
  { title: 'venusamoda.sk', url: 'https://venusamoda.sk', screenshot: '/images/portfolio/venusamoda.jpg' },
  { title: 'eatgreen.eco', url: 'https://eatgreen.eco', screenshot: '/images/portfolio/eatgreen.jpg' },
  { title: 'cisimefasady.sk', url: 'https://cisimefasady.sk', screenshot: '/images/portfolio/cisimefasady.jpg' },
];
