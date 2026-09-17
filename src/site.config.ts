export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'rss' | 'link';
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
  avatar: '/images/photo.jpg',
  // SEO & Verification
  seo: {
    googleSiteVerification: '', // Paste Google Search Console verification code here or via PUBLIC_GOOGLE_SITE_VERIFICATION env
    bingSiteVerification: '',   // Optional Bing Webmaster verification code
    defaultOgImage: '/images/og-image.png',
  },
  // Analytics
  analytics: {
    googleAnalyticsId: 'G-5ZN7Z7BT1J', // Paste GA4 Measurement ID (e.g., 'G-XXXXXXXXXX') here or via PUBLIC_GA_ID env
  },
  navLinks: [
    { label: 'Blog', href: '/blog/' },
    { label: 'Links', href: '/links/' },
    { label: 'CV', href: '/cv.pdf', target: '_blank', rel: 'noopener noreferrer' },
  ] as NavLink[],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/VitorAleluia', icon: 'github', description: 'Code and open source contributions' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vitoraleluia', icon: 'linkedin', description: 'Work history and experience' },
    { label: 'Email', href: 'mailto:vitoraleluia@outlook.com', icon: 'email', description: 'Direct contact' },
    { label: 'RSS Feed', href: '/rss.xml', icon: 'rss', description: 'RSS 2.0 Feed' },
  ] as SocialLink[],
};
