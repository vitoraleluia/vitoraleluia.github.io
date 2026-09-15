export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'x' | 'email' | 'rss' | 'link';
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export const siteConfig = {
  name: 'Vitor Aleluia',
  title: 'Vitor Aleluia',
  siteUrl: 'https://vitoraleluia.com',
  description: 'Personal blog covering software engineering, systems architecture, and developer tooling.',
  bio: 'Software engineer based in Portugal working on systems architecture, distributed backends, and developer tooling.',
  role: 'Software Engineer',
  location: 'Portugal',
  cvUrl: '/cv.pdf',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Links', href: '/links/' },
    { label: 'CV', href: '/cv.pdf', target: '_blank', rel: 'noopener noreferrer' },
  ] as NavLink[],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/VitorAleluia', icon: 'github', description: 'Code and open source contributions' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vitoraleluia', icon: 'linkedin', description: 'Work history and experience' },
    { label: 'X (Twitter)', href: 'https://x.com', icon: 'x', description: 'Occasional engineering notes' },
    { label: 'Email', href: 'mailto:contact@vitoraleluia.com', icon: 'email', description: 'Direct contact' },
    { label: 'RSS Feed', href: '/rss.xml', icon: 'rss', description: 'RSS 2.0 Feed' },
  ] as SocialLink[],
};
