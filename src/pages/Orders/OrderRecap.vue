<template>
  <div id="modal" class="hidden z-20 absolute h-screen w-screen flex justify-center items-center" style="background-color:rgba(255, 255, 255, 0.5)">
    <div class="z-40 text-start w-1/3 lg:w-1/3 md:w-1/2 bg-black border border-solid">
      <div class="my-4 mx-6 flex justify-between">
        <img src="../../assets/pictures/orders/success.svg" alt="succes icon"/>
        <h1 class="font-bold ml-3 grow">La commande a été passée avec succès</h1>
        <img @click="toggleModal()" class="cursor-pointer" src="../../assets/pictures/orders/close.svg" alt="succes icon"/>
      </div>
      <p class="m-6">
        Vos dates de livraisons seront ensuite transmises instantanéments après le règlement de la commande. 
        Pour plus de facilité, le règlement en ligne s'effectue en 3 fois sans frais (le 20 du mois).
      </p>
      <div class="bg-slate-300 flex flex-col items-end border border-solid">
        <button
          @click="toggleModal()"
          class="btn btn-md my-3 mr-3 bg-green-500 hover:bg-green-600 border-none normal-case" href="#">
            Retour vers la page principale
        </button>
      </div>
    </div>
  </div>
  <div
    id="orderRecap"
    class="z-0 h-screen w-2/3 md:w-2/3 lg:w-1/2 m-auto flex flex-col gap-8 lg:gap-16 justify-center"
  >
    <h1 class="font-semibold text-xl">Récpitulatif</h1>
    <div class="text-start grid grid-cols-2 gap-6">
        <div class="flex flex-col">
          <Recap title="Prénom Nom" content="Killua Zoldik"></Recap> 
          <Recap title="Adresse mail" content="adresse@mail.fr"></Recap>   
          <Recap title="Téléphone" content="+33 6 00 00 00 00"></Recap>  
          <div class="mt-auto p-3 border border-solid border-white rounded-md p-2">
            <p class="text-xs">Point Relai</p>
            <p class="text-sm">Au Petit Artisan<br>10 rue de Barr<br>6700 Strasbourg</p>
          </div>            
        </div>
        <div>
          <Recap title="Type de Panier" content="Paniers Classiques - 12€/panier"></Recap>
          <div>
            <Recap title="Fréquence" content="Bimensuel"></Recap>
            <Recap title="Durée de l'abonnement" content="12 mois"></Recap>
          </div>
          <Recap title="Mode de paiement" content="Paiement par carte bancaire en ligne"></Recap>
          <Facturation :basket-number="basketNumber" :basket-price="basketPrice" :tax="tax"></Facturation>
        </div>
        <button
          @click="toggleModal()"
          class=" w-1/2 justify-self-center col-span-2 btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case">
          Passer la commande
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import Recap from "../../components/Recap.vue";
import Facturation from "../../components/Facturation.vue"

import { ref } from "vue";
const relay = ref("");
const name = ref("");
const lastName = ref("");
const mail = ref("");
const tel = ref("");
const basketType = ref("");
const frequency = ref("");
const duration = ref("");
const mode = ref("");
const basketNumber = 24;
const basketPrice = 12;
const tax = 5.5;

const toggleModal = () => {
  let modal = document.getElementById("modal");
  let orderRecap = document.getElementById("orderRecap")
  if (modal != null && orderRecap != null){
    if (modal.style.display != "none"){
      modal.style.display = "none";
      orderRecap.style.filter = ""
    }
    else{
      modal.style.display = "flex";
      orderRecap.style.filter = "blur(1px)"
    }

  }
  
}

</script>

<style></style>
