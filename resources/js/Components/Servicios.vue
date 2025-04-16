<template>
    <section id="servicios" class="bg-white">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-[300px]">
        <FlashCard
          v-for="(servicio, index) in servicios"
          :key="index"
          :title="servicio.title"
          :description="servicio.description"
          :image="servicio.image"
          :backTitle="servicio.backTitle"
          :backDescription="servicio.backDescription"
        />
      </div>
    </section>
  </template>

  <script setup>
  import FlashCard from '@/Components/FlashCard.vue'

  const servicios = [
    {
      title: 'Transportes',
      description: 'Traslado seguro de maquinarias, áridos, asfaltos, escombros y más.',
      image: '/img/1.jpg?=v1',
      backTitle: 'Transportes',
      backDescription: 'Transporte profesional de maquinarias, áridos, asfalto, tierra, escombros y silo de maíz en rutas urbanas y rurales.',
    },
    {
      title: 'Movimiento de Tierras',
      description: 'Excavación, limpieza y habilitación de terrenos en todo tipo de suelo.',
      image: '/img/2.jpg?=v2',
      backTitle: 'Movimiento de Tierras',
      backDescription: 'Ejecutamos excavaciones, retiros de escombros y rellenos, garantizando una plataforma estable para obras civiles y proyectos de ingeniería.',
    },
    {
      title: 'Construcción',
      description: 'Infraestructura modular y obras civiles en oficinas, bodegas y viviendas.',
      image: '/img/3.jpg?=v2',
      backTitle: 'Construcción',
      backDescription: 'Desarrollamos construcciones de oficinas, bodegas y cabañas con soluciones eficientes, duraderas y adaptadas a cada proyecto.',
    },
    {
      title: 'Arriendo de Camiones y Maquinarias',
      description: 'Flota equipada disponible para faenas, obras y transporte especializado.',
      image: '/img/4.jpg?=v2',
      backTitle: 'Arriendo de Camiones y Maquinarias',
      backDescription: 'Disponibilidad de camiones tolva, batea de árido, graneleras, motoniveladoras, retroexcavadoras y excavadoras, con operadores certificados.',
    },
  ]
  </script>

  <style scoped>
  #servicios .grid > * {
    margin: 0 !important;
    padding: 0 !important;
  }
  </style>
console.log('Servicios component loaded');
console.log('Servicios data:', servicios);
