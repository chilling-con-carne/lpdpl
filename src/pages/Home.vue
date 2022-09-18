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
    <div class="mt-8 w-11/12 m-auto flex flex-col gap-8 items-center mb-10 min-h-[70vh]">
        <h3 class="text-black font-semibold">Nos paniers de la semaine</h3>
        <p class="w-3/4 md:w-1/2">Votre maraîcher vous propose chaque semaine des paniers de légumes composés de légumesde l’exploitation, frais et de saison.</p>
        <div class="flex flex-col lg:flex-row m-auto gap-4 lg:gap-16 w-10/12 md:w-1/2 lg:w-full">
            <basket v-for="basket in baskets" :key="basket.title" :title="basket.title" :img-src="basket.imgSrc" :content="basket.content"/>
        </div>
    </div>
    <div class="flex flex-col gap-4 py-8 bg-gray-300">
        <h2 class="text-xl font-semibold">Qui sommes nous ?</h2>
        <div class="flex flex-col md:flex-row items-center justify-center px-2 md:gap-8">
            <img :src="AboutPicture" alt="About picture" class="md:w-1/2 max-w-md">
            <div class="bg-gray-300 text-left text-sm lg:text-base -mt-24 p-4 rounded-xl shadow-lg w-11/12 md:w-1/2 md:shadow-none md:mt-0">
                <p>Créés en 2010, <strong class="text-green-500 underline">Les Paniers du Petit Lucien</strong> vous proposent un concept simple et dans l’air du temps.</p>
                <p>Basés à Truchtersheim, nous traversons chaque jour les quatre coins de l’Alsace pour vous proposer des produits extra frais de qualité. Nos produits sont issus d’une agriculture raisonnée, et proviennent essentiellement de la ferme Vogt à Bischwiller.</p>
                <p>Notre atelier se situe au sein même de l’exploitation agricole Vogt à Bischwiller. Avec plus de 50 points relais sur Strasbourg et la CUS, l’idée est de vous proposer des produits récoltés le jour même à quelques mètres de chez vous. Il est possible de récupérer des paniers à Obernai, Molsheim et Haguenau. Un service de livraison directement en entreprise vous est également proposé.</p>
            </div>
        </div>    
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import HomePicture from '../assets/pictures/homePicture1.jpg';
import AboutPicture from '../assets/pictures/homePicture2.jpg';
import Basket from '../components/Baskter.vue';


const baskets = reactive([
    {
        title: "Panier classique",
        imgSrc: "basket1.jpg",
        content: ["500g de cerise", "1 botte de carrote", "500g de courgettes", "500g de pomme de terre", "1 salade", "1 botte de bettraves nouvelles"],
    },
    {
        title: "Panier plus",
        imgSrc: "basket2.jpg",
        content: ["500g de cerise", "1 botte de carrote", "500g de courgettes", "500g de pomme de terre", "1 salade", "1 botte de bettraves nouvelles"],
    },
    {
        title: "Panier classique",
        imgSrc: "basket3.jpg",
        content: ["500g de cerise", "1 botte de carrote", "500g de courgettes", "500g de pomme de terre", "1 salade", "1 botte de bettraves nouvelles"],
    },
    {
        title: "Panier plus",
        imgSrc: "basket4.jpg",
        content: ["500g de cerise", "1 botte de carrote", "500g de courgettes", "500g de pomme de terre", "1 salade", "1 botte de bettraves nouvelles"],
    },
]);

</script>

<style>
</style>