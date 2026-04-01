/**
 * Textové reference od klientů. U každého: jméno, web (pro logo + odkaz), citace.
 * CS/SK verze: české reference v češtině, slovenské ve slovenštině. EN verze: quoteEn.
 */
export interface ClientReference {
  name: string;
  /** Doména bez protokolu, např. mircinamydla.cz */
  website: string;
  /** Citace v češtině nebo slovenštině (podle původu klienta) */
  quote: string;
  /** Anglický překlad – zobrazí se pouze na EN verzi */
  quoteEn?: string;
  logo?: string;
}

export const clientReferences: ClientReference[] = [
  {
    name: 'Mirka P.',
    website: 'mircinamydla.cz',
    quote: 'Skvelá spolupráca, rýchle služby, zaujímavé nápady na zlepšenie.',
    quoteEn: 'Great cooperation, fast service, interesting ideas for improvement.',
    logo: 'https://cdn.myshoptet.com/usr/www.mircinamydla.cz/user/logos/velke_logo-1.png',
  },
  { name: 'Andrej', website: 'feeart.sk', quote: 'Potrebujete spraviť jednoduchý web či zložitejší eshop a nemáte čas sa tomu venovat? Tak ste na správnom mieste. Pán Hazucha Vám všetko povie a podľa vašich predstáv spraví a svoju prácu robí zodpovedne a kvalitne. Tak neváhajte ho kontaktovať, nech už Váš web či eshop môže fungovať.', quoteEn: 'Need a simple website or a more complex e-shop and don\'t have time to deal with it? You\'re in the right place. Mr Hazucha will explain everything and build it to your specifications – responsibly and with quality. Don\'t hesitate to contact him so your site or e-shop can get up and running.' },
  {
    name: 'Petra A.',
    website: 'sleepsheep.cz',
    quote: 'Som veľmi spokojná – skvelá spolupráca, výborná komunikácia. Programátor je ochotný, spoľahlivý a vždy nápomocný. Spolupracujeme aj naďalej a môžem len odporučiť!',
    quoteEn: 'I\'m very satisfied – great cooperation, excellent communication. The developer is willing, reliable and always helpful. We continue to work together and I can only recommend!',
    logo: 'https://cdn.myshoptet.com/usr/www.sleepsheep.cz/user/logos/logo.svg',
  },
  { name: 'Stanislava Kleimanová', website: 'venusamoda.sk', quote: 'Veľká spokojnosť so službami! Keď sme si vysvetlili, že sa rozpráva technický génius (on) s technickým drevom (ja), tak upravil rétoriku tak, že som mu rozumela, trpezlivo mi všetko vysvetľoval, dokonca aj niekoľkokrát, pracoval na mojom projekte aj nad rámec, po večeroch a cez víkendy. Taký user-friendly človek! 🙂 Poradil mi rôzne vychytávky. A výsledkom je krásny profesionálny eshop, ktorý fachčí ako má. Určite odporúčam jeho služby!', quoteEn: 'Very happy with the service! Once we established that a tech genius (him) was talking to a tech novice (me), he adjusted his approach so I could understand – patiently explained everything, even several times, worked on my project beyond the call of duty, evenings and weekends. Such a user-friendly person! 🙂 He suggested various tricks and the result is a beautiful, professional e-shop that runs as it should. I definitely recommend his services!' },
  { name: 'Petr H.', website: 'joy-sperky.cz', quote: 'Kompletné, profesionálne, rýchle služby, všetko okolo nového e-shopu. Ďalšia spolupráca v marketingu a grafike. Som spokojný a môžem len odporučiť.', quoteEn: 'Complete, professional, fast service – everything around the new e-shop. We\'re continuing with marketing and graphics. I\'m satisfied and can only recommend.' },
  { name: 'Michal', website: 'mips.sk', quote: 'Spokojnosť nad mieru. Vytvorenie webu, správa, všetko na jednotku. Odporúčam.', quoteEn: 'Exceeded expectations. Website creation, management – everything top notch. I recommend.' },
  {
    name: 'Luděk N.',
    website: 'kurovky.cz',
    quote: 'Profesionálne znalosti, ľudský prístup a vcítenie sa do našich predstáv pri nastavovaní Shoptetu. Plánujeme ďalšiu spoluprácu v marketingu a grafike.',
    quoteEn: 'Professional expertise, a human approach and real understanding of our vision when setting up Shoptet. We\'re planning further cooperation on marketing and graphics.',
    logo: 'https://cdn.myshoptet.com/usr/www.kurovky.cz/user/documents/upload/LOGO/logo_logo.svg',
  },
  { name: 'Ladislav', website: 'ladislavsostak.sk', quote: 'Spolupráca so Stanom je vynikajúca, od prvotnej konzultácie až doteraz. Stránka je dávno odovzdaná, ale stále sa informuje či je všetko v poriadku a netreba niečo upraviť. Bol ochotný poradiť a dodanie web stránky bolo veľmi rýchle. Web funguje ako má, a určite ho odporúčam každému, kto aktuálne nevie komu zveriť vytvorenie webu. 👍', quoteEn: 'Working with Stano has been excellent, from the first consultation to this day. The site was delivered long ago but he still checks in to see if everything is okay or needs any tweaks. He was happy to advise and delivery was very fast. The site works as it should and I definitely recommend him to anyone who doesn\'t know who to trust with their web project. 👍' },
  { name: 'Barbora McH.', website: 'pantheraleo.cz', quote: 'Oceňujeme pomoc pri technickej stránke tvorby nového e-shopu a napojení všetkého potrebného (shipping, vyhľadávače, reklamy…). Profesionalita, ústretovosť, komplexné služby, milé jednanie – odporúčam!', quoteEn: 'We appreciate the help with the technical side of building the new e-shop and connecting everything needed (shipping, search, ads…). Professionalism, approachability, full service, friendly manner – I recommend!' },
  { name: 'Erik Varga', website: 'eatgreen.eco', quote: 'S digitance spolupracujem už veľmi dlho a jednoznačne ho odporúčam každému👍, kto hľadá profesionálny prístup a riešenia v každom probléme s webom. Môžem sa plne spoľahnúť, že web bude fungovať ako hodinky. Veľmi rýchlo reaguje na požiadavky a dotiahuje veci na 100%. Inak by asi nespal 😆 Jednoznačne TOP človek, ktorého baví tvorba webu 👍 Ďakujem🙏', quoteEn: 'I\'ve been working with Digitance for a long time and clearly recommend them to anyone👍 looking for a professional approach and solutions to any web-related issue. I can fully rely on the site working like clockwork. Very quick to respond and gets things to 100%. Otherwise he probably wouldn\'t sleep 😆 Clearly a TOP person who enjoys building websites 👍 Thank you🙏' },
  { name: 'Petr', website: 'primadora.cz', quote: 'Perfektná spolupráca, profesionalita, spoľahlivosť, kreativita, flexibilita. Plne odporúčam.', quoteEn: 'Perfect cooperation, professionalism, reliability, creativity, flexibility. I fully recommend.' },
  { name: 'Peter', website: 'cisimefasady.sk', quote: 'Spolupráca v oblasti online marketingu nám priniesla skutočné výsledky. Oceňujeme najmä odborný prístup, promptné reakcie a schopnosť zorientovať sa v našom segmente čistenia fasád. Vďaka cielenej PPC kampani a optimalizácii webu pre vyhľadávače sa nám podarilo získať viac zákaziek v našom regióne a zvýšiť povedomie o našej značke. Marketing bol nastavený efektívne a zrozumiteľne – bez zbytočných omáčok.', quoteEn: 'Cooperation in online marketing has brought us real results. We especially appreciate the expert approach, prompt responses and ability to get to grips with our facade cleaning segment. Thanks to a targeted PPC campaign and SEO we gained more orders in our region and raised awareness of our brand. Marketing was set up effectively and clearly – no fluff.' },
];

/** Formát pro sekci Reference na homepage (carousel) – odvozeno z clientReferences */
export const testimonials = clientReferences.map((ref) => ({
  name: ref.name,
  image: ref.logo ?? `https://logo.clearbit.com/${ref.website}`,
  quote: { cs: ref.quote, sk: ref.quote, en: ref.quoteEn ?? ref.quote } as Record<'cs' | 'sk' | 'en', string>,
  role: { cs: ref.website, sk: ref.website, en: ref.website } as Record<'cs' | 'sk' | 'en', string>,
}));
