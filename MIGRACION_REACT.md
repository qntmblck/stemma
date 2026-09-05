# Migración Stemma de Vue a React

## Estado final

Stemma quedó migrado a Inertia React:

- Entrada única: resources/js/app.jsx.
- Páginas Inertia en .jsx.
- Layout principal en React.
- Componentes compartidos en React.
- Vite usa sólo @vitejs/plugin-react.
- Tailwind escanea .js y .jsx.
- Se retiraron dependencias Vue del package.json.
- No deben existir archivos .vue bajo resources/js.

## Stack

- Laravel 12
- Inertia React
- React 18
- Vite
- Tailwind CSS
- Headless UI React
- Heroicons React
- Lucide React

Este stack queda alineado con la dirección usada en appscar y sgx, dejando
la puerta abierta para integrar servicios externos en Python/FastAPI de forma
similar: Laravel conserva dominio, rutas y autorización; FastAPI puede resolver
procesos especializados como IA, OCR, automatizaciones o análisis.

## Verificación esperada

npm install
npm run build
rg --files resources/js | rg '\\.vue$'

El último comando no debe devolver resultados.

## SEO público

El sitio usa el mismo enfoque aplicado en AppSCAR/SGX: cada página pública
React monta `resources/js/Components/Seo.jsx`, que genera título, descripción,
canonical, Open Graph, Twitter cards y JSON-LD. Los datos fuente viven en
`config/seo.php` y se comparten a Inertia desde `HandleInertiaRequests`.

Rutas cubiertas:

- `/`
- `/nosotros`
- `/proyectos`
- `/catalogo`
- `/contacto`

Laravel también expone `/robots.txt` y `/sitemap.xml`. El dominio canónico se
define con `SEO_SITE_URL`, así local puede correr en `localhost` sin publicar
metadatos apuntando a desarrollo.
