export interface ReferencePageContent {
  title: string;
  heroLabel: string;
  heroTitle: string;
  heroSubLeft: string;
  intro?: string;
}

export const referencePageContent: Record<'cs' | 'sk' | 'en', ReferencePageContent> = {
  cs: {
    title: 'Reference — digitance.',
    heroLabel: 'Založeno 2025',
    heroTitle: 'Reference',
    heroSubLeft: 'působíme v Česku a na Slovensku',
    intro: 'Co o nás říkají klienti.',
  },
  sk: {
    title: 'Referencie — digitance.',
    heroLabel: 'Založené 2025',
    heroTitle: 'Referencie',
    heroSubLeft: 'pôsobíme v Česku a na Slovensku',
    intro: 'Čo o nás hovoria klienti.',
  },
  en: {
    title: 'References — digitance.',
    heroLabel: 'Founded 2025',
    heroTitle: 'References',
    heroSubLeft: 'we operate in the Czech Republic and Slovakia',
    intro: 'What our clients say about us.',
  },
};
