<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="w-full bg-white border-t border-gray-200 mt-auto">
    <div class="max-w-screen-2xl mx-auto p-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2">
          <img src="@/assets/weather-logo.png" alt="Logo" class="h-10 w-auto" />
          <span class="font-bold text-black">Nimbus Travel</span>
        </div>

        <ul class="flex gap-6 text-sm font-medium text-gray-600">
          <li><RouterLink to="/about" class="hover:underline">About</RouterLink></li>
          <li><RouterLink to="/privacy-policy" class="hover:underline">Privacy</RouterLink></li>
          <li><RouterLink to="/licensing" class="hover:underline">Licensing</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:underline">Contact</RouterLink></li>
        </ul>
      </div>
      <hr class="my-4 border-gray-100" />
      <p class="text-center text-xs text-gray-400">© 2023 Nimbus Travel. All Rights Reserved.</p>
    </div>
  </footer>
</template>
