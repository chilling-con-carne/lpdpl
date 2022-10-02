<template>
  <div class="flex flex-col bg-white py-8 items-center mx-10 gap-4 my-10">
    <h1 class="text-black text-3xl font-bold">Choisissez l’une de nos formules</h1>
    <p class="text-black text-md m-2 w-1/3">
      Votre maraîcher vous propose chaque semaine des paniers de légumes composés de
      légumes de l’exploitation, frais et de saison.
    </p>
    <div
      class="flex flex-col justify-around items-center lg:flex-row m-auto gap-4 lg:gap-8 w-10/12 md:w-1/2 lg:w-full"
    >
      <Basket
        v-for="basket in baskets"
        :key="basket.title"
        :title="basket.title"
        :img-src="basket.imgSrc"
        :content="basket.content"
        :is-content-list="false"
      >
        >
      </Basket>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Basket as _Basket } from "../types";
import Basket from "../components/Basket.vue";

const baskets: Array<_Basket> = [
  {
    title: "Panier classique",
    imgSrc: "basket1.jpg",
    content: [
      "Notre panier Classique est idéal pour 2 à 3 personnes, pour une semaine. Il se compose de sept à huit fruits et légumes de saison. Notre objectif est toujours de vous proposer un prix hyperconcurrentiel et une fraicheur exceptionnelle.",
    ],
  },
  {
    title: "Panier Plus",
    imgSrc: "basket2.jpg",
    content: [
      "Idéal pour 3 ou 4 personnes, notre panier Plus est composé du panier classique auquel on ajoute en complément des articles plus rares comme des asperges, des fruits rouges, et des légumes anciens, topinambours, panais.",
    ],
  },
  {
    title: "Panier classique",
    imgSrc: "basket3.jpg",
    content: [
      "Notre panier Classique est idéal pour 2 à 3 personnes, pour une semaine. Il se compose de sept à huit fruits et légumes de saison. Notre objectif est toujours de vous proposer un prix hyperconcurrentiel et une fraicheur exceptionnelle.",
    ],
  },
  {
    title: "Panier Plus",
    imgSrc: "basket4.jpg",
    content: [
      "Idéal pour 3 ou 4 personnes, notre panier Plus est composé du panier classique auquel on ajoute en complément des articles plus rares comme des asperges, des fruits rouges, et des légumes anciens, topinambours, panais.",
    ],
  },
];
</script>

<style></style>
