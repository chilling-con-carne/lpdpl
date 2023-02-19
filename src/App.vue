<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
import OrderDetails from './pages/Orders/OrderDetails.vue';
import OrderRecap from './pages/Orders/OrderRecap.vue';
import ProfilDetails from './pages/Profil/ProfilDetails.vue'
import Delivery from "./pages/Profil/Delivery.vue"
import ProfilDetailsEdit from './pages/Profil/ProfilDetailsEdit.vue';
</script>

<template>
  <the-navbar />
  <router-view></router-view>
  <OrderRecap></OrderRecap>
  <the-footer/>
</template>