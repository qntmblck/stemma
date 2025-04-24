<template>
    <section
      id="maquinarias"
      class="relative py-16 px-2 sm:px-4 lg:px-6 text-white w-full overflow-hidden"
      style="background-color: #1c120a;"
    >
      <!-- Fondo dorado animado -->
      <div
        class="absolute inset-0 z-0 pointer-events-none animate-move-pattern"
        style="
          background-image: radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.2;
        "
      ></div>

      <!-- Contenido principal -->
      <div class="relative z-10">
        <!-- Texto superior -->
        <div class="mb-10 max-w-6xl mx-auto text-center">
          <p class="text-base sm:text-lg font-bold leading-relaxed tracking-wide">
            Actualización constante de equipos y servicios, para responder con eficiencia y seguridad a los desafíos de la construcción moderna.
          </p>
        </div>

        <!-- Carrusel -->
        <div class="relative">
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
            aria-label="Anterior"
          >‹</button>

          <div
            class="overflow-hidden"
            @touchstart="startTouch"
            @touchmove="moveTouch"
            @touchend="endTouch"
          >
            <div
              class="flex transition-transform duration-500 ease-in-out gap-4"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(chunk, i) in chunkedMaquinarias"
                :key="i"
                class="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <Flashcard2
                  v-for="maquina in chunk"
                  :key="maquina.nombre"
                  :title="maquina.nombre"
                  :description="maquina.descripcion"
                  :image="maquina.imagen"
                />
              </div>
            </div>
          </div>

          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
            aria-label="Siguiente"
          >›</button>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import Flashcard2 from '@/Components/Flashcard2.vue'

  const currentSlide = ref(0)
  const isMobile = ref(window.innerWidth < 768)

  const maquinarias = [
    {
      nombre: 'Camioneta Combustible GT TZ 38',
      imagen: '/img/maquinarias/CAMION-COMBUSTIBLE.jpg',
      descripcion: `Marca: Mercedes-Benz 1016
  Capacidad: 4 m³
  Estanque: Homologado
  Uso: Transporte de combustible`
    },
    {
      nombre: 'Camión Tolva LT HV 83',
      imagen: '/img/maquinarias/camiontolva.jpg',
      descripcion: `Capacidad: 14 m³
  Motor: Euro 5
  Uso: Materiales granulares
  Tracción: 6x4`
    },
    {
      nombre: 'Cargador Frontal SEM 656D',
      imagen: '/img/maquinarias/cargadorfrontal.jpg',
      descripcion: `Capacidad: Balde 3 m³
  Motor: Weichai
  Aplicación: Movimiento de tierra
  Peso operativo: 17 toneladas`
    },
    {
      nombre: 'Chancadora Trakpactor',
      imagen: '/img/maquinarias/chancacadora.jpg',
      descripcion: `Tipo: Planta impactadora móvil
  Marca: Powerscreen
  Capacidad: Alta producción
  Uso: Trituración de roca`
    },
    {
      nombre: 'Excavadora Sunward SWE210',
      imagen: '/img/maquinarias/excavadora.jpg',
      descripcion: `Motor: Isuzu 6BG1
  Peso: 21 toneladas
  Profundidad: Excavación profunda
  Orugas: Acero`
    },
    {
      nombre: 'Motoniveladora JD 670G',
      imagen: '/img/maquinarias/MOTONIVELADORA2.jpg',
      descripcion: `Motor: John Deere 6.8L
  Cuchilla: 3.66 m
  Potencia: 185 hp
  Tracción: AWD opcional`
    },
    {
      nombre: 'Rodillo Compactador CS-533E',
      imagen: '/img/maquinarias/rollocompactador.png',
      descripcion: `Tipo: Compactador vibratorio
  Marca: CAT
  Aplicación: Subbases y asfaltos
  Rueda: Lisa`
    },
    {
      nombre: 'Planta Seleccionadora de Áridos',
      imagen: '/img/maquinarias/seleccionadoraridos.jpg',
      descripcion: `Tipo: Planta seleccionadora
  Sistema: Cribas vibratorias
  Transportadores: Integrados
  Aplicación: Granulometría variable`
    },
  ]

  const chunkArray = (array, size) => {
    const chunked = []
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size))
    }
    return chunked
  }

  const visibleCards = ref(isMobile.value ? 2 : 4)

  onMounted(() => {
    window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth < 768
      visibleCards.value = isMobile.value ? 2 : 4
    })
  })

  const chunkedMaquinarias = computed(() => chunkArray(maquinarias, visibleCards.value))

  const prevSlide = () => { if (currentSlide.value > 0) currentSlide.value-- }
  const nextSlide = () => { if (currentSlide.value < chunkedMaquinarias.value.length - 1) currentSlide.value++ }

  let startX = 0, endX = 0
  function startTouch(e) { startX = e.touches[0].clientX }
  function moveTouch(e) { endX = e.touches[0].clientX }
  function endTouch() {
    const threshold = 50
    const deltaX = endX - startX
    if (deltaX > threshold) prevSlide()
    else if (deltaX < -threshold) nextSlide()
    startX = 0
    endX = 0
  }
  </script>

  <style scoped>
  @keyframes move-pattern {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }
  .animate-move-pattern {
    animation: move-pattern 80s linear infinite;
  }
  </style>
