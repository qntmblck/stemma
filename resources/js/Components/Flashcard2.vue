<template>
    <div
      class="relative w-full h-72 perspective cursor-pointer"
      @click="flipped = !flipped"
    >
      <div
        :class="[
          'relative w-full h-full transition-transform duration-700 transform-style preserve-3d',
          flipped ? 'rotate-y-180' : ''
        ]"
      >
        <!-- Cara frontal -->
        <div
          class="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl shadow-xl"
        >
          <img
            :src="image"
            :alt="title"
            class="object-cover w-full h-full"
          />
          <div class="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
          </div>
        </div>

        <!-- Cara trasera -->
        <div
          class="absolute inset-0 w-full h-full rotate-y-180 backface-hidden bg-white p-6 text-center flex flex-col justify-center items-center rounded-xl shadow-xl"
        >
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
          <p class="text-gray-700 text-sm">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

  defineProps({
    title: String,
    description: String,
    image: String,
  })

  const flipped = ref(false)
  </script>

  <style scoped>
  .perspective {
    perspective: 1200px;
  }
  .backface-hidden {
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  .transform-style {
    transform-style: preserve-3d;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  </style>
