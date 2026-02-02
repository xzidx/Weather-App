<script  setup>
  defineProps({
    location: String
  })
</script>
<template>
<div class="h-screen flex items-center justify-center">
  <div class="p-5 rounded-md bg-amber-300 hover:bg-sky-500 hover:text-amber-50">{{ location }}</div>

</div>
</template>