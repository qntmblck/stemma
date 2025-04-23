<template>
    <header
  class="fixed top-0 left-0 right-0 z-50 w-full
    bg-gradient-to-tr from-white via-yellow-50 to-yellow-100
    shadow-md transition-all duration-300
    rounded-b-md mt-0.5"
>

      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between
        px-4 py-0 lg:px-8"
        aria-label="Menú principal"
      >
        <!-- Logo -->
        <div>
          <a :href="route('home')" class="flex items-center space-x-2">
            <img
              src="/stemma.png?=v2"
              alt="Logo Santa Emma"
              class="h-16 lg:h-16 w-auto drop-shadow-lg transition-all duration-300"
            />
          </a>
        </div>

        <!-- Navegación Escritorio -->
        <div class="hidden lg:flex items-center space-x-8 ml-[-2rem]">
          <a :href="route('home')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Inicio</a>
          <a :href="route('nosotros')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Nosotros</a>
          <a :href="route('proyectos')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Proyectos</a>
          <a :href="route('catalogo')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Catálogo</a>
          <a :href="route('contacto')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Contacto</a>
        </div>

        <!-- Botones Escritorio -->
        <div class="hidden lg:flex items-center gap-x-4">
          <a :href="route('login')" class="text-sm font-bold text-gray-800 hover:text-yellow-600 transition">Ingresar</a>
          <a :href="route('register')" class="rounded-md bg-yellow-500 px-3 py-2 text-sm font-bold text-white hover:bg-yellow-600 transition">Registrar</a>
        </div>

        <!-- Botón Menú Móvil -->
        <div class="lg:hidden ml-auto">
          <button @click="isOpen = !isOpen" class="text-gray-800 focus:outline-none">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Navegación Móvil -->
      <div
        v-if="isOpen"
        class="lg:hidden bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 text-gray-800 px-4 pt-4 pb-6 space-y-4 shadow-md"
      >
        <a :href="route('home')" class="block text-sm font-bold hover:text-yellow-600 transition">Inicio</a>
        <a :href="route('nosotros')" class="block text-sm font-bold hover:text-yellow-600 transition">Nosotros</a>
        <a :href="route('proyectos')" class="block text-sm font-bold hover:text-yellow-600 transition">Proyectos</a>
        <a :href="route('catalogo')" class="block text-sm font-bold hover:text-yellow-600 transition">Catálogo</a>
        <a :href="route('contacto')" class="block text-sm font-bold hover:text-yellow-600 transition">Contacto</a>
        <hr class="my-2 border-yellow-200" />
        <a :href="route('login')" class="block text-sm font-bold hover:text-yellow-600 transition">Ingresar</a>
        <a :href="route('register')" class="block text-sm font-bold text-yellow-700 hover:text-yellow-800 transition">Registrar</a>
      </div>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
  </script>
