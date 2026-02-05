<template>
 <div
  class="min-h-screen bg-white font-sans text-[#333]
         p-10 lg:p-20"
>
  <div class="max-w-5xl mx-auto">



      <!-- Top bar -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <!-- Breadcrumb -->
        <nav class="text-xs text-gray-500">
          <a href="#" class="text-blue-500 hover:underline">
            Yr help and information
          </a>
          <span class="mx-1">›</span>
          <span>Locations and weather symbols</span>
        </nav>

        <!-- Search -->
        <div class="relative w-full md:w-[70] lg:w-[200] md:ml-auto">

          <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm
                   focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
      </div>

      <!-- Page title -->
      <h1 class="text-[32px] font-semibold text-gray-800 mb-12">
        Locations and weather symbols
      </h1>

      <!-- Weather and forecast -->
      <section class="mb-14">
        <h2 class="text-xl font-bold mb-4">Weather and forecast</h2>

        <div class="border-t border-gray-200">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Global 3-day precipitation map
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              The 21-day forecast on Yr
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Lightning map: Realtime display
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Wind map
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Colour coded weather warnings
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Live precipitation forecast (only for the Nordic countries)
            </li>
          </ul>
        </div>

        <a href="#" class="text-blue-600 hover:underline text-sm mt-4 inline-block">
          See all 13 articles
        </a>
      </section>

      <!-- Location and search -->
      <section>
        <h2 class="text-xl font-bold mb-4">Location and search</h2>

        <div class="border-t border-gray-200">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Questions regarding location names
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Make Yr more personal - log on!
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              How to use the coordinate search for sea and coast forecast
            </li>
            <li class="py-4 hover:text-blue-600 cursor-pointer text-[15px]">
              Can I organize and delete locations?
            </li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>
