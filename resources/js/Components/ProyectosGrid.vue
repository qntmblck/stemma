<template>
    <section
      class="relative text-white bg-center bg-cover"
      :class="{ 'bg-fixed': !isMobile }"
      :style="{ backgroundImage: 'url(/img/h1.jpg)' }"
    >
      <div class="bg-[#1c120acc] py-24 text-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <!-- Título -->
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold tracking-tight text-yellow-500">Nuestros Proyectos</h2>
            <p class="mt-4 text-lg text-gray-200">
              Una selección de obras emblemáticas realizadas por nuestro equipo en diversas regiones del país.
            </p>
          </div>

          <!-- Carrusel -->
          <div class="relative">
            <button
              @click="anterior"
              class="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-4 rounded-full z-10 text-4xl"
            >
              ‹
            </button>

            <div
              class="overflow-hidden"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
            >
              <div
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${proyectoActual * (100 / visibleCards)}%)` }"
              >
                <div
                  v-for="(proyecto, index) in proyectos"
                  :key="proyecto.id + '-' + index"
                  class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                >
                  <div class="bg-[#2a1b13] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-600 transition-shadow">
                    <img :src="proyecto.imagen" :alt="proyecto.titulo" class="w-full h-56 object-cover" />
                    <div class="p-6">
                      <h3 class="text-xl font-semibold text-yellow-500">{{ proyecto.titulo }}</h3>
                      <p class="mt-2 text-sm text-gray-300">{{ proyecto.descripcion }}</p>
                      <button
                        @click="abrirModal(proyecto)"
                        class="mt-4 inline-block text-sm font-bold text-yellow-400 hover:text-yellow-500 transition"
                      >
                        Ver más detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              @click="siguiente"
              class="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-4 rounded-full z-10 text-4xl"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  // Proyectos duplicados para reinicio visual suave
  const proyectosBase = [
    {
      id: 1,
      titulo: 'Parque Eólico Puelche Sur',
      descripcion: 'Obra de infraestructura energética en la Región de Los Lagos con alto estándar técnico.',
      imagen: '/img/proyectos/eolico.jpg',
    },
    {
      id: 2,
      titulo: 'Centro Logístico Frutillar',
      descripcion: 'Infraestructura para almacenamiento, gestión de flota y mantenimiento de maquinaria.',
      imagen: '/img/proyectos/logistico.jpg',
    },
    {
      id: 3,
      titulo: 'Obras Civiles Ruta Austral',
      descripcion: 'Construcción y mantención de rutas en sectores estratégicos de la región.',
      imagen: '/img/proyectos/ruta.jpg',
    },
    {
      id: 4,
      titulo: 'Construcción Urbanización',
      descripcion: 'Desarrollo de proyectos de urbanización con enfoque sostenible.',
      imagen: '/img/proyectos/urbanizacion.jpg',
    },
    {
      id: 5,
      titulo: 'Nave Industrial Puerto Varas',
      descripcion: 'Edificación con diseño estructural avanzado para logística y almacenamiento.',
      imagen: '/img/proyectos/nave.jpg',
    },
    {
      id: 6,
      titulo: 'Condominio Los Robles',
      descripcion: 'Urbanización y construcción de viviendas con estándares de eficiencia energética.',
      imagen: '/img/proyectos/robles.jpg',
    },
    {
      id: 7,
      titulo: 'Centro Deportivo Frutillar',
      descripcion: 'Diseño e instalación de infraestructura deportiva con integración comunitaria.',
      imagen: '/img/proyectos/deportivo.jpg',
    },
    {
      id: 8,
      titulo: 'Estabilización de Suelos Planta Celulosa',
      descripcion: 'Intervención técnica para la compactación y preparación de suelos industriales.',
      imagen: '/img/proyectos/celulosa.jpg',
    },
  ]

  // Duplicar los 3 primeros para simular ciclo
  const proyectos = ref([...proyectosBase, ...proyectosBase.slice(0, 3)])

  const proyectoActual = ref(0)
  const visibleCards = 3

  const siguiente = () => {
    proyectoActual.value++
    if (proyectoActual.value >= proyectos.value.length - visibleCards) {
      setTimeout(() => {
        proyectoActual.value = 0
      }, 500)
    }
  }

  const anterior = () => {
    if (proyectoActual.value > 0) {
      proyectoActual.value--
    }
  }

  const abrirModal = (proyecto) => {
    console.log('Abriendo modal para:', proyecto)
  }

  // Detectar mobile para fondo parallax
  const isMobile = ref(false)
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    autoSlide()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    clearInterval(autoSlideInterval)
  })

  // AutoSlide
  let autoSlideInterval
  function autoSlide() {
    autoSlideInterval = setInterval(() => {
      siguiente()
    }, 7000)
  }

  // Swipe en mobile
  let touchStartX = 0
  let touchEndX = 0

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 50) {
      diff > 0 ? siguiente() : anterior()
    }
  }
  </script>

  <style scoped>
  .flex > * {
    min-width: 100%;
  }
  @media (min-width: 640px) {
    .flex > * {
      min-width: 50%;
    }
  }
  @media (min-width: 1024px) {
    .flex > * {
      min-width: 33.3333%;
    }
  }
  .bg-fixed {
    background-attachment: fixed;
  }
  </style>
