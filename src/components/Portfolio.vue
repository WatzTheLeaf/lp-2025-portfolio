<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface ProjectItem {
    image: string
    category: string
    title: string
    buttonText: string
    buttonLink: string
    keypoints: string[]
    sections: ProjectSection[]
}

interface ProjectSection {
    type: 'text-image' | 'image-text' | 'p'
    title: string
    text: string
    image: string
}

const portfolioItems = ref<ProjectItem[]>([])

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
    <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div class="container mx-auto p-8 rounded-xl shadow-portfolio mb-32">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                        <h2
                        class="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]"
                        >
                        Lorem Ipsum
                    </h2>
                    <p class="text-body-color text-base dark:text-dark-6">
                        Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
        
        <div class="w-full flex flex-wrap justify-center">
            <div class="w-full">
                <ul class="flex flex-wrap justify-center mb-12 space-x-1">
                    <li class="mb-1 justify-center flex flex-wrap">
                        <button
                        v-for="category in ['All', ...uniqueCategories]"
                        :key="category"
                        @click="selectCategory(category)"
                        :class="{
                            'bg-primary text-white': selectedCategory === category,
                            'text-body-color dark:text-dark-6 hover:bg-primary hover:text-white':
                            selectedCategory !== category
                        }"
                        class="m-1 inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
                        >
                        {{ category }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
    
    <div class="flex flex-wrap -mx-4 justify-center">
        <div class="w-full px-4 md:w-1/2 xl:w-1/3" v-for="item in filteredItems" :key="item.title">
            <div class="relative mb-12">
                <div class="overflow-hidden rounded-[10px]">
                    <img :src="item.image" alt="portfolio" class="w-full" />
                </div>
                <div
                class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark"
                >
                <span class="text-primary mb-2 block text-sm font-medium">{{ item.category }}</span>
                <h3 class="text-dark dark:text-white mb-5 text-xl font-bold">{{ item.title }}</h3>
                <button
                @click="$emit('change-view', 'Details', item)"
                class="mb-5 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                >
                {{ item.buttonText }}
            </button>
            <ul class="flex flex-wrap justify-start">
                <li v-for="point in item.keypoints" class="px-2 flex-1/2" >{{ point }}</li>
            </ul>
        </div>
    </div>
</div>
</div>
</div>
<div class="container mx-auto p-8 rounded-xl shadow-portfolio">
    <div class="text-center max-w-3xl mx-auto mb-16">
        
        <!-- Séparateur du dessus -->
        <div class="w-12 h-[2px] bg-primary mx-auto mb-4 rounded-full"></div>
        
        <!-- Titre -->
        <h2 class="text-2xl font-bold mb-2">Lorem Ipsum</h2>
        
        <!-- Texte -->
        <p class="text-gray-600 dark:text-gray-300 mb-4">
            Lorem Ipsum
        </p>
        
        <!-- Séparateur du dessous -->
        <div class="w-12 h-[2px] bg-primary mx-auto mt-4 rounded-full"></div>
        
    </div>
    <div class="flex flex-col lg:flex-row items-center mb-16">
        <div class="lg:w-1/2 lg:pr-12">
            <h2 class="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Lorem Ipsum
            </p>
        </div>
        <div class="lg:w-1/2 mt-6 lg:mt-0">
            <img class="rounded-lg shadow-md w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/2560px-Felis_catus-cat_on_snow.jpg">
        </div>
    </div>
    <div class="flex flex-col lg:flex-row-reverse items-center">
        <div class="lg:w-1/2 lg:pl-12">
            <h2 class="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Lorem Ipsum
            </p>
        </div>
        <div class="lg:w-1/2 mt-6 lg:mt-0">
            <img class="rounded-lg shadow-md w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/2560px-Felis_catus-cat_on_snow.jpg">
        </div>
    </div>
</div>
</section>
</template>

<!-- Based on TailGrids template, please see https://tailgrids.com/components/portfolios -->