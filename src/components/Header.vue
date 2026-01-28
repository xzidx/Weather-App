<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlassLocation,
  faBars,
  faRightToBracket,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(faMagnifyingGlassLocation, faBars, faRightToBracket, faXmark)

// Local state
const searchOpen = ref(false)

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <nav class="max-w-full mx-auto px-6 py-4 flex justify-between items-center h-20">

      <!-- Logo -->
      <div v-if="!searchOpen" class="flex items-center">
        <RouterLink to="/">
          <img
            src="@/assets/weather-logo.png"
            alt="Weather Logo"
            class="h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </RouterLink>
        <span class="text-heading self-center text-lg font-semibold whitespace-nowrap text-black ">Nimbus Travel</span>
      </div>

      <!-- Nav Links -->
      <div v-if="!searchOpen">
        <ul class="flex items-center gap-10 text-lg font-semibold text-gray-700">

          <!-- Search -->
          <li class="relative group flex items-center">
            <div
              class="flex items-center gap-2 cursor-pointer transition-colors group-hover:text-[aqua] px-2 py-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
              <span>Search</span>
            </div>

            <div
              class="absolute right-50 w-200 border border-gray-100 shadow-2xl rounded-xl z-50
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:duration-150 group-hover:delay-0
                     opacity-0 invisible translate-y-1 transition-all duration-1000 delay-500"
            >
              <div class="relative p-1">
                <input
                  type="text"
                  placeholder="Enter city name..."
                  class="w-full pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[aqua] outline-none text-sm font-normal text-black"
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass-location"
                  class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
                />
              </div>
            </div>
          </li>

          <!-- Menu -->
          <li>
            <RouterLink
              to="/menu"
              class="flex items-center gap-2 hover:text-blue-600"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
              <span>Menu</span>
            </RouterLink>
          </li>

          <!-- Login -->
          <li>
            <RouterLink
              to="/login"
              class="flex items-center gap-2 hover:text-blue-600"
            >
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
              <span>Login</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Search Input Open -->
      <div v-else class="flex-1 flex items-center gap-4 animate-fadeIn">
        <div class="relative w-full">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass-location"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search for a city or country..."
            class="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            autofocus
          />
        </div>
        <button
          @click="toggleSearch"
          class="p-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="xl" />
        </button>
      </div>

    </nav>
  </header>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
