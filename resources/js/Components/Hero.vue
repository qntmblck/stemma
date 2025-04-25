<template>
    <section class="relative isolate overflow-hidden bg-gray-900 h-[70vh]">
      <!-- Imagen de fondo con efecto fijo (solo en escritorio) -->
      <div
        class="absolute inset-0 -z-10 bg-cover bg-center sm:bg-fixed"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="w-full h-full bg-black/50 mix-blend-multiply"></div>
      </div>

      <!-- Contenido alineado abajo a la izquierda -->
      <div class="flex h-full items-end">
        <div class="px-6 lg:px-16 pb-20 text-left">
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            {{ title }}
          </h1>
          <p
            v-if="subtitle"
            class="mt-4 text-lg sm:text-xl text-white max-w-xl leading-snug"
          >
            {{ subtitle }}
          </p>

          <div class="mt-8">
            <a
              href="/"
              class="inline-block border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white hover:text-gray-900 transition rounded"
            >
              CATÁLOGO
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  })
  </script>
