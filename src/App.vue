<template>
  <div class="flex flex-col min-h-screen bg-[#121212]">
    <Header />

    <main class="flex-grow">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
