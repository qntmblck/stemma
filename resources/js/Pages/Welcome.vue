<template>
    <div class="bg-white">
      <!-- Modal de bienvenida (solo en Welcome.vue) -->
      <ModalWelcome />

      <!-- Header principal -->
      <Header />

      <!-- Hero adaptado para visión e inversión -->
      <Hero
        title="Construimos confianza, gestionamos tu inversión"
        subtitle="Desde la zona austral hacia todo Chile, con visión a largo plazo en obras civiles y gestión de activos."
        image="/img/dashboard/truck.jpg"
      />
      <!-- Servicios destacados -->
      <Servicios />

      <!-- Proyectos destacados -->
      <ProyectosDestacados />

      <!-- Renovación de maquinarias -->
      <Maquinarias />

      <!-- Testimonios de clientes reales -->
      <Testimonios />

      <!-- Footer institucional -->
      <Footer />
    </div>
  </template>

  <script setup>
  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'
  import ModalWelcome from '@/Components/ModalWelcome.vue'
  import Servicios from '@/Components/Servicios.vue'
  import ProyectosDestacados from '@/Components/ProyectosDestacados.vue'
  import Maquinarias from '@/Components/Maquinarias.vue'
  import Testimonios from '@/Components/Testimonios.vue'
  import Footer from '@/Components/Footer.vue'
  </script>

  <style scoped>
  /* Estilos generales para Welcome.vue (si se requieren) */
  </style>
