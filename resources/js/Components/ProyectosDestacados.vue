<template>
    <section
      id="proyectos"
      class="relative isolate py-20 px-6 sm:px-8 lg:px-12 text-white min-h-[80vh]"
    >
      <!-- Imagen de fondo fija -->
      <div
        class="absolute inset-0 -z-20 bg-cover bg-center sm:bg-fixed transition-all duration-1000"
        style="background-image: url('/img/h2.jpg')"
      >
        <div class="w-full h-full bg-black/60 mix-blend-multiply"></div>
      </div>

      <!-- Grano animado -->
      <div class="absolute inset-0 z-0 pointer-events-none grain-overlay"></div>

      <!-- Partículas flotantes -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          v-for="i in 25"
          :key="i"
          class="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          :style="randomStyle()"
        ></div>
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
              />
            </div>

            <!-- Botones -->
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

          <!-- Descripción -->
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

      <!-- Degradado inferior para fusión elegante -->
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#1c120a] z-10"></div>
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

  // Swipe para mobile
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

  // Partículas random
  const randomStyle = () => {
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 5 + Math.random() * 5
    return {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }
  }
  </script>

  <style scoped>
  /* Animaciones de partículas flotantes */
  @keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 0.7; }
    100% { transform: translateY(0) scale(1); opacity: 0.3; }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  /* Grano animado */
  .grain-overlay {
    background-image: url("data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.65%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27200%25%27%20height%3D%27200%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
  </style>
