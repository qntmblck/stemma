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
          opacity: 0.15;
        "
      ></div>

      <!-- Grano animado -->
      <div class="absolute inset-0 z-0 pointer-events-none grain-overlay"></div>

      <!-- Partículas doradas animadas -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          v-for="i in 25"
          :key="i"
          class="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-float"
          :style="randomStyle()"
        ></div>
      </div>

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
            v-if="isMobile"
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
              :style="{ transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none' }"
            >
              <!-- Carrusel Mobile -->
              <div
                v-if="isMobile"
                v-for="(chunk, i) in chunkedMaquinarias"
                :key="i"
                class="min-w-full grid grid-cols-2 grid-rows-2 gap-4"
              >
                <Flashcard2
                  v-for="maquina in chunk"
                  :key="maquina.nombre"
                  :title="maquina.nombre"
                  :description="maquina.descripcion"
                  :image="maquina.imagen"
                />
              </div>

              <!-- Grid Escritorio -->
              <div
                v-else
                class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4"
              >
                <Flashcard2
                  v-for="maquina in maquinarias"
                  :key="maquina.nombre"
                  :title="maquina.nombre"
                  :description="maquina.descripcion"
                  :image="maquina.imagen"
                />
              </div>
            </div>
          </div>

          <button
            v-if="isMobile"
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 border border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 hover:text-yellow-200 px-3 py-2 rounded-full z-10 text-3xl transition"
            aria-label="Siguiente"
          >›</button>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Flashcard2 from '@/Components/Flashcard2.vue'

  const currentSlide = ref(0)
  const isMobile = ref(window.innerWidth < 1024)

  const maquinarias = [
    { nombre: 'Camioneta Combustible GT TZ 38', imagen: '/img/maquinarias/CAMION-COMBUSTIBLE.jpg', descripcion: `Marca: Mercedes-Benz 1016\nCapacidad: 4 m³\nEstanque: Homologado\nUso: Transporte de combustible` },
    { nombre: 'Camión Tolva LT HV 83', imagen: '/img/maquinarias/camiontolva.jpg', descripcion: `Capacidad: 14 m³\nMotor: Euro 5\nUso: Materiales granulares\nTracción: 6x4` },
    { nombre: 'Cargador Frontal SEM 656D', imagen: '/img/maquinarias/cargadorfrontal.jpg', descripcion: `Capacidad: Balde 3 m³\nMotor: Weichai\nAplicación: Movimiento de tierra\nPeso operativo: 17 toneladas` },
    { nombre: 'Chancadora Trakpactor', imagen: '/img/maquinarias/chancacadora.jpg', descripcion: `Tipo: Planta impactadora móvil\nMarca: Powerscreen\nCapacidad: Alta producción\nUso: Trituración de roca` },
    { nombre: 'Excavadora Sunward SWE210', imagen: '/img/maquinarias/excavadora.jpg', descripcion: `Motor: Isuzu 6BG1\nPeso: 21 toneladas\nProfundidad: Excavación profunda\nOrugas: Acero` },
    { nombre: 'Motoniveladora JD 670G', imagen: '/img/maquinarias/MOTONIVELADORA2.jpg', descripcion: `Motor: John Deere 6.8L\nCuchilla: 3.66 m\nPotencia: 185 hp\nTracción: AWD opcional` },
    { nombre: 'Rodillo Compactador CS-533E', imagen: '/img/maquinarias/rollocompactador.png', descripcion: `Tipo: Compactador vibratorio\nMarca: CAT\nAplicación: Subbases y asfaltos\nRueda: Lisa` },
    { nombre: 'Planta Seleccionadora de Áridos', imagen: '/img/maquinarias/seleccionadoraridos.jpg', descripcion: `Tipo: Planta seleccionadora\nSistema: Cribas vibratorias\nTransportadores: Integrados\nAplicación: Granulometría variable` },
  ]

  const chunkArray = (array, size) => {
    const chunked = []
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size))
    }
    return chunked
  }

  const visibleCards = ref(4)
  const chunkedMaquinarias = computed(() => chunkArray(maquinarias, visibleCards.value))

  const handleResize = () => {
    isMobile.value = window.innerWidth < 1024
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const prevSlide = () => {
    if (currentSlide.value > 0) currentSlide.value--
  }
  const nextSlide = () => {
    if (currentSlide.value < chunkedMaquinarias.value.length - 1) currentSlide.value++
  }

  // Swipe mejorado
  let startX = 0
  let startY = 0
  let startTime = 0

  function startTouch(e) {
    const touch = e.touches[0]
    startX = touch.clientX
    startY = touch.clientY
    startTime = new Date().getTime()
  }

  function moveTouch(e) {}

  function endTouch(e) {
    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY
    const elapsedTime = new Date().getTime() - startTime

    const swipeThreshold = 50 // Mínimo px para considerar swipe
    const timeThreshold = 400 // Máximo ms para considerar swipe
    const allowedVerticalMovement = 75 // Máximo vertical para no invalidar

    if (elapsedTime <= timeThreshold && Math.abs(deltaX) >= swipeThreshold && Math.abs(deltaY) <= allowedVerticalMovement) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    startX = 0
    startY = 0
    startTime = 0
  }

  // Script para partículas
  const randomStyle = () => {
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 5 + Math.random() * 5
    return {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }
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

  .grain-overlay {
    background-image: url("data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27200%25%27%20height%3D%27200%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }

  @keyframes float {
    0% { transform: translateY(0) scale(1); opacity: 0.4; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
    100% { transform: translateY(0) scale(1); opacity: 0.4; }
  }
  .animate-float {
    animation: float infinite ease-in-out;
  }
  </style>
