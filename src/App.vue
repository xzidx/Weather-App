<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<template>
  <h1>Food</h1>
  <food-item food-name="Apples"/>
  <food-item food-name="Pizza"/>
  <food-item food-name="Rice"/>
</template>

<script></script>

