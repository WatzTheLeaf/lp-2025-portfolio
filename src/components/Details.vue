<script setup lang="ts">

defineProps<{
    project: {
        image: string
        category: string
        title: string
        keypoints: string[]
        sections: {
            type: 'text-image' | 'image-text' | 'p'
            title: string
            text: string
            image: string
        }[]
    } | null
}>()

</script>

<template>
    <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <!-- Project Details -->
        <div v-if="project" class="container mx-auto">
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-2xl p-8 sm:p-12 lg:p-16 transition-all duration-300">
                
                <!-- Project Header -->
                <div class="mb-16">
                    <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide mb-4 block transition-colors duration-300">
                        {{ project.category }}
                    </span>
                    <h1 class="text-slate-900 dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 transition-colors duration-300">
                        {{ project.title }}
                    </h1>
                </div>
                
                <!-- Dynamic Sections -->
                <div v-for="(section, index) in project.sections" :key="index" class="mb-20 last:mb-16">
                    
                    <!-- Text + Image Layout -->
                    <div v-if="section.type === 'text-image'" class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div class="lg:w-1/2 space-y-4">
                            <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                                {{ section.title }}
                            </h2>
                            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300 [&_a]:underline [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:dark:text-blue-400 [&_a]:dark:hover:text-blue-600" v-html="section.text"></p>
                        </div>
                        <div class="lg:w-1/2">
                            <img 
                                :src="section.image" 
                                :alt="section.title" 
                                class="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover transition-transform duration-300 hover:scale-105 text-slate-600 dark:text-white"
                            >
                        </div>
                    </div>
                    
                    <!-- Image + Text Layout (Reversed) -->
                    <div v-else-if="section.type === 'image-text'" class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                        <div class="lg:w-1/2 space-y-4">
                            <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                                {{ section.title }}
                            </h2>
                            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300 [&_a]:underline [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:dark:text-blue-400 [&_a]:dark:hover:text-blue-600" v-html="section.text"></p>
                        </div>
                        <div class="lg:w-1/2">
                            <img 
                                :src="section.image" 
                                :alt="section.title" 
                                class="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover transition-transform duration-300 hover:scale-105"
                            >
                        </div>
                    </div>
                    
                    <!-- Highlight Section -->
                    <div v-else-if="section.type === 'p'" class="text-center max-w-3xl mx-auto">
                        <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 rounded-full"></div>
                        <h2 class="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                            {{ section.title }}
                        </h2>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300 [&_a]:underline [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:dark:text-blue-400 [&_a]:dark:hover:text-blue-600" v-html="section.text"></p>
                        <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
                    </div>
                    
                </div>
                
                <!-- Back Button -->
                <div class="flex justify-center pt-8 border-t border-slate-200 dark:border-slate-700">
                    <button 
                        @click="$emit('change-view', 'Portfolio')" 
                        class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        {{ $t('text.back_to_portfolio') }}
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Project Not Found -->
        <div v-else class="container mx-auto text-center">
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-2xl p-8 sm:p-12 transition-all duration-300">
                <h1 class="text-slate-900 dark:text-white font-bold text-4xl sm:text-5xl lg:text-6xl mb-8 transition-colors duration-300">
                    {{ $t('text.proj_not_found') }}
                </h1>
                <button 
                    @click="$emit('change-view', 'Portfolio')" 
                    class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    {{ $t('text.back_to_portfolio') }}
                </button>
            </div>
        </div>
    </section>
</template>