<template>
    <div class="w-full h-full group [perspective:1000px]">
      <div class="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <!-- Cara frontal -->
        <div class="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <img :src="image" :alt="title" class="w-full h-full object-cover rounded-none shadow" />
        </div>
        <!-- Cara trasera -->
        <div class="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-none shadow flex items-center justify-center text-center p-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ description }}</p>
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
