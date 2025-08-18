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
                <!--
                <button 
                    class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg text-base font-semibold transition-colors duration-200 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500"
                >
                    PDF Version
                </button>
                -->
            </div>
        </div>
        
        <div class="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
            <h2 class="text-slate-500 dark:text-slate-400 text-sm font-medium transition-colors duration-300">
                Updated 09-Aug-2025
            </h2>
        </div>

        <div class="text-center max-w-3xl mx-auto absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    
                    <!-- Contact Icons -->
                    <div class="flex flex-wrap flex-col sm:flex-row justify-center gap-2 sm:gap-6 p-4 sm:p-6 rounded-2xl items-center border-2 border-blue-600 dark:border-blue-400">

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
                        <a href="https://www.linkedin.com/in/louis-pinaud" target="_blank" rel="noopener" 
                        class="text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 bg-blue-600 dark:bg-blue-400 rounded-xl p-2"
                        aria-label="LinkedIn">
                            <image src="/linkedin.svg" class="h-6 w-6"/>
                        </a>
                    </div>
                </div>
    </section>
</template>