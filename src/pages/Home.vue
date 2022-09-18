<template>
    <div class="bg-gradient-to-r from-[#ECEAEF] to-[#F3F2F7] 
                flex flex-col md:flex-row justify-center items-center gap-4 pt-24 md:pl-4 md:pt-0">
        <div class="flex flex-col gap-4 w-3/4 lg:w-5/12 items-center">
            <h2 class="text-green-500 text-xl lg:text-4xl font-semibold lg:font-normal max-w-md">Les paniers du petit Lucien:</h2>
            <p class="max-w-md">Livraison de paniers de fruits et légumes 100% de région 100% de saison à prix équitable!</p>
            <label for="home-email" class="flex flex-col justify-center gap-2 md:gap-0 md:flex-row">
                <input 
                    type="email" 
                    name="email" 
                    id="home-email" 
                    placeholder="Votre adresse mail"
                    class="h-full input input-sm md-input-md input-bordered border-green-500 placeholder:text-green-500 z-0
                            md:rounded-r-none"
                >
                <button class="bg-green-500 text-white rounded-lg md:rounded-l-none p-1">Commencer</button>
            </label>
        </div>
        <img :src="HomePicture" alt="Home picture" class="w-full lg:w-7/12">
    </div>
</template>

<script setup lang="ts">
import HomePicture from '../assets/pictures/homePicture1.jpg';
</script>

<style>
</style>