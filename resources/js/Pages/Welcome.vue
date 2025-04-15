<template>
    <div class="bg-white">
    <!-- MODAL DE BIENVENIDA -->
<transition name="slide-up">
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
  >
    <div
      class="relative bg-yellow-400 text-center text-gray-900 rounded-xl p-8 max-w-lg shadow-2xl"
    >
      <!-- Botón de cerrar -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-2xl font-bold text-gray-800 hover:text-gray-600"
      >
        &times;
      </button>

      <h2 class="text-3xl font-extrabold mb-4">NUESTRO COMPROMISO</h2>

      <img src="/img/logo.png" alt="Logo Santa Emma" class="mx-auto h-12 mb-2" />

      <h3 class="text-xl font-semibold mt-2">MARCELO OYARZUN ARANGUIZ</h3>

      <p class="mt-4 text-gray-800">
        Le doy la bienvenida a Constructora Santa Emma. Somos una empresa comprometida en cada uno de nuestros proyectos en ejecución.
      </p>
    </div>
  </div>
</transition>

    <Head>
  <title>Constructora Santa Emma · Construyendo tu futuro</title>
  <meta name="description" content="Constructora Santa Emma ofrece proyectos de calidad, innovación y compromiso en el rubro de la construcción en Chile." />
  <link rel="icon" type="image/png" href="/img/logo-santaemma.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="utf-8" />
    </Head>

      <!-- Header -->
      <header class="absolute inset-x-0 top-0 z-50">
  <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Menú principal">
    <!-- Logo -->
    <div class="flex lg:flex-1">
      <a href="#inicio" class="-m-1.5 p-1.5">
        <span class="sr-only">Constructora Santa Emma</span>
        <img class="h-10 w-auto" src="/img/logo-santaemma.png" alt="Logo Santa Emma" />
      </a>
    </div>

    <!-- Botón hamburguesa -->
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
        <span class="sr-only">Abrir menú principal</span>
        <Bars3Icon class="size-6" aria-hidden="true" />
      </button>
    </div>

    <!-- Navegación escritorio -->
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="#inicio" class="text-sm/6 font-semibold text-gray-900">Inicio</a>
      <a href="#nosotros" class="text-sm/6 font-semibold text-gray-900">Nosotros</a>
      <a href="#proyectos" class="text-sm/6 font-semibold text-gray-900">Proyectos</a>
      <a href="#catalogo" class="text-sm/6 font-semibold text-gray-900">Catálogo</a>
      <a href="#contacto" class="text-sm/6 font-semibold text-gray-900">Contacto</a>
    </div>

    <!-- Ingresar / Registrar -->
    <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
      <a :href="route('login')" class="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition">Ingresar</a>
      <a :href="route('register')" class="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition">>Registrar</a>
    </div>
  </nav>

  <!-- Menú móvil -->
  <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
    <div class="fixed inset-0 z-50" />
    <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#inicio" class="-m-1.5 p-1.5">
          <span class="sr-only">Constructora Santa Emma</span>
          <img class="h-10 w-auto" src="/img/logo-santaemma.png" alt="Logo Santa Emma" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
          <span class="sr-only">Cerrar menú</span>
          <XMarkIcon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="#inicio" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Inicio</a>
            <a href="#nosotros" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Nosotros</a>
            <a href="#proyectos" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Proyectos</a>
            <a href="#catalogo" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Catálogo</a>
            <a href="#contacto" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contacto</a>
          </div>
          <div class="py-6 flex flex-col gap-y-2">
            <a :href="route('login')" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Ingresar</a>
            <a :href="route('register')" class="-mx-3 block rounded-lg px-3 p y-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Registrar</a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</header>

      <main>

        <!-- Hero section -->
