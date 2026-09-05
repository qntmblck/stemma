<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/robots.txt', function () {
    return response(implode("\n", [
        'User-agent: *',
        'Allow: /',
        'Disallow: /dashboard',
        'Disallow: /login',
        'Disallow: /register',
        'Sitemap: '.rtrim(config('seo.site_url'), '/').'/sitemap.xml',
        '',
    ]), 200)->header('Content-Type', 'text/plain; charset=UTF-8');
})->name('robots');

Route::get('/sitemap.xml', function () {
    $pages = collect(config('seo.pages'));
    $updatedAt = now()->toAtomString();

    $urls = $pages->map(function (array $page) use ($updatedAt) {
        $baseUrl = rtrim(config('seo.site_url'), '/');
        $location = $baseUrl.'/'.ltrim($page['path'], '/');

        return implode('', [
            '<url>',
            '<loc>'.e($location).'</loc>',
            '<lastmod>'.$updatedAt.'</lastmod>',
            '<changefreq>'.e($page['changefreq'] ?? 'monthly').'</changefreq>',
            '<priority>'.e($page['priority'] ?? '0.7').'</priority>',
            '</url>',
        ]);
    })->implode('');

    $xml = '<?xml version="1.0" encoding="UTF-8"?>'
        .'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        .$urls
        .'</urlset>';

    return response($xml, 200)->header('Content-Type', 'application/xml; charset=UTF-8');
})->name('sitemap');

// Página principal
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home'); // ✅ Agregado nombre de ruta

// Páginas públicas adicionales
Route::get('/nosotros', fn () => Inertia::render('Nosotros'))->name('nosotros');
Route::get('/proyectos', fn () => Inertia::render('Proyectos'))->name('proyectos');
Route::get('/catalogo', fn () => Inertia::render('Catalogo'))->name('catalogo');
Route::get('/contacto', fn () => Inertia::render('Contacto'))->name('contacto');

// Área protegida con autenticación
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
});
