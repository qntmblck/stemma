import { Head, usePage } from '@inertiajs/react';

const DEFAULT_SITE_URL = 'https://santaemmainversiones.cl';
const LOCAL_URL_RE = /localhost|127\.0\.0\.1|0\.0\.0\.0/;

const stripTrailingSlash = (value) => String(value || '').replace(/\/$/, '');

const resolveAsset = (baseUrl, asset) => {
    if (!asset) return null;
    if (asset.startsWith('http')) return asset;
    return `${baseUrl}${asset.startsWith('/') ? asset : `/${asset}`}`;
};

const organizationSchema = (seo, baseUrl, logoUrl) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: seo.site_name,
    url: baseUrl,
    logo: logoUrl,
    email: seo.contact?.email,
    areaServed: seo.contact?.area_served || 'Chile',
    description: seo.description,
});

const websiteSchema = (seo, baseUrl) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: seo.site_name,
    url: baseUrl,
    inLanguage: 'es-CL',
    publisher: {
        '@id': `${baseUrl}/#organization`,
    },
});

const serviceSchema = (baseUrl) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#services`,
    name: 'Construccion, maquinaria y gestion de inversiones',
    provider: {
        '@id': `${baseUrl}/#organization`,
    },
    areaServed: 'Chile',
    serviceType: [
        'Obras civiles',
        'Movimiento de tierras',
        'Transporte de maquinaria',
        'Gestion de activos e inversiones',
    ],
});

const pageSchema = (seo, page, baseUrl, canonicalUrl) => ({
    '@context': 'https://schema.org',
    '@type': page?.path === '/contacto' ? 'ContactPage' : 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    name: page?.title || seo.site_name,
    url: canonicalUrl,
    description: page?.description || seo.description,
    inLanguage: 'es-CL',
    isPartOf: {
        '@id': `${baseUrl}/#website`,
    },
    about: {
        '@id': `${baseUrl}/#organization`,
    },
});

export default function Seo({
    pageKey = 'home',
    title,
    description,
    canonical,
    image,
    jsonLd,
    noindex = false,
    preloadImage = false,
}) {
    const { props } = usePage();
    const seo = props?.seo || {};
    const page = seo.pages?.[pageKey] || {};
    const configuredUrl = stripTrailingSlash(props?.app?.url || seo.site_url);
    const baseUrl = configuredUrl && !LOCAL_URL_RE.test(configuredUrl)
        ? configuredUrl
        : DEFAULT_SITE_URL;

    const pageTitle = title || page.title || seo.site_name || 'Santa Emma Inversiones';
    const pageDescription = description || page.description || seo.description;
    const canonicalPath = (canonical || page.path || '/').split('#')[0];
    const canonicalUrl = canonicalPath.startsWith('http')
        ? canonicalPath
        : `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    const imagePath = image || page.image || seo.default_image;
    const imageUrl = resolveAsset(baseUrl, imagePath);
    const logoUrl = resolveAsset(baseUrl, seo.logo);
    const robots = noindex
        ? 'noindex,nofollow'
        : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';
    const structuredData = [
        organizationSchema(seo, baseUrl, logoUrl),
        websiteSchema(seo, baseUrl),
        pageSchema(seo, page, baseUrl, canonicalUrl),
        ...(pageKey === 'home' || pageKey === 'catalogo' ? [serviceSchema(baseUrl)] : []),
        ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
    ];

    return (
        <Head>
            <title>{pageTitle}</title>
            {pageDescription && <meta name="description" content={pageDescription} />}
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />
            <meta name="theme-color" content={seo.theme_color || '#f4b400'} />
            <link rel="canonical" href={canonicalUrl} />
            {preloadImage && imagePath && !imagePath.startsWith('http') && (
                <link rel="preload" as="image" href={imagePath} fetchPriority="high" />
            )}

            <meta property="og:title" content={pageTitle} />
            {pageDescription && <meta property="og:description" content={pageDescription} />}
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={seo.site_name || 'Santa Emma Inversiones'} />
            <meta property="og:locale" content={seo.locale || 'es_CL'} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageUrl && <meta property="og:image:alt" content={seo.site_name || 'Santa Emma Inversiones'} />}
            {imageUrl && <meta property="og:image:width" content="1200" />}
            {imageUrl && <meta property="og:image:height" content="630" />}

            <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={pageTitle} />
            {pageDescription && <meta name="twitter:description" content={pageDescription} />}
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            {imageUrl && <meta name="twitter:image:alt" content={seo.site_name || 'Santa Emma Inversiones'} />}

            {structuredData.map((schema, index) => (
                <script
                    key={`json-ld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Head>
    );
}
