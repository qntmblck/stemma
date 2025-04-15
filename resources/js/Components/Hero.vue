<template>
    <section class="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-40 lg:py-48">
      <!-- Contenedor con imagen de fondo fija -->
      <div
        class="absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="w-full h-full bg-black/50 mix-blend-multiply"></div>
      </div>

      <!-- Contenido -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {{ title }}
        </h1>

        <p
          v-if="subtitle"
          class="mt-10 text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto"
        >
          {{ subtitle }}
        </p>

        <div v-if="$slots.default" class="mt-12 flex justify-center">
          <slot />
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

