<template>
    <div class="z-0 h-screen w-2/3 md:w-2/3 lg:w-1/2 m-auto flex flex-col gap-8 lg:gap-16 justify-center">
        <h1 class="font-semibold text-xl">Votre compte - Détails</h1>
        <form class="text-start grid grid-cols-2 gap-6">
            <div>
                <Field title="Prénom Nom" content="Killua Zoldik" :modif="false"></Field> 
                <Field title="Adresse mail" content="adresse@mail.fr" :modif="false"></Field>   
                <Field title="Téléphone" content="+33 6 00 00 00 00" :modif="false"></Field>  
                <div class="mt-auto p-3 border border-solid border-white rounded-md p-2">
                    <p class="text-xs">Point Relai</p>
                    <p class="text-sm">Au Petit Artisan<br>10 rue de Barr<br>6700 Strasbourg</p>
                </div>  
            </div>
            <div>
                <Field title="Type de Panier" content="Paniers Classiques - 12€/panier" :modif="false"></Field>
                <div class="flex gap-5">
                    <Field class="w-1/2" title="Fréquence" content="Bimensuel" :modif="false"></Field>
                    <Field class="w-1/2" title="Durée de l'abonnement" content="12 mois" :modif="false"></Field>
                </div>
                <Field title="Mode de paiement" content="Paiement par carte bancaire en ligne" :modif="false"></Field>
                <Field title="Début de l'abonnement" content="09/09/2022" :modif="false"></Field>
                <Field title="Fin de l'abonnement" content="10/09/2023" :modif="false"></Field>
            </div>
            <button 
                @click="modifInformations()"
                class=" w-1/2 justify-self-center col-span-2 btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case">
                Mettre à jour les informations
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import Field from "../../components/shared/Field.vue";
    import { ref } from "vue";
    import { useRouter, useRoute } from 'vue-router'

    const name = ref("");
    const surname = ref("");
    const email = ref("");
    const password = ref("");
    const verifPassword = ref("");
    const tel = ref("");

    function modifInformations() {
    
       useRouter().push("ProfilDetailsEdit");
    }
</script>

<style>

</style>