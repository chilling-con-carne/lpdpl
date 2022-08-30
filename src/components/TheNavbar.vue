<template>
    <div>
        <div class="absolute top-8 left-8 flex flex-col gap-2 p-2 z-50 md:hidden"
            @click="isOpen = !isOpen">
            <div :class="`w-8 h-0.5 bg-black duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`"></div>
            <div :class="`w-8 h-0.5 bg-black duration-300 ${isOpen ? 'opacity-0' : ''}`"></div>
            <div :class="`w-8 h-0.5 bg-black duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`"></div>
        </div>
        <div :class="`absolute w-full h-full top-0 left-0 bg-black ${isOpen ? 'opacity-30 z-0' : 'opacity-0 -z-20'} duration-300 md:hidden`"></div>
        <nav :class="`sm-navbar md:md-navbar bg-white ${isOpen ? 'open' : ''} duration-300`">
            <router-link class="text-black" to="/">Nos paniers</router-link>
            <router-link class="text-black" to="/points-relais">Points-relais</router-link>
            <router-link class="text-black" to="/weekly-basket">Panier de la semaine</router-link>
            <img class="hidden md:inline w-20 translate-y-2 shadow-lg rounded-full" :src="Logo" alt="Logo des paniers du petit Lucien">
            <router-link class="text-black" to="/infos">Informations</router-link>
            <router-link class="text-black" to="/company-signup">Inscription entreprise</router-link>
            <router-link class="text-black" to="/contact">Nous contacter</router-link>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Logo from '../assets/logo.png';

const isOpen = ref(true);

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
    }

    .md-navbar {
        @apply w-full flex-row translate-x-0
    }

    .sm-navbar.open {
        transform: translateX(0px);
    }

    .router-link-active {
        border-bottom: solid 2px #5E901F;
    }

    .md-navbar {
        @apply shadow-lg;

        position: absolute;
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