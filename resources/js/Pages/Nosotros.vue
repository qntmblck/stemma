<template>
    <div class="bg-white">
      <Head><title>Nosotros | Santa Emma</title></Head>
      <Header />

      <Hero
        title="Construcción con sentido estratégico"
        subtitle="Obras que generan valor. Inversiones que transforman territorio."
        image="/img/h1.jpg"
      />

      <ResumenEmpresa />
      <Historia />
      <Especialidades />
      <Equipo />

      <Footer />
    </div>
  </template>

  <script setup>
  import { Head } from '@inertiajs/vue3'
  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'
  import Footer from '@/Components/Whitefooter.vue' // <-- cambiado aquí

  import ResumenEmpresa from '@/Components/ResumenEmpresa.vue'
  import Historia from '@/Components/Historia.vue'
  import Equipo from '@/Components/Equipo.vue'
  import Especialidades from '@/Components/Especialidades.vue'
  // Certificaciones eliminado
  </script>
