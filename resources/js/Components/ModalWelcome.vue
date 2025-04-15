<template>
    <transition name="slide-up">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      >
        <div
          class="relative bg-yellow-400 text-center text-gray-900 rounded-xl p-10 sm:p-12 max-w-3xl w-full shadow-2xl"
        >
          <!-- Botón de cerrar -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-2xl font-bold text-gray-800 hover:text-gray-600"
          >
            &times;
          </button>

          <h2 class="text-3xl font-extrabold mb-4">NUESTRO COMPROMISO</h2>

          <img src="/stemma.png" alt="Logo Santa Emma" class="mx-auto h-52 sm:h-64 mb-8" />

          <h3 class="text-xl font-semibold mt-2">MARCELO OYARZUN ARANGUIZ</h3>

          <p class="mt-4 text-gray-800 text-base sm:text-lg">
            Le doy la bienvenida a Constructora Santa Emma. Somos una empresa comprometida en cada uno de nuestros proyectos en ejecución.
          </p>
        </div>
      </div>
    </transition>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  const showModal = ref(false)

  function closeModal() {
    showModal.value = false
  }


  onMounted(() => {
    if (!localStorage.getItem('modalShown')) {
      showModal.value = true
      localStorage.setItem('modalShown', 'true')
    }
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
