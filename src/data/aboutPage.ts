/**
 * Obsah stránky Kdo jsme / O nás / About us
 */

export interface AboutTeamMember {
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  email?: string;
  website?: string;
  /** URL fotky (např. z LinkedIn) – pokud chybí, zobrazí se avatar z iniciál */
  photo?: string;
  /** Alternativní text k fotce člena týmu */
  photoAlt?: string;
}

export interface AboutHodnota {
  title: string;
  text: string;
}

export interface AboutContactPill {
  label: string;
  href: string;
}

export interface AboutExperience {
  period: string;
  role: string;
  company: string;
}

export interface AboutTool {
  abbr: string;
  name: string;
  desc: string;
}

export interface AboutLanguage {
  lang: string;
  level: string;
}

export interface AboutPageContent {
  tag: string;
  title: string;
  heroTitle: string;
  heroLabel: string;
  heroSubLeft: string;
  heroSubRight: string;
  /** Jméno / značka v oranžové v summary pruhu */
  summaryName: string;
  /** Podtitul (např. „Digitální agentura“) */
  summaryRole: string;
  /** Krátký úvodní text v summary */
  summaryIntro: string;
  /** Text vpravo (credits / copyright) */
  summaryCredits: string;
  intro1: string;
  intro2: string;
  /** Oranžové tlačítka pod HELLO (kontakt, email, …) */
  contactPills: AboutContactPill[];
  /** Timeline zkušeností */
  experience: AboutExperience[];
  /** Nástroje / specializace (boxy jako Pr, Ae) */
  tools: AboutTool[];
  toolsTitle: string;
  experienceTitle: string;
  languagesTitle: string;
  /** Jazyky */
  languages: AboutLanguage[];
  cta1Title: string;
  intro1: string;
  intro2: string;
  cta1ImageAlt: string;
  section2Title: string;
  /** Nadpis bloku představení firmy (jeden box: Mise, Vize, Hodnoty) */
  introLabel: string;
  misiaTitle: string;
  misiaText: string;
  viziaTitle: string;
  viziaText: string;
  hodnotyTitle: string;
  hodnotyItems: AboutHodnota[];
  cta2Heading: string;
  cta2Sub: string;
  cta2Button: string;
  teamTitle: string;
  team: AboutTeamMember[];
  partnerTitle: string;
  partnerText: string;
  partnerButton: string;
}

