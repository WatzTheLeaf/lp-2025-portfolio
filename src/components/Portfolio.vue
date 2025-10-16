<script setup lang="ts">
import { onMounted, ref } from 'vue'
import papI from '../assets/portfolio-AP.jpg'
import univI from '../assets/univ.jpg'

import type { ProjectItem } from '../types/project-item'
import { projects } from '../data/projects'

const portfolioItems = ref(projects)
const selectedCategory = ref<string>('All')
const uniqueCategories = ref<string[]>([])
const filteredItems = ref<ProjectItem[]>([])

// Extract unique categories from items
onMounted(() => {
    uniqueCategories.value = Array.from(new Set(portfolioItems.value.map((item) => item.category)))
    filterItems()
})

const selectCategory = (category: string) => {
    selectedCategory.value = category
    filterItems()
}

const filterItems = () => {
    if (selectedCategory.value === 'All') {
        filteredItems.value = portfolioItems.value
    } else {
        filteredItems.value = portfolioItems.value.filter(
            (item) => item.category === selectedCategory.value
        )
    }
}
</script>

<template>
    <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

        <!-- About Me Section -->
        <div class="container mx-auto">
            <div class="bg-white dark:bg-slate-800 p-8 sm:p-12 lg:p-16 mb-20 lg:mb-32 rounded-2xl shadow-lg dark:shadow-2xl transition-all duration-300">
                <!-- About Me Highlight -->
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                        {{$t('text.about_me')}}
                    </h2>
                    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">
                        {{$t('text.about_me_desc')}}
                    </p>
                    <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
                </div>
                
                <!-- About Me Content - Text + Image -->
                <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
                    <div class="lg:w-1/2 space-y-4">
                        <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                            {{$t('text.from_passion')}}
                        </h2>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300">
                            {{$t('text.from_passion_desc')}}
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <img 
                            class="rounded-xl shadow-lg w-full h-auto sm:h-80 sm:object-cover transition-transform duration-300 hover:scale-105" 
                            v-bind:src="papI"
                            alt="About me image"
                        >
                    </div>
                </div>
                
                <!-- About Me Content - Image + Text (Reversed) -->
                <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-16">
                    <div class="lg:w-1/2 space-y-4">
                        <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                            {{$t('text.to_school')}}
                        </h2>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300">
                            {{$t('text.to_school_desc')}}
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <img 
                            class="rounded-xl shadow-lg w-full h-auto sm:h-80 sm:object-cover transition-transform duration-300 hover:scale-105" 
                            v-bind:src="univI"
                            alt="About me image"
                        >
                    </div>
                </div>

                <!-- About Me Content - Outro -->
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-2xl sm:text-3xl mb-4 font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                        {{$t('text.and_more')}}
                    </h2>
                    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">
                        {{$t('text.and_more_desc')}}
                    </p>
                    <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <div class="text-center max-w-3xl mx-auto mb-16">
                    <img 
                            src="https://skillicons.dev/icons?i=git,cpp,cs,rust,tauri,java,spring,python,html,css,js,nodejs,npm,vite,vue,nest,tailwind,threejs,windows,linux,bash,debian,md,docker,sqlite,postgres,unreal,godot,blender,ps&theme=dark"
                            alt="Techs image"
                        >
                </div>

            </div>
        </div>

        <!-- Projects Section -->
        <div class="container mx-auto shadow-lg p-8 dark:bg-slate-800 rounded-2xl mb-16 sm:mb-auto">
            <!-- Projects Header -->
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-slate-900 dark:text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300">
                    {{$t('text.recent_projects')}}
                </h2>
                <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg transition-colors duration-300">
                    {{ $t('text.recent_projects_desc') }}
                </p>
            </div>
            
            <!-- Category Filter -->
            <div v-if="portfolioItems.length > 0" class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                <button
                    v-for="category in ['All', ...uniqueCategories]"
                    :key="category"
                    @click="selectCategory(category)"
                    :class="{
                        'bg-blue-600 text-white shadow-lg': selectedCategory === category,
                        'text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700': selectedCategory !== category
                    }"
                    class="px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-105"
                >
                    {{ category }}
                </button>
            </div>

            <div v-else class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">{{ $t('text.project_not_found') }}</p>
            </div>
            
            <!-- Portfolio Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-12">
                <div v-for="item in filteredItems" :key="item.title" class="group">
                    <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                        <div class="overflow-hidden">
                            <img 
                                :src="item.image" 
                                :alt="item.title"
                                class="w-full h-48 sm:h-56 object-cover transition-transform duration-300" 
                            />
                        </div>
                        <div class="p-6 sm:p-8">
                            <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide transition-colors duration-300">
                                {{ item.role }}
                            </span>
                            <h3 class="text-slate-900 dark:text-white text-xl sm:text-2xl font-bold mt-2 mb-4 transition-colors duration-300">
                                {{ item.title }}
                            </h3>
                            <ul class="space-y-1 mb-4">
                                <li v-for="point in item.keypoints" :key="point" class="text-slate-600 dark:text-slate-400 text-md transition-colors duration-300">
                                    • {{ point }}
                                </li>
                            </ul>
                            <button
                                @click="$emit('change-view', 'Details', item)"
                                class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-600 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                            >
                                {{ item.buttonText }}
                            </button>
                            <a :href="item.link" v-if="item.linktext != ''" class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-600 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ml-4">{{ item.linktext }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center max-w-2xl mx-auto [&_a]:underline [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:dark:text-blue-400 [&_a]:dark:hover:text-blue-600">
                <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg transition-colors duration-300">
                    {{ $t('text.go_github') }}
                </p>
                <a href="https://github.com/WatzTheLeaf" target="_blank">GitHub</a>
            </div>
        </div>
    </section>
</template>