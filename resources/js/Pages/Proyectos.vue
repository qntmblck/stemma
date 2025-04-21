<template>
    <div class="bg-white">
      <Head><title>Proyectos | Santa Emma</title></Head>
      <Header />
      <Hero title="Proyectos realizados" subtitle="Conectando experiencia, diseño y ejecución en cada obra." image="/img/h1.jpg" />

      <IntroProyectos />
      <ProyectosGrid />
      <FiltroProyectos />
      <ProyectoModal />

      <Footer />
    </div>
  </template>

  <script setup>
  import { Head } from '@inertiajs/vue3'
  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'
  import Footer from '@/Components/Footer.vue'

  import IntroProyectos from '@/Components/IntroProyectos.vue'
  import ProyectosGrid from '@/Components/ProyectosGrid.vue'
  import FiltroProyectos from '@/Components/FiltroProyectos.vue'
  import ProyectoModal from '@/Components/ProyectoModal.vue'
  </script>
