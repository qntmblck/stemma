<template>
    <header class="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 shadow-md transition-all duration-300 rounded-b-md mt-0.5">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-2 lg:px-8" aria-label="Menú principal">

        <!-- Logo siempre a la izquierda -->
        <div class="flex items-center flex-shrink-0">
          <a :href="route('home')" class="flex items-center space-x-2">
            <img src="/stemma.png?v=2" alt="Logo Santa Emma" class="h-12 lg:h-16 w-auto drop-shadow-lg transition-all duration-300" />
          </a>
        </div>

        <!-- Botón Menú Mobile -->
        <div class="flex lg:hidden ml-auto">
          <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menú Escritorio -->
        <div class="hidden lg:flex items-center justify-center flex-grow space-x-8 ml-8">
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Inicio</a>
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Nosotros</a>
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Proyectos</a>
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Catálogo</a>
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Contacto</a>
        </div>

        <!-- Botón Ingresar escritorio -->
        <div class="hidden lg:flex items-center ml-4">
          <a :href="route('login')" class="rounded-md bg-yellow-500 px-4 py-2 text-sm font-bold text-white hover:bg-yellow-600 transition">Ingresar</a>
        </div>
      </nav>

      <!-- Navegación Mobile -->
      <transition name="slide-fade">
        <div v-if="isOpen" class="lg:hidden bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 px-4 pt-6 pb-8 space-y-4 shadow-md">
          <a @click="closeMenu" :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Inicio</a>
          <a @click="closeMenu" :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Nosotros</a>
          <a @click="closeMenu" :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Proyectos</a>
          <a @click="closeMenu" :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Catálogo</a>
          <a @click="closeMenu" :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Contacto</a>
          <hr class="my-2 border-yellow-200" />
          <a @click="closeMenu" :href="route('login')" class="block text-sm font-bold text-yellow-700 hover:text-yellow-800 transition">Ingresar</a>
        </div>
      </transition>
    </header>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const isOpen = ref(false)

  // Script 1: Toggle para menú móvil
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  // Script 2: Cierra el menú automáticamente al navegar
  const closeMenu = () => {
    isOpen.value = false
  }

  // Script 3: Cierra el menú si haces scroll
  const handleScroll = () => {
    if (isOpen.value) {
      isOpen.value = false
    }
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // Script 4: Cierra el menú si haces clic fuera
  const handleClickOutside = (event) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(event.target)) {
      isOpen.value = false
    }
  }
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
  </script>

  <style scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }
  .slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  </style>
