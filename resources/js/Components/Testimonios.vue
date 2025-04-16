<template>
    <section id="testimonios" class="relative isolate pt-24 sm:pt-24 bg-gray-50 px-6 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Clientes que confían en Santa Emma</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Testimonios reales de clientes que han confiado en nuestros proyectos, procesos y soluciones.
        </p>
      </div>

      <div class="relative mt-16 grid max-w-7xl mx-auto gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div
          v-for="(testimonio, i) in testimonios"
          :key="i"
          class="bg-white border-l-4 border-yellow-500 p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <blockquote class="text-gray-900 italic">
            <p>“{{ testimonio.body }}”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img
              :src="testimonio.author.imageUrl"
              alt="Foto autor"
              class="h-12 w-12 rounded-full object-cover border-2 border-yellow-500"
            />
            <div class="text-left">
              <div class="font-semibold text-gray-900">{{ testimonio.author.name }}</div>
              <div class="text-sm text-gray-600">@{{ testimonio.author.handle }}</div>
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const testimonios = [
    {
      body: 'Santa Emma fue fundamental en el éxito del Parque Eólico Puelche Sur. Su capacidad técnica y cumplimiento de plazos marcaron la diferencia.',
      author: {
        name: 'Valentina Espinoza',
        handle: 'EnerChile',
        imageUrl: '/img/testimonios/valentina.jpg',
      },
    },
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
    {
      body: 'Excelente experiencia en nuestro primer proyecto de inversión. Transparencia, informes detallados y confianza.',
      author: {
        name: 'Ignacio Contreras',
        handle: 'Inversionista',
        imageUrl: '/img/testimonios/ignacio.jpg',
      },
    },
    {
      body: 'Nos encontramos muy satisfechos con el servicio prestado por parte de la empresa constructora Santa Emma que cuenta con ingenieros calificados.',
      author: {
        name: 'Gerencia',
        handle: 'Portuaria Cabo Froward',
        imageUrl: '/img/testimonios/portuaria.jpg',
      },
    },
    {
      body: 'Empresa responsable en los tiempos de ejecución de los proyectos. Nos encontramos muy satisfechos.',
      author: {
        name: 'SINEP',
        handle: 'SINEP ENERGÍA Y CONSTRUCCIÓN',
        imageUrl: '/img/testimonios/sinep.jpg',
      },
    },
    {
      body: 'Santa Emma ha sido un socio estratégico en nuestras obras civiles, aportando soluciones innovadoras y eficientes.',
      author: {
        name: 'María López',
        handle: 'Constructora Andes',
        imageUrl: '/img/testimonios/maria.jpg',
      },
    },
    {
      body: 'La colaboración con Santa Emma en proyectos de urbanización ha sido ejemplar, destacando por su compromiso y calidad.',
      author: {
        name: 'Pedro González',
        handle: 'Urbanizaciones del Sur',
        imageUrl: '/img/testimonios/pedro.jpg',
      },
    },
  ]
  </script>

  <style scoped>
  section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at top, rgba(255,255,255,0.5), transparent);
    z-index: -1;
  }
  </style>
