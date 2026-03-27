import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cílové nasazení: nastavte SITE na finální doménu (např. https://digitance.cz).
// Pro FTP do podadresáře použijte base např. "/digitance" – všechny cesty budou relativní k base.
const SITE = process.env.ASTRO_SITE || 'https://digitance.cz';
const BASE = process.env.ASTRO_BASE || '';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [tailwind()],
  i18n: {
    locales: ['cs', 'sk', 'en'],
    defaultLocale: 'cs',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  image: {
    formats: ['avif', 'webp'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
