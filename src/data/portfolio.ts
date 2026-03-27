export interface PortfolioProject {
  slug: string;
  title: Record<'cs' | 'sk' | 'en', string>;
  subtitle: Record<'cs' | 'sk' | 'en', string>;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ai-music-product',
    title: { cs: 'AI Music product', sk: 'AI Music product', en: 'AI Music product' },
    subtitle: { cs: 'UX Case study', sk: 'UX Case study', en: 'UX Case study' },
  },
  {
    slug: 'ap-product',
    title: { cs: 'ap product', sk: 'ap product', en: 'ap product' },
    subtitle: { cs: 'Case study', sk: 'Case study', en: 'Case study' },
  },
  {
    slug: 'brand-app',
    title: { cs: 'Brand App', sk: 'Brand App', en: 'Brand App' },
    subtitle: { cs: 'UI/UX Design', sk: 'UI/UX Design', en: 'UI/UX Design' },
  },
  {
    slug: 'ecommerce-platform',
    title: { cs: 'E‑commerce platforma', sk: 'E‑commerce platforma', en: 'E‑commerce platform' },
    subtitle: { cs: 'Web Design', sk: 'Web Design', en: 'Web Design' },
  },
];
