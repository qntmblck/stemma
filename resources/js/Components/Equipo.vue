<template>
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Título y descripción -->
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold text-yellow-600 uppercase tracking-wide">Nuestro equipo</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Profesionales que construyen con excelencia
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-700">
            En Santa Emma, cada proyecto es impulsado por un equipo multidisciplinario de expertos en construcción, ingeniería, maquinaria y gestión de inversiones. Nuestra cultura combina experiencia técnica con una visión estratégica enfocada en la eficiencia, la sostenibilidad y la generación de valor.
          </p>
        </div>

        <!-- Grid de integrantes -->
        <div class="mt-20 grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="miembro in equipo" :key="miembro.nombre" class="text-center">
            <img :src="miembro.foto" alt="Foto de {{ miembro.nombre }}" class="mx-auto h-40 w-40 rounded-full object-cover shadow-md" />
            <h3 class="mt-6 text-lg font-semibold text-gray-900">{{ miembro.nombre }}</h3>
            <p class="text-sm text-yellow-600 font-medium uppercase tracking-wide">{{ miembro.cargo }}</p>
            <p class="mt-2 text-sm text-gray-600">{{ miembro.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const equipo = [
    {
      nombre: 'Marcelo Oyarzún Aránguiz',
      cargo: 'Director General',
      foto: '/img/equipo/marcelo.jpg',
      descripcion: 'Fundador y líder estratégico de Santa Emma. Con más de 15 años en el rubro, ha guiado la expansión hacia nuevos mercados y modelos de inversión.',
    },
    {
      nombre: 'Valentina Oyarzún',
      cargo: 'Jefa de Operaciones',
      foto: '/img/equipo/valentina.jpg',
      descripcion: 'Supervisa la ejecución técnica y logística de cada proyecto, garantizando cumplimiento de plazos y estándares de calidad.',
    },
    {
      nombre: 'Sebastián Rivas',
      cargo: 'Ingeniero de Proyectos',
      foto: '/img/equipo/sebastian.jpg',
      descripcion: 'Encargado del diseño estructural, presupuestos y coordinación de terreno en obras civiles de gran envergadura.',
    },
    // Puedes agregar más miembros según tu estructura organizacional
  ]
  </script>
