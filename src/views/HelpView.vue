<template>
  <viewer :images="images">
    <div class="flex justify-center items-center min-h-screen">
      <img v-for="src in images" :key="src" :src="src" class="max-w-5xl w-full object-contain" />
    </div>
  </viewer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import img1 from '@/assets/1.jpeg'

export default defineComponent({
  data() {
    return {
      images: [img1],
    }
  },
})
</script>
