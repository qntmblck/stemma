<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <Link :href="'/'">
        <a href="/" class="flex items-center space-x-2">
            <img
              src="/stemma1.png?=v2"
              alt="Logo Santa Emma"
              class="h-20 lg:h-20 w-auto drop-shadow-lg transition-all duration-300"
            />
          </a>
    </Link>
</template>
