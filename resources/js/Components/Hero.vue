<template>
    <section class="relative isolate overflow-hidden bg-gray-900 py-32 sm:py-44 animate-fadeZoom">
      <!-- Imagen de fondo fija desde sm: -->
      <!-- Imagen de fondo con efecto fijo universal -->
<div
class="absolute inset-0 -z-10 bg-fixed bg-cover bg-center will-change-transform transition-all duration-1000"

  :style="{ backgroundImage: `url(${image})` }"
>
  <div class="w-full h-full bg-black/50 mix-blend-multiply"></div>
</div>


      <!-- Grano animado -->
      <div class="absolute inset-0 z-0 pointer-events-none grain-overlay"></div>

      <!-- Partículas animadas -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          :style="randomStyle()"
        ></div>
      </div>

      <!-- Contenido del Hero -->
      <div class="relative z-10 px-6 lg:px-20 max-w-4xl text-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-4 text-lg sm:text-xl text-white leading-snug max-w-2xl"
        >
          {{ subtitle }}
        </p>

        <div class="mt-8">
          <a
            href="#catalogo"
            class="inline-block border-2 border-white text-white font-semibold px-6 py-3 transition-all duration-300 rounded hover:bg-white hover:text-gray-900 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            CATÁLOGO
          </a>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    image: { type: String, required: true },
  })

  // Partículas animadas
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
  /* Fade + Zoom animación */
  @keyframes fadeZoom {
    from {
      opacity: 0;
      transform: scale(1.05);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-fadeZoom {
    animation: fadeZoom 1.2s ease-out both;
  }

  /* Fondo de grano animado */
  .grain-overlay {
    background-image: url("data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.65%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27200%25%27%20height%3D%27200%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E");
    opacity: 0.08;
    mix-blend-mode: overlay;
  }

  /* Animación de partículas flotantes */
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
