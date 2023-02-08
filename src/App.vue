<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
import OrderDetails from './pages/Orders/OrderDetails.vue';
import OrderRecap from './pages/Orders/OrderRecap.vue';
import ProfilDetails from './pages/Profil/ProfilDetails.vue'
import Delivery from "./pages/Profil/Delivery.vue"
</script>

<template>
  <the-navbar />
  <Delivery></Delivery>
  <ProfilDetails></ProfilDetails>
  <OrderRecap></OrderRecap>
  <router-view></router-view>
  <the-footer/>
</template>