<template>
    <section id="maquinarias" class="bg-black py-16 px-2 sm:px-4 lg:px-6 text-white w-full">

      <!-- Texto superior -->
      <div class="mb-10 max-w-6xl mx-auto text-center">
        <p class="text-base sm:text-lg font-light leading-relaxed tracking-wide">
          Actualización constante de equipos y servicios, para responder con eficiencia y seguridad a los desafíos de la construcción moderna.
        </p>
      </div>

      <!-- Carrusel -->
      <div class="relative">
        <!-- Flecha izquierda -->
        <button
          @click="prevSlide"
          class="absolute -left-6 top-1/2 z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 shadow rounded-full p-4 text-3xl"
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
          class="absolute -right-6 top-1/2 z-10 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 shadow rounded-full p-4 text-3xl"
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
      nombre: 'Chancadora Impactadora Terex',
      imagen: '/img/maquinarias/chancadora-terex.jpg',
      descripcion: 'Potencia de 400 HP · Capacidad: 250 t/h · Ideal para áridos finos y medios.',
    },
    {
      nombre: 'Rodillo Compactador CAT 12T',
      imagen: '/img/maquinarias/rodillo-cat.jpg',
      descripcion: 'Peso: 12 ton · Motor CAT C4.4 · Compactación eficiente en suelos y asfaltos.',
    },
    {
      nombre: 'Generador Eléctrico 80kVA',
      imagen: '/img/maquinarias/generador.jpg',
      descripcion: 'Motor Perkins · Potencia continua 80kVA · ATS incorporado.',
    },
    {
      nombre: 'Planta dosificadora de áridos',
      imagen: '/img/maquinarias/planta-dosificadora.jpg',
      descripcion: '60 m³/h · Control automático · Tolvas para múltiples materiales.',
    },
    {
      nombre: 'Excavadora Komatsu PC210',
      imagen: '/img/maquinarias/excavadora-komatsu.jpg',
      descripcion: 'Motor 165 HP · Profundidad: 6.6 m · Peso: 21 ton.',
    },
    {
      nombre: 'Retroexcavadora JCB 3CX',
      imagen: '/img/maquinarias/retroexcavadora-jcb.jpg',
      descripcion: 'Turbo diésel · Brazo extensible · Balde 1.1 m³.',
    },
    {
      nombre: 'Camión Tolva 6x4 Mercedes-Benz',
      imagen: '/img/maquinarias/camion-tolva.jpg',
      descripcion: 'Carga: 18 m³ · Motor Euro V · Tracción 6x4.',
    },
    {
      nombre: 'Camión Aljibe 15.000L',
      imagen: '/img/maquinarias/camion-aljibe.jpg',
      descripcion: 'Tanque acero · Bomba presión · Riego y control de polvo.',
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
