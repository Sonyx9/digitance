# Digitance / Creatiwise — prémiový vícejazyčný portál

Astro multisite (CZ, SK, EN), statický export připravený na FTP.

## Požadavky

- Node.js 18+
- npm nebo pnpm

## Instalace a vývoj

```bash
npm install
npm run dev
```

Otevřete `http://localhost:4321/cs/` (nebo `/sk/`, `/en/`).

## Build pro produkci

```bash
npm run build
```

Výstup je ve složce `dist/`.

## Nasazení na FTP (Apache/Nginx)

### 1. Cíl na kořen domény (např. `https://digitance.cz`)

- V `astro.config.mjs` ponechejte výchozí `site` a prázdný `base`, nebo před buildem nastavte:

```bash
set ASTRO_SITE=https://digitance.cz
set ASTRO_BASE=
npm run build
```

- Nahrajte celý obsah složky `dist/` do kořene webu na serveru.

### 2. Cíl do podadresáře (např. `https://example.com/digitance/`)

- **Důležité:** všechny cesty k assetům a odkazům musí vycházet z `base`, aby se po nahrání do podadresáře nic nelámalo.

Před buildem nastavte:

```bash
set ASTRO_SITE=https://example.com
set ASTRO_BASE=/digitance
npm run build
```

- Nahrajte obsah `dist/` do adresáře `digitance` na serveru (nebo jak se jmenuje váš podadresář). Stránky pak budou na `https://example.com/digitance/cs/`, `https://example.com/digitance/en/services/` atd.

### 3. Ověření cest

- Po nahrání zkontrolujte:
  - obrázky a skripty se načítají (v DevTools síťová záložka),
  - přepínání jazyků vede na správné URL v rámci stejné stránky v jiném jazyce.

## Struktura stránek

| Typ          | CZ/SK              | EN           |
|-------------|--------------------|--------------|
| Home        | `/cs/`, `/sk/`     | `/en/`       |
| O nás       | `/cs/o-nas/`       | `/en/about-us/` |
| Služby      | `/cs/sluzby/`      | `/en/services/`  |
| Detail služby | `/cs/sluzby/[slug]/` | `/en/services/[slug]/` |
| Kontakt     | `/cs/kontakt/`     | `/en/contact/`  |

## Technologie

- **Astro** (static), **Tailwind CSS**, nativní **i18n** routing
- **View Transitions** mezi stránkami
- **Scroll-driven** odhalování bloků (Intersection Observer)
- **SEO:** unikátní meta tagy, `hreflang` pro CZ/SK/EN
- Obrázky: `astro:assets` (WebP/AVIF) – při použití obrázků v komponentách

## Konfigurace

- **Jazyky:** `astro.config.mjs` → `i18n.locales` (cs, sk, en), `defaultLocale: 'cs'`
- **Design:** `tailwind.config.mjs`, `src/styles/global.css`
- **Texty a služby:** `src/lib/i18n.ts`, `src/data/services.ts`

### Proměnné prostředí (volitelné)

Pro build můžete vytvořit soubor `.env` (viz `.env.example`):

- `ASTRO_SITE` – kanonická URL webu (pro meta tagy a hreflang).
- `ASTRO_BASE` – base path při nasazení do podadresáře (např. `/digitance`). Ponechte prázdné pro kořen domény.

Astro tyto proměnné načte při `npm run build`; není nutné je exportovat v shellu.
