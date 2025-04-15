<template>
    <header class="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-2 lg:px-8" aria-label="Menú principal">

        <!-- Logo -->
        <div class="absolute -top-10 left-4 z-50">
          <a href="/" class="flex items-center space-x-2">
            <img src="/stemma.png" alt="Logo Santa Emma" class="h-32 w-auto drop-shadow-lg" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8 ml-[24rem]">
          <a href="/" class="text-sm font-medium text-gray-800 hover:text-yellow-600 transition">Inicio</a>
          <a href="/nosotros" class="text-sm font-medium text-gray-800 hover:text-yellow-600 transition">Nosotros</a>
          <a href="/proyectos" class="text-sm font-medium text-gray-800 hover:text-yellow-600 transition">Proyectos</a>
          <a href="/catalogo" class="text-sm font-medium text-gray-800 hover:text-yellow-600 transition">Catálogo</a>
          <a href="/contacto" class="text-sm font-medium text-gray-800 hover:text-yellow-600 transition">Contacto</a>
        </div>

        <!-- Botones Ingresar / Registrar -->
        <div class="hidden lg:flex items-center gap-x-4">
          <a href="/login" class="text-sm font-semibold text-gray-700 hover:text-yellow-600 transition">Ingresar</a>
          <a href="/register" class="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition">Registrar</a>
        </div>

        <!-- Botón Mobile -->
        <div class="lg:hidden ml-auto">
          <button @click="isOpen = !isOpen" class="text-gray-700 focus:outline-none">
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

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="lg:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
        <a href="/" class="block text-sm font-medium text-gray-800 hover:text-yellow-600">Inicio</a>
        <a href="/nosotros" class="block text-sm font-medium text-gray-800 hover:text-yellow-600">Nosotros</a>
        <a href="/proyectos" class="block text-sm font-medium text-gray-800 hover:text-yellow-600">Proyectos</a>
        <a href="/catalogo" class="block text-sm font-medium text-gray-800 hover:text-yellow-600">Catálogo</a>
        <a href="/contacto" class="block text-sm font-medium text-gray-800 hover:text-yellow-600">Contacto</a>
        <hr />
        <a href="/login" class="block text-sm font-semibold text-gray-700 hover:text-yellow-600">Ingresar</a>
        <a href="/register" class="block rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-600 text-center">Registrar</a>
      </div>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
  </script>
