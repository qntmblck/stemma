<template>
    <section
      id="proyectos"
      class="relative isolate py-20 px-10 sm:px-8 lg:px-12 text-white min-h-[80vh]"
    >
      <!-- Imagen de fondo fija cinematográfica -->
      <div
        class="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style="background-image: url('/img/h2.jpg')"
      >
        <div class="w-full h-full bg-black/60 mix-blend-multiply"></div>
      </div>

      <!-- Contenido principal -->
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold sm:text-5xl">Proyecto Destacado</h2>
          <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Obras estratégicas ejecutadas con precisión, sostenibilidad e impacto regional.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Carrusel -->
          <div class="relative">
            <div
              class="overflow-hidden rounded-xl shadow-xl"
              @touchstart="startTouch"
              @touchmove="moveTouch"
              @touchend="endTouch"
            >
              <img
                :src="images[currentImage]"
                class="w-full h-[460px] object-cover transition-all duration-500"
                alt="Imagen de proyecto"
              />
            </div>

            <!-- Botones de navegación -->
            <button
              @click="prevImage"
              class="absolute left-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              @click="nextImage"
              class="absolute right-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>

          <!-- Descripción del proyecto -->
          <div class="flex flex-col items-center justify-center text-center h-full">
            <h3 class="text-3xl font-semibold text-white">Parque Eólico Puelche Sur</h3>
            <p class="mt-4 text-gray-300 max-w-xl">
              Proyecto desarrollado en la Región de Los Lagos con una capacidad instalada de 165 MW, contribuyendo a la matriz energética renovable de Chile. Santa Emma ejecutó fundaciones para torres eólicas y obras anexas.
            </p>
            <p class="mt-4 text-gray-300 max-w-xl">
              Se destaca el cumplimiento de plazos, respeto por el entorno natural y colaboración con empresas internacionales del sector energético.
            </p>
            <ul class="mt-6 list-disc list-inside text-gray-200 text-left max-w-xl">
              <li>+50 fundaciones ejecutadas</li>
              <li>Conexión vial de 12 km de caminos estabilizados</li>
              <li>Impacto directo en comunidades rurales aledañas</li>
            </ul>

            <div class="mt-8">
              <a
                href="/"
                class="inline-block rounded-md bg-yellow-500 px-5 py-3 text-white font-semibold hover:bg-yellow-400 transition"
              >
                Conoce nuestros Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Degradado inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-[#fffbea] z-10"></div>

    </section>
  </template>

  <script setup>
  import { ref } from 'vue'

  const images = [
    '/img/p1.jpg?=v1',
    '/img/p2.jpg',
    '/img/p3.jpg?=v2',
    '/img/p4.jpg',
  ]

  const currentImage = ref(0)

  function nextImage() {
    currentImage.value = (currentImage.value + 1) % images.length
  }

  function prevImage() {
    currentImage.value = (currentImage.value - 1 + images.length) % images.length
  }

  // Swipe para móvil
  let startX = 0
  let endX = 0
  function startTouch(e) {
    startX = e.touches[0].clientX
  }
  function moveTouch(e) {
    endX = e.touches[0].clientX
  }
  function endTouch() {
    const diff = startX - endX
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage()
    }
    startX = 0
    endX = 0
  }
  </script>

  <style scoped>
  /* Eliminadas partículas, grano animado y randomStyle */
  /* Solo mantenemos degradado inferior y fondo cinematográfico */
  </style>
