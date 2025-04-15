<template>
    <section id="servicios" class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-base font-semibold text-yellow-600">Nuestros Servicios</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Especialidades que nos definen
          </p>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            En cada obra, maquinaria y terreno entregamos compromiso, soluciones técnicas y visión de futuro.
          </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="servicio in servicios"
            :key="servicio.titulo"
            class="group [perspective:1000px] cursor-pointer"
          >
            <div class="relative h-80 w-full [transform-style:preserve-3d] transition duration-700 group-hover:[transform:rotateY(180deg)]">
              <!-- Cara frontal -->
              <div
                class="absolute inset-0 rounded-xl shadow-lg overflow-hidden bg-cover bg-center [backface-visibility:hidden]"
                :style="{ backgroundImage: `url(${servicio.imagen})` }"
              >
                <div class="flex h-full w-full items-center justify-center bg-black/50">
                  <h3 class="text-white text-xl font-semibold">{{ servicio.titulo }}</h3>
                </div>
              </div>

              <!-- Cara trasera -->
              <div class="absolute inset-0 rounded-xl bg-yellow-500 text-white px-4 py-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 class="text-lg font-bold">{{ servicio.titulo }}</h3>
                <p class="mt-2 text-sm">{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const servicios = [
    {
      titulo: 'Transportes',
      descripcion: 'Maquinarias, áridos, asfalto, tierra, escombros y silo de maíz.',
      imagen: '/img/servicios/transporte.png',
    },
    {
      titulo: 'Movimiento de Tierras',
      descripcion: 'Escabaciones de plataforma, retiro de escombros, relleno en diversos tipos de terreno.',
      imagen: '/img/servicios/movimiento.png',
    },
    {
      titulo: 'Construcción',
      descripcion: 'Construcción de oficinas, bodegas y cabañas personalizadas con estándares técnicos de calidad.',
      imagen: '/img/servicios/construccion.png',
    },
    {
      titulo: 'Arriendo de Maquinarias',
      descripcion: 'Tolva, batea de árido, granelera, motoniveladora, retroexcavadora y excavadora.',
      imagen: '/img/servicios/arriendo.png',
    },
  ]
  </script>

  <style scoped>
  .group:hover .group-hover\:\[transform\:rotateY\(180deg\)\] {
    transform: rotateY(180deg);
  }
  </style>
