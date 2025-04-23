<template>
  <div class="bg-white">
    <Head><title>Nosotros | Santa Emma</title></Head>
    <Header />
    <Hero title="Quiénes somos" subtitle="" image="/img/h1.jpg" />

    <ResumenEmpresa />
    <Historia />
    <Equipo />
    <Especialidades />
    <Certificaciones />

    <Footer />
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import Header from '@/Components/Header.vue'
import Hero from '@/Components/Hero.vue'
import Footer from '@/Components/Footer.vue'

import ResumenEmpresa from '@/Components/ResumenEmpresa.vue'
import Historia from '@/Components/Historia.vue'
import Equipo from '@/Components/Equipo.vue'
import Especialidades from '@/Components/Especialidades.vue'
import Certificaciones from '@/Components/Certificaciones.vue'
</script>


