<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
