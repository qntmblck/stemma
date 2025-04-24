<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import ServiciosCategoria1 from '@/Components/ServiciosCategoria1.vue'
import ServiciosCategoria2 from '@/Components/ServiciosCategoria2.vue'
import ServiciosCategoria3 from '@/Components/ServiciosCategoria3.vue'
import { ref, onMounted } from 'vue'

const highlightTitle = ref(false)
const showInfoOnScroll = ref(false)
const animateCards = ref(false)
const scrollPosition = ref(0)

onMounted(() => {
  // Script 1: Animación de título al cargar
  setTimeout(() => highlightTitle.value = true, 500)

  // Script 2: Mostrar info adicional al hacer scroll
  window.addEventListener('scroll', () => {
    scrollPosition.value = window.scrollY
    showInfoOnScroll.value = scrollPosition.value > 200
  })

  // Script 3: Activar animación en tarjetas
  setTimeout(() => animateCards.value = true, 800)

  // Script 4: Scroll al top cuando se navega al dashboard
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <AppLayout title="Panel de Usuario">


    <div class="py-12 bg-[#1c120a] min-h-screen">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-12">

        <div class="text-center text-white">
          <p class="text-lg">Conoce nuestros servicios disponibles y sus valores</p>
          <p v-if="showInfoOnScroll" class="text-yellow-400 mt-2 transition-opacity duration-500">Desliza para descubrir más detalles</p>
        </div>

        <!-- Categoría 1: Página base + funciones básicas -->
        <div :class="animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'" class="transition duration-700 ease-out">
          <ServiciosCategoria1 />
        </div>

        <!-- Categoría 2: Usuarios + administración -->
        <div :class="animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'" class="transition duration-700 ease-out delay-150">
          <ServiciosCategoria2 />
        </div>

        <!-- Categoría 3: Funciones avanzadas -->
        <div :class="animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'" class="transition duration-700 ease-out delay-300">
          <ServiciosCategoria3 />
        </div>

      </div>
    </div>
  </AppLayout>
</template>
