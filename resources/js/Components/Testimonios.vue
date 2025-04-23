<template>
    <div class="relative isolate bg-white pb-20 pt-16 sm:pt-16">
      <!-- Fondo animado adaptado a colores Santa Emma -->
      <div
        class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
        aria-hidden="true"
      >
        <div
          class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82rem] bg-gradient-to-tr from-yellow-200 to-yellow-600"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-sm font-semibold text-yellow-600 tracking-wide uppercase">
            Clientes que confían en Santa Emma
          </h2>
          <p class="mt-2 text-base sm:text-lg text-gray-600">
            Clientes que han confiado en nuestros proyectos, procesos y soluciones.
          </p>
        </div>

        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-16 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
        >
          <!-- Testimonio destacado -->
          <figure
            class="rounded-2xl bg-white shadow-lg ring-1 ring-yellow-400 sm:col-span-2 xl:col-start-2 xl:row-end-1 border-l-4 border-yellow-500"
          >
            <blockquote
              class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-8 sm:text-xl"
            >
              <p>
                “Santa Emma fue fundamental en el éxito del Parque Eólico Puelche Sur. Su capacidad
                técnica y cumplimiento de plazos marcaron la diferencia.”
              </p>
            </blockquote>
            <figcaption class="flex items-center gap-x-4 border-t border-gray-200 px-6 py-4">
              <img
                class="size-10 rounded-full object-cover border-2 border-yellow-500"
                src="/img/testimonios/ener.png"
                alt="Valentina Espinoza"
              />
              <div class="flex-auto">
                <div class="font-semibold">Valentina Espinoza</div>
                <div class="text-gray-600">@EnerChile</div>
              </div>
            </figcaption>
          </figure>

          <!-- Resto de testimonios -->
          <figure
            v-for="testimonial in testimonios"
            :key="testimonial.author.handle"
            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 border-l-4 border-yellow-500"
          >
            <blockquote class="text-gray-900">
              <p>“{{ testimonial.body }}”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="size-10 rounded-full object-cover border-2 border-yellow-500"
                :src="testimonial.author.imageUrl"
                :alt="testimonial.author.name"
              />
              <div>
                <div class="font-semibold">{{ testimonial.author.name }}</div>
                <div class="text-gray-600">@{{ testimonial.author.handle }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const testimonios = [
    {
      body: 'Gracias a Santa Emma pudimos levantar en tiempo récord nuestra planta. Su compromiso y profesionalismo fueron claves.',
      author: {
        name: 'Carlos Riquelme',
        handle: 'AgroSur',
        imageUrl: '/img/testimonios/agrosur.png',
      },
    },
    {
      body: 'Recomiendo su arriendo de maquinaria: equipos en excelente estado y atención personalizada. Volveremos a contratar.',
      author: {
        name: 'Luis Araya',
        handle: 'Independiente',
        imageUrl: '/img/testimonios/independiente.png',
      },
    },
    {
      body: 'Excelente experiencia en nuestro primer proyecto de inversión. Transparencia, informes detallados y confianza.',
      author: {
        name: 'Ignacio Contreras',
        handle: 'Inversionista',
        imageUrl: '/img/testimonios/inversionista.png',
      },
    },
    {
      body: 'Empresa responsable en los tiempos de ejecución de los proyectos. Nos encontramos muy satisfechos.',
      author: {
        name: 'SINEP',
        handle: 'SINEP ENERGÍA Y CONSTRUCCIÓN',
        imageUrl: '/img/testimonios/sinep.png',
      },
    },
    {
      body: 'Santa Emma ha sido un socio estratégico en nuestras obras civiles, aportando soluciones innovadoras y eficientes.',
      author: {
        name: 'María López',
        handle: 'Constructora Andes',
        imageUrl: '/img/testimonios/closandes.png',
      },
    },
    {
      body: 'La colaboración con Santa Emma en proyectos de urbanización ha sido ejemplar, destacando por su compromiso y calidad.',
      author: {
        name: 'Pedro González',
        handle: 'Urbanizaciones del Sur',
        imageUrl: '/img/testimonios/csur.png',
      },
    },
  ]
  </script>
