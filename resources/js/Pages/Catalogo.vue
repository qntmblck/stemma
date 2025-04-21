<template>
    <div class="bg-white">
      <Head><title>Catálogo | Santa Emma</title></Head>
      <Header />
      <Hero title="Catálogo de Servicios y Maquinarias" subtitle="Descubre todo lo que ofrecemos para potenciar tu obra." image="/img/h1.jpg" />

      <Servicios />
      <CarruselMaquinarias />
      <GridMaquinarias />
      <FiltroMaquinaria />
      <FichaMaquinaria />

      <Footer />
    </div>
  </template>

  <script setup>
  import { Head } from '@inertiajs/vue3'
  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'
  import Footer from '@/Components/Footer.vue'

  import Servicios from '@/Components/Servicios.vue'
  import CarruselMaquinarias from '@/Components/CarruselMaquinarias.vue'
  import GridMaquinarias from '@/Components/GridMaquinarias.vue'
  import FiltroMaquinaria from '@/Components/FiltroMaquinaria.vue'
  import FichaMaquinaria from '@/Components/FichaMaquinaria.vue'
  </script>
