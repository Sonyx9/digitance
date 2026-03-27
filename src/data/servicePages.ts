/**
 * Rozšířený obsah stránek jednotlivých služeb (nad rámec krátkého popisu).
 * Pokud je pro slug+locale definován, použije se místo jednoduchého description.
 */
import type { ServiceSlug } from './services';
import type { Locale } from '../lib/i18n';

export type ServiceSection =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; href?: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'serviceItem'; icon: string; title: string; desc: string }
  | { type: 'step'; title: string; desc: string }
  | { type: 'cta'; text: string; button: string }
  | { type: 'pricing'; title: string; items: { label: string; price: string }[] }
  | { type: 'eshopShowcase'; heading: string; items: { name: string; url: string; image?: string }[] }
  | { type: 'testimonialsBlock'; heading: string; items: { quote: string; author: string; company?: string }[] };

export interface ServicePageData {
  heroTitle: string;
  sections: ServiceSection[];
}

type ServicePagesMap = Partial<Record<ServiceSlug, Partial<Record<Locale, ServicePageData>>>>;

export const servicePages: ServicePagesMap = {
  'ppc-kampane': {
    cs: {
      heroTitle: 'PPC kampaně',
      sections: [
        {
          type: 'paragraph',
          text: 'Klik za klikem k novým zákazníkům. PPC reklama je nejrychlejší cestou, jak se dostat před oči vašich zákazníků přesně ve chvíli, kdy hledají to, co nabízíte. S námi máte jistotu, že každá investovaná koruna pracuje efektivně pro růst vašeho byznysu. Jako certifikovaný Google Partner vytváříme výkonné PPC kampaně, které cíleně oslovují správné publikum, zvyšují počet kliků a zároveň snižují cenu za konverzi.',
        },
        {
          type: 'paragraph',
          text: 'Proč PPC od nás znamená růst, ne jen výdaje? Umíme oddělit, co přináší výsledky a co jen vypadá dobře. Každou korunu z vaší investice cíleně optimalizujeme – bez zbytečného plýtvání.',
        },
        {
          type: 'list',
          items: [
            'Jsme Google Partneri',
            'Kampaně s měřitelnou návratností',
            'Pro malé firmy i silné značky',
            'Transparentní výsledky, pravidelné reporty',
          ],
        },
        {
          type: 'quote',
          text: 'Reklama bez strategie je jen drahý experiment.',
        },
        { type: 'heading', text: 'Jaké PPC služby nabízíme?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Google Ads kampaně',
          desc: 'vyhledávání, remarketing, nákupy, YouTube, brandové i výkonnostní kampaně',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Facebook & Instagram Ads',
          desc: 'dynamické reklamy, lead generation, konverzní kampaně, retargeting',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analýza, optimalizace a reportování',
          desc: 'Každý měsíc jasně vidíte, co vám reklama přinesla.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Kompletní správa kampaní',
          desc: 'Texty, kreativy, nastavení, spuštění a průběžná optimalizace – vše na jednom místě',
        },
        { type: 'heading', text: 'Jak spolupráce probíhá?' },
        { type: 'step', title: 'Úvodní konzultace', desc: 'poznáme váš byznys, cíle a cílovou skupinu' },
        { type: 'step', title: 'Nastavení strategie a kampaní', desc: 'vybereme správné formáty, kanály a rozpočet' },
        { type: 'step', title: 'Optimalizace a škálování', desc: 'reklamy průběžně vylepšujeme, abyste rostli' },
        { type: 'step', title: 'Transparentní reporty', desc: 'každý měsíc přehledně a bez marketingových řečí' },
        {
          type: 'pricing',
          title: 'Cena PPC kampaní web:',
          items: [
            { label: 'Nastavení kampaní & propojení systémů (GTM, Analytics, Ads)', price: 'od 230 €' },
            { label: 'Měsíční správa PPC kampaní', price: 'od 80 € / měsíc' },
          ],
        },
        {
          type: 'pricing',
          title: 'Cena PPC kampaní E-shop:',
          items: [
            { label: 'Nastavení kampaní & propojení systémů (GTM, GAds, FB)', price: 'od 300 €' },
            { label: 'Měsíční správa PPC kampaní', price: 'od 100 € / měsíc' },
          ],
        },
      ],
    },
    sk: {
      heroTitle: 'PPC kampaně',
      sections: [
        {
          type: 'paragraph',
          text: 'Klik za klikom k novým zákazníkom. PPC reklama je najrýchlejšou cestou, ako sa dostať pred oči vašich zákazníkov presne vtedy, keď hľadajú to, čo ponúkate. S námi máte istotu, že každý investovaný cent pracuje efektívne pre rast vášho biznisu. Ako certifikovaný Google Partner vytvárame výkonné PPC kampane, ktoré cielene oslovujú správne publikum, zvyšujú počet kliknutí a zároveň znižujú cenu za konverziu.',
        },
        {
          type: 'paragraph',
          text: 'Prečo PPC od nás znamená rast, nie len výdavky? Vieme oddeliť, čo prináša výsledky a čo len vyzerá dobre. Každé euro z vašej investície cielene optimalizujeme – bez zbytočného plytvania.',
        },
        {
          type: 'list',
          items: [
            'Sme Google Partneri',
            'Kampane s merateľnou návratnosťou',
            'Pre malé biznisy aj silné značky',
            'Transparentné výsledky, pravidelné reporty',
          ],
        },
        {
          type: 'quote',
          text: 'Reklama bez stratégie je len drahý experiment.',
        },
        { type: 'heading', text: 'Aké PPC služby ponúkame?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Google Ads kampane',
          desc: 'vyhľadávanie, remarketing, nákupy, YouTube, brandové aj výkonnostné kampane',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Facebook & Instagram Ads',
          desc: 'dynamické reklamy, lead generation, konverzné kampane, retargeting',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analýza, optimalizácia a reportovanie',
          desc: 'Každý mesiac jasne vidíte, čo vám reklama priniesla.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Kompletná správa kampaní',
          desc: 'Texty, kreatívy, nastavenie, spustenie a priebežná optimalizácia – všetko na jednom mieste',
        },
        { type: 'heading', text: 'Ako spolupráca prebieha?' },
        { type: 'step', title: 'Úvodná konzultácia', desc: 'spoznáme váš biznis, ciele a cieľovku' },
        { type: 'step', title: 'Nastavenie stratégie a kampaní', desc: 'vyberieme správne formáty, kanály a rozpočet' },
        { type: 'step', title: 'Optimalizácia a škálovanie', desc: 'reklamy priebežne vylepšujeme, aby ste rástli' },
        { type: 'step', title: 'Transparentné reporty', desc: 'každý mesiac prehľadne a bez marketingových rečí' },
        {
          type: 'pricing',
          title: 'Cena PPC kampaní web:',
          items: [
            { label: 'Nastavenie kampaní & prepojenie systémov (GTM, Analytics, Ads)', price: 'od 230 €' },
            { label: 'Mesačná správa PPC kampaní', price: 'od 80 € / mesiac' },
          ],
        },
        {
          type: 'pricing',
          title: 'Cena PPC kampaní E-shop:',
          items: [
            { label: 'Nastavenie kampaní & prepojenie systémov (GTM, GAds, FB)', price: 'od 300 €' },
            { label: 'Mesačná správa PPC kampaní', price: 'od 100 € / mesiac' },
          ],
        },
      ],
    },
    en: {
      heroTitle: 'PPC campaigns',
      sections: [
        {
          type: 'paragraph',
          text: 'Click by click to new customers. PPC advertising is the fastest way to get in front of your customers exactly when they are searching for what you offer. With us, you can be sure that every cent invested works effectively for your business growth. As a certified Google Partner we create high-performing PPC campaigns that target the right audience, increase clicks and lower cost per conversion.',
        },
        {
          type: 'paragraph',
          text: 'Why does PPC with us mean growth, not just spend? We know how to separate what delivers results from what just looks good. We optimise every euro of your investment with a clear purpose – no waste.',
        },
        {
          type: 'list',
          items: [
            'We are Google Partners',
            'Campaigns with measurable ROI',
            'For small businesses and strong brands',
            'Transparent results, regular reports',
          ],
        },
        {
          type: 'quote',
          text: 'Advertising without strategy is just an expensive experiment.',
        },
        { type: 'heading', text: 'What PPC services do we offer?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Google Ads campaigns',
          desc: 'search, remarketing, shopping, YouTube, brand and performance campaigns',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Facebook & Instagram Ads',
          desc: 'dynamic ads, lead generation, conversion campaigns, retargeting',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analysis, optimisation and reporting',
          desc: 'Every month you see clearly what your advertising has delivered.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Full campaign management',
          desc: 'Copy, creatives, setup, launch and ongoing optimisation – all in one place',
        },
        { type: 'heading', text: 'How does working together work?' },
        { type: 'step', title: 'Initial consultation', desc: 'we get to know your business, goals and target audience' },
        { type: 'step', title: 'Strategy and campaign setup', desc: 'we choose the right formats, channels and budget' },
        { type: 'step', title: 'Optimisation and scaling', desc: 'we continuously improve your ads so you grow' },
        { type: 'step', title: 'Transparent reports', desc: 'every month, clearly and without marketing speak' },
        {
          type: 'pricing',
          title: 'PPC campaign pricing – website:',
          items: [
            { label: 'Campaign setup & system integration (GTM, Analytics, Ads)', price: 'from €230' },
            { label: 'Monthly PPC management', price: 'from €80 / month' },
          ],
        },
        {
          type: 'pricing',
          title: 'PPC campaign pricing – e-shop:',
          items: [
            { label: 'Campaign setup & system integration (GTM, GAds, FB)', price: 'from €300' },
            { label: 'Monthly PPC management', price: 'from €100 / month' },
          ],
        },
      ],
    },
  },
  'tvorba-e-shopov': {
    cs: {
      heroTitle: 'Tvorba e-shopů',
      sections: [
        {
          type: 'paragraph',
          text: 'E-shop na Shoptetu, který prodává. Spustit profesionální e-shop nebylo nikdy jednodušší. V Digitance vám pomůžeme vytvořit moderní, funkční a výnosný internetový obchod na platformě Shoptet – od úvodní konzultace až po spuštění.',
        },
        {
          type: 'image',
          src: 'https://partneri.shoptet.sk/wp-content/uploads/2023/04/shoptet-partner-bronze.png',
          alt: 'Shoptet Partner Bronze',
          href: 'https://partneri.shoptet.sk/profesionali/digitance/',
        },
        { type: 'heading', text: 'Proč zvolit Shoptet?' },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Rychlý start a bezstarostný průběh',
          desc: 'Shoptet vám umožní spustit e-shop v rekordně krátkém čase. Postaráme se o to, aby vše proběhlo hladce – od prvního návrhu až po ostrý start. Získáte plně funkční e-shop bez technických starostí, připravený prodávat.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Maximální efektivita',
          desc: 'Shoptet je známý jednoduchým ovládáním a širokou škálou funkcí. S naší pomocí nastavíme vše tak, abyste z platformy vytěžili maximum – propojíme váš e-shop s platebními bránami, logistikou, účetnictvím a marketingem.',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Moderní vzhled a bezpečný chod',
          desc: 'Zajistíme, že váš e-shop bude nejen pěkný a responzivní, ale i stabilní a bezpečný. Pracujeme s ověřenými šablonami a v případě potřeby vytvoříme i vlastní designová řešení.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Jednoduchá administrace e-shopu',
          desc: 'Shoptet nabízí přehlednou administraci, ve které snadno spravujete produkty, objednávky a zákazníky. Nastavíme vám ji na míru a v případě potřeby vás zaškolíme, abyste e-shop zvládali vést sami.',
        },
        { type: 'heading', text: 'Jak to funguje?' },
        {
          type: 'step',
          title: 'Analýza a návrh řešení na míru',
          desc: 'Na začátku důkladně poznáme váš byznys, cílovou skupinu i konkurenci. Navrhneme optimální řešení na platformě Shoptet, které bude odpovídat vašim cílům a zároveň bude technicky i vizuálně připravené prodávat.',
        },
        {
          type: 'step',
          title: 'Profesionální realizace Shoptet e-shopu',
          desc: 'Postaráme se o celý proces – od výběru vhodné šablony přes úpravy designu, nastavení platebních bran, dopravy až po fakturační systémy. Vytvoříme e-shop, který bude moderní, responzivní a funkční.',
        },
        {
          type: 'step',
          title: 'Výsledky, které vám dávají kontrolu',
          desc: 'S námi máte vždy přehled o tom, jak se váš e-shop vyvíjí. Pravidelně vás informujeme o stavu projektu, doporučeních na zlepšení a možných krocích na podporu prodeje. Díky našemu proaktivnímu přístupu váš Shoptet roste spolu s vaším podnikáním.',
        },
        {
          type: 'eshopShowcase',
          heading: 'Ukázky e-shopů',
          items: [
            { name: 'Kurovky.cz', url: 'https://kurovky.cz', image: '/images/showcase/kurovky.jpg' },
            { name: 'Venus a moda', url: 'https://venusamoda.sk', image: '/images/showcase/venusamoda.jpg' },
            { name: 'Joy Šperky', url: 'https://joy-sperky.cz', image: '/images/showcase/joy-sperky.jpg' },
          ],
        },
        {
          type: 'testimonialsBlock',
          heading: 'Reference',
          items: [
            { quote: 'Profesionální znalosti, lidský přístup a vcítění se do našich představ při nastavování Shoptetu. Plánujeme další spolupráci v marketingu a grafice.', author: 'Luděk N.', company: 'kurovky.cz' },
            { quote: 'Výsledkem je krásný profesionální e-shop, který funguje jak má. Určitě doporučuji jeho služby!', author: 'Stanislava Kleimanová', company: 'venusamoda.sk' },
            { quote: 'Kompletní, profesionální, rychlé služby – vše kolem nového e-shopu. Jsem spokojený a mohu jen doporučit.', author: 'Petr H.', company: 'joy-sperky.cz' },
          ],
        },
      ],
    },
    sk: {
      heroTitle: 'Tvorba e-shopov',
      sections: [
        {
          type: 'paragraph',
          text: 'E-shop na Shoptete, ktorý predáva. Spustiť profesionálny e-shop ešte nikdy nebolo jednoduchšie. V Digitance ti pomôžeme vytvoriť moderný, funkčný a výnosný internetový obchod na platforme Shoptet – od úvodnej konzultácie až po spustenie.',
        },
        {
          type: 'image',
          src: 'https://partneri.shoptet.sk/wp-content/uploads/2023/04/shoptet-partner-bronze.png',
          alt: 'Shoptet Partner Bronze',
          href: 'https://partneri.shoptet.sk/profesionali/digitance/',
        },
        { type: 'heading', text: 'Prečo si vybrať Shoptet?' },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Rýchly štart a bezstarostný priebeh',
          desc: 'Shoptet ti umožní spustiť e-shop v rekordne krátkom čase. My sa postaráme o to, aby všetko prebehlo hladko – od prvého návrhu až po ostrý štart. Získaš plne funkčný e-shop bez technických starostí, pripravený predávať.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Maximálna efektivita',
          desc: 'Shoptet je známy svojím jednoduchým ovládaním a širokou škálou funkcií. S našou pomocou nastavíme všetko tak, aby si z platformy vyťažil maximum – prepojíme tvoj e-shop s platobnými bránami, logistikou, účtovníctvom a marketingom.',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Moderný vzhľad a bezpečný chod',
          desc: 'Zabezpečíme, že tvoj e-shop bude nielen pekný a responzívny, ale aj stabilný a bezpečný. Pracujeme s osvedčenými šablónami a v prípade potreby vytvoríme aj vlastné dizajnové riešenia.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Jednoduchá administrácia e-shopu',
          desc: 'Shoptet ponúka prehľadnú administráciu, v ktorej ľahko spravuješ produkty, objednávky a zákazníkov. Nastavíme ti ju na mieru a v prípade potreby ťa zaškolíme, aby si e-shop zvládol viesť sám.',
        },
        { type: 'heading', text: 'Ako to funguje?' },
        {
          type: 'step',
          title: 'Analýza a návrh riešenia na mieru',
          desc: 'Na začiatku dôkladne spoznáme tvoj biznis, cieľovú skupinu aj konkurenciu. Navrhneme optimálne riešenie na platforme Shoptet, ktoré bude zodpovedať tvojim cieľom a zároveň bude technicky aj vizuálne pripravené predávať.',
        },
        {
          type: 'step',
          title: 'Profesionálna realizácia Shoptet e-shopu',
          desc: 'Postaráme sa o celý proces – od výberu vhodnej šablóny cez úpravy dizajnu, nastavenie platobných brán, dopravy až po fakturačné systémy. Vytvoríme e-shop, ktorý bude moderný, responzívny a funkčný.',
        },
        {
          type: 'step',
          title: 'Výsledky, ktoré ti dávajú kontrolu',
          desc: 'S nami máš vždy prehľad o tom, ako sa tvoj e-shop vyvíja. Pravidelne ťa informujeme o stave projektu, odporúčaniach na zlepšenie a možných krokoch na podporu predaja. Vďaka nášmu proaktívnemu prístupu tvoj Shoptet rastie spolu s tvojím podnikaním.',
        },
        {
          type: 'eshopShowcase',
          heading: 'Ukážky e-shopov',
          items: [
            { name: 'Kurovky.cz', url: 'https://kurovky.cz', image: '/images/showcase/kurovky.jpg' },
            { name: 'Venus a moda', url: 'https://venusamoda.sk', image: '/images/showcase/venusamoda.jpg' },
            { name: 'Joy Šperky', url: 'https://joy-sperky.cz', image: '/images/showcase/joy-sperky.jpg' },
          ],
        },
        {
          type: 'testimonialsBlock',
          heading: 'Referencie',
          items: [
            { quote: 'Profesionálne znalosti, ľudský prístup a vcítenie sa do našich predstáv pri nastavovaní Shoptetu. Plánujeme ďalšiu spoluprácu v marketingu a grafike.', author: 'Luděk N.', company: 'kurovky.cz' },
            { quote: 'Výsledkom je krásny profesionálny e-shop, ktorý funguje ako má. Určite odporúčam jeho služby!', author: 'Stanislava Kleimanová', company: 'venusamoda.sk' },
            { quote: 'Kompletné, profesionálne, rýchle služby – všetko okolo nového e-shopu. Som spokojný a môžem len odporučiť.', author: 'Petr H.', company: 'joy-sperky.cz' },
          ],
        },
      ],
    },
    en: {
      heroTitle: 'E-shop creation',
      sections: [
        {
          type: 'paragraph',
          text: 'An e-shop on Shoptet that sells. Launching a professional e-shop has never been easier. At Digitance we help you create a modern, functional and profitable online store on the Shoptet platform – from the initial consultation to go-live.',
        },
        {
          type: 'image',
          src: 'https://partneri.shoptet.sk/wp-content/uploads/2023/04/shoptet-partner-bronze.png',
          alt: 'Shoptet Partner Bronze',
          href: 'https://partneri.shoptet.sk/profesionali/digitance/',
        },
        { type: 'heading', text: 'Why choose Shoptet?' },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Quick start and smooth process',
          desc: 'Shoptet lets you launch an e-shop in record time. We make sure everything runs smoothly – from the first design to go-live. You get a fully functional e-shop without technical hassle, ready to sell.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Maximum efficiency',
          desc: 'Shoptet is known for its simple interface and wide range of features. With our help we set everything up so you get the most out of the platform – we connect your e-shop to payment gateways, shipping, accounting and marketing.',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Modern look and reliable operation',
          desc: 'We ensure your e-shop is not only attractive and responsive but also stable and secure. We work with proven templates and can create custom design solutions when needed.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Simple e-shop administration',
          desc: 'Shoptet offers a clear admin interface where you easily manage products, orders and customers. We set it up for you and can train you so you can run the e-shop yourself.',
        },
        { type: 'heading', text: 'How does it work?' },
        {
          type: 'step',
          title: 'Analysis and custom solution design',
          desc: 'We start by getting to know your business, target audience and competition. We propose an optimal solution on the Shoptet platform that matches your goals and is technically and visually ready to sell.',
        },
        {
          type: 'step',
          title: 'Professional Shoptet e-shop delivery',
          desc: 'We handle the whole process – from choosing the right template through design tweaks, setting up payment gateways and shipping to invoicing systems. We build an e-shop that is modern, responsive and functional.',
        },
        {
          type: 'step',
          title: 'Results that keep you in control',
          desc: 'With us you always know how your e-shop is doing. We keep you updated on project status, improvement suggestions and next steps to boost sales. Thanks to our proactive approach, your Shoptet grows with your business.',
        },
        {
          type: 'eshopShowcase',
          heading: 'Sample e-shops',
          items: [
            { name: 'Kurovky.cz', url: 'https://kurovky.cz', image: '/images/showcase/kurovky.jpg' },
            { name: 'Venus a moda', url: 'https://venusamoda.sk', image: '/images/showcase/venusamoda.jpg' },
            { name: 'Joy Šperky', url: 'https://joy-sperky.cz', image: '/images/showcase/joy-sperky.jpg' },
          ],
        },
        {
          type: 'testimonialsBlock',
          heading: 'Testimonials',
          items: [
            { quote: 'Professional expertise, a human approach and real understanding of our vision when setting up Shoptet. We\'re planning further cooperation on marketing and graphics.', author: 'Luděk N.', company: 'kurovky.cz' },
            { quote: 'The result is a beautiful, professional e-shop that runs as it should. I definitely recommend his services!', author: 'Stanislava Kleimanová', company: 'venusamoda.sk' },
            { quote: 'Complete, professional, fast service – everything around the new e-shop. I\'m satisfied and can only recommend.', author: 'Petr H.', company: 'joy-sperky.cz' },
          ],
        },
      ],
    },
  },
  'tvorba-webov': {
    cs: {
      heroTitle: 'Tvorba webů',
      sections: [
        {
          type: 'paragraph',
          text: 'Web, který prodává. Potřebujete web, který nejen dobře vypadá, ale hlavně funguje? Vytvoříme vám moderní, responzivní a rychlou WordPress stránku, která zaujme návštěvníky a promění je v zákazníky. Bez zbytečných složitostí, s důrazem na funkčnost, SEO a výsledky.',
        },
        { type: 'heading', text: 'Proč si vybrat Digitance?' },
        {
          type: 'paragraph',
          text: 'Jsme experti na WordPress, design i funkčnost. Naše weby stavíme na WordPressu, což zaručuje stabilitu, snadnou správu a možnost dalšího růstu. Každý web tvoříme na míru podle vašich cílů a potřeb vašich zákazníků.',
        },
        {
          type: 'list',
          items: [
            'Strukturu webu, která vede návštěvníka k akci',
            'Responzivní design funkční na všech zařízeních',
            'Strategicky umístěné výzvy k akci (CTA)',
            'Optimalizaci pro rychlost, bezpečnost a technické SEO',
          ],
        },
        {
          type: 'quote',
          text: 'Web, který neprodává, je jen výdaj. My vám vytvoříme web, který vydělává.',
        },
        { type: 'heading', text: 'Naše prezentační weby jsou víc než jen hezké' },
        {
          type: 'paragraph',
          text: 'Tvoříme webové stránky, které nejen dobře vypadají, ale hlavně plní svůj účel. Jasně komunikují vaše služby, podporují důvěru a motivují zákazníka k akci.',
        },
        {
          type: 'list',
          items: [
            'Srozumitelnou strukturu',
            'Optimalizaci pro Google i AI',
            'Jednoduchou správu',
            'Rychlé dodání',
          ],
        },
        { type: 'heading', text: 'Jak pracujeme?' },
        { type: 'step', title: 'Konzultace & zadání', desc: 'Společně projdeme, co má web splnit a jaké jsou vaše představy.' },
        { type: 'step', title: 'Návrh struktury & design', desc: 'Připravíme wireframe a vizuál, který schválíte ještě před samotnou realizací.' },
        { type: 'step', title: 'Tvorba & testování', desc: 'Propojíme vše potřebné – formuláře, mapu, analytiku i bezpečnostní prvky.' },
        { type: 'step', title: 'Předání & podpora', desc: 'Po dokončení vás zaškolíme do správy webu. Chcete další rozvoj? Jsme tu pro vás.' },
        { type: 'heading', text: 'Investice do kvalitního webu se vždy vrátí' },
        {
          type: 'paragraph',
          text: 'Web od nás není jen „stránka“. Je to nástroj, který vám přivede nové klienty, zvýší důvěryhodnost a umožní růst bez zbytečných komplikací.',
        },
        {
          type: 'pricing',
          title: 'Ceník tvorby webu (WordPress):',
          items: [
            { label: 'Start balíček: Landing page (1 stránka, CTA, kontaktní formulář, základní SEO)', price: 'od 585 €' },
            { label: 'Business web: do 5 podstránek (struktura, design, technické SEO, analytics)', price: 'od 735 €' },
            { label: 'Web na míru: rozšířený obsah, specifické funkcionality a integrace', price: 'individuální kalkulace' },
            { label: 'Programování, úpravy a konfigurace navíc', price: '29,90 € / hod.' },
          ],
        },
      ],
    },
    en: {
      heroTitle: 'Website creation',
      sections: [
        {
          type: 'paragraph',
          text: 'A website that sells. Need a website that not only looks great but also performs? We build modern, responsive and fast WordPress websites that engage visitors and turn them into customers. No unnecessary complexity, just functionality, SEO and results.',
        },
        { type: 'heading', text: 'Why choose Digitance?' },
        {
          type: 'paragraph',
          text: 'We are experts in WordPress, design and performance. Our websites are built on WordPress for stability, easy management and future scalability. Every website is tailored to your goals and your customers’ needs.',
        },
        {
          type: 'list',
          items: [
            'Website structure that guides visitors to action',
            'Responsive design that works on all devices',
            'Strategically placed calls-to-action (CTA)',
            'Optimisation for speed, security and technical SEO',
          ],
        },
        {
          type: 'quote',
          text: 'A website that does not sell is just an expense. We build websites that generate revenue.',
        },
        { type: 'heading', text: 'Our corporate websites are more than just pretty' },
        {
          type: 'paragraph',
          text: 'We create websites that not only look good but serve a clear business purpose. They communicate your services, build trust and motivate customers to act.',
        },
        {
          type: 'list',
          items: [
            'Clear structure',
            'Optimised for Google and AI',
            'Easy content management',
            'Fast delivery',
          ],
        },
        { type: 'heading', text: 'How we work' },
        { type: 'step', title: 'Consultation & brief', desc: 'We define what your website should achieve and align on your expectations.' },
        { type: 'step', title: 'Structure & design proposal', desc: 'We prepare wireframes and visuals for approval before development starts.' },
        { type: 'step', title: 'Build & testing', desc: 'We integrate everything required — forms, maps, analytics and security elements.' },
        { type: 'step', title: 'Handover & support', desc: 'After launch, we train you to manage the site. Need further growth? We are here.' },
        { type: 'heading', text: 'Investment in a quality website always pays back' },
        {
          type: 'paragraph',
          text: 'A website from us is not just a page. It is a growth tool that brings new clients, strengthens trust and helps your business scale smoothly.',
        },
        {
          type: 'pricing',
          title: 'Website pricing (WordPress):',
          items: [
            { label: 'Starter package: Landing page (1 page, CTA, contact form, basic SEO)', price: 'from €585' },
            { label: 'Business website: up to 5 subpages (structure, design, technical SEO, analytics)', price: 'from €735' },
            { label: 'Custom website: extended content, specific features and integrations', price: 'custom quote' },
            { label: 'Additional development, edits and configurations', price: '€29.90 / hour' },
          ],
        },
      ],
    },
    sk: {
      heroTitle: 'Tvorba webstránok',
      sections: [
        {
          type: 'paragraph',
          text: 'Web, ktorý predáva. Potrebujete web, ktorý nielen dobre vyzerá, ale aj funguje? Vytvoríme vám modernú, responzívnu a rýchlu stránku na WordPresse, ktorá zaujme návštevníkov a premení ich na zákazníkov. Bez zbytočných zložitostí, ale s dôrazom na funkčnosť, SEO a výsledky.',
        },
        { type: 'heading', text: 'Prečo si vybrať Digitance?' },
        {
          type: 'paragraph',
          text: 'Sme experti na WordPress, dizajn aj funkčnosť. Naše stránky sú postavené na WordPress systéme, čo zaručuje stabilitu, jednoduchú správu a možnosť ďalšieho rastu. Každý web tvoríme na mieru – podľa vašich cieľov a potrieb vašich zákazníkov.',
        },
        {
          type: 'list',
          items: [
            'Štruktúru webu, ktorá vedie návštevníka k akcii',
            'Responzívny dizajn funkčný na všetkých zariadeniach',
            'Strategicky umiestnené výzvy k akcii (CTA)',
            'Optimalizáciu pre rýchlosť, bezpečnosť a technické SEO',
          ],
        },
        {
          type: 'quote',
          text: 'Web, ktorý nepredáva, je len výdavok. My vám vytvoríme web, ktorý zarába.',
        },
        { type: 'heading', text: 'Naše prezenčné weby sú viac než len pekné' },
        {
          type: 'paragraph',
          text: 'Tvoríme webové stránky, ktoré nielen dobre vyzerajú, ale predovšetkým plnia svoj účel. Jasne komunikujú vaše služby, podporujú dôveru a motivujú zákazníka konať.',
        },
        {
          type: 'list',
          items: [
            'Zrozumiteľnú štruktúru',
            'Optimalizované pre Google a AI',
            'Jednoduchú správu',
            'Rýchle dodanie',
          ],
        },
        { type: 'heading', text: 'Ako pracujeme?' },
        {
          type: 'step',
          title: 'Konzultácia & zadanie',
          desc: 'Spolu si prejdeme, čo má web dosiahnuť, a aké sú vaše predstavy.',
        },
        {
          type: 'step',
          title: 'Návrh štruktúry & dizajn',
          desc: 'Pripravíme wireframe a vizuál, ktorý schválite ešte pred spustením tvorby.',
        },
        {
          type: 'step',
          title: 'Tvorba & testovanie',
          desc: 'Napojíme všetko, čo treba – kontaktné formuláre, mapu, analytiku a bezpečnostné prvky.',
        },
        {
          type: 'step',
          title: 'Odovzdanie & podpora',
          desc: 'Po dokončení vás zaučíme do správy webu. Chcete ďalší rozvoj? Sme tu pre vás.',
        },
        { type: 'heading', text: 'Investícia do kvalitného webu sa vždy vráti' },
        {
          type: 'paragraph',
          text: 'Web od nás nie je len „stránka“. Je to nástroj, ktorý vám prinesie nových klientov, zvýši dôveryhodnosť a umožní rásť bez zbytočných komplikácií.',
        },
        {
          type: 'pricing',
          title: 'Cenník tvorby webu (WordPress):',
          items: [
            { label: 'Štart balík: Landing page (1 stránka, CTA, kontaktný formulár, základné SEO)', price: 'od 585 €' },
            { label: 'Biznis web: do 5 podstránok (štruktúra, dizajn, technické SEO, analytics)', price: 'od 735 €' },
            { label: 'Web na mieru: rozšírený obsah, špecifické funkcionality a integrácie', price: 'individuálna kalkulácia' },
            { label: 'Programovanie, úpravy a konfigurácie navyše', price: '29,90 € / hod.' },
          ],
        },
      ],
    },
  },
  newslettery: {
    cs: {
      heroTitle: 'Emailing',
      sections: [
        {
          type: 'paragraph',
          text: 'Newsletter, který zákazníky zaujme a promění v objednávky. Zapomeňte na nudné hromadné maily. Vytvoříme vám newslettery, které lidé nebudou mazat, ale otevírat a proklikávat. Pravidelná e-mailová komunikace patří k nejefektivnějším formám marketingu, když je správně nastavená.',
        },
        { type: 'heading', text: 'Proč zařadit newsletter do marketingu?' },
        {
          type: 'list',
          items: [
            'Buduje důvěru a vztah se zákazníkem',
            'Pravidelně připomíná vaši značku a produkty',
            'Má výborný poměr cena/výkon',
            'Vhodný pro malé firmy, e-shopy i větší značky',
          ],
        },
        {
          type: 'quote',
          text: 'Není důležité jen získat zákazníka. Důležité je, aby na vás nezapomněl.',
        },
        { type: 'heading', text: 'Co pro vás zajistíme?' },
        { type: 'serviceItem', icon: 'chart', title: 'Návrh struktury a obsahu newsletteru', desc: 'Vymyslíme srozumitelný a prodejní formát: akce, novinky, tipy, slevy a doporučení.' },
        { type: 'serviceItem', icon: 'social', title: 'Grafický design, který zaujme', desc: 'Na míru navržený vizuál v souladu s vaší značkou.' },
        { type: 'serviceItem', icon: 'message', title: 'Texty, které prodávají', desc: 'Tvoříme copy, které upoutá pozornost a vede k akci.' },
        { type: 'serviceItem', icon: 'settings', title: 'Segmentace a cílení', desc: 'Správný obsah pro správnou skupinu lidí ve správný čas.' },
        { type: 'serviceItem', icon: 'search', title: 'Rozesílání, testování a reporty', desc: 'Používáme profesionální nástroje (např. MailerLite, Mailchimp, Ecomail).' },
        { type: 'heading', text: 'Jak spolupráce probíhá?' },
        { type: 'step', title: 'Úvodní zadání & poznání cílů', desc: 'Společně nastavíme, čeho má newsletter dosahovat.' },
        { type: 'step', title: 'Návrh a schválení designu + obsahu', desc: 'Vše uvidíte předem a upravíme podle vašich připomínek.' },
        { type: 'step', title: 'Odeslání a vyhodnocení', desc: 'Rozesíláme, sledujeme, vyhodnocujeme a optimalizujeme další kampaně.' },
        { type: 'heading', text: 'I jeden e-mail může přinést stovky objednávek' },
        { type: 'paragraph', text: 'Správně cílený newsletter je jako nenápadný obchodník – dorazí přímo do schránky vašeho zákazníka ve správný moment.' },
        {
          type: 'pricing',
          title: 'Cena Emailingu:',
          items: [
            { label: 'Nastavení automatizace e-mailů', price: '120 €' },
            { label: 'Nastavení a propojení', price: '60 €' },
            { label: 'Odeslání jednoho newsletteru s grafikou po nastavení šablony', price: '35 €' },
          ],
        },
      ],
    },
    en: {
      heroTitle: 'Emailing',
      sections: [
        {
          type: 'paragraph',
          text: 'Newsletters that engage customers and convert into orders. Forget boring bulk emails. We create newsletters people won’t delete — they will open and click. Regular email communication is one of the most effective marketing channels when done right.',
        },
        { type: 'heading', text: 'Why include newsletters in your marketing?' },
        {
          type: 'list',
          items: [
            'Builds trust and a long-term customer relationship',
            'Keeps your brand and products top of mind',
            'Excellent cost/performance ratio',
            'Suitable for small businesses, e-shops and larger brands',
          ],
        },
        {
          type: 'quote',
          text: 'It is not only about winning a customer. It is about making sure they do not forget you.',
        },
        { type: 'heading', text: 'What we deliver for you?' },
        { type: 'serviceItem', icon: 'chart', title: 'Newsletter structure and content planning', desc: 'We design a clear and sales-oriented format: offers, news, tips, discounts and recommendations.' },
        { type: 'serviceItem', icon: 'social', title: 'Eye-catching graphic design', desc: 'Custom visuals aligned with your brand identity.' },
        { type: 'serviceItem', icon: 'message', title: 'Copy that sells', desc: 'We write copy that grabs attention and drives action.' },
        { type: 'serviceItem', icon: 'settings', title: 'Segmentation and targeting', desc: 'The right message to the right audience at the right time.' },
        { type: 'serviceItem', icon: 'search', title: 'Sending, testing and reporting', desc: 'We use professional tools (e.g. MailerLite, Mailchimp, Ecomail).' },
        { type: 'heading', text: 'How our cooperation works' },
        { type: 'step', title: 'Initial brief & goal definition', desc: 'Together we define what your newsletter should achieve.' },
        { type: 'step', title: 'Design + content proposal and approval', desc: 'You review everything in advance and we adjust based on your feedback.' },
        { type: 'step', title: 'Send-out and evaluation', desc: 'We send, track, evaluate and optimise the next campaigns.' },
        { type: 'heading', text: 'Even one email can bring hundreds of orders' },
        { type: 'paragraph', text: 'A properly targeted newsletter is like a subtle salesperson — it lands in your customer’s inbox at exactly the right moment.' },
        {
          type: 'pricing',
          title: 'Emailing pricing:',
          items: [
            { label: 'Email automation setup', price: '€120' },
            { label: 'Setup and integration', price: '€60' },
            { label: 'Sending one newsletter with graphics after template setup', price: '€35' },
          ],
        },
      ],
    },
    sk: {
      heroTitle: 'Emailing',
      sections: [
        {
          type: 'paragraph',
          text: 'Newsletter, ktorý zákazníkov zaujme aj premení na objednávku. Zabudnite na nudné hromadné maily. Vytvoríme vám newslettery, ktoré ľudia nevymažú – ale na ne kliknú. Pravidelná e-mailová komunikácia patrí k najefektívnejším formám marketingu, ak sa robí správne.',
        },
        { type: 'heading', text: 'Prečo zaradiť newsletter do marketingu?' },
        {
          type: 'list',
          items: [
            'Buduje dôveru a vzťah so zákazníkom',
            'Pravidelne pripomína vašu značku a produkty',
            'Má výborný pomer cena/výkon',
            'Vhodný pre malé firmy, e-shopy aj väčšie značky',
          ],
        },
        {
          type: 'quote',
          text: 'Nie je dôležité len získať zákazníka. Dôležité je, aby na vás nezabudol.',
        },
        { type: 'heading', text: 'Čo pre vás zabezpečíme?' },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Návrh štruktúry a obsahu newslettera',
          desc: 'Vymyslíme zrozumiteľný a predajný formát: akcie, novinky, tipy, zľavy, odporúčania.',
        },
        {
          type: 'serviceItem',
          icon: 'social',
          title: 'Grafický dizajn, ktorý zaujme',
          desc: 'Na mieru navrhnutý vizuál v súlade s vašou značkou.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Texty, ktoré predávajú',
          desc: 'Tvoríme copy, ktoré chytí za pozornosť a vedie k akcii.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Segmentácia a cielenie',
          desc: 'Správny obsah pre správnu skupinu ľudí v správny čas.',
        },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Rozosielanie, testovanie a reporty',
          desc: 'Používame profesionálne nástroje (napr. MailerLite, Mailchimp, Ecomail).',
        },
        { type: 'heading', text: 'Ako spolupráca prebieha?' },
        {
          type: 'step',
          title: 'Úvodné zadanie & poznanie cieľov',
          desc: 'Spoločne si stanovíme, čo chcete newslettrom dosiahnuť.',
        },
        {
          type: 'step',
          title: 'Návrh a schválenie dizajnu + obsahu',
          desc: 'Všetko uvidíte vopred, upravíme podľa vašich pripomienok.',
        },
        {
          type: 'step',
          title: 'Odoslanie a vyhodnotenie',
          desc: 'Pošleme, sledujeme, vyhodnocujeme – a optimalizujeme ďalšie kampane.',
        },
        { type: 'heading', text: 'Aj jeden e-mail môže priniesť stovky objednávok' },
        {
          type: 'paragraph',
          text: 'Správne cielený newsletter je ako nenápadný obchodník – dorazí priamo do schránky vášho zákazníka v správny moment.',
        },
        {
          type: 'pricing',
          title: 'Cena Emailingu:',
          items: [
            { label: 'Nastavenie automatizácie emailov', price: '120 €' },
            { label: 'Nastavenie a prepojenie', price: '60 €' },
            { label: 'Odoslanie jedného newsletteru s grafikou po nastavení šablóny', price: '35 €' },
          ],
        },
      ],
    },
  },
  'audit-kampane': {
    cs: {
      heroTitle: 'Audit stránek a kampaní',
      sections: [
        {
          type: 'paragraph',
          text: 'Audit stránek a kampaní, který vám otevře oči. Nevyhazujte peníze za marketing, který nefunguje. Zkontrolujeme, kde vám utíkají zákazníci, proč web neprodává nebo kampaně nevydělávají — a přesně vám ukážeme, co s tím.',
        },
        { type: 'heading', text: 'Proč nestačí jen spustit kampaně a doufat v zázraky?' },
        {
          type: 'paragraph',
          text: 'Audit není jen výpis chyb — je to návod, jak zlepšit výsledky bez zbytečných nákladů. Identifikujeme slabá místa, odhalíme nevyužitý potenciál a připravíme jasná doporučení.',
        },
        {
          type: 'list',
          items: [
            'Rychlá analýza výkonu vašeho webu a kampaní',
            'Doporučení, která můžete hned použít',
            'Žádné omáčky — jen konkrétní návrhy',
            'Reálná zlepšení v konverzích, rychlosti i cílení',
          ],
        },
        {
          type: 'quote',
          text: 'Malá změna v kódu nebo kampani často přinese velký rozdíl ve výsledcích.',
        },
        { type: 'heading', text: 'Co všechno auditujeme?' },
        { type: 'serviceItem', icon: 'search', title: 'Webové stránky', desc: 'Rychlost načítání, UX, responzivita, CTA prvky, struktura obsahu a technické chyby.' },
        { type: 'serviceItem', icon: 'chart', title: 'Google Ads a Facebook kampaně', desc: 'Cílení, copy, nastavení konverzí, návratnost investice a struktura účtu.' },
        { type: 'serviceItem', icon: 'settings', title: 'SEO a zpětné odkazy', desc: 'Technické SEO, pozice ve vyhledávání, prolinkování a nedostatek autority.' },
        { type: 'serviceItem', icon: 'message', title: 'Konverzní efektivita', desc: 'Kde lidé odcházejí, co je brzdí a proč neobjednávají nebo nenakupují.' },
        { type: 'heading', text: 'Jak audit probíhá?' },
        { type: 'step', title: 'Zadání a přístup k datům', desc: 'Získáme přístup do webu nebo reklamních účtů (pokud je potřeba).' },
        { type: 'step', title: 'Diagnostika a analýza', desc: 'Vyhodnotíme technickou kvalitu, výkon i marketingové nastavení.' },
        { type: 'step', title: 'Výstupní report a konzultace', desc: 'Dodáme přehledný dokument s konkrétními návrhy a doporučeným postupem.' },
        { type: 'step', title: 'Pomoc s implementací (volitelné)', desc: 'Můžeme vám pomoci i s přímým zavedením změn.' },
        { type: 'heading', text: 'Chcete vědět, proč nefunguje to, co má?' },
        { type: 'paragraph', text: 'Web neprodává? Kampaně stojí hodně a nepřinášejí výsledky? Nechte to na nás — zjistíme, co brzdí váš růst.' },
        { type: 'paragraph', text: 'Získejte nezávislý pohled na váš online marketing. Audit vám pomůže ušetřit peníze, čas i frustraci.' },
      ],
    },
    en: {
      heroTitle: 'Website & campaign audit',
      sections: [
        {
          type: 'paragraph',
          text: 'A website and campaign audit that opens your eyes. Stop spending money on marketing that does not work. We identify where you are losing customers, why your website does not convert, or why your campaigns are not profitable — and show you exactly how to fix it.',
        },
        { type: 'heading', text: 'Why is launching campaigns and hoping not enough?' },
        {
          type: 'paragraph',
          text: 'An audit is not just a list of errors — it is a practical roadmap to better results without unnecessary costs. We identify weak points, uncover hidden potential and provide clear recommendations.',
        },
        {
          type: 'list',
          items: [
            'Fast performance analysis of your website and campaigns',
            'Actionable recommendations you can use immediately',
            'No fluff — only concrete suggestions',
            'Real improvements in conversions, speed and targeting',
          ],
        },
        {
          type: 'quote',
          text: 'A small change in code or campaign setup often creates a big difference in results.',
        },
        { type: 'heading', text: 'What do we audit?' },
        { type: 'serviceItem', icon: 'search', title: 'Websites', desc: 'Loading speed, UX, responsiveness, CTA elements, content structure and technical issues.' },
        { type: 'serviceItem', icon: 'chart', title: 'Google Ads and Facebook campaigns', desc: 'Targeting, ad copy, conversion setup, ROI and account structure.' },
        { type: 'serviceItem', icon: 'settings', title: 'SEO and backlinks', desc: 'Technical SEO, search visibility, internal linking and authority gaps.' },
        { type: 'serviceItem', icon: 'message', title: 'Conversion efficiency', desc: 'Where users drop off, what blocks them and why they do not convert.' },
        { type: 'heading', text: 'How the audit works' },
        { type: 'step', title: 'Brief and data access', desc: 'We get access to your website or ad accounts (if needed).' },
        { type: 'step', title: 'Diagnostics and analysis', desc: 'We evaluate technical quality, performance and marketing setup.' },
        { type: 'step', title: 'Final report and consultation', desc: 'You receive a clear report with specific recommendations and next steps.' },
        { type: 'step', title: 'Implementation support (optional)', desc: 'If needed, we can help you implement the changes directly.' },
        { type: 'heading', text: 'Want to know why things are not working?' },
        { type: 'paragraph', text: 'Your website does not convert? Campaigns are expensive and underperforming? Leave it to us — we will pinpoint what is holding your growth back.' },
        { type: 'paragraph', text: 'Get an independent perspective on your online marketing. The audit saves you money, time and frustration.' },
      ],
    },
    sk: {
      heroTitle: 'Audit stránok a kampaní',
      sections: [
        {
          type: 'paragraph',
          text: 'Audit stránok a kampaní, ktorý vám otvorí oči. Nevyhadzujte peniaze na marketing, ktorý nefunguje. Skontrolujeme za vás, kde vám unikajú zákazníci, prečo vám web nepredáva alebo kampane nezarábajú – a presne vám ukážeme, čo s tým.',
        },
        { type: 'heading', text: 'Prečo nestačí len spustiť kampane a dúfať v zázraky?' },
        {
          type: 'paragraph',
          text: 'Audit nie je len výpis chýb – je to návod, ako zlepšiť výsledky bez zbytočných nákladov. Identifikujeme slabé miesta, odhalíme nevyužitý potenciál a pripravíme jasné odporúčania.',
        },
        {
          type: 'list',
          items: [
            'Rýchla analýza výkonu vášho webu a kampaní',
            'Odporúčania, ktoré môžete hneď použiť',
            'Žiadne omáčky – len konkrétne návrhy',
            'Reálne zlepšenia v konverziách, rýchlosti či cielení',
          ],
        },
        {
          type: 'quote',
          text: 'Malá zmena v kóde alebo v kampani často prinesie veľký rozdiel vo výsledkoch.',
        },
        { type: 'heading', text: 'Čo všetko auditujeme?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Webové stránky',
          desc: 'Rýchlosť načítania, UX, responzivita, CTA prvky, štruktúra obsahu a technické chyby.',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Google Ads a Facebook kampane',
          desc: 'Cielenie, copy, nastavenie konverzií, návratnosť investície a štruktúra účtu.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'SEO a spätné odkazy',
          desc: 'Technické SEO, pozície vo vyhľadávaní, prelinkovanie a nedostatok autority.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Konverzná efektivita',
          desc: 'Kde ľudia opúšťajú web, čo ich brzdí a prečo sa neobjednajú alebo nenakúpia.',
        },
        { type: 'heading', text: 'Ako prebieha audit?' },
        {
          type: 'step',
          title: 'Zadanie a prístup k údajom',
          desc: 'Získame prístup do vášho webu alebo reklamných účtov (ak treba).',
        },
        {
          type: 'step',
          title: 'Diagnostika a analýza',
          desc: 'Zhodnotíme technickú kvalitu, výkon aj marketingové nastavenia.',
        },
        {
          type: 'step',
          title: 'Výstupný report a konzultácia',
          desc: 'Dodáme vám prehľadný dokument s konkrétnymi návrhmi a odporúčaným postupom.',
        },
        {
          type: 'step',
          title: 'Pomoc s implementáciou (voliteľné)',
          desc: 'Môžeme vám pomôcť aj priamo so zavedením zmien.',
        },
        { type: 'heading', text: 'Chcete vedieť, prečo nefunguje to, čo má?' },
        {
          type: 'paragraph',
          text: 'Web nepredáva? Kampane stoja veľa a neprinášajú výsledky? Nechajte to na nás – zistíme, čo brzdí váš rast.',
        },
        {
          type: 'paragraph',
          text: 'Získajte nezávislý pohľad na váš online marketing. Audit vám pomôže ušetriť peniaze, čas aj frustráciu.',
        },
      ],
    },
  },
  'seo-sluzby': {
    cs: {
      heroTitle: 'SEO & obsahový marketing',
      sections: [
        {
          type: 'paragraph',
          text: 'SEO & obsahový marketing, který vám zajistí pozice i důvěru. Zapomeňte na triky pro roboty. Moderní SEO je o kvalitě, důvěryhodnosti a strategickém obsahu. Pomůžeme vám, aby vás Google miloval – a zákazníci si vás všimli jako první.',
        },
        { type: 'heading', text: 'Proč investovat do SEO a obsahového marketingu?' },
        {
          type: 'paragraph',
          text: 'Budujeme vaši autoritu krok za krokem. Naše SEO služby nejsou jen o technické optimalizaci. Zaměřujeme se na off-page SEO – tedy budování zpětných odkazů z kvalitních webů a tvorbu obsahu, který zaujme lidi i algoritmy.',
        },
        {
          type: 'list',
          items: [
            'Pracujeme s ověřenými nástroji jako Placla, WhitePress, Linketica, Collabim a další',
            'Vybíráme jen relevantní a hodnotné weby – žádné spamové farmy',
            'Každý odkaz má své místo ve strategii – víme kam, jak často a proč',
          ],
        },
        {
          type: 'quote',
          text: 'Kvalitní zpětné odkazy jsou jako doporučení od důvěryhodných lidí – Google je poslouchá.',
        },
        { type: 'heading', text: 'Co pro vás zajistíme?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Linkbuilding přes články a PR výstupy',
          desc: 'Zajistíme publikaci článků na tematických portálech s vysokou autoritou.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Tvorbu obsahu pro externí i interní využití',
          desc: 'Copywriting, který je SEO-friendly a zároveň čitelný a poutavý.',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analýzu a návrh linkbuilding strategie',
          desc: 'Ukážeme, kde jste teď, kam se chcete dostat a co je k tomu potřeba.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Plán publikací a sledování efektivity',
          desc: 'Reportujeme odkazy, jejich hodnotu a dopad na pozice.',
        },
        { type: 'heading', text: 'Jak pracujeme?' },
        {
          type: 'step',
          title: 'Audit & klíčová slova',
          desc: 'Zjistíme, kde máte slabá místa a kde máte šanci prorazit.',
        },
        {
          type: 'step',
          title: 'Návrh obsahové a linkbuilding strategie',
          desc: 'Vybereme témata, portály a typy obsahu.',
        },
        {
          type: 'step',
          title: 'Tvorba a publikace',
          desc: 'Vytvoříme články, které vám pomohou stoupat ve výsledcích vyhledávání.',
        },
        {
          type: 'step',
          title: 'Reportování a optimalizace',
          desc: 'Průběžně sledujeme vývoj a upravujeme strategii podle výsledků.',
        },
        {
          type: 'cta',
          text: 'Zviditelněte se u těch, kteří vás hledají. Zvyšte svoji pozici ve vyhledávačích, získejte kvalitní odkazy a proměňte návštěvnost na zákazníky. Chcete vědět, kde vám chybí odkazy a jak je efektivně získat? Ozvěte se nám – připravíme vám linkbuilding strategii na míru.',
          button: 'Chci SEO strategii na míru',
        },
      ],
    },
    sk: {
      heroTitle: 'SEO & obsahový marketing',
      sections: [
        {
          type: 'paragraph',
          text: 'SEO & obsahový marketing, ktorý vám zaručí pozície aj dôveru. Zabudnite na triky pre robotov. Moderné SEO je o kvalite, dôveryhodnosti a strategickom obsahu. Pomôžeme vám, aby vás Google miloval – a zákazníci si vás všimli ako prvých.',
        },
        { type: 'heading', text: 'Prečo investovať do SEO a obsahového marketingu?' },
        {
          type: 'paragraph',
          text: 'Budujeme vašu autoritu krok po kroku. Naše SEO služby nie sú len o technickej optimalizácii. Zameriavame sa na off-page SEO – teda budovanie spätných odkazov z kvalitných webov a tvorbu obsahu, ktorý zaujme ľudí aj algoritmy.',
        },
        {
          type: 'list',
          items: [
            'Pracujeme s overenými nástrojmi ako Placla, WhitePress, Linketica, Collabim a iné',
            'Vyberáme len relevantné a hodnotné weby – žiadne spamové farmy',
            'Každý odkaz má svoj význam v stratégii – vieme kam, ako často a prečo',
          ],
        },
        {
          type: 'quote',
          text: 'Kvalitné spätné odkazy sú ako odporúčania od dôveryhodných ľudí – Google ich počúva.',
        },
        { type: 'heading', text: 'Čo pre vás zabezpečíme?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Linkbuilding cez články a PR výstupy',
          desc: 'Zabezpečíme publikáciu článkov na tematických portáloch s vysokou autoritou.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Tvorbu obsahu pre externé aj interné využitie',
          desc: 'Copywriting, ktorý je SEO-friendly a zároveň čitateľný a pútavý.',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analýzu a návrh linkbuilding stratégie',
          desc: 'Ukážeme, kde ste teraz, kam sa chcete dostať a čo je na to potrebné.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Plán publikácií a sledovanie efektivity',
          desc: 'Reportujeme odkazy, ich hodnotu a dopad na pozície.',
        },
        { type: 'heading', text: 'Ako pracujeme?' },
        {
          type: 'step',
          title: 'Audit & kľúčové slová',
          desc: 'Zistíme, kde máte slabé miesta a kde máte šancu preraziť.',
        },
        {
          type: 'step',
          title: 'Návrh obsahovej a linkbuilding stratégie',
          desc: 'Vyberieme témy, portály a typy obsahu.',
        },
        {
          type: 'step',
          title: 'Tvorba a publikácia',
          desc: 'Vytvoríme články, ktoré vám pomôžu stúpať v rebríčkoch.',
        },
        {
          type: 'step',
          title: 'Reportovanie a optimalizácia',
          desc: 'Priebežne sledujeme vývoj a upravujeme stratégiu podľa výsledkov.',
        },
      ],
    },
    en: {
      heroTitle: 'SEO & content marketing',
      sections: [
        {
          type: 'paragraph',
          text: 'SEO & content marketing that builds both rankings and trust. Forget tricks for bots. Modern SEO is about quality, credibility and strategic content. We help you become visible to Google — and unforgettable to your customers.',
        },
        { type: 'heading', text: 'Why invest in SEO and content marketing?' },
        {
          type: 'paragraph',
          text: 'We build your authority step by step. Our SEO services are not only about technical optimisation. We focus on off-page SEO — building quality backlinks and creating content that resonates with both people and algorithms.',
        },
        {
          type: 'list',
          items: [
            'We work with proven tools such as Placla, WhitePress, Linketica, Collabim and more',
            'We select only relevant, high-value websites — no spam farms',
            'Every backlink has a clear role in the strategy — we know where, how often and why',
          ],
        },
        {
          type: 'quote',
          text: 'High-quality backlinks are like recommendations from trusted people — Google listens.',
        },
        { type: 'heading', text: 'What do we deliver for you?' },
        {
          type: 'serviceItem',
          icon: 'search',
          title: 'Link building through articles and PR placements',
          desc: 'We secure publication on thematic websites with strong authority.',
        },
        {
          type: 'serviceItem',
          icon: 'message',
          title: 'Content creation for external and internal use',
          desc: 'SEO-friendly copywriting that is also readable and engaging.',
        },
        {
          type: 'serviceItem',
          icon: 'chart',
          title: 'Analysis and backlink strategy design',
          desc: 'We show where you are now, where you want to be and what it takes to get there.',
        },
        {
          type: 'serviceItem',
          icon: 'settings',
          title: 'Publishing plan and performance tracking',
          desc: 'We report backlinks, their value and their impact on rankings.',
        },
        { type: 'heading', text: 'How we work' },
        {
          type: 'step',
          title: 'Audit & keyword research',
          desc: 'We identify weak spots and opportunities where you can break through.',
        },
        {
          type: 'step',
          title: 'Content and link-building strategy',
          desc: 'We choose topics, websites and content formats.',
        },
        {
          type: 'step',
          title: 'Creation and publishing',
          desc: 'We produce content that helps you move up in search results.',
        },
        {
          type: 'step',
          title: 'Reporting and optimisation',
          desc: 'We continuously monitor progress and refine the strategy based on results.',
        },
        {
          type: 'cta',
          text: 'Get discovered by people who are already looking for you. Improve your rankings, gain quality backlinks and turn traffic into customers. Want to know where you are missing links and how to build them effectively? Get in touch — we will prepare a custom link-building strategy for you.',
          button: 'I want a custom SEO strategy',
        },
      ],
    },
  },
};

export function getServicePageData(slug: ServiceSlug, locale: Locale): ServicePageData | null {
  const bySlug = servicePages[slug];
  if (!bySlug) return null;
  const data = bySlug[locale];
  return data ?? null;
}
