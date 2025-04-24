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
          <div class="absolute bottom-0 w-full bg-yellow-500 text-white text-center py-2">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
          </div>
        </div>

        <!-- Cara trasera -->
        <div
          class="absolute inset-0 w-full h-full rotate-y-180 backface-hidden
          bg-gradient-to-tr from-white via-yellow-50 to-yellow-100
          p-6 text-left flex flex-col justify-center items-start rounded-xl shadow-xl"
        >
          <h3 class="text-lg font-bold text-gray-900 mb-3">{{ title }}</h3>
          <ul class="text-sm text-gray-800 space-y-1 font-semibold list-disc list-inside">
            <li v-for="(item, index) in descriptionList" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'

  const props = defineProps({
    title: String,
    description: String,
    image: String,
  })

  // Divide la descripción en ítems por salto de línea
  const descriptionList = computed(() =>
    props.description?.split('\n').filter((item) => item.trim() !== '')
  )

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
