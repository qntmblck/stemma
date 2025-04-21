<template>
    <div class="bg-white">
      <Head><title>Contacto | Santa Emma</title></Head>
      <Header />
      <Hero title="Contáctanos" subtitle="Estamos listos para asesorarte y acompañarte en tus proyectos." image="/img/h1.jpg" />

      <FormularioContacto />

      <ContactFooter />
    </div>
  </template>

  <script setup>
  import { Head } from '@inertiajs/vue3'
  import Header from '@/Components/Header.vue'
  import Hero from '@/Components/Hero.vue'

  import FormularioContacto from '@/Components/FormularioContacto.vue'
  import ContactFooter from '@/Components/ContactFooter.vue'
  </script>
