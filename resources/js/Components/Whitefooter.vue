<template>
    <footer class="relative text-gray-800 font-semibold overflow-hidden bg-white">
      <!-- Fondo animado con más contraste -->
      <div
        class="absolute inset-0 z-0 pointer-events-none animate-move-pattern"
        style="
          background-image: radial-gradient(circle at 25% 25%, #facc15 1.2px, transparent 1px);
          background-size: 45px 45px;
          opacity: 0.35;
          mix-blend-mode: multiply;
        "
      ></div>

      <div class="relative z-10">
        <div class="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Información -->
            <div class="flex flex-col items-center text-center">
              <h2 class="text-sm font-semibold text-yellow-600 tracking-wide uppercase">Inversiones Santa Emma</h2>
              <p class="mt-6 max-w-2xl text-sm leading-6 text-gray-700 font-semibold">
                Nos es grato dirigirnos a ustedes con el fin de presentar a nuestra empresa dedicada hace más de 10 años al transporte de áridos y arriendo de maquinarias,
                implementando hace 4 años la elaboración y ejecución de proyectos de ingeniería y construcción.
              </p>

              <!-- Ubicación -->
              <div class="mt-8 text-sm text-gray-700">
                <h3 class="font-bold uppercase text-yellow-600">Ubicación</h3>
                <p class="mt-2">Puerto Montt: Camino Sector Piedra Azul, Carretera Austral Km 15.</p>
                <p>Frutillar: Cristino Winkler 238, Frutillar Alto</p>
              </div>

              <!-- Teléfono y correo -->
              <div class="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-16 text-sm text-left sm:text-center text-gray-800">
                <div>
                  <h3 class="font-bold uppercase text-yellow-600 text-center">Teléfono</h3>
                  <p class="mt-4 text-center">+569 7135 4511</p>
                  <p class="text-center">+569 4803 1169</p>
                </div>
                <div>
                  <h3 class="font-bold uppercase text-yellow-600 text-center mt-8 sm:mt-0">Correo</h3>
                  <p class="mt-4 text-center">
                    📧 <a href="mailto:contacto@santaemma.cl" class="hover:underline font-semibold text-gray-800">contacto@santaemma.cl</a>
                  </p>
                  <p class="text-center">
                    📨 <a href="mailto:quejas@santaemma.cl" class="hover:underline font-semibold text-gray-800">quejas@santaemma.cl</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Mapa -->
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
            <p class="text-sm text-gray-700 font-semibold">© 2024 Inversiones Santa Emma SpA. Todos los derechos reservados.</p>
            <div class="mt-4 md:mt-0 flex space-x-6">
              <a href="#" class="text-gray-800 hover:text-yellow-600 transition-colors" aria-label="Facebook">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991
                  3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
                  c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
                  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343
                  21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-800 hover:text-yellow-600 transition-colors" aria-label="Instagram">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75
                  0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75
                  5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0
                  0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5a4.25
                  4.25 0 01-4.25-4.25v-8.5A4.25 4.25 0 017.75 3.5zm8.25
                  2.75a.75.75 0 100 1.5.75.75 0 000-1.5zM12
                  7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0
                  1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-800 hover:text-yellow-600 transition-colors" aria-label="Twitter / X">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921
                  9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002
                  21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819
                  10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391
                  4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861
                  19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
              </a>
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
  </style>
