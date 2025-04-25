<template>
    <div class="bg-white">
      <!-- Head con título -->
      <Head>
        <title>Santa Emma | Construcción e Inversiones</title>
      </Head>

      <!-- Modal de bienvenida (visible al recargar) -->
      <ModalWelcome v-if="showModal" @close="showModal = false" />

      <!-- Header -->
      <Header />

      <!-- Hero -->
      <Hero
        title="Construimos confianza, gestionamos tu inversión"
        subtitle="Desde la zona austral hacia todo Chile, con visión a largo plazo en obras civiles y gestión de activos."
        image="/img/h1.jpg"
      />

      <!-- Servicios -->
      <Servicios />

       <!-- Maquinarias -->
       <section id="catalogo">
       <Maquinarias />
    </section>


      <!-- Proyectos -->
      <section id="proyectos">
      <ProyectosDestacados />
    </section>


      <!-- Testimonios -->
      <section id="nosotros">
  <Testimonios />
</section>

      <!-- Footer -->
      <section id="contacto">
      <Footer />
    </section>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import { Head } from '@inertiajs/vue3'

  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'
  import ModalWelcome from '@/Components/ModalWelcome.vue'
  import Servicios from '@/Components/Servicios.vue'
  import ProyectosDestacados from '@/Components/ProyectosDestacados.vue'
  import Maquinarias from '@/Components/Maquinarias.vue'
  import Testimonios from '@/Components/Testimonios.vue'
  import Footer from '@/Components/Footer.vue'

  // Modal visible al cargar la página
  const showModal = ref(true)
  </script>
