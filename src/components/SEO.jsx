import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildHeadTags, seoForPath } from '../data/seo';

/**
 * SEO Component - Manages meta tags, canonical URL and JSON-LD for the current page.
 *
 * With no props it uses the entry for the current path in src/data/seo.js.
 * Any prop passed in overrides that entry.
 *
 * @param {string} title - Page title (50-60 characters recommended)
 * @param {string} description - Page description (150-160 characters recommended)
 * @param {string} image - Open Graph image URL
 * @param {string} type - Open Graph type (website, article, etc.)
 * @param {string} keywords - Meta keywords (comma-separated)
 * @param {boolean} noindex - Keep this page out of search results
 * @param {object[]} schema - Extra JSON-LD blocks for this page
 */
const SEO = (props) => {
    const { pathname } = useLocation();
    const seo = { ...(seoForPath(pathname) || {}), ...props, path: pathname };
    const { title, description, image, type, keywords, noindex } = seo;
    // Compare schema by value so a freshly built array doesn't re-run the effect every render
    const schemaKey = JSON.stringify(seo.schema || []);

    useEffect(() => {
        const schema = JSON.parse(schemaKey);
        const head = buildHeadTags({ title, description, image, type, keywords, noindex, schema, path: pathname });

        document.title = head.title;

        head.meta.forEach(({ attr, key, content }) => {
            let element = document.querySelector(`meta[${attr}="${key}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        });

        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (head.canonical) {
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute('href', head.canonical);
        } else if (canonicalLink) {
            canonicalLink.remove();
        }

        // Replace structured data (including any written into the page at build time)
        document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
        head.jsonLd.forEach(data => {
            const script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        });
    }, [title, description, image, type, keywords, noindex, schemaKey, pathname]);

    return null;
};

export default SEO;
