<template>
    <li class="list-none">
        <div class="mx-auto m-4 border rounded-lg overflow-hidden font-sans" :class="severityClasses.border">

            <div @click="isOpen = !isOpen"
                class="flex items-center justify-between p-4 cursor-pointer transition-colors"
                :class="severityClasses.bg">

                <div class="flex items-center gap-3">
                    <div class="p-1 rounded shadow-sm text-white flex items-center justify-center "
                        :class="severityClasses.iconBg">
                        ⚠️
                    </div>
                    

                    <div>
                        <h2 class="font-bold text-gray-900 text-sm md:text-base text-left">
                            {{ warning.status }}: {{ warning.title }} ({{ warning.location }})
                        </h2>
                        <p class="text-xs text-gray-500 text-left capitalize">{{ warning.severity }} severity</p>
                    </div>
                </div>

                <span class="transform transition-transform duration-300 text-gray-500"
                    :class="{ 'rotate-180': isOpen }">
                    ▼
                </span>
            </div>

            <div v-if="isOpen" class="p-4 border-t text-sm text-gray-800 space-y-4 text-left"
                :class="[severityClasses.bg, severityClasses.borderInner]">

                <div>
                    <h3 class="font-bold mb-1">{{ warning.title }}</h3>
                    <p>{{ warning.description }}</p>
                </div>

                <div>
                    <h3 class="font-bold mb-1">Recommendations</h3>
                    <ul class="list-disc list-inside space-y-1">
                        <li v-for="(rec, i) in warning.recommendations" :key="i">{{ rec }}</li>
                    </ul>
                </div>

                <div class="pt-2">
                    <h3 class="font-bold mb-1">Danger levels</h3>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 border border-black" :class="severityClasses.iconBg"></div>
                        <span>{{ warning.severity.charAt(0).toUpperCase() + warning.severity.slice(1) }}:
                            danger level {{ warning.level }} - {{ warning.title.toLowerCase() }}</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    warning: Object
});

const isOpen = ref(false);

// This matches colors based on severity (Orange or Yellow)
const severityClasses = computed(() => {
    if (props.warning.severity === 'orange') {
        return {
            bg: 'bg-orange-50 hover:bg-orange-100',
            border: 'border-orange-300',
            borderInner: 'border-orange-200',
            iconBg: 'bg-orange-500'
        };
    }
    return {
        bg: 'bg-yellow-50 hover:bg-yellow-100',
        border: 'border-yellow-300',
        borderInner: 'border-yellow-200',
        iconBg: 'bg-yellow-500'
    };
});
// This creates 5 copies of the same warning so you can see the rows
const warnings = ref(Array(5).fill({
    status: 'Ongoing',
    type: 'land', // Make sure this matches your activeTab ('land')
    severity: 'orange',
    title: 'Considerable avalanche danger',
    level: '3',
    location: 'Nordenskiöld Land',
    description: 'On Sunday we expect considerable avalanche danger for region Nordenskiöld Land. Avalanche problem is persistent weak layer...',
    recommendations: ['Avoid avalanche terrain', 'Stay away from steep slopes']
}));
</script>