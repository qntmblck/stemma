<template>
    <div
      class="relative h-72 w-full perspective group"
      @click="isFlipped = !isFlipped"
    >
      <!-- Cara frontal -->
      <div
        class="absolute inset-0 backface-hidden transition-transform duration-700 ease-in-out transform rounded-xl shadow-lg overflow-hidden"
        :class="{ 'rotate-y-180': isFlipped }"
      >
        <img :src="image" :alt="title" class="object-cover w-full h-full" />
      </div>

      <!-- Cara trasera -->
      <div
        class="absolute inset-0 backface-hidden rotate-y-180 transition-transform duration-700 ease-in-out transform rounded-xl bg-white p-6 text-center shadow-xl flex flex-col justify-center"
        :class="{ 'rotate-y-180': !isFlipped }"
      >
        <h3 class="text-xl font-bold text-gray-800">{{ title }}</h3>
        <p class="mt-2 text-gray-600 text-sm">{{ description }}</p>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

  const props = defineProps({
    title: String,
    description: String,
    image: String,
  })

  const isFlipped = ref(false)
  </script>

  <style scoped>
  .perspective {
    perspective: 1000px;
  }

  .backface-hidden {
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  </style>
