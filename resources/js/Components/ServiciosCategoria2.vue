<template>
    <section class="bg-white rounded-xl overflow-hidden shadow-lg">
      <div class="bg-gradient-to-br from-[#eab308] to-white px-6 py-4">
        <h3 class="text-2xl font-bold text-black">Categoría 2: Usuarios + administración</h3>
        <p class="text-sm text-gray-700">(mantención anual incluye 2 cambios menores al mes)</p>
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
    { concepto: 'Conexión a base de datos', monto: '$100.000' },
    { concepto: 'Login con roles (dos admin/user)', monto: '$120.000' },
    { concepto: 'Dashboard visual rol usuario', monto: '$150.000' },
    { concepto: 'Panel de rol administración', monto: '$180.000' },
    { concepto: 'Gestión de nuevo rol + dashboard', monto: '$270.000 – $300.000' },
  ];
  </script>

  <style scoped>
  th, td {
    border: 1px solid #ddd;
  }
  </style>
