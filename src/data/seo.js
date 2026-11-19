// Single source of truth for page titles, descriptions and structured data.
// Read at runtime by <SEO /> and at build time by scripts/prerender-seo.mjs,
// so keep this file free of JSX and browser-only APIs.

export const SITE_URL = 'https://aurafirstscience.com';
export const SITE_NAME = 'Aura Academia';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const ORG_ID = `${SITE_URL}/#organization`;

const openingHours = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '15:30',
    closes: '21:00',
};

const centres = [
    {
        '@type': 'LocalBusiness',
        name: 'Aura Academia – Al Nahda Centre',
        telephone: '+971585755286',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tower A, 803, Al Rayyan Complex, Al Nahda',
            addressLocality: 'Sharjah',
            addressCountry: 'AE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 25.3011, longitude: 55.3808 },
        openingHoursSpecification: openingHours,
    },
    {
        '@type': 'LocalBusiness',
        name: 'Aura Academia – Abushagara Centre',
        telephone: '+971585755286',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '16, First Floor, City Tower, Near Viva Super Market, Abushagara',
            addressLocality: 'Sharjah',
            addressCountry: 'AE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 25.3339, longitude: 55.3914 },
        openingHoursSpecification: openingHours,
    },
];

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE_NAME,
    slogan: 'An academic hub to gear up beyond block excellence.',
    description: 'Tuition centre in Sharjah, UAE offering CBSE, ICSE, IGCSE, AS & A Level coaching for Grades 8–12, plus JEE, NEET and KEAM entrance exam preparation.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: DEFAULT_IMAGE,
    telephone: '+971585755286',
    email: 'aurafirstscience@gmail.com',
    foundingDate: '2018',
    founder: { '@type': 'Person', name: 'Dr. Ishvarya Ramasubramanian', honorificPrefix: 'Dr.', award: 'Honorary Doctorate, Federation of Economic Development Association (FEDA)' },
    address: centres[1].address,
    geo: centres[1].geo,
    openingHoursSpecification: openingHours,
    areaServed: { '@type': 'City', name: 'Sharjah' },
    department: centres,
    knowsAbout: ['CBSE', 'ICSE', 'IGCSE', 'AS Level', 'A Level', 'JEE', 'NEET', 'KEAM', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Psychometric testing'],
};

// Static routes. `name` is the breadcrumb label.
export const pageSeo = {
    '/': {
        name: 'Home',
        title: 'Aura Academia – Tuition Centre in Sharjah | CBSE, IGCSE, JEE, NEET',
        description: 'Aura Academia is a tuition centre in Sharjah (Al Nahda & Abushagara) for Grades 8–12: CBSE, ICSE, IGCSE, AS/A Level, JEE & NEET coaching. Book a free trial.',
        keywords: 'tuition centre sharjah, tuition in sharjah, CBSE tuition sharjah, IGCSE tuition sharjah, NEET coaching sharjah, JEE coaching sharjah, maths tuition sharjah, science tuition sharjah',
        changefreq: 'weekly',
        priority: '1.0',
    },
    '/about': {
        name: 'About',
        title: 'About Aura Academia | Tuition Centre in Sharjah Since 2018',
        description: 'Founded in 2018 by Dr. Ishvarya Ramasubramanian, Aura Academia has mentored 2,000+ students in Sharjah with concept-based teaching for CBSE, ICSE, IGCSE, JEE & NEET.',
        keywords: 'about aura academia, tuition centre sharjah, abushagara tuition, al nahda tuition',
        changefreq: 'monthly',
        priority: '0.8',
    },
    '/courses': {
        name: 'Courses',
        title: 'Courses – Grades 8–12, IGCSE, A Level, JEE & NEET | Aura Academia',
        description: 'Maths and Science tuition in Sharjah for CBSE, ICSE, IGCSE and AS/A Level, plus JEE, NEET and KEAM coaching. French, Economics, Business Studies & Accountancy coming soon.',
        keywords: 'maths tuition sharjah, science tuition sharjah, CBSE coaching UAE, ICSE tuition, IGCSE tuition, A level tuition sharjah, JEE coaching, NEET coaching, KEAM coaching',
        changefreq: 'weekly',
        priority: '0.9',
    },
    '/faculty': {
        name: 'Faculty',
        title: 'Our Faculty – Expert Teachers in Sharjah | Aura Academia',
        description: "Meet Aura Academia's teachers: experienced Chemistry, Physics, Mathematics and Science faculty guiding Sharjah students through CBSE, ICSE, IGCSE, JEE and NEET.",
        keywords: 'tutors in sharjah, chemistry teacher sharjah, physics teacher sharjah, maths teacher sharjah, NEET faculty',
        changefreq: 'monthly',
        priority: '0.7',
    },
    '/partners': {
        name: 'Partners',
        title: 'Our Partners – Jeppiaar Academy of Psychology and Research | Aura Academia',
        description: 'Aura Academia partners with Jeppiaar Academy of Psychology and Research to bring the Diploma in Counselling and Child Psychology to Sharjah, UAE.',
        keywords: 'aura academia partners, jeppiaar academy, counselling psychology diploma sharjah, child psychology course UAE',
        changefreq: 'monthly',
        priority: '0.7',
    },
    '/gallery': {
        name: 'Gallery',
        title: 'Gallery – Classrooms, Events & Results | Aura Academia Sharjah',
        description: 'Explore moments of learning, celebration, and achievement at Aura Academia, Sharjah. Photos from classrooms, results celebrations, events, and our centres.',
        keywords: 'aura academia gallery, tuition centre sharjah photos',
        changefreq: 'monthly',
        priority: '0.5',
    },
    '/psychometric': {
        name: 'Psychometric Test',
        title: 'Psychometric Test & Career Guidance in Sharjah | Aura Academia',
        description: 'Scientifically backed psychometric testing and personalised career guidance for students in Sharjah. Discover strengths, interests and the right academic path.',
        keywords: 'psychometric test sharjah, career guidance sharjah, career counselling UAE, aptitude test students',
        changefreq: 'monthly',
        priority: '0.7',
    },
    '/testimonials': {
        name: 'Testimonials',
        title: 'Reviews & Testimonials – Aura Academia Sharjah',
        description: 'Read genuine reviews and WhatsApp testimonials from students and parents at Aura Academia, Sharjah. Rated 4.9 stars across 133+ Google reviews.',
        keywords: 'aura academia reviews, tuition centre sharjah reviews, best tuition sharjah reviews',
        changefreq: 'monthly',
        priority: '0.6',
    },
    '/contact': {
        name: 'Contact',
        title: 'Contact Aura Academia | Book a Free Trial Class in Sharjah',
        description: 'Visit Aura Academia in Al Nahda or Abushagara, Sharjah. Call or WhatsApp +971 58 575 5286, open Mon–Sun 3:30–9:00 PM. Book your free trial class today.',
        keywords: 'aura academia contact, tuition centre abushagara, tuition centre al nahda sharjah, free trial class',
        changefreq: 'yearly',
        priority: '0.8',
    },
};

