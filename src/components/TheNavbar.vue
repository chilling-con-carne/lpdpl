<template>
  <div>
    <div
      class="absolute top-8 left-8 flex flex-col gap-2 p-2 z-50 md:hidden"
      @click="isOpen = !isOpen"
    >
      <div
        :class="`w-8 h-0.5 bg-black duration-300 ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`"
      ></div>
      <div :class="`w-8 h-0.5 bg-black duration-300 ${isOpen ? 'opacity-0' : ''}`"></div>
      <div
        :class="`w-8 h-0.5 bg-black duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`"
      ></div>
    </div>
    <div
      :class="`absolute w-full h-full top-0 left-0 bg-black ${
        isOpen ? 'opacity-30 z-10' : 'opacity-0 -z-20'
      } duration-300 md:hidden`"
    ></div>
    <nav :class="`sm-navbar md:md-navbar bg-white ${isOpen ? 'open' : ''} duration-300`">
      <router-link class="text-black hover:text-green-500" to="/"
        >Nos paniers</router-link
      >
      <router-link class="text-black hover:text-green-500" to="/points-relais"
        >Points-relais</router-link
      >
      <router-link class="text-black hover:text-green-500" to="/choix-panier"
        >Panier de la semaine</router-link
      >
      <img
        class="hidden md:inline w-20 translate-y-2 shadow-lg rounded-full"
        :src="Logo"
        alt="Logo des paniers du petit Lucien"
      />
      <router-link class="text-black hover:text-green-500" to="/informations"
        >Informations</router-link
      >
      <router-link class="text-black hover:text-green-500" to="/entreprises"
        >Inscription entreprise</router-link
      >
      <router-link class="text-black hover:text-green-500" to="/contact"
        >Nous contacter</router-link
      >
      <router-link to="/connexion"
        ><img :src="Login" class="w-6 mt-10 md:mt-0"
      /></router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Logo from "../assets/logo.png";
import Login from "../assets/login.svg";

const isOpen = ref(false);
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .sm-navbar {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    width: 50vw;
    height: 100vh;
    padding: 1em;
    padding-top: 6em;

    transform: translateX(-999px);

    background-color: white;

    z-index: 20;
  }

  .sm-navbar.open {
    transform: translateX(0px);
  }

  .router-link-active {
    border-bottom: solid 2px #5e901f;
  }

  .md-navbar {
    @apply shadow-lg;
    @apply w-full flex-row translate-x-0;

    position: relative;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: bottom;
    gap: 1em;

    width: 100vw;
    height: fit-content;

    padding: 2em 0 0 0;

    font-size: 0.75em;
  }
}
</style>
