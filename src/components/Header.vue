<script setup>
import { ref, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlassLocation,
  faBars,
  faRightToBracket,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(faMagnifyingGlassLocation, faBars, faRightToBracket, faXmark)

// Local state
const searchOpen = ref(false)
const searchInput = ref("")
const menuOpen = ref(false) // <-- dropdown menu state

// Event emitter to parent
const emit = defineEmits(["search"])

// Toggle search input open/close
function toggleSearch() {
  searchOpen.value = !searchOpen.value
  menuOpen.value = false // close menu when opening search
}

// Handle search submit (Enter key)
function handleSearchEnter(event) {
  if(event.key === 'Enter' && searchInput.value.trim() !== "") {
    emit("search", searchInput.value.trim())  // send city name to parent
    searchInput.value = ""
    searchOpen.value = false
  }
}

// Close menu when clicking outside
function closeMenu() {
  menuOpen.value = false
}
const store = useStore()

const isLoggedIn = computed(() => store.getters.isLoggedIn)
const user = computed(() => store.getters.user)

function logout() {
  store.dispatch('logout')
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
        <span class="text-heading self-center text-lg font-semibold whitespace-nowrap text-black"
          >Nimbus Travel</span
        >
      </div>

      <!-- Nav Links -->
      <div v-if="!searchOpen" class="relative">
        <ul class="flex items-center gap-10 text-lg font-semibold text-gray-700">

          <!-- Search Button -->
          <li class="relative group flex items-center">
            <div
              @click="toggleSearch"
              class="flex items-center gap-2 cursor-pointer transition-colors group-hover:text-[aqua] px-2 py-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
              <span>Search</span>
            </div>
          </li>

          <!-- Menu with Dropdown -->
          <li class="relative">
            <!-- Menu Button -->
            <div
              @click="menuOpen = !menuOpen"
              class="flex items-center gap-2 cursor-pointer hover:text-[aqua] px-2 py-1 select-none"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
              <span>Menu</span>
            </div>

            <!-- Dropdown Menu -->
            <ul
              v-show="menuOpen"
              class="absolute top-14 right-0  w-70 gap-20 bg-white shadow-lg rounded-md border border-gray-200 z-50 animate-fadeIn"
            >
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/about">About us</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/help">Help</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/map">Map View</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/warning">Warning</RouterLink>
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base">
                <RouterLink to="/weather">Weather View</RouterLink>
              </li>
            </ul>
          </li>

         <!-- AUTH SECTION -->
            <li v-if="!isLoggedIn">
              <RouterLink to="/login" class="flex items-center gap-2 hover:text-[aqua]">
                <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                <span>Login</span>
              </RouterLink>
            </li>

            <li v-else class="relative">
              <div
                @click="menuOpen = !menuOpen"
                class="flex items-center gap-2 cursor-pointer hover:text-[aqua]"
              >
                <FontAwesomeIcon icon="fa-solid fa-user" />
                <span>{{ user?.name || 'User' }}</span>
              </div>

              <!-- Dropdown -->
              <ul
                v-show="menuOpen"
                class="absolute top-14 right-0 w-40 bg-white shadow-lg rounded-md border z-50"
              >
                <li
                  @click="logout"
                  class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </li>
              </ul>
            </li>


        </ul>

        <!-- Close menu if click outside -->
        <div
          v-if="menuOpen"
          @click="closeMenu"
          class="fixed inset-0 z-40"
        ></div>
      </div>

      <!-- Search Input Open -->
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
