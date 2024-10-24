<script setup>
import CardRowComponent from '@/components/CardRowComponent.vue'
</script>

<template>
  <div class="container mx-auto px-5 py-5">
    <div class="">
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-400 md:text-5xl lg:text-6xl"
      >
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >Bookzyy Booking</span
        >
        Staff Holiday System.
      </h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Bookzyy is a holiday management system tailored for small to medium sized busniesses,
        helping you manage holidays, personal leave and maternity leave...
      </p>
    </div>
  </div>
  <CardRowComponent />
</template>