<div class="relative isolate pt-14">
  <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
      <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
  </svg>
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <div class="flex">
        <div class="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span class="font-semibold text-yellow-600">Más de 10 años de experiencia</span>
          <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
          <a href="#proyectos" class="flex items-center gap-x-1">
            <span class="absolute inset-0" aria-hidden="true" />
            Ver proyectos recientes
            <ChevronRightIcon class="-mr-2 size-5 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </div>
      <h1 class="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Ingeniería, transporte y construcción en la Zona Austral
      </h1>
      <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        En Constructora Santa Emma ejecutamos proyectos de ingeniería civil, transporte de áridos y arriendo de maquinaria con profesionalismo y compromiso. Desde Puerto Montt y Frutillar, construimos confianza y desarrollo para nuestros clientes.
      </p>
      <div class="mt-10 flex items-center gap-x-6">
        <a href="#contacto" class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Contáctanos</a>
        <a href="#nosotros" class="text-sm/6 font-semibold text-gray-900">Conócenos <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
      <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
        <title>Camión de transporte Santa Emma</title>
        <defs>
          <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
            <rect width="316" height="684" rx="36" />
          </clipPath>
        </defs>
        <path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v615c0 41.213 22 63.208 63.223 63.208h232.541c41.222 0 63.223-21.999 63.223-63.212V64.213Z" />
        <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
        <foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
          <img src="/img/dashboard/truck.jpg" alt="Camión Constructora Santa Emma" class="object-cover w-full h-full" />
        </foreignObject>
      </svg>
    </div>
  </div>
</div>


        <!-- Logo cloud -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" width="158" height="48" />
            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" width="158" height="48" />
          </div>
        </div>

        <!-- Feature section -->
        <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base/7 font-semibold text-indigo-600">Proyectos destacados</h2>
      <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Obras que marcan la diferencia
      </p>
      <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <!-- Proyecto 1: Parque Industrial -->
        <div class="relative lg:col-span-3">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <img class="h-80 object-cover object-left" src="/img/proyectos/parque-industrial.jpg" alt="Parque Industrial Santa Ema" />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">Infraestructura</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Parque Industrial Puerto Varas</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Conectividad, logística y sostenibilidad en una obra pensada para el futuro del sur de Chile.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>

        <!-- Proyecto 2: Bodegas -->
        <div class="relative lg:col-span-3">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <img class="h-80 object-cover object-left lg:object-right" src="/img/proyectos/bodega-centro.jpg" alt="Centro logístico Santa Ema" />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">Logística</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Centro de distribución y bodegas</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Espacios eficientes y seguros, construidos bajo estándares internacionales para operaciones logísticas.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
        </div>

        <!-- Proyecto 3: Viviendas -->
        <div class="relative lg:col-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            <img class="h-80 object-cover object-left" src="/img/proyectos/viviendas-sociales.jpg" alt="Viviendas sociales Santa Ema" />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">Habitacional</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Viviendas sociales en Valdivia</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Proyectos habitacionales con foco en dignidad, diseño y eficiencia energética para comunidades.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
        </div>

        <!-- Proyecto 4: Estaciones de servicio -->
        <div class="relative lg:col-span-2">
          <div class="absolute inset-px rounded-lg bg-white" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <img class="h-80 object-cover" src="/img/proyectos/estacion-servicio.jpg" alt="Estación de servicio construida por Santa Ema" />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">Obra comercial</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Estación de servicio para Petrobras</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Diseño funcional, seguridad estructural y terminaciones de alto estándar para operadores energéticos.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>

        <!-- Proyecto 5: Oficinas Corporativas -->
        <div class="relative lg:col-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <img class="h-80 object-cover" src="/img/proyectos/oficinas-corporativas.jpg" alt="Oficinas corporativas construidas por Santa Ema" />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">Corporativo</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Edificio de oficinas Santa Ema</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Proyecto de inversión propio en Santiago, enfocado en gestión de activos inmobiliarios y oficinas clase A.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  </div>

        <!-- Feature section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Everything you need to deploy your app</p>
            <p class="mt-6 text-lg/8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div v-for="feature in secondaryFeatures" :key="feature.name" class="flex flex-col">
                <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <component :is="feature.icon" class="size-5 flex-none text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p class="flex-auto">{{ feature.description }}</p>
                  <p class="mt-6">
                    <a :href="feature.href" class="text-sm/6 font-semibold text-indigo-600">Learn more <span aria-hidden="true">→</span></a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Newsletter section -->
        <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get notified when we’re launching</h2>
            <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.</p>
            <form class="mx-auto mt-10 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6" placeholder="Enter your email" />
              <button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
            </form>
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Testimonials section -->
        <div class="relative isolate mt-32 sm:mt-56 sm:pt-32">
          <svg class="absolute inset-0 -z-10 hidden size-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block" aria-hidden="true">
            <defs>
              <pattern id="55d3d46d-692e-45f2-becd-d8bdc9344f45" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="0" class="overflow-visible fill-gray-50">
              <path d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
          </svg>
          <div class="relative">
            <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
              <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true">
              <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="text-base/7 font-semibold text-indigo-600">Testimonios</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
  Clientes que confían en Santa Ema
