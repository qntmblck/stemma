<template>
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-3xl text-center transition-all duration-700"
          :class="{'opacity-0 translate-y-10': !visible, 'opacity-100 translate-y-0': visible}"
        >
          <h2 class="text-base font-semibold text-yellow-600 uppercase tracking-wide">Proyectos Realizados</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Más de {{ projectCount }} obras completadas con excelencia
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Cada proyecto refleja nuestro compromiso con la calidad, la innovación y el desarrollo sostenible.
          </p>

          <div class="mt-4 text-sm text-yellow-700 cursor-pointer underline hover:text-yellow-800" @click="toggleExpand">
            {{ expanded ? 'Ver menos' : 'Ver más' }}
          </div>

          <transition name="fade">
            <p v-if="expanded" class="mt-4 text-base text-gray-600">
              Nuestra cartera incluye obras de infraestructura pública, desarrollos privados y soluciones especializadas para sectores como energía, vialidad, edificación y urbanismo. Nuestro equipo técnico asegura cada etapa: desde el diseño hasta la entrega final.
            </p>
          </transition>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  const visible = ref(false)
  const expanded = ref(false)
  const projectCount = ref(0)

  // Simulación de número de proyectos (contador animado)
  const finalCount = 38 // puedes cambiar este número

  const animateCounter = () => {
    let current = 0
    const interval = setInterval(() => {
      if (current < finalCount) {
        current += 1
        projectCount.value = current
      } else {
        clearInterval(interval)
      }
    }, 50)
  }

  const toggleExpand = () => {
    expanded.value = !expanded.value
  }

  onMounted(() => {
    // Animación de entrada
    setTimeout(() => {
      visible.value = true
      animateCounter()
    }, 300)
  })
  </script>

  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
