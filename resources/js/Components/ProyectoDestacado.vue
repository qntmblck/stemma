<template>
    <section id="proyectos" class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-base font-semibold text-indigo-600">Proyectos Relevantes</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Infraestructura que impulsa territorios
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Obras diseñadas para responder a los desafíos del desarrollo regional, conectividad, logística y gestión inmobiliaria.
          </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="proyecto in proyectos" :key="proyecto.nombre" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img :src="proyecto.imagen" :alt="proyecto.nombre" class="w-full h-56 object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900">{{ proyecto.nombre }}</h3>
              <p class="mt-2 text-sm text-gray-600">{{ proyecto.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const proyectos = [
    {
      nombre: 'Parque Industrial Puerto Varas',
      descripcion: 'Infraestructura logística y urbana con foco en sostenibilidad y conectividad regional.',
      imagen: '/img/proyectos/parque-industrial.jpg',
    },
    {
      nombre: 'Centro de Distribución Llanquihue',
      descripcion: 'Bodegas, patios y sistema logístico para operación continua en el sur del país.',
      imagen: '/img/proyectos/bodega-centro.jpg',
    },
    {
      nombre: 'Fundaciones Eólicas Llanquihue',
      descripcion: 'Fundaciones de hormigón para parque eólico. Precisión técnica y plazos cumplidos.',
      imagen: '/img/proyectos/fundacion-eolica.jpg',
    },
    {
      nombre: 'Oficinas Corporativas Santa Emma',
      descripcion: 'Edificio de inversión propio con estándar clase A en Santiago y operación delegada.',
      imagen: '/img/proyectos/oficinas-corporativas.jpg',
    },
    {
      nombre: 'Cabañas Modulares en Frutillar',
      descripcion: 'Construcción modular sustentable para turismo y alojamiento en el sur de Chile.',
      imagen: '/img/proyectos/cabanas.jpg',
    },
    {
      nombre: 'Estación de Servicio Petrobras',
      descripcion: 'Ejecución integral para red de carga de combustibles y logística de acceso vehicular.',
      imagen: '/img/proyectos/estacion-servicio.jpg',
    },
  ]
  </script>
