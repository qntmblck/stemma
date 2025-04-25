<template>
    <footer class="relative text-white font-semibold overflow-hidden" style="background-color: #1c120a;">
      <!-- Fondo dorado animado -->
      <div
        class="absolute inset-0 z-0 pointer-events-none animate-move-pattern"
        style="
          background-image: radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.2;
        "
      ></div>

      <!-- Partículas doradas cinematográficas -->
      <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          v-for="i in 30"
          :key="i"
          class="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
          :style="randomStyle()"
        ></div>
      </div>

      <!-- Contenido principal del footer -->
      <div class="relative z-20">
        <div class="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Información -->
            <div class="flex flex-col items-center text-center">
              <h2 class="text-sm font-semibold text-yellow-600 tracking-wide uppercase">Inversiones Santa Emma</h2>
              <p class="mt-6 max-w-2xl text-sm leading-6 text-white font-semibold">
                Nos es grato dirigirnos a ustedes con el fin de presentar a nuestra empresa dedicada hace más de 10 años al transporte de áridos y arriendo de maquinarias,
                implementando hace 4 años la elaboración y ejecución de proyectos de ingeniería y construcción.
              </p>

              <!-- Ubicación -->
              <div class="mt-8 text-sm">
                <h3 class="font-bold uppercase text-yellow-600">Ubicación</h3>
                <p class="mt-2">Puerto Montt: Camino Sector Piedra Azul, Carretera Austral Km 15.</p>
                <p>Frutillar: Cristino Winkler 238, Frutillar Alto</p>
              </div>

              <!-- Teléfono y Correo -->
              <div class="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-16 text-sm text-left sm:text-center">
                <div>
                  <h3 class="font-bold uppercase text-yellow-600 text-center">Teléfono</h3>
                  <p class="mt-4 text-center">+569 7135 4511</p>
                  <p class="text-center">+569 4803 1169</p>
                </div>
                <div>
                  <h3 class="font-bold uppercase text-yellow-600 text-center mt-8 sm:mt-0">Correo</h3>
                  <p class="mt-4 text-center">
                    📧 <a href="mailto:contacto@santaemma.cl" class="hover:underline text-white font-semibold">contacto@santaemma.cl</a>
                  </p>
                  <p class="text-center">
                    📨 <a href="mailto:quejas@santaemma.cl" class="hover:underline text-white font-semibold">quejas@santaemma.cl</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Mapa diferido -->
            <div class="w-full h-96 rounded-xl overflow-hidden shadow-xl relative">
              <img
                src="/img/mapa-placeholder.jpg"
                alt="Ubicación Constructora Santa Emma"
                class="absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-500"
                :class="{ 'opacity-0': mapaVisible }"
              />
              <iframe
                v-show="mapaVisible"
                @load="onMapLoad"
                src="https://www.google.com/maps?q=Parcela+Santa+Elena,+Puerto+Montt,+Los+Lagos,+Chile&output=embed"
                class="absolute inset-0 w-full h-full"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Línea inferior -->
          <div class="mt-16 border-t border-yellow-600 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p class="text-sm text-white font-semibold">© 2024 Inversiones Santa Emma SpA. Todos los derechos reservados.</p>
            <div class="mt-4 md:mt-0 flex space-x-6">
              <!-- Redes sociales -->
              <!-- (dejo tu mismo código aquí sin cambios) -->
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue'

  const mapaVisible = ref(false)

  onMounted(() => {
    setTimeout(() => {
      mapaVisible.value = true
    }, 2000)
  })

  const onMapLoad = () => {
    console.log('Mapa cargado')
  }

  // Script para posiciones aleatorias de las partículas
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
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }
  .animate-move-pattern {
    animation: move-pattern 80s linear infinite;
  }

  /* Flotación elegante de partículas */
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-20px) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 0.5;
    }
  }
  .animate-float {
    animation: float infinite ease-in-out;
  }
  </style>
