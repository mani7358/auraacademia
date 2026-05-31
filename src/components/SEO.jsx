import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Manages meta tags for SEO and social sharing
 * 
 * @param {string} title - Page title (50-60 characters recommended)
 * @param {string} description - Page description (150-160 characters recommended)
 * @param {string} image - Open Graph image URL
 * @param {string} type - Open Graph type (website, article, etc.)
 * @param {string} keywords - Meta keywords (comma-separated)
 */
const SEO = ({ 
    title = 'Aura Academia - Premier Tuition Centre in Sharjah, UAE',
    description = 'Sharjah\'s leading tuition centre offering expert coaching for CBSE, ICSE, IGCSE, IB, and A-Levels. Personalized learning with proven results. Book your free trial today!',
    image = 'https://auraacademia.ae/og-image.jpg',
    type = 'website',
    keywords = 'tuition centre sharjah, CBSE coaching UAE, ICSE coaching UAE, IGCSE tutoring, IB diploma, A-levels, IELTS preparation, psychometric testing, academic excellence'
}) => {
    const location = useLocation();
    const siteUrl = 'https://auraacademia.ae';
    const canonicalUrl = `${siteUrl}${location.pathname}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            
            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', image, true);
        updateMetaTag('og:url', canonicalUrl, true);
        updateMetaTag('og:type', type, true);
        updateMetaTag('og:site_name', 'Aura Academia', true);

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', image);

        // Update or create canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // Add structured data (JSON-LD) for educational organization
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Aura Academia",
            "description": "Premier tuition centre in Sharjah offering expert coaching for CBSE, ICSE, IGCSE, IB, and A-Levels",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "image": image,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "16, First Floor, City Tower, Near Viva Super Market, Abushagara",
                "addressLocality": "Sharjah",
                "addressCountry": "AE"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-585755286",
                "contactType": "Admissions",
                "email": "aurafirstscience@gmail.com",
                "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
                "https://facebook.com/auraacademia",
                "https://instagram.com/auraacademia",
                "https://twitter.com/auraacademia"
            ]
        };

        // Update or create structured data script
        let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
        if (!structuredDataScript) {
            structuredDataScript = document.createElement('script');
            structuredDataScript.setAttribute('type', 'application/ld+json');
            document.head.appendChild(structuredDataScript);
        }
        structuredDataScript.textContent = JSON.stringify(structuredData);

    }, [title, description, image, type, keywords, canonicalUrl]);

    return null;
};

export default SEO;
