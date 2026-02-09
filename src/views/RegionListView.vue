<script setup>
const regions = [
    { name: 'Agder', id: 'agder', icon: '🛡️' },
    { name: 'Akershus', id: 'akershus', icon: '🏰' },
    { name: 'Buskerud', id: 'buskerud', icon: '⚒️' },
    { name: 'Finnmark', id: 'finnmark', icon: '❄️' },
    { name: 'Innlandet', id: 'innlandet', icon: '🌲' },
    { name: 'Jan Mayen', id: 'jan-mayen', icon: '🌋' },
    { name: 'Møre og Romsdal', id: 'more-og-romsdal', icon: '⛰️' },
    { name: 'Nordland', id: 'nordland', icon: '🦅' },
    { name: 'Oslo', id: 'oslo', icon: '👑' },
    { name: 'Rogaland', id: 'rogaland', icon: '⚓' },
    { name: 'Svalbard', id: 'svalbard', icon: '🐻' },
    { name: 'Telemark', id: 'telemark', icon: '⚡' },
    { name: 'Troms', id: 'troms', icon: '🦌' },
    { name: 'Trøndelag', id: 'trondelag', icon: '⚔️' },
    { name: 'Vestfold', id: 'vestfold', icon: '🏰' },
    { name: 'Vestland', id: 'vestland', icon: '🌊' },
    { name: 'Østfold', id: 'ostfold', icon: '🏹' },
];
</script>

<template>
    <div class="w-full bg-[#CAF0F8] mt-20 mx-auto p-8 min-h-screen flex flex-col justify-center">

        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-slate-900">Water temperatures in Norway</h1>
            <button
                class="bg-[#90E0EF] text-#000 px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                <span>📎</span> Register water temperature
            </button>
        </div>

        <h2 class="text-xl font-bold mb-4">Regions</h2>

        <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <router-link v-for="region in regions" :key="region.id" :to="`/water-temperatures/${region.id}`"
                class="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-blue-300 hover:shadow-md transition-all group">
                <div class="flex items-center gap-3">
                    <span class="text-xl">{{ region.icon || '🛡️' }}</span>
                    <span class="font-bold text-slate-800">{{ region.name }}</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </router-link>
        </div>

        <!-- footer -->

        
    </div>


</template>