export const notFoundSeo = {
    title: '404 – Page Not Found | Aura Academia',
    description: "The page you're looking for doesn't exist. Return to the Aura Academia homepage.",
    noindex: true,
};

const clip = (text, max = 158) =>
    text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;

const breadcrumbSchema = (trail) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
});

/** SEO props for a static route, including breadcrumbs. */
export const seoForPath = (path) => {
    const page = pageSeo[path];
    if (!page) return null;
    const schema = path === '/'
        ? []
        : [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.name, path }])];
    return { ...page, schema };
};

/** SEO props for a course detail page. */
export const seoForCourse = (course) => {
    const path = `/courses/${course.id}`;
    return {
        title: `${course.title} | Aura Academia Sharjah`,
        description: clip(`${course.description} ${course.curriculum}, ${course.grade}, Sharjah.`),
        keywords: `${course.curriculum} tuition sharjah, ${course.grade}, ${course.subjects?.join(', ')}`,
        schema: [
            {
                '@context': 'https://schema.org',
                '@type': 'Course',
                name: course.title,
                description: course.description,
                url: `${SITE_URL}${path}`,
                educationalLevel: course.grade,
                about: course.subjects,
                inLanguage: 'en',
                provider: { '@type': 'EducationalOrganization', '@id': ORG_ID, name: SITE_NAME, sameAs: SITE_URL },
            },
            breadcrumbSchema([
                { name: 'Home', path: '/' },
                { name: 'Courses', path: '/courses' },
                { name: course.title, path },
            ]),
        ],
    };
};

/**
 * Resolve everything that goes in <head> for one page. Shared by the runtime
 * component and the build-time prerender so both emit identical tags.
 */
export const buildHeadTags = ({ title, description, keywords, image = DEFAULT_IMAGE, type = 'website', path = '/', noindex = false, schema = [] }) => {
    const canonical = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
    return {
        title,
        canonical: noindex ? null : canonical,
        meta: [
            { attr: 'name', key: 'description', content: description },
            ...(keywords ? [{ attr: 'name', key: 'keywords', content: keywords }] : []),
            { attr: 'name', key: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
            { attr: 'property', key: 'og:title', content: title },
            { attr: 'property', key: 'og:description', content: description },
            { attr: 'property', key: 'og:image', content: image },
            { attr: 'property', key: 'og:image:width', content: '1200' },
            { attr: 'property', key: 'og:image:height', content: '630' },
            { attr: 'property', key: 'og:url', content: canonical },
            { attr: 'property', key: 'og:type', content: type },
            { attr: 'property', key: 'og:site_name', content: SITE_NAME },
            { attr: 'property', key: 'og:locale', content: 'en_AE' },
            { attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
            { attr: 'name', key: 'twitter:title', content: title },
            { attr: 'name', key: 'twitter:description', content: description },
            { attr: 'name', key: 'twitter:image', content: image },
        ],
        jsonLd: [organizationSchema, ...schema],
    };
};
