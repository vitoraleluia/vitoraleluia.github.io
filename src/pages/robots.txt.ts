import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? 'https://vitoraleluia.com';
  const sitemapIndexUrl = new URL('sitemap-index.xml', baseUrl).href;
  const sitemapUrl = new URL('sitemap.xml', baseUrl).href;
  const content = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapIndexUrl}`,
    `Sitemap: ${sitemapUrl}`,
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
