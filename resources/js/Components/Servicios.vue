<template>
    <section id="servicios" class="bg-white">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-[300px]">
        <FlashCard
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
  import FlashCard from '@/Components/FlashCard.vue'

  const servicios = [
    {
      title: 'Transporte de Materiales',
      description: 'Maquinarias, Áridos, Asfalto, Tierra, Escombros, Silo de Maíz.',
      image: '/img/1.jpg',
    },
    {
      title: 'Movimiento de Tierras',
      description: 'Excavaciones plataforma, retiro de escombros y relleno de terrenos.',
      image: '/img/2.jpg',
    },
    {
      title: 'Construcción de Oficinas',
      description: 'Implementamos oficinas a medida con equipamiento de calidad.',
      image: '/img/3.jpg',
    },
    {
      title: 'Arriendo de Maquinarias',
      description: 'Tolvas, batea, granelera, motoniveladora, retroexcavadora, excavadora.',
      image: '/img/4.jpg',
    },
  ]
  </script>

  <style scoped>
  /* Elimina espacio entre las tarjetas */
  #servicios .grid > * {
    margin: 0 !important;
    padding: 0 !important;
  }
  </style>
