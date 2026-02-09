<template>
  <div class="bg-white w-full min-h-screen gap-16 flex flex-col items-center justify-center py-12">
    <div class="z-10 mb-8">
      <img
        src="@/assets/weather-map.png"
        alt="Weather Logo"
        class="h-96 w-auto max-w-6xl transition-transform shadow-lg"
      />
    </div>

    <div class="w-full max-w-5xl px-12 space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          class="w-full bg-blue-100 border border-blue-300 text-blue-800 rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-200 transition"
        >
          Locations and weather symbols
        </button>
        <button
          class="w-full bg-blue-100 border border-blue-300 text-blue-800 rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-200 transition"
        >
          Yr, the API and our privacy policy
        </button>
        <button
          class="w-full bg-blue-100 border border-blue-300 text-blue-800 rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-200 transition"
        >
          App for iOS and Android
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs text-slate-800">
        <div class="space-y-3">
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Global 3-day precipitation map
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Wind map
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Questions regarding location names
          </p>
        </div>
        <div class="space-y-3">
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            The 21-day forecast on Yr
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Colour coded weather warnings
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            FAQ: Frequently asked questions
          </p>
        </div>
        <div class="space-y-3">
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Lightning map: Realtime display
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Live precipitation forecast
          </p>
          <p class="border-b border-gray-100 py-6 hover:text-blue-600 cursor-pointer underline">
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
