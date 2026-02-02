<template>
  <div class="min-h-screen bg-white font-sans text-[#333] p-10 lg:p-20">
    
    <div class="max-w-5xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <nav class="text-xs text-gray-500">
          <a href="#" class="text-blue-500 hover:underline">Yr help and information</a>
          <span class="mx-1"></span>
          <span>Yr, the API and our privacy policy</span>
        </nav>
        
        <div class="relative w-full md:w-64">
          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input type="text" placeholder="Search" class="w-full-[300] pl-10 pr-20 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
        </div>
      </div>

      <h1 class="text-[32px] font-semibold text-gray-800 mb-12">Yr, the API and our privacy policy</h1>

      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Free weather data</h2>
        <div class="border-t border-gray-200">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Weather modules from Yr</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Free weather data service from Yr</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Data access and terms of service</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">PHP forecasts</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Javascript forecasts</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">GRIB weather data</li>
          </ul>
        </div>
      </section>

      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4 text-gray-800">About us</h2>
        <div class="border-t border-gray-200">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">FAQ: Frequently asked questions</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Privacy policy</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Facts about Yr</li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Our collaborators</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold mb-4 text-gray-800">Contact us</h2>
        <div class="border-t border-gray-200">
          <p class="py-4 hover:text-blue-600 cursor-pointer text-[15px] transition-colors">Contact and help</p>
        </div>
      </section>

    </div>
  </div>
</template>