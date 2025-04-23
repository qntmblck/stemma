<template>
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative overflow-hidden transition-transform transform scale-100">

        <!-- Botón Cerrar -->
        <button @click="cerrar" class="absolute top-4 right-4 text-gray-500 hover:text-yellow-600 transition">
          <i class="fas fa-times text-lg"></i>
        </button>

        <!-- Encabezado -->
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ proyecto.titulo }}</h2>

        <!-- Imagen -->
        <img
          :src="proyecto.imagen"
          alt="Imagen del proyecto"
          class="w-full rounded-lg shadow-sm mb-6 object-cover max-h-72 transition-opacity duration-500"
          :class="{ 'opacity-0': !imagenCargada, 'opacity-100': imagenCargada }"
          @load="imagenCargada = true"
        />

        <!-- Descripción -->
        <p class="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {{ proyecto.descripcion }}
        </p>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, watch } from 'vue'
  import { onKeyStroke } from '@vueuse/core'

  // Props
  const props = defineProps({
    visible: Boolean,
    proyecto: {
      type: Object,
      required: true
    }
  })
  const emit = defineEmits(['close'])

  // Script 1: Cierre con tecla ESC
  onKeyStroke('Escape', () => {
    if (props.visible) cerrar()
  })

  // Script 2: Control de imagen cargada (animación fade-in)
  const imagenCargada = ref(false)

  // Script 3: Cierre al hacer click fuera del modal
  const cerrar = () => emit('close')
  </script>
