export const services = [
  { slug: 'ppc-kampane' },
  { slug: 'seo-sluzby' },
  { slug: 'tvorba-e-shopov' },
  { slug: 'tvorba-webov' },
  { slug: 'newslettery' },
  { slug: 'audit-kampane' },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];

export const serviceTitles: Record<ServiceSlug, Record<'cs' | 'sk' | 'en', string>> = {
  'ppc-kampane': { cs: 'Cílené PPC kampaně', sk: 'Cielené PPC kampane', en: 'Targeted PPC campaigns' },
  'seo-sluzby': { cs: 'SEO služby', sk: 'SEO Služby', en: 'SEO Services' },
  'tvorba-e-shopov': { cs: 'Tvorba e-shopů', sk: 'Tvorba E-shopov', en: 'E-shop creation' },
  'tvorba-webov': { cs: 'Tvorba webů', sk: 'Tvorba webstránok', en: 'Website creation' },
  'newslettery': { cs: 'Emailing', sk: 'Emailing', en: 'Emailing' },
  'audit-kampane': { cs: 'Audit stránek a kampaní', sk: 'Audit stránok a kampaní', en: 'Website & campaign audit' },
};

export const serviceDescriptions: Record<ServiceSlug, Record<'cs' | 'sk' | 'en', string>> = {
  'ppc-kampane': {
    cs: 'Přesně cílená reklama, která prodává. Jako certifikovaný Google Partner nastavujeme kampaně tak, aby oslovily správné lidi ve správný čas. Snižujeme náklady, zvyšujeme návratnost.',
    sk: 'Presne cielená reklama, ktorá predáva. Ako certifikovaný Google Partner nastavujeme kampane tak, aby oslovili správnych ľudí v správny čas. Znižujeme náklady, zvyšujeme návratnosť.',
    en: 'Targeted advertising that sells. As a certified Google Partner we set up campaigns to reach the right people at the right time. We reduce costs and increase ROI.',
  },
  'seo-sluzby': {
    cs: 'Lepší viditelnost ve vyhledávačích. Pomáháme zákazníkům najít právě vás. Zlepšujeme pozice, zvyšujeme návštěvnost a budujeme organický růst bez zbytečných slibů.',
    sk: 'Lepšia viditeľnosť vo vyhľadávačoch. Pomáhame zákazníkom nájsť práve vás. Zlepšujeme pozície, zvyšujeme návštevnosť a budujeme organický rast bez zbytočných prísľubov.',
    en: 'Better visibility in search engines. We help customers find you. We improve rankings, increase traffic and build organic growth without empty promises.',
  },
  'tvorba-e-shopov': {
    cs: 'E-shopy, které fungují a prodávají. Navrhujeme rychlé, přehledné a spolehlivé e-shopy na Shoptetu a WooCommerce. Zaměřujeme se na funkčnost, uživatelský zážitek a podporu prodeje.',
    sk: 'E-shopy, ktoré fungujú a predávajú. Navrhujeme rýchle, prehľadné a spoľahlivé e-shopy na Shoptete a WooCommerce. Zameriavame sa na funkčnosť, používateľský zážitok a podporu predaja.',
    en: 'E-shops that work and sell. We design fast, clear and reliable e-shops on Shoptet and WooCommerce, with a focus on functionality, user experience and sales support.',
  },
  'tvorba-webov': {
    cs: 'Moderní weby, které přesvědčují. Tvoříme WordPress stránky s důrazem na rychlost, design a výsledky. Jasná struktura, responzivita a funkce, které podporují váš byznys.',
    sk: 'Moderné weby, ktoré presviedčajú. Tvoríme WordPress stránky s dôrazom na rýchlosť, dizajn a výsledky. Jasná štruktúra, responzivita a funkcie, ktoré podporujú váš biznis.',
    en: 'Modern websites that convince. We build WordPress sites with a focus on speed, design and results. Clear structure, responsiveness and features that support your business.',
  },
  'newslettery': {
    cs: 'Komunikace, která buduje prodeje. Vytváříme přehledné, responzivní a cílené newslettery v Ecomail, které udržují vaši značku v povědomí a motivují k nákupu.',
    sk: 'Komunikácia, ktorá buduje predaje. Vytvárame prehľadné, responzívne a cielené newslettery v Ecomail, ktoré udržia vašu značku v povedomí a motivujú k nákupu.',
    en: 'Communication that drives sales. We create clear, responsive and targeted newsletters in Ecomail that keep your brand top of mind and encourage purchases.',
  },
  'audit-kampane': {
    cs: 'Zjistěte, kde unikají peníze i příležitosti. Prozkoumáme vaše PPC, SEO i web. Odhalíme chyby, slabá místa a navrhneme konkrétní kroky ke zlepšení výkonu.',
    sk: 'Zistite, kde unikajú peniaze aj príležitosti. Preskúmame vaše PPC, SEO aj web. Odhalíme chyby, slabé miesta a navrhneme konkrétne kroky na zlepšenie výkonu.',
    en: 'Find out where money and opportunities are slipping away. We review your PPC, SEO and web. We identify errors, weak spots and recommend concrete steps to improve performance.',
  },
};
