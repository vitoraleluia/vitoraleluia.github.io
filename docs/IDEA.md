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
- **Favicon**: Branded SVG favicon displaying the initials "VA" in Outfit bold typography with the site accent color on a dark base.

### 2.2 Typography Hierarchy
- **Sans-serif (Headings & UI)**: `Outfit` via `@fontsource/outfit`
- **Serif (Editorial Body & Reading)**: `Baskervville` via `@fontsource/baskervville`
- **Monospaced (Code & Metadata)**: `JetBrains Mono` via `@fontsource/jetbrains-mono`

### 2.3 Site Structure & Pages
1. **Homepage (`/`)**:
   - Personal introduction with understated avatar photo.
   - Concise biography, focus areas (distributed systems, architecture, tooling).
   - "Recent Posts" section highlighting the latest articles.
   - Direct links to the blog, links hub, and CV.
2. **Blog Directory (`/blog`)**:
   - Complete directory of published posts.
   - Tag filter chips and total post count.
   - Clean rows displaying publication date, title, summary, reading time, and tags.
3. **Blog Post Reader (`/blog/[slug]`)**:
   - Optimized for reading comfort (max-width `48rem`).
   - Body typography in `Baskervville`.
   - Expressive Code syntax highlighting using `JetBrains Mono`.
   - Older / Newer post navigation links at the footer.
4. **Links Hub (`/links`)**:
   - Linktree-style page.
   - Centered profile avatar at the top, name, and role.
   - Centered stack of interactive buttons linking to GitHub, LinkedIn, X/Twitter, CV, Email, and RSS.
5. **Navbar & Akita-Style Search**:
   - Brand / Site title (`Vitor Aleluia`) linking to `/`.
   - Links to `Home`, `Blog`, `Links`, and `CV` (`/cv.pdf`).
   - **DuckDuckGo Site Search**: Exactly like Akita on Rails, a clean search input with a `Ctrl+K` shortcut that submits queries directly to DuckDuckGo scoped to `site:vitoraleluia.com`.
   - Theme toggle (Dark / Light).
   - Responsive mobile drawer.

### 2.4 SEO, Sitemap & RSS Feed
- **Prebuilt Sitemap**: Integrated via `@astrojs/sitemap`, automatically generating `sitemap-index.xml` and `sitemap-0.xml` for `https://vitoraleluia.com`.
- **Full-Text RSS 2.0 Feed (`/rss.xml`)**: Powered by `@astrojs/rss`, `markdown-it`, and `sanitize-html`. Renders complete article HTML inside the `<content:encoded>` / `content` payload for full-text RSS reader compatibility.

---

## 3. Configuration & Content Management

- **Site Settings (`src/site.config.ts`)**: Central location for author name, bio, site URL (`https://vitoraleluia.com`), social links, and CV URL.
- **Blog Content (`src/content/blog/`)**: Markdown/MDX files managed via Astro Content Collections.
  - Frontmatter schema: `title`, `description`, `pubDate`, `updatedDate`, `tags`, `draft`, `author`.
- **CV (`public/cv.pdf`)**: Dedicated location for the resume file.

---

## 4. Verification

- All pages compile cleanly with static site generation (`npm run build`).
- Zero build warnings or type errors.
