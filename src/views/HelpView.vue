<template>
  <div class="min-h-screen bg-white flex justify-center pt-24">
  <div class="w-7xl h-full px-16 py-16">
    <!-- Top Buttons -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <button
        class="w-full bg-blue-200 border border-blue-800 text-blue-600
               rounded-lg px-6 py-4 font-medium hover:bg-blue-50 hover:shadow-md transition">
        Locations and weather symbols
      </button>
      <button
        class="w-full bg-blue-200 border border-blue-800 text-blue-600
               rounded-lg px-6 py-4 font-medium hover:bg-blue-50 hover:shadow-md transition">
        Yr, the API and our privacy policy
      </button>
      <button
        class="w-full bg-blue-200 border border-blue-800 text-blue-600
               rounded-lg px-6 py-4 font-medium hover:bg-blue-50 hover:shadow-md transition">
        App for iOS and Android
      </button>
    </div>

    <!-- Links -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-black">
      <div>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Global 3-day precipitation map
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Wind map
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Questions regarding location names
        </p>
      </div>
      <div>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          The 21-day forecast on Yr
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Colour coded weather warnings
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          FAQ: Frequently asked questions
        </p>
      </div>
      <div>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Lightning map: Realtime display
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Live precipitation forecast (only for the Nordic countries)
        </p>
        <p class="border-b border-gray-300 py-2 hover:text-blue-600 cursor-pointer">
          Privacy policy
        </p>
      </div>
    </div>
  </div>
</div>

</template>
