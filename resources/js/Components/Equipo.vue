<template>
    <section class="bg-[#1c120a] py-24 sm:py-32 text-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Título y descripción -->
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-sm font-semibold text-yellow-400 uppercase tracking-wider">Nuestro equipo</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Profesionales que construyen con excelencia
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            En Santa Emma, cada proyecto nace de la colaboración entre expertos en construcción, ingeniería y gestión estratégica. Nuestro equipo encarna experiencia, visión y compromiso con el desarrollo regional.
          </p>
        </div>

        <!-- Grid de integrantes -->
        <div
          class="mt-20 grid grid-cols-1 gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
          v-intersect="onIntersect"
        >
          <transition-group name="fade-up" tag="div" class="contents">
            <div
              v-for="(miembro, index) in equipoVisible"
              :key="miembro.nombre"
              class="text-center transform transition hover:scale-105"
            >
              <img
                :src="miembro.foto"
                :alt="`Foto de ${miembro.nombre}`"
                class="mx-auto h-40 w-40 rounded-full object-cover shadow-md border-4 border-yellow-400"
              />
              <h3 class="mt-6 text-lg font-semibold text-white">{{ miembro.nombre }}</h3>
              <p class="text-sm text-yellow-400 font-medium uppercase tracking-wide">{{ miembro.cargo }}</p>
              <p class="mt-2 text-sm text-gray-300">{{ miembro.descripcion }}</p>
            </div>
          </transition-group>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue'

  // Script 1: Mostrar integrantes progresivamente
  const equipo = [
    {
      nombre: 'Marcelo Oyarzún Aránguiz',
      cargo: 'Director General',
      foto: '/img/equipo/marcelo.jpg',
      descripcion: 'Fundador y líder estratégico. Con más de 15 años en el rubro, ha guiado la expansión hacia nuevos modelos de inversión.',
    },
    {
      nombre: 'Valentina Oyarzún',
      cargo: 'Jefa de Operaciones',
      foto: '/img/equipo/valentina.jpg',
      descripcion: 'Supervisa ejecución técnica y logística. Garantiza eficiencia y cumplimiento de calidad.',
    },
    {
      nombre: 'Sebastián Rivas',
      cargo: 'Ingeniero de Proyectos',
      foto: '/img/equipo/sebastian.jpg',
      descripcion: 'Diseña, presupuesta y coordina obras civiles de alto impacto.',
    },
  ]

  const equipoVisible = ref([])

  const onIntersect = () => {
    equipoVisible.value = equipo
  }

  // Script 2: Directiva personalizada para detectar intersección
  function vIntersect(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        binding.value()
        observer.disconnect()
      }
    })
    observer.observe(el)
  }
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
