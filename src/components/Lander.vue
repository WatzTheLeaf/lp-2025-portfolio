<script setup lang="ts">

</script>

<template>
    <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark flex justify-center items-center">
        <div class="container mx-auto text-center h-full">
            <div class="mb-8">
                <h1 class="text-dark leading-[1.208] font-bold text-6xl">Lorem Ipsum</h1>
                <h2 class="text-primary block text-3xl font-semibold">Lorem Ipsum</h2>
            </div>
            <button @click="$emit('change-view', 'Portfolio')" class="bg-primary text-white m-1 inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8">Continue</button>
            <button class="text-body-color dark:text-dark-6 hover:text-primary m-1 inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8">PDF Version</button>
        </div>
        <div class="absolute right-8 bottom-8">
            <h2 class="text-body-color block text-md font-semibold">
                Updated 02/08/2025
            </h2>
        </div>
    </section>
</template>