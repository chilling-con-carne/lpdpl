<template>
    <div class="text-start mb-4">
        <p class="text-xs">{{ props.title }}</p>
        <input v-if="props.modif" :placeholder = "props.content" class="border-b border-white w-full"/>
        <p v-else class="pb-1 border-b border-white w-full">{{props.content}}</p>
    </div>
</template>


<script setup lang="ts">
    const props = defineProps<{
        title: string;
        content: string;
        modif: boolean;
    }>();
</script>

<style></style>