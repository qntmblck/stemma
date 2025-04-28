<template>
    <transition name="slide-up">
      <div
        v-if="showModal"
        class="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center px-2 sm:px-4"
        @click="handleClick"
      >
        <div
          class="relative bg-yellow-400 text-center text-gray-900 rounded-xl p-6 sm:p-10 max-w-xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
        >
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-4">NUESTRO COMPROMISO</h2>

          <img src="/stemma.png" alt="Logo Santa Emma" class="mx-auto h-28 sm:h-32 mb-6" />

          <h3 class="text-lg sm:text-xl font-semibold mt-2">MARCELO OYARZUN ARANGUIZ</h3>

          <p class="mt-4 text-gray-800 text-sm sm:text-base">
            Le doy la bienvenida a Constructora Santa Emma. Somos una empresa comprometida en cada uno de nuestros proyectos en ejecución.
          </p>
        </div>
      </div>
    </transition>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  const showModal = ref(false)
  const canClose = ref(false)

  function handleClick() {
    if (canClose.value) {
      showModal.value = false
    }
  }

  onMounted(() => {
    showModal.value = true
    setTimeout(() => {
      canClose.value = true
    }, 700) // Permitir cerrar después de 0.7 segundos (suficiente para ver el mensaje)
  })
  </script>

  <style scoped>
  .slide-up-enter-active {
    animation: slideInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .slide-up-leave-active {
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(40px);
  }
  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    80% {
      transform: translateY(-6px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
