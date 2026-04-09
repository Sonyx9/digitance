import type { Locale } from '../lib/i18n';
import type { ServiceSlug } from './services';

interface PricingOffer {
  title: string;
  items: { label: string; price: string }[];
}

interface PricingRow {
  slug: ServiceSlug;
  offers: Record<Locale, PricingOffer[]>;
}

export const pricingRows: PricingRow[] = [
  {
    slug: 'ppc-kampane',
    offers: {
      cs: [
        {
          title: 'Cena PPC kampaní web:',
          items: [
            { label: 'Nastavení kampaní & propojení systémů (GTM, Analytics, Ads)', price: 'od 6 520 Kč' },
            { label: 'Měsíční správa PPC kampaní', price: 'od 2 480 Kč / měsíc' },
          ],
        },
        {
          title: 'Cena PPC kampaní E-shop:',
          items: [
            { label: 'Nastavení kampaní & propojení systémů SHOPTET (GTM, GAds, FB)', price: 'od 6 520 Kč' },
            { label: 'Nastavení kampaní & propojení systémů OSTATNÍ PLATFORMY (GTM, GAds, FB)', price: 'od 7 200 Kč' },
            { label: 'Měsíční správa PPC kampaní', price: 'od 3 600 Kč / měsíc' },
          ],
        },
      ],
      sk: [
        {
          title: 'Cena PPC kampaní web:',
          items: [
            { label: 'Nastavenie kampaní & prepojenie systémov (GTM, Analytics, Ads)', price: 'od 272 €' },
            { label: 'Mesačná správa PPC kampaní', price: 'od 104 € / mesiac' },
          ],
        },
        {
          title: 'Cena PPC kampaní E-shop:',
          items: [
            { label: 'Nastavenie kampaní & prepojenie systémov SHOPTET (GTM, GAds, FB)', price: 'od 272 €' },
            { label: 'Nastavenie kampaní & prepojenie systémov OSTATNÉ PLATFORMY (GTM, GAds, FB)', price: 'od 300 €' },
            { label: 'Mesačná správa PPC kampaní', price: 'od 150 € / mesiac' },
          ],
        },
      ],
      en: [
        {
          title: 'PPC campaign pricing - website:',
          items: [
            { label: 'Campaign setup & system integration (GTM, Analytics, Ads)', price: 'from €272' },
            { label: 'Monthly PPC management', price: 'from €104 / month' },
          ],
        },
        {
          title: 'PPC campaign pricing - e-shop:',
          items: [
            { label: 'Campaign setup & system integration SHOPTET (GTM, GAds, FB)', price: 'from €272' },
            { label: 'Campaign setup & system integration OTHER PLATFORMS (GTM, GAds, FB)', price: 'from €300' },
            { label: 'Monthly PPC management', price: 'from €150 / month' },
          ],
        },
      ],
    },
  },
  {
    slug: 'seo-sluzby',
    offers: {
      cs: [{ title: 'Cena SEO & obsahového marketingu:', items: [{ label: 'Cena', price: 'po úvodní specifikaci' }] }],
      sk: [{ title: 'Cena SEO & obsahového marketingu:', items: [{ label: 'Cena', price: 'po úvodnej špecifikácii' }] }],
      en: [{ title: 'SEO & content marketing pricing:', items: [{ label: 'Price', price: 'after initial specification' }] }],
    },
  },
  {
    slug: 'tvorba-e-shopov',
    offers: {
      cs: [
        {
          title: 'Cena tvorby e-shopů:',
          items: [
            { label: 'Shoptet', price: 'od 44 500 Kč' },
            { label: 'WooCommerce do 20 produktů', price: 'od 25 600 Kč' },
            { label: 'Na míru', price: 'dle specifikace' },
          ],
        },
      ],
      sk: [
        {
          title: 'Cena tvorby e-shopov:',
          items: [
            { label: 'Shoptet', price: 'od 1 855 €' },
            { label: 'WooCommerce do 20 produktov', price: 'od 1 067 €' },
            { label: 'Na mieru', price: 'podľa špecifikácie' },
          ],
        },
      ],
      en: [
        {
          title: 'E-shop creation pricing:',
          items: [
            { label: 'Shoptet', price: 'from €1,855' },
            { label: 'WooCommerce up to 20 products', price: 'from €1,067' },
            { label: 'Custom solution', price: 'based on specification' },
          ],
        },
      ],
    },
  },
  {
    slug: 'tvorba-webov',
    offers: {
      cs: [
        {
          title: 'Ceník tvorby webu (WordPress):',
          items: [
            { label: 'Start balíček: Landing page (1 stránka, CTA, kontaktní formulář, základní SEO)', price: 'od 16 040 Kč' },
            { label: 'Business web: do 5 podstránek (struktura, design, technické SEO, analytics)', price: 'od 25 640 Kč' },
            { label: 'Web na míru: rozšířený obsah, specifické funkcionality a integrace', price: 'individuální kalkulace' },
            { label: 'Programování, úpravy a konfigurace navíc', price: '1 000 Kč / hod.' },
          ],
        },
        {
          title: 'Jednoduchý HTML web bez administrace:',
          items: [
            { label: 'One page', price: 'od 9 800 Kč' },
            { label: 'Více stránkový prezentační web', price: 'od 16 500 Kč' },
          ],
        },
        {
          title: 'Správa webu (včetně zajištění hostingu):',
          items: [
            { label: 'WordPress', price: '5 500 Kč / rok' },
            { label: 'HTML web', price: '3 500 Kč / rok' },
            { label: 'Nastavení firemních e-mailů na Seznamu', price: '2 500 Kč' },
            { label: 'Nastavení firemních e-mailů na jiné platformě', price: '4 500 Kč' },
          ],
        },
      ],
      sk: [
        {
          title: 'Cenník tvorby webu (WordPress):',
          items: [
            { label: 'Štart balík: Landing page (1 stránka, CTA, kontaktný formulár, základné SEO)', price: 'od 669 €' },
            { label: 'Biznis web: do 5 podstránok (štruktúra, dizajn, technické SEO, analytics)', price: 'od 1 069 €' },
            { label: 'Web na mieru: rozšírený obsah, špecifické funkcionality a integrácie', price: 'individuálna kalkulácia' },
            { label: 'Programovanie, úpravy a konfigurácie navyše', price: '42 € / hod.' },
          ],
        },
        {
          title: 'Jednoduchý HTML web bez administrácie:',
          items: [
            { label: 'One page', price: 'od 409 €' },
            { label: 'Viacstránkový prezentačný web', price: 'od 688 €' },
          ],
        },
        {
          title: 'Správa webu (vrátane zabezpečenia hostingu):',
          items: [
            { label: 'WordPress', price: '230 € / rok' },
            { label: 'HTML web', price: '146 € / rok' },
            { label: 'Nastavenie firemných e-mailov na Sezname', price: '105 €' },
            { label: 'Nastavenie firemných e-mailov na inej platforme', price: '188 €' },
          ],
        },
      ],
      en: [
        {
          title: 'Website pricing (WordPress):',
          items: [
            { label: 'Starter package: Landing page (1 page, CTA, contact form, basic SEO)', price: 'from €669' },
            { label: 'Business website: up to 5 subpages (structure, design, technical SEO, analytics)', price: 'from €1,069' },
            { label: 'Custom website: extended content, specific features and integrations', price: 'custom quote' },
            { label: 'Additional development, edits and configurations', price: '€42 / hour' },
          ],
        },
        {
          title: 'Simple HTML website without CMS:',
          items: [
            { label: 'One page', price: 'from €409' },
            { label: 'Multi-page presentation website', price: 'from €688' },
          ],
        },
        {
          title: 'Website management (including hosting setup):',
          items: [
            { label: 'WordPress', price: '€230 / year' },
            { label: 'HTML website', price: '€146 / year' },
            { label: 'Business email setup on Seznam', price: '€105' },
            { label: 'Business email setup on other platform', price: '€188' },
          ],
        },
      ],
    },
  },
  {
    slug: 'newslettery',
    offers: {
      cs: [
        {
          title: 'Cena Emailingu:',
          items: [
            { label: 'Nastavení automatizace e-mailů', price: '2 880 Kč' },
            { label: 'Nastavení a propojení', price: '1 440 Kč' },
            { label: 'Odeslání jednoho newsletteru s grafikou po nastavení šablony', price: '840 Kč' },
          ],
        },
      ],
      sk: [
        {
          title: 'Cena Emailingu:',
          items: [
            { label: 'Nastavenie automatizácie emailov', price: '120 €' },
            { label: 'Nastavenie a prepojenie', price: '60 €' },
            { label: 'Odoslanie jedného newsletteru s grafikou po nastavení šablóny', price: '35 €' },
          ],
        },
      ],
      en: [
        {
          title: 'Emailing pricing:',
          items: [
            { label: 'Email automation setup', price: '€120' },
            { label: 'Setup and integration', price: '€60' },
            { label: 'Sending one newsletter with graphics after template setup', price: '€35' },
          ],
        },
      ],
    },
  },
  {
    slug: 'audit-kampane',
    offers: {
      cs: [{ title: 'Cena auditu stránek a kampaní:', items: [{ label: 'Úvodní audit stránek a kampaní', price: 'zdarma' }] }],
      sk: [{ title: 'Cena auditu stránok a kampaní:', items: [{ label: 'Úvodný audit stránok a kampaní', price: 'zdarma' }] }],
      en: [{ title: 'Website & campaign audit pricing:', items: [{ label: 'Initial website and campaign audit', price: 'free' }] }],
    },
  },
];
