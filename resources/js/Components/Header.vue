<template>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Menú principal">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <a href="#inicio" class="-m-1.5 p-1.5">
            <span class="sr-only">Constructora Santa Emma</span>
            <img class="h-10 w-auto" src="/img/logo-santaemma.png" alt="Logo Santa Emma" />
          </a>
        </div>

        <!-- Botón hamburguesa -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Abrir menú principal</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Navegación escritorio -->
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#inicio" class="text-sm font-semibold text-gray-900">Inicio</a>
          <a href="#nosotros" class="text-sm font-semibold text-gray-900">Nosotros</a>
          <a href="#proyectos" class="text-sm font-semibold text-gray-900">Proyectos</a>
          <a href="#catalogo" class="text-sm font-semibold text-gray-900">Catálogo</a>
          <a href="#contacto" class="text-sm font-semibold text-gray-900">Contacto</a>
        </div>

        <!-- Ingresar / Registrar -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
          <a :href="route('login')" class="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition">Ingresar</a>
          <a :href="route('register')" class="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition">Registrar</a>
        </div>
      </nav>

      <!-- Menú móvil -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#inicio" class="-m-1.5 p-1.5">
              <span class="sr-only">Constructora Santa Emma</span>
              <img class="h-10 w-auto" src="/img/logo-santaemma.png" alt="Logo Santa Emma" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Cerrar menú</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#inicio" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Inicio</a>
                <a href="#nosotros" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Nosotros</a>
                <a href="#proyectos" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Proyectos</a>
                <a href="#catalogo" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Catálogo</a>
                <a href="#contacto" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Contacto</a>
              </div>
              <div class="py-6 flex flex-col gap-y-2">
                <a :href="route('login')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Ingresar</a>
                <a :href="route('register')" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Registrar</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  const mobileMenuOpen = ref(false)
  </script>

