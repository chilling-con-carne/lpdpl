<template>
  <div class="text-left flex flex-col gap-4">
    <h3 class="font-bold">{{ title }}</h3>
    <p class="info-body text-sm md:text-md lg:text-lg"><span v-html="body"></span></p>
  </div>
</template>

<script setup lang="ts">
interface IInfoProp {
  title: string;
  body: string;
}

const { title, body } = defineProps<IInfoProp>();
</script>

<style>
.info-body {
  border-left: 2px lightgray solid;
  padding-left: 1em;
}
</style>
