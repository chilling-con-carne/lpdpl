<template>
    <div class="text-start mb-4">
        <p class="text-xs">{{ props.title }}</p>
        <p class="border-b border-white">{{ props.content }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string;
        content: string;
    }>();
</script>

<style></style>