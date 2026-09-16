# Blog Architecture & Design Document (IDEA.md)

This document serves as the permanent source of truth for the blog and links website, capturing its design philosophy, architectural choices, and implementation details.

---

## 1. Vision & Inspiration

The website is a fast, minimalist personal blog and social link hub built on top of [Astro](https://astro.build/) and styled with inspiration from:
- [Akita on Rails](https://akitaonrails.com/en/) — Editorial readability, rich typography (editorial serif for body text, crisp sans-serif for UI/headings), warm dark tones, and a lightweight DuckDuckGo site search.
- [Vasilios Syrakis](https://vsyrakis.dev/) — Minimalist developer portfolio, dark theme by default, top navigation bar, and clean Linktree-like `/links` page with centered avatar and social buttons.

The website adapts the `@astrojs/starlight` template away from a documentation feel into an understated, authentic personal engineering blog and portfolio.

---

## 2. Core Technical Decisions

### 2.1 Theme & Understated UI (No AI Clichés)
- **Dark Mode by Default**: The site loads in dark mode on initial visit without any white flash (FOUC).
- **Grounded Aesthetics**: Avoid common AI/template clichés:
  - No hover floating / lifting animations (`translateY`).
  - No artificial neon glows or dramatic dropshadows.
  - No generic corporate badges ("Available for collaborations & ideas", "digital garden", etc.).
  - Pure, authentic developer design: subtle border color transitions, clean typography, high information density.
- **Color Palette**:
  - Background: Deep charcoal / zinc (`#121214` to `#18181b`)
  - Surfaces / Cards: `#1e1e22` with subtle borders (`#27272a`)
  - Accent color: Refined warm copper/amber (`#e2a05a`)
  - Foreground text: `#ededed` (high contrast) and `#a1a1aa` (muted)
- **High-Contrast Theming**: Primary buttons dynamically adjust foreground text for high contrast (dark text `#121214` in dark mode, crisp white text `#ffffff` in light mode against warm amber `#b45309`).
- **Favicon**: Branded SVG favicon displaying the initials "VA" in Open Sans bold typography with the site accent color on a dark base.

### 2.2 Typography Hierarchy
- **Sans-serif (Headings & UI)**: `Open Sans` (self-hosted local woff2)
- **Serif (Editorial Body & Reading)**: `Libre Baskerville` (self-hosted local woff2)
- **Monospaced (Code & Metadata)**: `Cascadia Mono` (self-hosted local woff2)

### 2.3 Site Structure & Pages
1. **Homepage (`/`)**:
   - Personal introduction with understated avatar photo.
   - Concise biography, focus areas (distributed systems, architecture, tooling).
   - "Recent Posts" section highlighting the latest articles.
   - Direct links to the blog, links hub, and CV.
2. **Blog Directory (`/blog`)**:
   - Complete directory of published posts.
   - Clean, minimalist rows displaying publication date, title, and summary (no tags, no reading time, and no post counts).
   - RSS feed link badge aligned inline with the "Blog" section title.
3. **Blog Post Reader (`/blog/[slug]`)**:
   - Optimized for reading comfort (max-width `48rem`).
   - Body typography in `Libre Baskerville`.
   - Expressive Code syntax highlighting using `Cascadia Mono`.
   - Older / Newer post navigation links at the footer.
4. **Links Hub (`/links`)**:
   - Linktree-style page.
   - Centered profile avatar at the top, name, and role.
   - Centered stack of clean, icon-and-title interactive buttons linking to GitHub, LinkedIn, X/Twitter, CV, Email, and RSS (without secondary subtitle text).
5. **Navbar & Akita-Style Search**:
   - Brand / Site title (`Vitor Aleluia`) linking to `/`.
   - Links to `Home`, `Blog`, `Links`, and `CV` (`/cv.pdf`).
   - **DuckDuckGo Site Search**: Exactly like Akita on Rails, a clean search input with a `Ctrl+K` shortcut that submits queries directly to DuckDuckGo scoped to `site:vitoraleluia.com`.
    - **Icon-Only Theme Toggle**: A button without text that cycles between Dark and Light mode. System preference (auto) is selected automatically by default on first visit without needing an explicit "Auto" option in the switcher.
    - Responsive mobile drawer.

### 2.4 SEO, Indexing, Sitemaps & RSS Feed
- **Robots.txt Directive (`/robots.txt`)**: Dynamic endpoint (`src/pages/robots.txt.ts`) providing search crawler directives (`User-agent: *`, `Allow: /`) and automatically declaring `Sitemap: https://vitoraleluia.com/sitemap-index.xml`.
- **Prebuilt Sitemap & Legacy Alias**:
  - `sitemap-index.xml` and `sitemap-0.xml` generated automatically by `@astrojs/sitemap` via `@astrojs/starlight`.
  - Standard `/sitemap.xml` endpoint (`src/pages/sitemap.xml.ts`) returning XML sitemap index for crawlers that test `/sitemap.xml` directly.
- **Full-Text RSS 2.0 Feed (`/rss.xml`) & Auto-Discovery**:
  - Feed generation powered by `@astrojs/rss`, `markdown-it`, and `sanitize-html`.
  - Auto-discovery link `<link rel="alternate" type="application/rss+xml" title="Vitor Aleluia" href="/rss.xml" />` injected into every page's `<head>`.
- **Schema.org Structured Data (JSON-LD)**:
  - Homepage / root pages inject `WebSite` and `Person` schema with biography and social profile links (`sameAs`).
  - Article pages (`/blog/[slug]`) automatically inject `BlogPosting` schema (headline, description, author, publisher, datePublished, canonical URL) for rich Google search results.
- **Social Media & OpenGraph Sharing**:
  - 1200x630 branded OpenGraph preview card (`public/og-image.png`) with dark palette and warm amber accents.
  - Linked via `og:image` and `twitter:image` across all pages.
- **Google Search Console & Google Analytics**:
  - **Google Search Console**: Configurable via `siteConfig.seo.googleSiteVerification` in `src/site.config.ts` or `PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable. Renders `<meta name="google-site-verification" content="..." />` when configured.
  - **Google Analytics (GA4)**: Configurable via `siteConfig.analytics.googleAnalyticsId` in `src/site.config.ts` or `PUBLIC_GA_ID` environment variable. Injects asynchronous `gtag.js` script tag when configured.

---

## 3. Configuration & Content Management

- **Site Settings (`src/site.config.ts`)**: Central location for:
  - Author name, bio, site URL (`https://vitoraleluia.com`), social links, and CV URL.
  - `seo.googleSiteVerification`: Verification token for Google Search Console.
  - `seo.defaultOgImage`: Default fallback Open Graph image.
  - `analytics.googleAnalyticsId`: Measurement ID for Google Analytics 4 (e.g. `G-XXXXXXXXXX`).
- **Blog Content (`src/content/blog/`)**: Markdown/MDX files managed via Astro Content Collections.
  - Frontmatter schema: `title`, `description`, `pubDate`, `updatedDate`, `tags`, `draft`, `author`.
- **CV (`public/cv.pdf`)**: Dedicated location for the resume file.
- **OpenGraph Card (`public/og-image.png`)**: 1200x630 social card asset.

### 3.1 Google Search Console Setup Guide
When you are ready to index your site with Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property: `https://vitoraleluia.com`.
3. Select verification method:
   - **HTML Tag**: Copy the verification string and paste it into `siteConfig.seo.googleSiteVerification` in `src/site.config.ts` (or set `PUBLIC_GOOGLE_SITE_VERIFICATION` in your production environment variables).
   - **HTML File**: Alternatively, drop the verification file (e.g., `google[hash].html`) into the `public/` directory.
   - **DNS TXT Record**: Add the TXT record to your domain's DNS manager (Cloudflare, Namecheap, etc.).
4. Once verified, navigate to **Sitemaps** in the Search Console sidebar and submit `sitemap-index.xml`. Google will fetch and index all pages automatically.

---

## 4. Verification

- All pages compile cleanly with static site generation (`npm run build`).
- Zero build warnings or type errors.
