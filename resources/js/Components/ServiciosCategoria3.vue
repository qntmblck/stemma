<template>
    <section class="bg-white rounded-xl overflow-hidden shadow-lg">
      <div class="bg-gradient-to-br from-[#eab308] to-white px-6 py-4">
        <h3 class="text-2xl font-bold text-black">Categoría 3: Funciones avanzadas</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left text-black">
          <thead class="bg-[#f4f4f4] text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">Concepto</th>
              <th scope="col" class="px-6 py-3">Monto CLP</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in servicios" :key="index" class="border-b">
              <td class="px-6 py-4">
                {{ item.concepto }}
                <button
                  v-if="item.expandible"
                  class="ml-2 text-sm text-blue-600 underline"
                  @click="toggleDetalles"
                >
                  {{ mostrarDetalles ? 'Ocultar' : 'Ver más' }}
                </button>
              </td>
              <td class="px-6 py-4">{{ item.monto }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="mostrarDetalles" class="px-6 py-4 bg-yellow-50 border-t border-gray-300 text-sm text-gray-800">
          <p class="mb-2 font-semibold">¿Qué permite una integración IoT en tu empresa?</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>📍 <strong>Monitorear ubicación y estado de vehículos o maquinaria</strong> en tiempo real desde una sola plataforma.</li>
            <li>📊 <strong>Controlar el rendimiento de equipos</strong>, incluyendo horas de uso, detenciones o condiciones ambientales.</li>
            <li>🚨 <strong>Recibir alertas automáticas</strong> ante fallas, movimientos no autorizados o condiciones críticas.</li>
            <li>💰 <strong>Reducir costos operacionales</strong> al prevenir daños y optimizar el mantenimiento.</li>
            <li>🧾 <strong>Generar reportes históricos</strong> para auditorías, gestión de activos y toma de decisiones.</li>
            <li>📈 <strong>Tomar decisiones estratégicas</strong> basadas en datos confiables y disponibles al instante.</li>
          </ul>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref } from 'vue'

  const mostrarDetalles = ref(false)

  function toggleDetalles() {
    mostrarDetalles.value = !mostrarDetalles.value
  }

  const servicios = [
    { concepto: 'Integración de pagos', monto: '$150.000' },
    { concepto: 'Cotizador con lógica', monto: '$250.000' },
    { concepto: 'Notificaciones automáticas', monto: '$100.000' },
    { concepto: 'Conexión a APIs externas', monto: '$80.000' },
    { concepto: 'Reportes exportables', monto: '$150.000' },
    { concepto: 'Integración IoT', monto: '$400.000 (*)', expandible: true },
  ]
  </script>

  <style scoped>
  th, td {
    border: 1px solid #ddd;
  }
  </style>