</p>

              </div>
              <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote class="p-12 text-xl/8 font-semibold tracking-tight text-gray-900">
                    <p>{{ `“${featuredTestimonial.body}”` }}</p>
                  </blockquote>
                  <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <img class="size-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
                    <div class="flex-auto">
                      <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
                      <div class="text-gray-600">{{ `@${featuredTestimonial.author.handle}` }}</div>
                    </div>
                    <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
                  </figcaption>
                </figure>
                <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
                  <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
                    <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      <blockquote class="text-gray-900">
                        <p>{{ `“${testimonial.body}”` }}</p>
                      </blockquote>
                      <figcaption class="mt-6 flex items-center gap-x-4">
                        <img class="size-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                        <div>
                          <div class="font-semibold">{{ testimonial.author.name }}</div>
                          <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="mt-32 bg-gray-900 sm:mt-56">
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <img class="h-9" src="/img/logo-santaemma-white.png" alt="Constructora Santa Emma" />
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Servicios</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.solutions" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm/6 font-semibold text-white">Soporte</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.support" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm/6 font-semibold text-white">Empresa</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.company" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.legal" :key="item.name">
                <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 class="text-sm/6 font-semibold text-white">Suscríbete a nuestro boletín</h3>
        <p class="mt-2 text-sm/6 text-gray-300">Novedades, lanzamientos y oportunidades, directo a tu correo.</p>
      </div>
      <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Correo electrónico</label>
        <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
          class="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:w-56 sm:text-sm/6"
          placeholder="Tu correo electrónico" />
        <div class="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
          <button type="submit"
            class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Suscribirse</button>
        </div>
      </form>
    </div>

    <div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex gap-x-6 md:order-2">
        <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href"
          class="text-gray-400 hover:text-gray-300">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="size-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">&copy; 2024 Constructora Santa Emma SpA. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

    </div>
  </template>

  <script setup>
  import { defineComponent, h, ref , onMounted } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { ArrowPathIcon, ChevronRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

  const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}

