<template>
    <section id="maquinarias" class="bg-white py-24 px-6 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Renovación de Maquinarias</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Santa Emma cuenta con un parque de equipos actualizado, pensado para responder con eficiencia y seguridad a los desafíos de la construcción moderna.
        </p>
      </div>

      <!-- Grilla de maquinarias -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div v-for="maquina in maquinarias" :key="maquina.nombre" class="rounded-xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition">
          <img :src="maquina.imagen" :alt="maquina.nombre" class="h-52 w-full object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-800">{{ maquina.nombre }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  const maquinarias = [
    {
      nombre: 'Excavadora Hidráulica Komatsu PC210',
      imagen: '/img/maquinarias/excavadora-komatsu.jpg',
    },
    {
      nombre: 'Retroexcavadora JCB 3CX',
      imagen: '/img/maquinarias/retroexcavadora-jcb.jpg',
    },
    {
      nombre: 'Camión Tolva Mercedes-Benz 6x4',
      imagen: '/img/maquinarias/camion-tolva.jpg',
    },
    {
      nombre: 'Camión Aljibe 15.000 litros',
      imagen: '/img/maquinarias/camion-aljibe.jpg',
    },
    {
      nombre: 'Chancadora Impactadora Terex',
      imagen: '/img/maquinarias/chancadora-terex.jpg',
    },
    {
      nombre: 'Rodillo Compactador CAT 12T',
      imagen: '/img/maquinarias/rodillo-cat.jpg',
    },
    {
      nombre: 'Generador Eléctrico Industrial 80kVA',
      imagen: '/img/maquinarias/generador.jpg',
    },
    {
      nombre: 'Planta dosificadora de áridos',
      imagen: '/img/maquinarias/planta-dosificadora.jpg',
    },
  ]
  </script>
