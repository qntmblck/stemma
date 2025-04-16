<template>
    <section
      id="proyectos"
      class="relative isolate py-32 px-6 sm:px-8 lg:px-12 text-white"
    >
      <!-- Fondo fijo -->
      <div
        class="absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        style="background-image: url('/img/h2.jpg')"
      >
        <div class="w-full h-full bg-black/70 mix-blend-multiply"></div>
      </div>

      <div class="max-w-7xl mx-auto">
        <!-- Título -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold sm:text-5xl">Proyecto Destacado</h2>
          <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Obras estratégicas ejecutadas con precisión, sostenibilidad e impacto regional.
          </p>
        </div>

        <!-- Carrusel + Contenido -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Carousel -->
          <div class="relative">
            <div class="overflow-hidden rounded-xl shadow-xl">
              <img :src="images[currentImage]" class="w-full h-[460px] object-cover transition-all duration-500" />
            </div>

            <!-- Controles -->
            <button
              @click="prevImage"
              class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-r"
            >
              ‹
            </button>
            <button
              @click="nextImage"
              class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-l"
            >
              ›
            </button>
          </div>

          <!-- Descripción -->
          <div>
            <h3 class="text-3xl font-semibold text-white">Parque Eólico Puelche Sur</h3>
            <p class="mt-4 text-gray-300">
              Proyecto desarrollado en la Región de Los Lagos con una capacidad instalada de 165 MW, contribuyendo a la matriz energética renovable de Chile. Santa Emma ejecutó fundaciones para torres eólicas y obras anexas.
            </p>
            <p class="mt-4 text-gray-300">
              Se destaca el cumplimiento de plazos, respeto por el entorno natural y colaboración con empresas internacionales del sector energético.
            </p>
            <ul class="mt-6 list-disc list-inside text-gray-200">
              <li>+50 fundaciones ejecutadas</li>
              <li>Conexión vial de 12 km de caminos estabilizados</li>
              <li>Impacto directo en comunidades rurales aledañas</li>
            </ul>

            <div class="mt-8">
              <a
                href="/contacto"
                class="inline-block rounded-md bg-yellow-500 px-5 py-3 text-white font-semibold hover:bg-yellow-400 transition"
              >
                Cotiza tu proyecto con nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue'

  const images = [
    '/img/p1.jpg',
    '/img/p2.jpg',
    '/img/p3.jpg',
    '/img/p4.jpg',
  ]

  const currentImage = ref(0)

  function nextImage() {
    currentImage.value = (currentImage.value + 1) % images.length
  }

  function prevImage() {
    currentImage.value =
      (currentImage.value - 1 + images.length) % images.length
  }
  </script>
