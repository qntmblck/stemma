<template>
    <section class="bg-white rounded-xl overflow-hidden shadow-lg">
      <div class="bg-gradient-to-br from-[#eab308] to-white px-6 py-4">
        <h3 class="text-2xl font-bold text-black">Categoría 1: Página base + funciones básicas</h3>
        <p class="text-sm text-gray-700">(mantención anual incluye 2 cambios menores al mes)</p>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left text-black">
          <thead class="bg-[#f4f4f4] text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">Concepto</th>
              <th scope="col" class="px-6 py-3">Monto CLP</th>
              <th scope="col" class="px-6 py-3">Pactado</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4">🔴 Landing page básica (Diseño y Contenido de 5-6 Secciones dinámicas en Versión Móbil y Escritorio)</td>
              <td class="px-6 py-4 line-through text-red-500">$250.000</td>
              <td class="px-6 py-4 font-bold text-green-600">$150.000</td>
            </tr>
            <tr class="border-b" v-for="(item, index) in adicionales" :key="index">
              <td class="px-6 py-4">{{ item.concepto }}</td>
              <td class="px-6 py-4">{{ item.monto }}</td>
              <td class="px-6 py-4 text-yellow-600">🟡 {{ item.monto }} <span class="italic">(por aceptar)</span></td>
            </tr>
            <tr class="bg-yellow-50 font-semibold border-t">
              <td class="px-6 py-4">🧾 Total sin mantención</td>
              <td class="px-6 py-4">$520.000</td>
              <td class="px-6 py-4">$420.000 ($150.000 + $270.000 por aceptar)</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4">🔴 Mantención Anual Categoría 1</td>
              <td class="px-6 py-4 line-through text-red-500">$120.000</td>
              <td class="px-6 py-4 text-green-600 font-bold">$100.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>

  <script setup>
  const adicionales = [
    { concepto: 'Página adicional: Nosotros', monto: '$30.000' },
    { concepto: 'Página adicional: Proyectos', monto: '$30.000' },
    { concepto: 'Página adicional: Catálogo', monto: '$30.000' },
    { concepto: 'Página adicional: Contacto', monto: '$30.000' },
    { concepto: 'Formulario de contacto/cotización con envío de correo automatico', monto: '$40.000' },
    { concepto: 'Correo corporativo anual: cuenta gerencial', monto: '$30.000' },
    { concepto: 'Correo corporativo anual: cuenta administrativa adicional', monto: '$10.000' },
    { concepto: 'Botón flotante de WhatsApp para atención directa', monto: '$60.000' },
  ];
  </script>

  <style scoped>
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
  }

  </style>
