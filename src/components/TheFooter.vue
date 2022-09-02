<template>
    <footer class="w-screen bg-[#F3F1F6]">
        <div class="flex flex-col gap-4 py-8">
            <div class="flex flex-col md:flex-row gap-2 justify-center items-start p-4">
                <router-link class="text-black hover:text-green-500" to="/">Nos paniers</router-link>
                <router-link class="text-black hover:text-green-500" to="/points-relais">Points-relais</router-link>
                <router-link class="text-black hover:text-green-500" to="/weekly-basket">Panier de la semaine</router-link>
                <router-link class="text-black hover:text-green-500" to="/infos">Informations</router-link>
                <router-link class="text-black hover:text-green-500" to="/company-signup">Inscription entreprise</router-link>
                <router-link class="text-black hover:text-green-500" to="/contact">Nous contacter</router-link>
            </div>
            <div class="flex gap-4 justify-center">
                <img :src="Facebook" alt="facebook's logo">
                <img :src="Twitter" alt="twitter's logo">
                <img :src="Youtube" alt="youtube's logo">
            </div>
            <p class="text-xs md:text-lg flex justify-center">© Copyright 2022 - Les Paniers du Petit Lucien</p>
            <p class="text-xs md:text-lg flex justify-center">Fait avec 🌶 par <a href="https://www.chillingconcarne.co"> Chilling con carne</a></p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Facebook from '../assets/links/facebook.svg';
import Twitter from '../assets/links/twitter.svg';
import Youtube from '../assets/links/youtube.svg';
</script>

<style scoped></style>