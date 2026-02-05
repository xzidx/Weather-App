<template>
  <!-- Image on top -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 z-5 ">
    <img
      src="@/assets/150.jpg"
      alt="Weather Logo"
      class="h-100 w-400 max-w-6xl transition-transform shadow-lg"
    />
  </div>

  <!-- Text content -->
  <div class="relative z-10 flex justify-center pt-[350px]">
    <div class="w-7xl h-full px-12 py-12 space-y-8"> 
      
      <!-- Top Buttons -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button class="w-full bg-blue-200 border border-blue-800 text-blue-600
                       rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-50 hover:shadow-md transition">
          Locations and weather symbols
        </button>
        <button class="w-full bg-blue-200 border border-blue-800 text-blue-600
                       rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-50 hover:shadow-md transition">
          Yr, the API and our privacy policy
        </button>
        <button class="w-full bg-blue-200 border border-blue-800 text-blue-600
                       rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-50 hover:shadow-md transition">
          App for iOS and Android
        </button>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-black">
        <div class="space-y-1.5">
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Global 3-day precipitation map</p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Wind map</p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Questions regarding location names</p>
        </div>
        <div class="space-y-1.5">
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">The 21-day forecast on Yr</p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Colour coded weather warnings</p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">FAQ: Frequently asked questions</p>
        </div>
        <div class="space-y-1.5">
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Lightning map: Realtime display</p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">
            Live precipitation forecast (only for the Nordic countries)
          </p>
          <p class="border-b py-1.5 hover:text-blue-600 cursor-pointer">Privacy policy</p>
        </div>
      </div>

    </div>
  </div>
</template>
