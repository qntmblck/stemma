<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const proyectos = ref([
  { id: 1, titulo: 'Parque Eólico Puelche Sur', descripcion: 'Obra energética en Los Lagos.', imagen: '/img/proyectos/eolico.jpg' },
  { id: 2, titulo: 'Centro Logístico Frutillar', descripcion: 'Gestión de flota y logística.', imagen: '/img/proyectos/logistico.jpg' },
  { id: 3, titulo: 'Obras Civiles Ruta Austral', descripcion: 'Mantención de rutas clave.', imagen: '/img/proyectos/ruta.jpg' },
  { id: 4, titulo: 'Construcción Urbanización', descripcion: 'Urbanización sostenible.', imagen: '/img/proyectos/urbanizacion.jpg' },
  { id: 5, titulo: 'Nave Industrial Puerto Varas', descripcion: 'Diseño estructural avanzado.', imagen: '/img/proyectos/nave.jpg' },
  { id: 6, titulo: 'Condominio Los Robles', descripcion: 'Viviendas eficientes.', imagen: '/img/proyectos/robles.jpg' },
  { id: 7, titulo: 'Centro Deportivo Frutillar', descripcion: 'Infraestructura deportiva.', imagen: '/img/proyectos/deportivo.jpg' },
  { id: 8, titulo: 'Planta Celulosa', descripcion: 'Preparación de suelos.', imagen: '/img/proyectos/celulosa.jpg' },
])

const proyectoActual = ref(0)
const visibleCards = ref(3)
const cardWidth = ref(100 / visibleCards.value)
const isMobile = ref(false)

const updateViewport = () => {
  isMobile.value = window.innerWidth < 768
  visibleCards.value = isMobile.value ? 1 : 3
  cardWidth.value = 100 / visibleCards.value
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateViewport)
})

const siguiente = () => {
  const maxSteps = proyectos.value.length - visibleCards.value
  if (proyectoActual.value < maxSteps) {
    proyectoActual.value += 1
  }
}

const anterior = () => {
  if (proyectoActual.value > 0) {
    proyectoActual.value -= 1
  }
}

const abrirModal = (proyecto) => {
  console.log('Abriendo modal para:', proyecto)
}

// Swipe
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

<template>
  <section
    class="relative text-white bg-center bg-cover"
    :class="{ 'bg-fixed': !isMobile }"
    :style="{ backgroundImage: 'url(/img/h1.jpg)' }"
  >
    <div class="bg-[#1c120acc] py-24 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold tracking-tight text-yellow-500">Nuestros Proyectos</h2>
          <p class="mt-4 text-lg text-gray-200">Una selección de obras emblemáticas realizadas en todo el país.</p>
        </div>

        <div class="relative">
          <button
            @click="anterior"
            class="absolute left-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
          >‹</button>

          <div class="overflow-hidden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${proyectoActual * cardWidth}%)` }"
            >
              <div
                v-for="(proyecto, index) in proyectos"
                :key="proyecto.id"
                :style="{ width: cardWidth + '%' }"
                class="flex-shrink-0 px-4"
              >
                <div class="bg-[#2a1b13] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-600 transition-shadow">
                  <img :src="proyecto.imagen" :alt="proyecto.titulo" class="w-full h-56 object-cover" />
                  <div class="p-6">
                    <h3 class="text-xl font-semibold text-yellow-500">{{ proyecto.titulo }}</h3>
                    <p class="mt-2 text-sm text-gray-300">{{ proyecto.descripcion }}</p>
                    <button
                      @click="abrirModal(proyecto)"
                      class="mt-4 inline-block text-sm font-bold text-yellow-400 hover:text-yellow-500 transition"
                    >Ver más detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="siguiente"
            class="absolute right-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
          >›</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-fixed {
  background-attachment: fixed;
}
</style>
