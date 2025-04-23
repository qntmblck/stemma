<template>
    <section class="bg-white py-24 px-6 sm:px-12 lg:px-32">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-base font-semibold text-yellow-600 uppercase tracking-wider">Quiénes somos</h2>
        <p class="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Construcción e inversión con visión estratégica
        </p>
        <p class="mt-6 text-lg text-gray-600">
          En Santa Emma integramos ingeniería, infraestructura y gestión de activos desde el sur de Chile. Con más de una década de trayectoria, impulsamos proyectos con rigurosidad técnica y propósito sostenible.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <TransitionGroup name="fade-up" tag="div" class="contents">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-yellow-50 rounded-xl shadow-md p-6 text-center transform transition hover:scale-105 hover:shadow-xl"
          >
            <div class="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-3xl shadow-inner">
              <i :class="card.icon"></i>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-900">{{ card.title }}</h3>
            <p class="mt-2 text-base text-gray-600">{{ card.description }}</p>
          </div>
        </TransitionGroup>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue'

  const cards = ref([
    {
      icon: 'fas fa-helmet-safety',
      title: 'Excelencia técnica',
      description: 'Obras civiles ejecutadas bajo altos estándares y rigurosidad normativa.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Inversión inteligente',
      description: 'Proyectos gestionados con visión de retorno y desarrollo sostenible.',
    },
    {
      icon: 'fas fa-globe-americas',
      title: 'Presencia territorial',
      description: 'Base operativa en el sur de Chile con alcance regional estratégico.',
    },
  ])
  </script>

  <style scoped>
  .fade-up-enter-active {
    transition: all 0.8s ease;
  }
  .fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
  }
  </style>
