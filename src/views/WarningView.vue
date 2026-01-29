
<template>
    <div class="min-h-screen bg-white px-10 pt-16 mt-[900px]">
    
    <!-- Title -->
        <h2 class="text-3xl font-extrabold text-black text-start mb-10">Weather warnings in Norway</h2>

        <!-- Buttons -->
        <div class="flex justify-center gap-6">
      
            <RouterLink to="/warnings/land" class="px-6 py-3 rounded-lg border border-black text-black font-semibold hover:bg-[#CAF0F8] transition">Land (11)</RouterLink>

            <RouterLink
                to="/warnings/sea"
                class="px-10 py-3 rounded-lg border border-black text-black font-semibold
               hover:bg-[#CAF0F8] transition">
                Sea
            </RouterLink>

            <RouterLink
                to="/warnings/coast"
                class="px-6 py-3 rounded-lg border border-black text-black font-semibold
               hover:bg-[#CAF0F8] transition">
                Coast (9)
            </RouterLink>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

