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
    <component :is="components[currentComponent]" @change-view="handleChangeView" :project="selectedProject" class="bg-cover min-w-screen min-h-screen" />
</template>