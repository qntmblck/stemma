<template>
    <div class="relative isolate bg-white pb-20 pt-16 sm:pt-16 overflow-hidden">
      <!-- Fondo de grano y partículas doradas -->
      <div class="absolute inset-0 -z-10 pointer-events-none">
        <div class="absolute inset-0 grain-overlay"></div>
        <div v-for="i in 40" :key="i" class="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
             :style="randomStyle()"></div>
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
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900
          sm:mt-16 sm:grid-cols-2 sm:max-w-4xl lg:max-w-none lg:grid-flow-col lg:grid-cols-4"
        >
          <!-- Testimonio principal grande -->
          <figure
            class="rounded-2xl bg-white shadow-lg ring-1 ring-yellow-400 sm:col-span-2 lg:col-start-2 lg:row-end-1 border-l-4 border-yellow-500"
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

  // Partículas doradas animadas
  const randomStyle = () => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 5 + Math.random() * 5;
    return {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }
  }
  </script>

  <style scoped>
  @keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 0.7; }
    100% { transform: translateY(0) scale(1); opacity: 0.3; }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .grain-overlay {
    background-image: radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.05;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
  </style>
