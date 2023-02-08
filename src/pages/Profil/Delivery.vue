<template>
    <div class="z-0 h-screen w-2/3 md:w-2/3 lg:w-1/2 m-auto flex flex-col gap-8 lg:gap-16 justify-center">
        <h1 class="font-semibold text-xl">Vos livraisons</h1>
        <div>
            <Basket
                v-for="basket in baskets"
                :key="basket.title"
                :title="basket.title"
                :img-src="basket.imgSrc"
                :content="basket.content"
                :is-content-list="false">
            </Basket>
            <div>
                <Field title="Type de Panier" content="Paniers Classiques - 12€/panier" :modif="false"></Field>
                <Field title="Prochaine livraison" content="30/09/2022" :modif="false"></Field>
                <div class="mt-auto p-3 border border-solid border-white rounded-md p-2">
                    <p class="text-xs">Point Relai</p>
                    <p class="text-sm">Au Petit Artisan<br>10 rue de Barr<br>6700 Strasbourg</p>
                </div> 
                <div>
                    <h3>Notes</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis eveniet corrupti inventore dicta libero, reiciendis quas saepe explicabo tenetur, nobis sunt non culpa ut. Non nobis facilis eaque. Voluptatum.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Basket as _Basket } from "../../types";
    import Basket from "../../components/Basket.vue";
    import Field from '../../components/shared/Field.vue';
    const baskets: Array<_Basket> = [{
            title: "Panier classique",
            imgSrc: "basket1.jpg",
            content: [
            "Notre panier Classique est idéal pour 2 à 3 personnes, pour une semaine. Il se compose de sept à huit fruits et légumes de saison. Notre objectif est toujours de vous proposer un prix hyperconcurrentiel et une fraicheur exceptionnelle.",
            ]
        }]
</script>

<style>
</style>