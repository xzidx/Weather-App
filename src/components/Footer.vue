<template>
  <footer class="absolute bottom-0 left-0 w-full bg-white rounded-base shadow-xs border border-default m-4">
    <div class="w-full max-w-screen-full mx-auto p-4 md:py-2">
      <div class="sm:flex sm:items-center sm:justify-between">

        <!-- Logo (just text/logo, no external link) -->
        <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <RouterLink to="/">
          <img
            src="@/assets/weather-logo.png"
            alt="Weather Logo"
            class="h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </RouterLink>
          <span class="text-heading self-center text-lg font-semibold whitespace-nowrap text-black ">Nimbus Travel</span>
        </div>

        <!-- Internal links -->
        <ul class="flex flex-wrap items-center mb-6 text-sd font-medium text-body sm:mb-0 gap-10">
          <li>
            <RouterLink to="/about" class="hover:underline me-4 md:me-6">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</RouterLink>
          </li>
          <li>
            <RouterLink to="/licensing" class="hover:underline me-4 md:me-6">Licensing</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <hr class="my-6 border-default sm:mx-auto lg:my-8" />

      <!-- Copyright -->
      <span class="block text-sm text-body text-black sm:text-center">
        © 2023 Nimbus Travel. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
