<template>
    <section
      class="relative text-white"
      :class="{ 'bg-fixed': !isMobile, 'bg-cover': true, 'bg-center': true }"
      :style="{ backgroundImage: 'url(/img/h1.jpg)' }"
    >
      <div class="bg-[#1c120a]/90 py-24 sm:py-32 px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center" v-intersect="animarTexto">
          <h2
            class="text-sm font-semibold text-yellow-400 uppercase tracking-wider opacity-0 transition duration-700"
            :class="{ 'opacity-100 translate-y-0': textoVisible }"
          >
            Nuestra historia
          </h2>
          <p
            class="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white opacity-0 translate-y-10 transition duration-700"
            :class="{ 'opacity-100 translate-y-0': textoVisible }"
          >
            Más de {{ aniosExperiencia }} años de evolución y confianza
          </p>
          <p
            class="mt-6 text-lg leading-8 text-gray-300 opacity-0 translate-y-10 transition duration-700 delay-100"
            :class="{ 'opacity-100 translate-y-0': textoVisible }"
          >
            Desde Puerto Montt, Santa Emma nació como una empresa familiar de transporte de áridos. Hoy, somos una firma regional de obras civiles, maquinaria pesada e inversión estratégica en el sur de Chile.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div class="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
            <img
              src="/img/historia/historia-1.jpg"
              alt="Inicios en Puerto Montt"
              class="w-full h-80 object-cover"
            />
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
            <img
              src="/img/historia/historia-2.jpg"
              alt="Crecimiento y expansión regional"
              class="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  // 1. Detectar si el dispositivo es móvil
  const isMobile = ref(false)
  onMounted(() => {
    isMobile.value = window.innerWidth < 768
  })

  // 2. Mostrar animación al hacer scroll (IntersectionObserver)
  const textoVisible = ref(false)
  function animarTexto() {
    textoVisible.value = true
  }

  // 3. Calcular años desde fundación (2013)
  const aniosExperiencia = new Date().getFullYear() - 2013

  // 4. Directiva para IntersectionObserver
  function vIntersect(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        binding.value()
        observer.disconnect()
      }
    })
    observer.observe(el)
  }
  </script>

  <style scoped>
  /* Fallback si Tailwind no toma bien el efecto */
  .bg-fixed {
    background-attachment: fixed;
  }
  </style>
