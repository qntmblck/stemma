<?php

return [
    'site_name' => env('SEO_SITE_NAME', 'Santa Emma Inversiones'),
    'site_url' => rtrim(env('SEO_SITE_URL', 'https://santaemmainversiones.cl'), '/'),
    'locale' => 'es_CL',
    'theme_color' => '#f4b400',
    'default_image' => '/img/h1.jpg',
    'logo' => '/stemma.png',
    'description' => 'Santa Emma Inversiones desarrolla obras civiles, movimiento de tierras, transporte de maquinarias y gestion de activos desde la zona austral hacia todo Chile.',
    'keywords' => 'Santa Emma, inversiones, construccion, obras civiles, movimiento de tierras, maquinaria, transporte, Chile, Patagonia',
    'contact' => [
        'email' => env('SEO_CONTACT_EMAIL', 'contacto@santaemmainversiones.cl'),
        'phone' => env('SEO_CONTACT_PHONE', ''),
        'area_served' => 'Chile',
    ],
    'pages' => [
        'home' => [
            'path' => '/',
            'title' => 'Santa Emma Inversiones | Construccion, maquinaria e inversiones',
            'description' => 'Construimos confianza y gestionamos inversiones con foco en obras civiles, transporte, movimiento de tierras y activos operativos en Chile.',
            'image' => '/img/h1.jpg',
            'priority' => '1.0',
            'changefreq' => 'weekly',
        ],
        'nosotros' => [
            'path' => '/nosotros',
            'title' => 'Nosotros | Santa Emma Inversiones',
            'description' => 'Conoce la vision, historia y especialidades de Santa Emma Inversiones en construccion, maquinaria y ejecucion confiable de proyectos.',
            'image' => '/img/h2.jpg',
            'priority' => '0.8',
            'changefreq' => 'monthly',
        ],
        'proyectos' => [
            'path' => '/proyectos',
            'title' => 'Proyectos | Obras civiles y movimiento de tierras',
            'description' => 'Proyectos ejecutados por Santa Emma en obras civiles, movimiento de tierras, infraestructura y apoyo operativo para inversion privada.',
            'image' => '/img/p1.jpg',
            'priority' => '0.9',
            'changefreq' => 'weekly',
        ],
        'catalogo' => [
            'path' => '/catalogo',
            'title' => 'Catalogo | Servicios y maquinaria Santa Emma',
            'description' => 'Revisa servicios, maquinarias y capacidades operativas para construccion, transporte, movimiento de tierras y mejoramiento de terrenos.',
            'image' => '/img/maquinarias/excavadora.jpg',
            'priority' => '0.9',
            'changefreq' => 'weekly',
        ],
        'contacto' => [
            'path' => '/contacto',
            'title' => 'Contacto | Cotiza con Santa Emma Inversiones',
            'description' => 'Contacta a Santa Emma para cotizar obras, transporte de maquinaria, movimiento de tierras o apoyo tecnico para tu proximo proyecto.',
            'image' => '/img/4.jpg',
            'priority' => '0.7',
            'changefreq' => 'monthly',
        ],
    ],
];
