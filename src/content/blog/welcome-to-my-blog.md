---
title: "Welcome to My Blog: Engineering, Architecture, and Notes"
description: "An introduction to this website, why I decided to build it with Astro, and what I plan to share here."
pubDate: 2026-09-15
tags: ["personal", "meta", "web-development"]
---

Welcome to my personal website and blog!

For a long time, I've wanted a focused, distraction-free space on the internet to document what I'm learning, publish deep-dives into software engineering topics, and organize links to my work.

## Why Astro?

When deciding how to build this space, my requirements were straightforward:
1. **Speed and zero runtime bloat:** Static HTML generation with minimal client-side JavaScript.
2. **First-class Markdown & MDX support:** Writing technical articles should be as friction-free as creating a Markdown document in my code editor.
3. **Typography & Readability:** A reading experience inspired by editorial blogs like *Akita on Rails* and minimalist portfolios like *Vasilios Syrakis*.

Astro provides the perfect foundation. Paired with Starlight's search engine (Pagefind) and expressive code highlighting, the site delivers blazing-fast performance and seamless dark mode by default.

```typescript
// Clean, minimal site configuration
export const siteConfig = {
  name: 'Vitor Aleluia',
  focus: ['Systems Architecture', 'Distributed Systems', 'Developer Tooling'],
  theme: 'dark',
};
```

## What You'll Find Here

On this blog, I will be writing about:
- **Systems Architecture:** Resilient distributed architectures, database trade-offs, and edge networking.
- **Developer Tooling:** Workflows, compilers, type systems, and building tools that make engineers more productive.
- **Reflections & Notes:** Real-world lessons from scaling systems and navigating software development.

Feel free to explore the [Links](/links/) page to connect on GitHub, LinkedIn, or via email. Thanks for reading!