export const aboutPageContent: Record<'cs' | 'sk' | 'en', AboutPageContent> = {
  cs: {
    tag: 'Kdo jsme',
    title: 'Digitance v kostce',
    heroTitle: 'O NÁS',
    heroLabel: 'Založeno 2025',
    heroSubLeft: 'působíme v Česku a na Slovensku',
    heroSubRight: 'Digitance',
    summaryName: 'Digitance',
    summaryRole: 'Digitální agentura',
    summaryIntro: 'Jsme Digitance – digitální agentura zaměřená na tvorbu webů, e-shopů a online reklamy. Naší specializací je platforma Shoptet, díky které dokážeme vytvořit moderní a efektivní e-shop ušitý na míru každému klientovi – od malých podnikatelů až po etablované značky.\n\nKromě technické stránky se věnujeme i výkonnostnímu marketingu. Připojujeme a spravujeme reklamní kampaně v Google Ads, Skliku, na sociálních sítích a v mailingových nástrojích. Naším cílem je pomáhat firmám uspět v online prostoru – s důrazem na výsledky, jednoduchost a fér přístup.',
    summaryCredits: 'Copyright © 2025 Digitance',
    contactPills: [
      { label: 'Kontaktní formulář', href: '/cs/kontakt/' },
      { label: 'info@digitance.cz', href: 'mailto:info@digitance.cz' },
    ],
    experience: [
      { period: 'současnost', role: 'Digitance', company: 'Digitální agentura' },
      { period: 'dříve', role: 'Shoptet partner', company: 'E-shopy a weby' },
    ],
    tools: [
      { abbr: 'Sh', name: 'Shoptet', desc: 'E-shopy na míru' },
      { abbr: 'Wp', name: 'WordPress', desc: 'Weby a prezentace' },
      { abbr: 'Ga', name: 'Google Ads', desc: 'Výkonnostní reklama' },
    ],
    toolsTitle: 'Nástroje',
    experienceTitle: 'Zkušenosti',
    languagesTitle: 'Jazyky',
    languages: [
      { lang: 'Čeština', level: 'rodilý' },
      { lang: 'Slovenština', level: 'rodilý' },
      { lang: 'Angličtina', level: 'pokročilý' },
    ],
    intro1: 'Jsme Digitance – digitální agentura zaměřená na tvorbu webů, e-shopů a online reklamy. Naší specializací je platforma Shoptet, díky které dokážeme vytvořit moderní a efektivní e-shop ušitý na míru každému klientovi – od malých podnikatelů až po etablované značky.',
    intro2: 'Kromě technické stránky se věnujeme i výkonnostnímu marketingu. Připojujeme a spravujeme reklamní kampaně v Google Ads, Skliku, na sociálních sítích a v mailingových nástrojích. Naším cílem je pomáhat firmám uspět v online prostoru – s důrazem na výsledky, jednoduchost a fér přístup.',
    cta1Title: 'Začněme spolupracovat',
    cta1ImageAlt: 'Podnikatelka připravuje balík k odeslání z e-shopu vytvořeného na Shoptetu',
    section2Title: 'Víme, kam kráčíme a proč to děláme',
    introLabel: 'Představení',
    misiaTitle: 'Mise',
    misiaText: 'Pomáháme firmám uspět v online prostoru díky kvalitním webům, efektivním e-shopům a výkonnostnímu marketingu. Naší misí je zjednodušovat podnikání na internetu tak, aby si každá značka – malá i velká – mohla vybudovat své místo na trhu a růst.',
    viziaTitle: 'Vize',
    viziaText: 'Stát se důvěryhodným partnerem pro e-commerce značky na Slovensku a v Česku. Chceme být synonymem pro jednoduše fungující řešení, která spojují technologii, marketing a lidský přístup. Řešení, která přinášejí výsledky a zároveň dávají klientům klid a jistotu v podnikání.',
    hodnotyTitle: 'Hodnoty',
    hodnotyItems: [
      { title: 'Jednoduchost', text: 'věříme, že funkční věci mohou být srozumitelné a efektivní zároveň.' },
      { title: 'Spolehlivost', text: 'dodržujeme termíny, mluvíme na rovinu a stojíme si za svou prací.' },
      { title: 'Partnerství', text: 'ke každému klientovi přistupujeme osobně a hledáme řešení, která dávají smysl pro jeho byznys.' },
    ],
    cta2Heading: 'Chcete zjistit, co pro vás může udělat profesionální digitální marketing, výkonné PPC kampaně nebo správně nastavený e-shop?',
    cta2Sub: 'Kontaktujte nás a domluvme si nezávaznou konzultaci.',
    cta2Button: 'Začněme spolupracovat',
    teamTitle: 'Kdo jsme?',
    team: [
      {
        name: 'Stano',
        role: 'WordPress specialista & webový architekt',
        description: 'Tvorba webových stránek na WordPresse je jeho druhé já. Je detailista s důrazem na každý pixel – nic mu neunikne. Miluje, když vše funguje hladce, technicky správně a s estetickou přesností. Pokud chcete web, který bude nejen krásný, ale i funkční, Stano je váš člověk.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'stanislav.hazucha@digitance.eu',
        website: 'https://shazucha.sk/',
        photo: '/images/stano-hazucha.jpeg',
      },
      {
        name: 'Lukáš',
        role: 'Google Partner & PPC stratég',
        description: 'Certifikovaný Google Partner a Shoptet specialista, který nastavuje kampaně s jasným cílem: vydělávat. Je zároveň stříbrným partnerem Shoptet.cz, díky čemuž jsou vaše e-shopy v těch nejlepších rukou. Ví, jak propojit technické nastavení se ziskovým výkonem.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'lukas.koula@digitance.eu',
        website: 'https://lukaskoula.com',
        photo: '/images/lukas-koula.webp',
        photoAlt: 'Na obrázku je Lukáš Koula',
      },
    ],
    partnerTitle: 'Jsme vaši partneři, ne jen dodavatelé',
    partnerText: 'Digitance není jen další digitální agentura. Jsme váš partner, který staví spolupráci na důvěře, jasné komunikaci a lidském přístupu. U nás nejste jen „další klient“ – jste značka, které chceme pomoci růst, zviditelnit se a dosahovat lepších výsledků v online prostoru.',
    partnerButton: 'Začít projekt',
  },
  sk: {
    tag: 'Kto sme',
    title: 'Digitance v skratke',
    heroTitle: 'O NÁS',
    heroLabel: 'Založené 2025',
    heroSubLeft: 'pôsobíme v Česku a na Slovensku',
    heroSubRight: 'Digitance',
    summaryName: 'Digitance',
    summaryRole: 'Digitálna agentúra',
    summaryIntro: 'Sme Digitance – digitálna agentúra zameraná na tvorbu webov, e-shopov a online reklamy. Našou špecializáciou je platforma Shoptet, vďaka ktorej dokážeme vytvoriť moderný a efektívny e-shop šitý na mieru každému klientovi – od malých podnikateľov až po etablované značky.\n\nOkrem technickej stránky sa venujeme aj výkonnostnému marketingu. Pripájame a spravujeme reklamné kampane v Google Ads, Skliku, na sociálnych sieťach a v mailingových nástrojoch. Naším cieľom je pomáhať firmám uspieť v online priestore – s dôrazom na výsledky, jednoduchosť a férový prístup.',
    summaryCredits: 'Copyright © 2025 Digitance',
    contactPills: [
      { label: 'Kontaktný formulár', href: '/sk/kontakt/' },
      { label: 'info@digitance.cz', href: 'mailto:info@digitance.cz' },
    ],
    experience: [
      { period: 'súčasnosť', role: 'Digitance', company: 'Digitálna agentúra' },
      { period: 'predtým', role: 'Shoptet partner', company: 'E-shopy a weby' },
    ],
    tools: [
      { abbr: 'Sh', name: 'Shoptet', desc: 'E-shopy na mieru' },
      { abbr: 'Wp', name: 'WordPress', desc: 'Weby a prezentácie' },
      { abbr: 'Ga', name: 'Google Ads', desc: 'Výkonnostná reklama' },
    ],
    toolsTitle: 'Nástroje',
    experienceTitle: 'Skúsenosti',
    languagesTitle: 'Jazyky',
    languages: [
      { lang: 'Slovenčina', level: 'rodilý' },
      { lang: 'Čeština', level: 'rodilý' },
      { lang: 'Angličtina', level: 'pokročilý' },
    ],
    intro1: 'Sme Digitance – digitálna agentúra zameraná na tvorbu webov, e-shopov a online reklamy. Našou špecializáciou je platforma Shoptet, vďaka ktorej dokážeme vytvoriť moderný a efektívny e-shop šitý na mieru každému klientovi – od malých podnikateľov až po etablované značky.',
    intro2: 'Okrem technickej stránky sa venujeme aj výkonnostnému marketingu. Pripájame a spravujeme reklamné kampane v Google Ads, Skliku, na sociálnych sieťach a v mailingových nástrojoch. Naším cieľom je pomáhať firmám uspieť v online priestore – s dôrazom na výsledky, jednoduchosť a férový prístup.',
    cta1Title: 'Začnime spolupracovať',
    cta1ImageAlt: 'Podnikateľka pripravuje balík na odoslanie z e-shopu vytvoreného na Shoptete',
    section2Title: 'Vieme, kam kráčame a prečo to robíme',
    introLabel: 'Predstavenie',
    misiaTitle: 'Misia',
    misiaText: 'Pomáhame firmám uspieť v online priestore vďaka kvalitným webom, efektívnym e-shopom a výkonnostnému marketingu. Našou misiou je zjednodušovať podnikanie na internete tak, aby si každá značka – malá aj veľká – mohla vybudovať svoj priestor na trhu a rásť.',
    viziaTitle: 'Vízia',
    viziaText: 'Stať sa dôveryhodným partnerom pre e-commerce značky na Slovensku a v Česku. Chceme byť synonymom pre jednoducho fungujúce riešenia, ktoré spájajú technológiu, marketing a ľudský prístup. Riešenia, ktoré prinášajú výsledky a zároveň dávajú klientom pokoj a istotu v podnikaní.',
    hodnotyTitle: 'Hodnoty',
    hodnotyItems: [
      { title: 'Jednoduchosť', text: 'veríme, že funkčné veci môžu byť zrozumiteľné a efektívne zároveň.' },
      { title: 'Spoľahlivosť', text: 'dodržiavame termíny, hovoríme narovinu a stojíme si za svojou prácou.' },
      { title: 'Partnerstvo', text: 'ku každému klientovi pristupujeme osobne a hľadáme riešenia, ktoré majú zmysel pre jeho biznis.' },
    ],
    cta2Heading: 'Chcete zistiť, čo pre vás môže urobiť profesionálny digitálny marketing, výkonné PPC kampane alebo správne nastavený e-shop?',
    cta2Sub: 'Kontaktujte nás a dohodnime si nezáväznú konzultáciu.',
    cta2Button: 'Začnime spolupracovať',
    teamTitle: 'Kto sme?',
    team: [
      {
        name: 'Stano',
        role: 'WordPress špecialista & webový architekt',
        description: 'Tvorba web stránok na WordPresse je jeho druhé ja. Je detailista s dôrazom na každý pixel – nič mu neunikne. Miluje, keď všetko funguje hladko, technicky správne a s estetickou presnosťou. Ak chcete web, ktorý bude nielen krásny, ale aj funkčný, Stano je váš človek.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'stanislav.hazucha@digitance.eu',
        website: 'https://shazucha.sk/',
        photo: '/images/stano-hazucha.jpeg',
      },
      {
        name: 'Lukáš',
        role: 'Google Partner & PPC stratég',
        description: 'Certifikovaný Google Partner a Shoptet špecialista, ktorý nastavuje kampane s jasným cieľom: zarábať. Je zároveň strieborným partnerom Shoptet.cz, vďaka čomu sú vaše e-shopy v tých najlepších rukách. Vie, ako prepojiť technické nastavenie so ziskovým výkonom.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'lukas.koula@digitance.eu',
        website: 'https://lukaskoula.com',
        photo: '/images/lukas-koula.webp',
        photoAlt: 'Na obrázku je Lukáš Koula',
      },
    ],
    partnerTitle: 'Sme vaši partneri, nie len dodávatelia',
    partnerText: 'Digitance nie je len ďalšia digitálna agentúra. Sme váš partner, ktorý stavia spoluprácu na dôvere, jasnej komunikácii a ľudskom prístupe. U nás nie ste len „ďalší klient“ – ste značka, ktorej chceme pomôcť rásť, zviditeľniť sa a dosahovať lepšie výsledky v online priestore.',
    partnerButton: 'Začať projekt',
  },
  en: {
    tag: 'Who we are',
    title: 'Digitance in a nutshell',
    heroTitle: 'ABOUT US',
    heroLabel: 'Founded 2025',
    heroSubLeft: 'we operate in the Czech Republic and Slovakia',
    heroSubRight: 'Digitance',
    summaryName: 'Digitance',
    summaryRole: 'Digital agency',
    summaryIntro: 'We are Digitance – a digital agency focused on building websites, e-shops and online advertising. We specialise in the Shoptet platform, which allows us to create a modern and effective e-shop tailored to each client – from small businesses to established brands.\n\nBeyond the technical side, we work in performance marketing. We set up and manage ad campaigns in Google Ads, Sklik, on social networks and in email tools. Our goal is to help companies succeed in the online space – with a focus on results, simplicity and a fair approach.',
    summaryCredits: 'Copyright © 2025 Digitance',
    contactPills: [
      { label: 'Contact form', href: '/en/contact/' },
      { label: 'info@digitance.cz', href: 'mailto:info@digitance.cz' },
    ],
    experience: [
      { period: 'present', role: 'Digitance', company: 'Digital agency' },
      { period: 'formerly', role: 'Shoptet partner', company: 'E-shops & websites' },
    ],
    tools: [
      { abbr: 'Sh', name: 'Shoptet', desc: 'Custom e-shops' },
      { abbr: 'Wp', name: 'WordPress', desc: 'Websites & presentations' },
      { abbr: 'Ga', name: 'Google Ads', desc: 'Performance advertising' },
    ],
    toolsTitle: 'Tools',
    experienceTitle: 'Experience',
    languagesTitle: 'Languages',
    languages: [
      { lang: 'English', level: 'advanced' },
      { lang: 'Czech', level: 'native' },
      { lang: 'Slovak', level: 'native' },
    ],
    intro1: 'We are Digitance – a digital agency focused on building websites, e-shops and online advertising. We specialise in the Shoptet platform, which allows us to create a modern and effective e-shop tailored to each client – from small businesses to established brands.',
    intro2: 'Beyond the technical side, we work in performance marketing. We set up and manage ad campaigns in Google Ads, Sklik, on social networks and in email tools. Our goal is to help companies succeed online – with a focus on results, simplicity and a fair approach.',
    cta1Title: "Let's start working together",
    cta1ImageAlt: 'Entrepreneur preparing a parcel for shipment from an e-shop built on Shoptet',
    section2Title: 'We know where we are going and why',
    introLabel: 'About us',
    misiaTitle: 'Mission',
    misiaText: 'We help companies succeed online through quality websites, effective e-shops and performance marketing. Our mission is to simplify doing business on the internet so that every brand – small or large – can build its place in the market and grow.',
    viziaTitle: 'Vision',
    viziaText: 'To become a trusted partner for e-commerce brands in Slovakia and the Czech Republic. We want to be synonymous with solutions that work simply and combine technology, marketing and a human approach. Solutions that deliver results and give clients peace of mind in their business.',
    hodnotyTitle: 'Values',
    hodnotyItems: [
      { title: 'Simplicity', text: 'we believe that functional things can be clear and effective at the same time.' },
      { title: 'Reliability', text: 'we keep to deadlines, we are straight-talking and we stand behind our work.' },
      { title: 'Partnership', text: 'we approach every client personally and look for solutions that make sense for their business.' },
    ],
    cta2Heading: 'Want to find out what professional digital marketing, effective PPC campaigns or a well-set-up e-shop can do for you?',
    cta2Sub: 'Get in touch and we can arrange a no-obligation consultation.',
    cta2Button: "Let's start working together",
    teamTitle: 'Who we are?',
    team: [
      {
        name: 'Stano',
        role: 'WordPress specialist & web architect',
        description: 'Building websites on WordPress is his second nature. He is a perfectionist with an eye for every pixel – nothing gets past him. He loves it when everything runs smoothly, is technically correct and aesthetically precise. If you want a site that is both beautiful and functional, Stano is your person.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'stanislav.hazucha@digitance.eu',
        website: 'https://shazucha.sk/',
        photo: '/images/stano-hazucha.jpeg',
      },
      {
        name: 'Lukáš',
        role: 'Google Partner & PPC strategist',
        description: 'A certified Google Partner and Shoptet specialist who sets up campaigns with one clear goal: to generate revenue. He is also a silver partner of Shoptet.cz, so your e-shops are in the best hands. He knows how to connect technical setup with profitable performance.',
        linkedin: 'https://www.linkedin.com/in/',
        email: 'lukas.koula@digitance.eu',
        website: 'https://lukaskoula.com',
        photo: '/images/lukas-koula.webp',
        photoAlt: 'Lukáš Koula is in the picture',
      },
    ],
    partnerTitle: "We're your partners, not just suppliers",
    partnerText: "Digitance isn't just another digital agency. We are your partner, building cooperation on trust, clear communication and a human approach. With us you're not just 'another client' – you're a brand we want to help grow, get noticed and achieve better results online.",
    partnerButton: 'Start a project',
  },
};
