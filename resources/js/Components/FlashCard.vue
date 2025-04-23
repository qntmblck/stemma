<template>
    <div class="w-full h-full group [perspective:1000px]">
      <div
        class="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        <!-- Cara frontal -->
        <div class="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <img :src="image" :alt="title" class="w-full h-full object-cover rounded-md shadow-md" />
        </div>

        <!-- Cara trasera con fondo animado -->
        <div
          class="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]
          rounded-md shadow-xl overflow-hidden flex items-center justify-center text-center p-6"
        >
          <!-- Fondo animado -->
          <div
            class="absolute inset-0 z-0 pointer-events-none animate-pattern"
            style="
              background-color: #1c120a;
              background-image: radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px);
              background-size: 60px 60px;
              opacity: 0.15;
            "
          ></div>

          <!-- Contenido -->
          <div class="relative z-10">
            <h3 class="text-lg font-bold text-white">{{ title }}</h3>
            <p class="mt-2 text-sm font-semibold text-white">{{ description }}</p>
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

  <style scoped>
  @keyframes pattern-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }

  .animate-pattern {
    animation: pattern-move 80s linear infinite;
  }
  </style>
