<template>
    <section
      class="relative isolate overflow-hidden bg-gray-900 flex items-end sm:items-center py-24 sm:py-32"
    >
      <!-- Imagen de fondo cinematográfica adaptada -->
      <div
        class="absolute inset-0 -z-20 bg-cover bg-center bg-scroll sm:bg-fixed"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="w-full h-full bg-black/50 mix-blend-multiply"></div>
      </div>

      <!-- Contenido principal -->
      <div class="relative z-10 px-6 lg:px-20 max-w-4xl text-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-4 text-lg sm:text-xl text-white leading-snug max-w-2xl"
        >
          {{ subtitle }}
        </p>

        <div class="mt-8">
          <a
            href="#catalogo"
            class="inline-block border-2 border-white text-white font-semibold px-6 py-3 transition-all duration-300 rounded hover:bg-white hover:text-gray-900 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            CATÁLOGO
          </a>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    image: { type: String, required: true },
  });
  </script>

  <style scoped>
  /* Solo transiciones suaves del botón */
  </style>
