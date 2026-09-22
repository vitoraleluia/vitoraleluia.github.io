export type LinkKey =
  | 'blog'
  | 'links'
  | 'cv'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'rss';

export interface Link {
  label: string;
  href: string;
  icon?: 'github' | 'linkedin' | 'email' | 'rss' | 'link';
  description?: string;
  target?: string;
  rel?: string;
}

export type LinksMap = Record<LinkKey, Link>;

const links: LinksMap = {
  blog: {
    label: 'Blog',
    href: '/blog/',
    icon: 'link',
  },
  links: {
    label: 'Links',
    href: '/links/',
    icon: 'link',
  },
  cv: {
    label: 'CV',
    href: '/cv.pdf',
    icon: 'link',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/VitorAleluia',
    icon: 'github',
    description: 'Code and open source contributions',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vitoraleluia',
    icon: 'linkedin',
    description: 'Work history and experience',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  email: {
    label: 'Email',
    href: 'mailto:vitoraleluia@outlook.com',
    icon: 'email',
    description: 'Direct contact',
  },
  rss: {
    label: 'RSS Feed',
    href: '/rss.xml',
    icon: 'rss',
    description: 'RSS 2.0 Feed',
  },
};

export const siteConfig = {
  name: 'Vitor Aleluia',
  title: 'Vitor Aleluia',
  homeTitle: 'Vitor Aleluia — Software Engineer & Systems Architect',
  siteUrl: 'https://vitoraleluia.com',
  description: 'Personal blog covering software engineering, systems architecture, and developer tooling.',
  bio: 'Software engineer based in Portugal working on systems architecture, distributed backends, and developer tooling.',
  role: 'Software Engineer',
  location: 'Portugal',
  cvUrl: '/cv.pdf',
  avatar: '/images/photo.jpg',
  // Analytics
  analytics: {
    googleAnalyticsId: 'G-5ZN7Z7BT1J', // Paste GA4 Measurement ID (e.g., 'G-XXXXXXXXXX') here or via PUBLIC_GA_ID env
  },
  links,
  navLinks: [links.blog, links.links, links.cv],
  socialLinks: [links.github, links.linkedin, links.email, links.rss],
};
