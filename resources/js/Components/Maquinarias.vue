<template>
    <section id="maquinarias" class="bg-black py-16 px-2 sm:px-4 lg:px-6 text-white w-full">
      <!-- Texto superior -->
      <div class="mb-10 max-w-6xl mx-auto text-center">
        <p class="text-base sm:text-lg font-bold leading-relaxed tracking-wide">
          Actualización constante de equipos y servicios, para responder con eficiencia y seguridad a los desafíos de la construcción moderna.
        </p>
      </div>

      <!-- Carrusel -->
      <div class="relative">
        <!-- Flecha izquierda -->
        <button
          @click="prevSlide"
          class="absolute -left-6 top-1/2 z-10 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-white shadow rounded-full p-4 text-3xl"
          aria-label="Anterior"
        >
          ‹
        </button>

        <!-- Carrusel de tarjetas -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out gap-4"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(chunk, i) in chunkedMaquinarias"
              :key="i"
              class="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <Flashcard2
                v-for="maquina in chunk"
                :key="maquina.nombre"
                :title="maquina.nombre"
                :description="maquina.descripcion"
                :image="maquina.imagen"
              />
            </div>
          </div>
        </div>

        <!-- Flecha derecha -->
        <button
          @click="nextSlide"
          class="absolute -right-6 top-1/2 z-10 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-white shadow rounded-full p-4 text-3xl"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  import Flashcard2 from '@/Components/Flashcard2.vue'

  const currentSlide = ref(0)

  const maquinarias = [
    {
      nombre: 'Camioneta Combustible GT TZ 38',
      imagen: '/img/maquinarias/CAMION-COMBUSTIBLE.jpg',
      descripcion: 'Mercedes-Benz 1016 · Capacidad 4 m³ · Transporte de combustible con estanque certificado.',
    },
    {
      nombre: 'Camion Tolva LT HV 83',
      imagen: '/img/maquinarias/camiontolva.jpg',
      descripcion: 'Capacidad 14 m³ · Motor Euro 5 · Ideal para transporte de material granular.',
    },
    {
      nombre: 'Cargador Frontal SEM 656D',
      imagen: '/img/maquinarias/cargadorfrontal.jpg',
      descripcion: 'Capacidad 3 m³ · Motor Weichai · Alta eficiencia para movimientos de tierra.',
    },
    {
      nombre: 'Chancadora Powerscreen Trakpactor',
      imagen: '/img/maquinarias/chancacadora.jpg',
      descripcion: 'Planta móvil impactadora · Alta capacidad de trituración para diversos tipos de roca.',
    },
    {
      nombre: 'Excavadora Sunward SWE210',
      imagen: '/img/maquinarias/excavadora.jpg',
      descripcion: 'Motor Isuzu 6BG1 · Peso operativo 21 ton · Ideal para excavaciones profundas.',
    },
    {
      nombre: 'Motoniveladora 670G John Deere',
      imagen: '/img/maquinarias/MOTONIVELADORA2.jpg',
      descripcion: 'Motor John Deere 6.8L · Cuchilla de 3.66 m · Precisión en nivelación de terreno.',
    },
    {
      nombre: 'Rodillo Compactador CS-533E',
      imagen: '/img/maquinarias/rollocompactador.png',
      descripcion: 'Compactador vibratorio · Rueda lisa · Ideal para subbases y asfaltos.',
    },
    {
      nombre: 'Planta Seleccionadora de Áridos',
      imagen: '/img/maquinarias/seleccionadoraridos.jpg',
      descripcion: 'Clasificación de material por granulometría · Transportadores y cribas vibradoras integradas.',
    },
  ]

  const chunkArray = (array, size) => {
    const chunked = []
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size))
    }
    return chunked
  }

  const chunkedMaquinarias = computed(() => chunkArray(maquinarias, 4))

  function prevSlide() {
    if (currentSlide.value > 0) currentSlide.value--
  }

  function nextSlide() {
    if (currentSlide.value < chunkedMaquinarias.value.length - 1) currentSlide.value++
  }
  </script>
