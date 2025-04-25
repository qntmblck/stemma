<template>
    <div class="w-full h-full group [perspective:1000px]">
      <div
        class="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        <!-- Cara frontal -->
        <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
          <img :src="image" :alt="title" class="w-full h-full object-cover" />
          <div class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-black via-black/80 to-transparent p-4 flex items-start justify-end">
            <h3 class="text-white text-lg font-bold">{{ title }}</h3>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]
          bg-gradient-to-tr from-white via-yellow-50 to-yellow-100
          flex flex-col items-center justify-center text-center p-4 overflow-hidden"
        >
          <div class="overflow-y-auto max-h-full">
            <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
            <p class="mt-2 text-sm font-medium text-gray-800 leading-relaxed">
              {{ description }}<br />
              Si deseas conocer más sobre este servicio o contratarlo, no dudes en contactarnos.
            </p>
            <a
              href="#contacto"
              class="mt-4 inline-block bg-yellow-500 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              ¡Contáctanos!
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const props = defineProps({
    title: String,
    description: String,
    image: String,
  })
  </script>
