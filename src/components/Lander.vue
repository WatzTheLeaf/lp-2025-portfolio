<script setup lang="ts">

</script>

<template>
    <section class="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
            <div class="mb-8 sm:mb-12">
                <h1 class="text-slate-900 dark:text-white leading-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 transition-colors duration-300">
                    {{$t('text.name')}}
                </h1>
                <h2 class="text-blue-600 dark:text-blue-400 block text-xl sm:text-2xl md:text-3xl font-semibold transition-colors duration-300">
                    {{$t('text.portfolio')}}
                </h2>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                    @click="$emit('change-view', 'Portfolio')" 
                    class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    {{$t('button.continue')}}
                </button>
                
                <a href="/LOUIS_PINAUD_CV_NS25.pdf" target="_blank"
                    class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg text-base font-semibold transition-colors duration-200 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500"
                >
                    {{$t('button.cv')}}
                </a>
                
            </div>
        </div>
        
        <div class="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
            <h2 class="text-slate-500 dark:text-slate-400 text-sm font-medium transition-colors duration-300">
                Updated 14-Sep-2025
            </h2>
        </div>
        
    </section>
</template>