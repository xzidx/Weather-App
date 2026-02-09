<script setup>
import { ref, defineEmits, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlassLocation,
  faBars,
  faRightToBracket,
  faXmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(faMagnifyingGlassLocation, faBars, faRightToBracket, faXmark, faUser)

// Local state
const searchOpen = ref(false)
const searchInput = ref("")
const menuOpen = ref(false)

// Vuex Store
const store = useStore()
const isLoggedIn = computed(() => store.getters.isLoggedIn)
const user = computed(() => store.getters.user)

// Event emitter to parent
const emit = defineEmits(["search"])

// Toggle search input open/close
function toggleSearch() {
  searchOpen.value = !searchOpen.value
  menuOpen.value = false 
}

// Handle search submit (Enter key)
function handleSearchEnter(event) {
  if(event.key === 'Enter' && searchInput.value.trim() !== "") {
    emit("search", searchInput.value.trim())
    searchInput.value = ""
    searchOpen.value = false
  }
}

// Close menu
function closeMenu() {
  menuOpen.value = false
}

// Logout and close menu
function logout() {
  store.dispatch('logout')
  menuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <nav class="max-w-full mx-auto px-6 py-4 flex justify-between items-center h-20">

      <div v-if="!searchOpen" class="flex items-center">
        <RouterLink to="/">
          <img
            src="@/assets/weather-logo.png"
            alt="Weather Logo"
            class="h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </RouterLink>
        <span class="text-heading self-center text-lg font-semibold whitespace-nowrap text-black ml-2"
          >Nimbus Travel</span
        >
      </div>

      <div v-if="!searchOpen" class="relative">
        <ul class="flex items-center gap-10 text-lg font-semibold text-gray-700">

          <li class="relative group flex items-center">
            <div
              @click="toggleSearch"
              class="flex items-center gap-2 cursor-pointer transition-colors group-hover:text-[aqua] px-2 py-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
              <span>Search</span>
            </div>
          </li>

          <li class="relative">
            <div
              @click="menuOpen = !menuOpen"
              class="flex items-center gap-2 cursor-pointer hover:text-[aqua] px-2 py-1 select-none"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
              <span>Menu</span>
            </div>

            <ul
              v-show="menuOpen"
              class="absolute top-14 right-0 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50 animate-fadeIn flex flex-col overflow-hidden"
            >
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base border-b border-gray-50">
                <RouterLink to="/about" class="block w-full">About us</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base border-b border-gray-50">
                <RouterLink to="/contact" class="block w-full">Contact</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base border-b border-gray-50">
                <RouterLink to="/help" class="block w-full">Help</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base border-b border-gray-50">
                <RouterLink to="/warning" class="block w-full">Warning</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/water-temperatures" class="block w-full">Weather View</RouterLink>
              </li>

              <li v-if="isLoggedIn" 
                  @click="logout"
                  class="px-4 py-2 hover:bg-red-50 cursor-pointer text-red-500 border-t border-gray-200 font-bold"
                >
                Logout
              </li>
            </ul>
          </li>

          <li v-if="!isLoggedIn">
            <RouterLink to="/login" class="flex items-center gap-2 hover:text-[aqua]">
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
              <span>Login</span>
            </RouterLink>
          </li>

          <li v-else class="flex items-center gap-2 text-blue-500 select-none">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <span>{{ user?.name || 'User' }}</span>
          </li>
        </ul>

        <div
          v-if="menuOpen"
          @click="closeMenu"
          class="fixed inset-0 z-40 bg-transparent"
        ></div>
      </div>

      <div v-else class="flex-1 flex items-center gap-4 animate-fadeIn">
        <div class="relative w-full">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass-location"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            v-model="searchInput"
            @keyup.enter="handleSearchEnter"
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