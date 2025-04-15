<template>
    <section class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
      <img
        :src="image"
        alt="Imagen de fondo Hero"
        class="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-60"
      />
      <div class="absolute inset-0 -z-10 bg-gray-900/70 mix-blend-multiply" />
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ title }}</h1>
        <p v-if="subtitle" class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">{{ subtitle }}</p>
        <div v-if="$slots.default" class="mt-10 flex justify-center">
          <slot />
        </div>
      </div>
    </section>
  </template>

  <script setup>
  // Props personalizables para título, subtítulo e imagen
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  })
  </script>

  <style scoped>
  section {
    background-blend-mode: overlay;
  }
  </style>
