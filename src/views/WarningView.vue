<template>
    <div class="w-4/5 mx-auto mt-24 p-8 rounded-lg">
        <h1 class="text-2xl font-bold text-black mb-6">Weather warnings in Norway</h1>

        <div class="flex justify-center mt-6">
            <div class="bg-white rounded-lg shadow-sm p-1 flex w-fit">
                <button @click="activeTab = 'land'" :class="activeTab === 'land' ? 'bg-[#90E0EF]' : 'bg-transparent'"
                    class="px-12 py-2 rounded-md font-semibold text-black
                    hover:bg-blue-100 transition">Land
                </button>

                <button @click="activeTab = 'sea'" :class="activeTab === 'sea' ? 'bg-[#90E0EF]' : 'bg-transparent'"
                    class="px-12 py-2 rounded-md font-semibold text-black
                    hover:bg-blue-100 transition">Sea and Coast
                </button>
            </div>
        </div>

        <div v-if="activeTab === 'land'" class="mt-8">
            <div class="w-4/5 mx-auto flex gap-3 justify-start">
                <select
                    class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
                    <option>All counties</option>
                    <option>Oslo</option>
                    <option>Rogaland</option>
                </select>

                <select v-model="filterSeverity"
                    class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
                    <option value="all">All severities</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                </select>

                <select v-model="filterEvent"
                    class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
                    <option value="all">All event types</option>
                    <option value="Avalanche">Avalanche</option>
                    <option value="Wind">Wind</option>
                    <option value="Flood">Flood</option>
                </select>
            </div>
        </div>

        <div v-if="activeTab === 'sea'" class="mt-8">
            <div class="w-4/5 mx-auto flex gap-3 justify-start">
                <select v-model="filterSeverity"
                    class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
                    <option value="all">All severities</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>

                <select v-model="filterEvent"
                    class="bg-[#C7DDF9] text-black font-medium px-4 py-2 rounded-md cursor-pointer outline-none border-none">
                    <option value="all">All event types</option>
                    <option value="Wind">Wind</option>
                    <option value="Gale">Gale</option>
                </select>
            </div>
        </div>
    </div>

    <div class="w-full">
        <div class="block w-4/5 m-auto p-6">
            <h3 class="text-2xl font-bold text-black mb-6 text-left">Ongoing</h3>
            <ol>
                <WeatherWarningCard v-for="(item, index) in filteredOngoing" :key="'on-' + index" :warning="item" />
            </ol>

            <h3 class="text-2xl font-bold text-black mb-6 mt-12 text-left">Expected</h3>
            <ol>
                <WeatherWarningCard v-for="(item, index) in filteredExpected" :key="'ex-' + index" :warning="item" />
            </ol>

            <!-- footer -->

        <footer class="mt-10 border-t border-blue-200 pt-10 pb-20 text-[#1a2b3c]">
            <div class="flex gap-4 mb-8">
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>⚙️</span> See all help articles
                </button>
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>✉️</span> Contact us
                </button>
                <button
                    class="bg-[#90E0EF] px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 transition">
                    <span>🌐</span> Choose language / velg språk ▾
                </button>
            </div>

            <p class="text-sm mb-4">Yr is a collaboration between</p>

            <div class="flex items-center gap-8 mb-8">
                <div class="font-black text-2xl tracking-tighter">NRK</div>
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full border-2 border-slate-900"></div>
                    <span class="text-xs font-bold leading-tight">Meteorologisk<br>institutt</span>
                </div>
            </div>

            <div class="text-[11px] leading-relaxed text-slate-600 space-y-1">
                <p>Copyright © Norwegian Meteorological Institute and the Norwegian Broadcasting Corporation 2007-2026 |
                    Head of Yr: Ingrid Støver Jensen |</p>
                <p>Executive editor: Vibeke Fürst Haugen | Meteorologically responsible: Roar Skålin</p>
            </div>

            <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-blue-700 underline font-medium">
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Our collaborators</a>
                <a href="#">App for iOS</a>
                <a href="#">App for Android</a>
                <a href="#">Yr for developers</a>
                <a href="#">Water temperatures</a>
                <a href="#">Yr on Facebook</a>
                <a href="#">Yr on Instagram</a>
            </div>
        </footer>


        </div>


        
        
    </div>
    
</template>

<script setup>
import { ref, computed } from 'vue';
import WeatherWarningCard from '@/components/WeatherWarningCard.vue';

const activeTab = ref('land');
const filterSeverity = ref('all');
const filterEvent = ref('all');

const warnings = ref([
    // 5 Ongoing Land
    { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Nordenskiöld Land', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
    { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Sunnmøre', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
    { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Indre Fjordane', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
    { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Voss', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
    { status: 'Ongoing', type: 'land', severity: 'orange', title: 'Avalanche', level: '3', location: 'Hardanger', description: 'Considerable avalanche danger...', recommendations: ['Avoid terrain'] },
    // 2 Expected Land
    { status: 'Expected', type: 'land', severity: 'yellow', title: 'Wind', level: '2', location: 'Oslo', description: 'Strong gusts expected...', recommendations: ['Secure items'] },
    { status: 'Expected', type: 'land', severity: 'yellow', title: 'Wind', level: '2', location: 'Bergen', description: 'Heavy wind gusts...', recommendations: ['Stay indoors'] },

    // 5 Ongoing Sea
    { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Gale', level: '3', location: 'North Sea', description: 'Severe gale warning...', recommendations: ['Vessels seek shelter'] },
    { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Wind', level: '3', location: 'Skagerrak', description: 'High winds at sea...', recommendations: ['Check moorings'] },
    { status: 'Ongoing', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Barents Sea', description: 'Moderate gale expected...', recommendations: ['Caution advised'] },
    { status: 'Ongoing', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Norwegian Sea', description: 'Increasing wind speeds...', recommendations: ['Secure equipment'] },
    { status: 'Ongoing', type: 'sea', severity: 'orange', title: 'Gale', level: '3', location: 'Fisher', description: 'Storm force winds...', recommendations: ['Stay in port'] },
    // 2 Expected Sea
    { status: 'Expected', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Coastal Helgeland', description: 'Wind rising tomorrow...', recommendations: ['Check small boats'] },
    { status: 'Expected', type: 'sea', severity: 'yellow', title: 'Wind', level: '2', location: 'Utsira', description: 'Expected gale gusts...', recommendations: ['Safety check'] }
]);

const filterLogic = (dataStatus) => {
    return warnings.value.filter(w => {
        const tabMatch = w.type === activeTab.value;
        const statusMatch = w.status === dataStatus;
        const sevMatch = filterSeverity.value === 'all' || w.severity === filterSeverity.value;
        const eventMatch = filterEvent.value === 'all' || w.title === filterEvent.value;
        return tabMatch && statusMatch && sevMatch && eventMatch;
    });
};

const filteredOngoing = computed(() => filterLogic('Ongoing'));
const filteredExpected = computed(() => filterLogic('Expected'));
</script>