onMounted(() => {
  if (!localStorage.getItem('modalShown')) {
    showModal.value = true
    localStorage.setItem('modalShown', 'true')
  }
})

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  const primaryFeatures = [
    {
      name: 'Push to deploy.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
      icon: ServerIcon,
    },
  ]
  const secondaryFeatures = [
    {
      name: 'Push to deploy',
      description:
        'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
      href: '#',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
      href: '#',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
      href: '#',
      icon: ArrowPathIcon,
    },
  ]
  const featuredTestimonial = {
  body: 'Santa Emma fue fundamental en el éxito del Parque Eólico Llanquihue. Su capacidad técnica y cumplimiento de plazos marcaron la diferencia.',
  author: {
    name: 'Valentina Espinoza',
    handle: 'EnerChile',
    imageUrl: '/img/testimonios/valentina.jpg',
    logoUrl: '/img/logos/enerchile.png',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Gracias a Santa Emma pudimos levantar en tiempo récord nuestra planta. Su compromiso y profesionalismo fueron claves.',
        author: {
          name: 'Carlos Riquelme',
          handle: 'AgroSur',
          imageUrl: '/img/testimonios/carlos.jpg',
        },
      },
      {
        body: 'Recomiendo su arriendo de maquinaria: equipos en excelente estado y atención personalizada. Volveremos a contratar.',
        author: {
          name: 'Luis Araya',
          handle: 'Independiente',
          imageUrl: '/img/testimonios/luis.jpg',
        },
      },
    ],
    [
      {
        body: 'El edificio de oficinas se entregó impecable y antes del plazo. Santa Emma es una constructora confiable y transparente.',
        author: {
          name: 'Marcela Pinto',
          handle: 'Grupo Patagon',
          imageUrl: '/img/testimonios/marcela.jpg',
        },
      },
      {
        body: 'Muy buena experiencia trabajando con su equipo técnico en Puerto Varas. Todo fue según planificación y sin imprevistos.',
        author: {
          name: 'Fernando Lagos',
          handle: 'Inmobiliaria Andes Sur',
          imageUrl: '/img/testimonios/fernando.jpg',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Colaboramos con Santa Emma en la venta y distribución de áridos. Todo fue ágil y cumplieron con los volúmenes pactados.',
        author: {
          name: 'Gabriela Díaz',
          handle: 'Minerales del Sur',
          imageUrl: '/img/testimonios/gabriela.jpg',
        },
      },
      {
        body: 'Estamos felices con la bodega construida para nuestro centro logístico. Fue una obra rápida, segura y funcional.',
        author: {
          name: 'José Morales',
          handle: 'Logística MJS',
          imageUrl: '/img/testimonios/jose.jpg',
        },
      },
    ],
    [
      {
        body: 'Destaco la seriedad del equipo de Santa Emma. Cumplieron cada etapa del contrato a cabalidad y con mucha comunicación.',
        author: {
          name: 'María Teresa Soto',
          handle: 'Particular',
          imageUrl: '/img/testimonios/mariateresa.jpg',
        },
      },
      {
        body: 'Excelente experiencia en nuestro primer proyecto de inversión. Transparencia, informes detallados y confianza.',
        author: {
          name: 'Ignacio Contreras',
          handle: 'Inversionista',
          imageUrl: '/img/testimonios/ignacio.jpg',
        },
      },
    ],
  ],
]

  const footerNavigation = {
  solutions: [
    { name: 'Obras Civiles', href: '#servicios' },
    { name: 'Movimiento de Tierras', href: '#servicios' },
    { name: 'Fundaciones para Energía', href: '#proyectos' },
    { name: 'Arriendo de Maquinaria', href: '#catalogo' },
    { name: 'Gestión de Inversiones', href: '#nosotros' },
  ],
  support: [
    { name: 'Preguntas frecuentes', href: '#faq' },
    { name: 'Documentación técnica', href: '#documentos' },
    { name: 'Contacto directo', href: '#contacto' },
  ],
  company: [
    { name: 'Quiénes somos', href: '#nosotros' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Clientes', href: '#clientes' },
  ],
  legal: [
    { name: 'Términos y condiciones', href: '#' },
    { name: 'Política de privacidad', href: '#' },
    { name: 'Aviso legal', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/santaemma.cl',
      icon: defineComponent({ render: () => h('i', { class: 'fab fa-facebook-f' }) }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/santaemma.cl',
      icon: defineComponent({ render: () => h('i', { class: 'fab fa-instagram' }) }),
    },
    {
      name: 'X',
      href: 'https://twitter.com/santaemma_cl',
      icon: defineComponent({ render: () => h('i', { class: 'fab fa-x-twitter' }) }),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@santaemma',
      icon: defineComponent({ render: () => h('i', { class: 'fab fa-youtube' }) }),
    },
  ],
}


  const mobileMenuOpen = ref(false)
  </script>

<style scoped>
.slide-up-enter-active {
  animation: slideInUp 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

.slide-up-leave-active {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(40px);
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  80% {
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

