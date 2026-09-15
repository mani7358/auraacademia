// Runs after `vite build`. For every route it writes a copy of dist/index.html
// with that page's title, meta tags, canonical URL and JSON-LD already in <head>,
// so crawlers and link previews get the right tags without running JavaScript.
// It also writes sitemap.xml and fills in the route rules in dist/.htaccess.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, pageSeo, seoForPath, seoForCourse, buildHeadTags } from '../src/data/seo.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const courses = JSON.parse(readFileSync(join(root, 'src/data/courses.json'), 'utf8'));
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const renderHead = (head) => [
    `<title>${escapeAttr(head.title)}</title>`,
    ...head.meta.map(m => `<meta ${m.attr}="${m.key}" content="${escapeAttr(m.content)}" />`),
    head.canonical && `<link rel="canonical" href="${head.canonical}" />`,
    ...head.jsonLd.map(data => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`),
].filter(Boolean).map(line => `    ${line}`).join('\n');

const renderPage = (seo, path) => template
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\n\s*<\/head>/, `\n${renderHead(buildHeadTags({ ...seo, path }))}\n  </head>`);

const pages = [
    ...Object.keys(pageSeo).map(path => ({ path, seo: seoForPath(path), ...pageSeo[path] })),
    ...courses.map(course => ({ path: `/courses/${course.id}`, seo: seoForCourse(course), changefreq: 'monthly', priority: '0.8' })),
];

// 1. One HTML file per route. Home replaces index.html; the rest live under /prerender
for (const page of pages) {
    const file = page.path === '/' ? join(dist, 'index.html') : join(dist, 'prerender', `${page.path.slice(1)}.html`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, renderPage(page.seo, page.path));
}

// 2. sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map(page => [
    '  <url>',
    `    <loc>${SITE_URL}${page.path}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${page.changefreq}</changefreq>`,
    `    <priority>${page.priority}</priority>`,
    '  </url>',
].join('\n'));
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);

// 3. Route rules in .htaccess, so /about is served from /prerender/about.html
const htaccessPath = join(dist, '.htaccess');
const marker = '# @prerender-routes';
const htaccess = readFileSync(htaccessPath, 'utf8');
if (!htaccess.includes(marker)) throw new Error(`public/.htaccess is missing the "${marker}" line`);
const staticRoutes = Object.keys(pageSeo).filter(p => p !== '/').map(p => escapeRegex(p.slice(1)));
const rules = [
    `RewriteRule ^(${staticRoutes.join('|')})$ /prerender/$1.html [L]`,
    `RewriteRule ^courses/(${courses.map(c => escapeRegex(c.id)).join('|')})$ /prerender/courses/$1.html [L]`,
].join('\n  ');
writeFileSync(htaccessPath, htaccess.replace(marker, rules));

// 4. Hashed build files never change, so let browsers keep them for a year
writeFileSync(join(dist, 'assets', '.htaccess'), [
    '<IfModule mod_headers.c>',
    '  Header set Cache-Control "public, max-age=31536000, immutable"',
    '</IfModule>',
    '',
].join('\n'));

console.log(`prerender-seo: ${pages.length} pages, sitemap.xml and .htaccess routes written`);
