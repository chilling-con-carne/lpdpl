<template>
  <div
    class="h-[105vh] w-3/4 md:w-1/2 lg:w-1/4 m-auto flex flex-col gap-8 lg:gap-16 justify-center"
  >
    <h1 class="font-semibold text-xl">Détail de l'abonnement</h1>
    <form action="" class="flex flex-col gap-4 lg:gap-16">
      <select
        name="basket-type"
        id="basket-type"
        class="select border border-b-2 border-solid border-black"
        v-model="basket"
      >
        <option value="" disabled selected>Votre panier</option>
        <option value="basic">Panier basique</option>
        <option value="premium">Panier premium</option>
      </select>
      <div class="flex flex-row w-full gap-2">
        <select
          class="select w-1/2 border border-b-2 border-solid border-black"
          name="frequency"
          id="frequency"
          v-model="frequency"
        >
          <option value="" disabled selected>Fréquence</option>
          <option value="week">Hebdomadaire</option>
          <option value="2-weeks">Bimensuel</option>
          <option class="month">Mensuel</option>
        </select>
        <select
          class="select w-1/2 border border-b-2 border-solid border-black"
          name="duration"
          id="duration"
          v-model="duration"
        >
          <option value="" disabled selected>Durée</option>
          <option value="3-months">3 mois</option>
          <option value="6-months">6 mois</option>
          <option value="1-year">1 an</option>
        </select>
      </div>
      <textarea
        class="border border-solid border-black rounded-md p-2"
        name="relay-point"
        id="relay-point"
        cols="30"
        rows="5"
        placeholder="Point-relay"
        v-model="relay"
      ></textarea>
      <select
        class="select border border-b-2 border-solid border-black"
        name="frequency"
        id="frequency"
        v-model="payment"
      >
        <option value="" disabled selected>Moyen de paiement</option>
        <option value="week">Carte bancaire</option>
        <option value="2-weeks">Paypal</option>
      </select>
      <button
        @click="goToOrderDetails"
        class="btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case"
      >
        Continuer
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from "../../components/shared/Input.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const basket = ref("");
const frequency = ref("");
const duration = ref("");
const relay = ref("");
const payment = ref("");

const goToOrderDetails = () => {
  if (
    basket.value != "" &&
    frequency.value != "" &&
    duration.value != "" &&
    relay.value != "" &&
    payment.value != ""
  ) {
    router.push("/commande/recap");
  }
};
</script>

<style></style>
