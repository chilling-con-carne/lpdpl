<template>
    <div class="card card-compact card-side flex-col items-center md:flex-row border border-solid border-green-500 p-4 md:max-h-48">
        <figure class="max-w-[100px]"><img :src="imageUrl" alt="alt"></figure>
        <div class="card-body">
            <h2 class="card-title text-left text-base">{{ props.title }}</h2>
            <p class="text-left text-base">{{ props.text }}</p>   
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    imgSrc: string;
    title: string;
    text: string;
}>();

const imageUrl = new URL(`../assets/pictures/advantages/${props.imgSrc}`, import.meta.url).href

</script>

<style scoped>
</style>