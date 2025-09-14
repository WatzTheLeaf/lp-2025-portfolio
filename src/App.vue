<script setup lang="ts">
import Portfolio from './components/Portfolio.vue';
import Lander from './components/Lander.vue';
import Details from './components/Details.vue';
import { ref } from 'vue'

type ViewName = keyof typeof components

const components = {
    Lander,
    Portfolio,
    Details
}

const currentComponent = ref<ViewName>('Lander')
const selectedProject = ref<any | null>(null)

function handleChangeView(next: ViewName, payload?: any) {
    window.scrollTo(0,0);
    if (components[next]) {
        currentComponent.value = next
        if (payload) {
            selectedProject.value = payload
        }
    } else {
        console.warn(`"${next}" not found`)
    }
}
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">

        <component 
            :is="components[currentComponent]" 
            @change-view="handleChangeView" 
            :project="selectedProject" 
        />

        <div class="text-center max-w-3xl mx-auto fixed bottom-6 left-6 sm:bottom-8 sm:left-8 shadow-lg">
                    
            <!-- Contact Icons -->
            <div class="flex flex-wrap flex-col sm:flex-row justify-center gap-2 sm:gap-6 p-4 sm:p-6 rounded-2xl items-center border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-slate-800">

                <h2 class="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                    Contact: 
                </h2>

                <!-- Mail Icon -->
                <a href="mailto:pinaud-l@proton.me"
                class="text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 bg-blue-600 dark:bg-blue-400 rounded-xl p-2"
                aria-label="SendEmail">
                    <image src="/mail-pencil.svg" class="h-6 w-6" alt="Send me an email"/>
                </a>

                <!-- LinkedIn Icon -->
                <!--<a href="https://www.linkedin.com/in/louis-pinaud" target="_blank" rel="noopener" 
                class="text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 bg-blue-600 dark:bg-blue-400 rounded-xl p-2"
                aria-label="LinkedIn">
                    <image src="/linkedin.svg" class="h-6 w-6"/>
                </a>-->
            </div>
        </div>

    </div>
</template>