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
              <td class="px-6 py-4">{{ item.concepto }}</td>
              <td class="px-6 py-4">{{ item.monto }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>

  <script setup>
  const servicios = [
    { concepto: 'Integración de pagos', monto: '$150.000' },
    { concepto: 'Cotizador con lógica', monto: '$250.000' },
    { concepto: 'Notificaciones automáticas', monto: '$100.000' },
    { concepto: 'Conexión a APIs externas', monto: '$80.000' },
    { concepto: 'Reportes exportables', monto: '$150.000' },
    { concepto: 'Integración IoT', monto: '$400.000 (*)' },
  ];
  </script>

  <style scoped>
  th, td {
    border: 1px solid #ddd;
  }
  </style>
