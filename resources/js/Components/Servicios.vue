<template>
    <section id="servicios" class="bg-white py-0">
      <div class="grid grid-cols-2 lg:grid-cols-4 w-full">
        <div
          v-for="(servicio, index) in servicios"
          :key="index"
          class="aspect-square sm:aspect-[4/3] h-full"
        >
          <FlashCard
            :title="servicio.title"
            :description="servicio.description"
            :image="servicio.image"
            :backTitle="servicio.backTitle"
            :backDescription="servicio.backDescription"
          />
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import FlashCard from '@/Components/FlashCard.vue'

  const servicios = [
    {
      title: 'TRANSPORTES',
      description: 'Traslado seguro de maquinarias, áridos, asfaltos, escombros y más.',
      image: '/img/1.jpg?=v1',
      backTitle: 'Transportes',
      backDescription: 'Transporte profesional de maquinarias, áridos, asfalto, tierra, escombros y silo de maíz en rutas urbanas y rurales.',
    },
    {
      title: 'MOVIMIENTO DE TIERRAS',
      description: 'Excavación, limpieza y habilitación de terrenos en todo tipo de suelo.',
      image: '/img/2.jpg?=v2',
      backTitle: 'Movimiento de Tierras',
      backDescription: 'Ejecutamos excavaciones, retiros de escombros y rellenos, garantizando una plataforma estable para obras civiles y proyectos de ingeniería.',
    },
    {
      title: 'CONSTRUCCIÓN',
      description: 'Infraestructura modular y obras civiles en oficinas, bodegas y viviendas.',
      image: '/img/3.jpg?=v2',
      backTitle: 'Construcción',
      backDescription: 'Desarrollamos construcciones de oficinas, bodegas y cabañas con soluciones eficientes, duraderas y adaptadas a cada proyecto.',
    },
    {
      title: 'ARRIENDO DE MAQUINARIAS',
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
