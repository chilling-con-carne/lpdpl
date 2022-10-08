<template>
  <input
    :type="props.type"
    :class="'border-b border-solid border-gray-600 pb-1 ' + props.class"
    v-model="props.model"
    :placeholder="props.placeholder"
  />
</template>

<script setup lang="ts">
let props = defineProps<{
  type: string;
  class?: string;
  model: any;
  placeholder: string;
}>();
</script>

<style></style>
