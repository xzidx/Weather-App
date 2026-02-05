<template>
  <div class="min-h-screen bg-white font-sans text-[#333] p-10 lg:p-20">
    <div class="max-w-5xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <nav class="text-xs text-gray-500">
          <a href="#" class="text-blue-500 hover:underline">Yr help and information</a>
          <span class="mx-1">›</span>
          <span>App for iOS and Android</span>
        </nav>

        <div class="relative w-full md:w-64">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input type="text" placeholder="Search" class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" />
        </div>
      </div>

      <h1 class="text-[32px] font-medium text-gray-800 mb-12">
        App for iOS and Android
      </h1>

      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4">Weather and forecast</h2>
        <div class="border-t border-gray-100">
          <ul class="divide-y divide-gray-100">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">What does «light» and «heavy» rain mean?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">What does «high winds» and «dangerous wind» mean?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">Where can I find sunrise and sunset times?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">What does cloud with three lines under mean?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How does the weather visualisation work?</li>
          </ul>
        </div>
      </section>

      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4">Settings</h2>
        <div class="border-t border-gray-100">
          <ul class="divide-y divide-gray-100">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to set default startpage</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How do I change language?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to change weather units?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to change transparency and colour on widget (Android)</li>
          </ul>
        </div>
      </section>

      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4">Location and search</h2>
        <div class="border-t border-gray-100">
          <ul class="divide-y divide-gray-100">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to add a location to my favourite list?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to change location?</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">How to change location on your widget</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">The app shows me the wrong location</li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>