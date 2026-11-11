import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import blog posts statically
const blogFilePath = path.join(__dirname, '../src/data/blog.js');
const blogContent = fs.readFileSync(blogFilePath, 'utf8');

// Simple regex extraction of slugs from blog.js
const slugMatches = [...blogContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
const blogSlugs = slugMatches.map((m) => m[1]);

const DOMAIN = 'https://signature-salon.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/servicios', priority: '0.9', changefreq: 'monthly' },
  { url: '/nosotros', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/reserva', priority: '0.9', changefreq: 'weekly' },
];

const blogPages = blogSlugs.map((slug) => ({
  url: `/blog/${slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

const allPages = [...staticPages, ...blogPages];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log(`✅ sitemap.xml generado con ${allPages.length} URLs en public/sitemap.xml`);

