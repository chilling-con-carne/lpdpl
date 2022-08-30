<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <the-navbar />
  <router-view></router-view>
  <the-footer />
</template>