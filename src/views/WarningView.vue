<template>
  <!-- Page wrapper (ONLY addition) -->
  <div class="min-h-screen bg-white flex flex-col justify-center items-center">


    <div class="w-full mx-auto mt-24 p-8 rounded-lg">
      <h1 class="text-2xl font-bold text-black mb-6">
        Weather warnings in Norway
      </h1>

      <div class="flex justify-center mt-6">
        <div class="bg-white rounded-lg shadow-sm p-1 flex w-fit">
          <button
            @click="activeTab = 'land'"
            :class="activeTab === 'land' ? 'bg-[#90E0EF]' : 'bg-transparent'"
            class="px-12 py-2 rounded-md font-semibold text-black hover:bg-blue-100 transition"
          >
            Land
          </button>

          <button
            @click="activeTab = 'sea'"
            :class="activeTab === 'sea' ? 'bg-[#90E0EF]' : 'bg-transparent'"
            class="px-12 py-2 rounded-md font-semibold text-black hover:bg-blue-100 transition"
          >
            Sea and Coast
          </button>
        </div>
      </div>

      <!-- LAND FILTERS -->
      <div v-if="activeTab === 'land'" class="mt-8">
        <div class="w-4/5 mx-auto flex gap-3 justify-start">
          <select class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
            <option>All counties</option>
            <option>Oslo</option>
            <option>Rogaland</option>
          </select>

          <select
            v-model="filterSeverity"
            class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none"
          >
            <option value="all">All severities</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
          </select>

          <select
            v-model="filterEvent"
            class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none"
          >
            <option value="all">All event types</option>
            <option value="Avalanche">Avalanche</option>
            <option value="Wind">Wind</option>
            <option value="Flood">Flood</option>
          </select>
        </div>
      </div>

      <!-- SEA FILTERS -->
      <div v-if="activeTab === 'sea'" class="mt-8">
        <div class="w-4/5 mx-auto flex gap-3 justify-start">
          <select
            v-model="filterSeverity"
            class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none"
          >
            <option value="all">All severities</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>

          <select
            v-model="filterEvent"
            class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none"
          >
            <option value="all">All event types</option>
            <option value="Wind">Wind</option>
            <option value="Gale">Gale</option>
          </select>
        </div>
      </div>
    </div>

    <!-- WARNINGS LIST -->
    <div class="w-full">
      <div class="block w-full m-auto p-6">
        <h3 class="text-2xl font-bold text-black mb-6 text-left">
          Ongoing
        </h3>

        <ol>
          <WeatherWarningCard
            v-for="(item, index) in filteredOngoing"
            :key="'on-' + index"
            :warning="item"
          />
        </ol>

        <h3 class="text-2xl font-bold text-black mb-6 mt-12 text-left">
          Expected
        </h3>

        <ol>
          <WeatherWarningCard
            v-for="(item, index) in filteredExpected"
            :key="'ex-' + index"
            :warning="item"
          />
        </ol>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import WeatherWarningCard from '@/components/WeatherWarningCard.vue'

const activeTab = ref('land')
const filterSeverity = ref('all')
const filterEvent = ref('all')

const warnings = ref([
  // Ongoing Land
  { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Nordenskiöld Land', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
  { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Sunnmøre', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
  { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Indre Fjordane', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
  { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Voss', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
  { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Hardanger', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },

  // Expected Land
  { status: 'Expected', type: 'land', severity: 'yellow', title: 'Wind', level: '2', location: 'Oslo', description: 'Strong gusts expected...', recommendations: ['Secure items'] },
  { status: 'Expected', type: 'land', severity: 'yellow', title: 'Wind', level: '2', location: 'Bergen', description: 'Heavy wind gusts...', recommendations: ['Stay indoors'] },

  // Ongoing Sea
  { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Gale', level: '3', location: 'North Sea', description: 'Severe gale warning...', recommendations: ['Vessels seek shelter'] },
  { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Wind', level: '3', location: 'Skagerrak', description: 'High winds at sea...', recommendations: ['Check moorings'] },
  { status: 'Ongoing', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Barents Sea', description: 'Moderate gale expected...', recommendations: ['Caution advised'] },
  { status: 'Ongoing', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Norwegian Sea', description: 'Increasing wind speeds...', recommendations: ['Secure equipment'] },
  { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Gale', level: '3', location: 'Fisher', description: 'Storm force winds...', recommendations: ['Stay in port'] },

  // Expected Sea
  { status: 'Expected', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Coastal Helgeland', description: 'Wind rising tomorrow...', recommendations: ['Check small boats'] },
  { status: 'Expected', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Utsira', description: 'Expected gale gusts...', recommendations: ['Safety check'] }
])

const filterLogic = (dataStatus) => {
  return warnings.value.filter(w => {
    const tabMatch = w.type === activeTab.value
    const statusMatch = w.status === dataStatus
    const sevMatch = filterSeverity.value === 'all' || w.severity === filterSeverity.value
    const eventMatch = filterEvent.value === 'all' || w.title === filterEvent.value
    return tabMatch && statusMatch && sevMatch && eventMatch
  })
}

const filteredOngoing = computed(() => filterLogic('Ongoing'))
const filteredExpected = computed(() => filterLogic('Expected'))
</script>
