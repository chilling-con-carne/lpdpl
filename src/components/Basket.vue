<template>
    <div class="flex flex-col justify-center items-center rounded border-[1px] border-solid border-green-500 gap-4 py-4 max-w-xs">
        <h4 class="text-black text-lg font-semibold">{{ props.title }}</h4>
        <img :src="imageUrl" alt="Basket's picture" class="w-full">
        <ol v-if="isContentList" class="pl-8 list-disc text-left">
            <li v-for="(item, index) in props.content" :key="index" class="text-sm mr-4">{{ item }}</li>
        </ol>
        <p v-else class="text-black text-center m-2">
            {{props.content[0]}}
        </p>    
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    imgSrc: string;
    title: string;
    content: Array<string>;
    isContentList: boolean;
}>();
const imageUrl = new URL(`../assets/pictures/baskets/${props.imgSrc}`, import.meta.url).href
</script>

<style scoped>

</style>