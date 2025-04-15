<template>
    <section id="servicios" class="bg-white py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Nuestros Servicios</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Soluciones integrales en construcción, movimiento de tierras y gestión de activos, desarrolladas con precisión y compromiso.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <Flashcard
          v-for="(servicio, index) in servicios"
          :key="index"
          :title="servicio.title"
          :description="servicio.description"
          :image="servicio.image"
        />
      </div>
    </section>
  </template>

  <script setup>
  import Flashcard from '@/Components/Flashcard.vue'

  const servicios = [
    {
      title: 'Obras Civiles',
      description: 'Infraestructura para el desarrollo urbano y rural con altos estándares técnicos.',
      image: '/img/servicios/obras-civiles.jpg',
    },
    {
      title: 'Movimiento de Tierras',
      description: 'Excavación, relleno y nivelación para obras menores y grandes proyectos.',
      image: '/img/servicios/movimiento-tierras.jpg',
    },
    {
      title: 'Fundaciones para Energía',
      description: 'Cimentaciones especializadas para parques eólicos, solares y otras instalaciones energéticas.',
      image: '/img/servicios/fundaciones.jpg',
    },
    {
      title: 'Gestión de Inversiones',
      description: 'Estrategias inmobiliarias con foco en rentabilidad, seguridad y desarrollo patrimonial.',
      image: '/img/servicios/inversiones.jpg',
    },
  ]
  </script>
