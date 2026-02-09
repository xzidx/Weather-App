<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const regionName = route.params.id // This gets 'agder' from the URL

// This is where you'll eventually fetch the real data for this region
const measurements = [
  {
    location: 'Flødevigen',
    temp: 1.0,
    municipality: 'Arendal',
    time: 'Today at 14:06',
    type: 'Automatisk',
  },
  {
    location: 'Kilsund',
    temp: 1.0,
    municipality: 'Arendal',
    time: 'Today at 13:23',
    type: 'Registered by user',
  },
  {
    location: 'Flakksvannet',
    temp: 0.1,
    municipality: 'Birkenes',
    time: 'Today at 14:00',
    type: 'Automatisk',
  },
  {
    location: 'Bispen',
    temp: 0.1,
    municipality: 'Farsund',
    time: '6 February at 10:40',
    type: 'Registered by user',
  },
]
</script>

<template>
  <div class="w-full bg-[#CAF0F8] mt-20 mx-auto p-8 min-h-screen flex flex-col justify-center">
    <router-link to="/water-temperatures" class="text-blue-600 hover:underline text-sm mb-2 block">
      Show all regions
    </router-link>

    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-slate-900 capitalize">
        Water temperatures in {{ regionName }}
      </h1>
      <button
        class="bg-[#cedee9] text-[#2e5c8a] px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-200 transition"
      >
        <span>📎</span> Register water temperature
      </button>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead
          class="bg-gray-50 border-b text-xs font-semibold text-gray-500 uppercase tracking-wider"
        >
          <tr>
            <th class="p-4 text-left">Location ↕</th>
            <th class="p-4 text-right">Water temperature ↕</th>
            <th class="p-4">Municipality ↕</th>
            <th class="p-4">Time ↕</th>
            <th class="p-4">Registered by</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(item, index) in measurements"
            :key="index"
            class="hover:bg-blue-50 transition-colors"
          >
            <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
            <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
            <td class="p-4 text-slate-600">{{ item.municipality }}</td>
            <td class="p-4 text-slate-500">{{ item.time }}</td>
            <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
          </tr>
        </tbody>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(item, index) in measurements"
            :key="index"
            class="hover:bg-blue-50 transition-colors"
          >
            <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
            <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
            <td class="p-4 text-slate-600">{{ item.municipality }}</td>
            <td class="p-4 text-slate-500">{{ item.time }}</td>
            <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
          </tr>
        </tbody>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(item, index) in measurements"
            :key="index"
            class="hover:bg-blue-50 transition-colors"
          >
            <td class="p-4 font-medium text-slate-800">{{ item.location }}</td>
            <td class="p-4 text-right font-bold text-red-600">{{ item.temp.toFixed(1) }}°</td>
            <td class="p-4 text-slate-600">{{ item.municipality }}</td>
            <td class="p-4 text-slate-500">{{ item.time }}</td>
            <td class="p-4 text-sm text-slate-400">{{ item.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
