<template>
  <div class="min-h-screen bg-white">
    <div class="w-full h- md:h-100 relative overflow-hidden">
      <img 
        :src="images[0]" 
        alt="Weather Banner" 
        class="w-full h-full object-cover"
      />
      </div>
      <p>gef</p>

    <div class="container mx-auto px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        
        <button class="bg-blue-50 border border-blue-200 py-4 px-6 rounded-lg text-blue-600 hover:bg-blue-100 transition duration-300 font-medium">
          Locations and weather symbols
        </button>

        <button class="bg-blue-50 border border-blue-200 py-4 px-6 rounded-lg text-blue-600 hover:bg-blue-100 transition duration-300 font-medium">
          Yr, the API and our privacy policy
        </button>

        <button class="bg-blue-50 border border-blue-200 py-4 px-6 rounded-lg text-blue-600 hover:bg-blue-100 transition duration-300 font-medium">
          App for iOS and Android
        </button>

      </div>
    </div>
  </div>
   <div></div>
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