<script setup lang="ts">
import { defineProps } from 'vue'

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
    <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark flex">
        <div v-if="project" class="container mx-auto text-left h-full rounded-4xl shadow-portfolio p-16">
            
            <!-- ✅ Titre principal du projet -->
            <h1 class="text-primary leading-[1.208] font-bold text-5xl mb-4">{{ project.title }}</h1>
            <h2 class="text-gray-500 leading-[1.208] font-bold text-2xl mb-16">{{ project.category }}</h2>
            
            <!-- ✅ SECTIONS DYNAMIQUES -->
            <div v-for="(section, index) in project.sections" :key="index" class="mb-32">
                
                <!-- 🔄 TYPE 1 : Texte + Image -->
                <div v-if="section.type === 'text-image'" class="flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 lg:pr-12">
                        <h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {{ section.text }}
                        </p>
                    </div>
                    <div class="lg:w-1/2 mt-6 lg:mt-0">
                        <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md w-full">
                    </div>
                </div>
                
                <!-- 🔄 TYPE 2 : Image + Texte (inversé) -->
                <div v-else-if="section.type === 'image-text'" class="flex flex-col lg:flex-row-reverse items-center">
                    <div class="lg:w-1/2 lg:pl-12">
                        <h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {{ section.text }}
                        </p>
                    </div>
                    <div class="lg:w-1/2 mt-6 lg:mt-0">
                        <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md w-full">
                    </div>
                </div>
                
                <!-- 🔄 TYPE 3 : Highlight (titre + texte court centré avec séparateurs) -->
                <div v-else-if="section.type === 'p'" class="text-center max-w-3xl mx-auto">
                    
                    <!-- Séparateur du dessus -->
                    <div class="w-12 h-[2px] bg-primary mx-auto mb-4 rounded-full"></div>
                    
                    <!-- Titre -->
                    <h2 class="text-2xl font-bold mb-2">{{ section.title }}</h2>
                    
                    <!-- Texte -->
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        {{ section.text }}
                    </p>
                    
                    <!-- Séparateur du dessous -->
                    <div class="w-12 h-[2px] bg-primary mx-auto mt-4 rounded-full"></div>
                    
                </div>
                
            </div>
            <!-- ✅ FIN SECTIONS -->
            
            <!-- ✅ Bouton retour -->
            <button 
            @click="$emit('change-view', 'Portfolio')" 
            class="bg-primary text-white m-1 inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8">
            Back
        </button>
    </div>
    
    <!-- ✅ Cas projet introuvable -->
    <div v-else>
        <div class="container mx-auto text-center h-full">
            <div class="mb-8">
                <h1 class="text-dark leading-[1.208] font-bold text-6xl">Project not found.</h1>
            </div>
            <button 
            @click="$emit('change-view', 'Portfolio')" 
            class="bg-primary text-white m-1 inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8">
            Back
        </button>
    </div>
</div>
</section>
</template>
