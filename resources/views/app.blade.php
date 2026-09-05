<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', config('seo.locale', app()->getLocale())) }}">
    <head>
        @php
            $seo = config('seo');
            $siteUrl = rtrim($seo['site_url'] ?? config('app.url'), '/');
            $requestPath = request()->path() === '/' ? '/' : '/'.trim(request()->path(), '/');
            $pageSeo = collect($seo['pages'] ?? [])->firstWhere('path', $requestPath) ?? ($seo['pages']['home'] ?? []);
            $canonicalPath = $pageSeo['path'] ?? '/';
            $canonicalUrl = $siteUrl.'/'.ltrim($canonicalPath, '/');
            $defaultTitle = $pageSeo['title'] ?? $seo['site_name'];
            $defaultDescription = $pageSeo['description'] ?? $seo['description'];
            $defaultImage = $pageSeo['image'] ?? $seo['default_image'] ?? '/img/h1.jpg';
            $defaultImageUrl = str_starts_with($defaultImage, 'http') ? $defaultImage : $siteUrl.'/'.ltrim($defaultImage, '/');
            $structuredData = [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Organization',
                    '@id' => $siteUrl.'/#organization',
                    'name' => $seo['site_name'],
                    'url' => $siteUrl,
                    'logo' => $siteUrl.'/'.ltrim($seo['logo'], '/'),
                    'email' => $seo['contact']['email'] ?? null,
                    'areaServed' => $seo['contact']['area_served'] ?? 'Chile',
                    'description' => $seo['description'],
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    '@id' => $siteUrl.'/#website',
                    'name' => $seo['site_name'],
                    'url' => $siteUrl,
                    'inLanguage' => 'es-CL',
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => $canonicalPath === '/contacto' ? 'ContactPage' : 'WebPage',
                    '@id' => $canonicalUrl.'#webpage',
                    'name' => $defaultTitle,
                    'url' => $canonicalUrl,
                    'description' => $defaultDescription,
                    'inLanguage' => 'es-CL',
                    'isPartOf' => ['@id' => $siteUrl.'/#website'],
                    'about' => ['@id' => $siteUrl.'/#organization'],
                ],
            ];
        @endphp
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="{{ $defaultDescription }}">
        <meta name="keywords" content="{{ $seo['keywords'] }}">
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
        <meta name="theme-color" content="{{ $seo['theme_color'] }}">
        <link rel="canonical" href="{{ $canonicalUrl }}">
        <meta property="og:title" content="{{ $defaultTitle }}">
        <meta property="og:description" content="{{ $defaultDescription }}">
        <meta property="og:url" content="{{ $canonicalUrl }}">
        <meta property="og:site_name" content="{{ $seo['site_name'] }}">
        <meta property="og:locale" content="{{ $seo['locale'] }}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="{{ $defaultImageUrl }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $defaultTitle }}">
        <meta name="twitter:description" content="{{ $defaultDescription }}">
        <meta name="twitter:image" content="{{ $defaultImageUrl }}">
        <script type="application/ld+json">@json($structuredData, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)</script>

        <title inertia>{{ $defaultTitle }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <link rel="icon" href="/stemma1.png" type="image/png">
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
