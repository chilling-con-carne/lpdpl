<template>
  <div
    class="h-screen w-3/4 md:w-1/2 lg:w-1/4 m-auto flex flex-col gap-8 lg:gap-16 justify-center"
  >
    <h1 class="font-semibold text-xl">Connexion</h1>
    <form action="" class="w-full flex flex-col gap-8 lg:gap-16">
      <div class="flex flex-row w-full gap-2">
        <Input type="text" placeholder="Nom" class="w-1/2" />
        <Input type="text" placeholder="Prénom" class="w-1/2" />
      </div>
      <Input type="email" placeholder="Adresse Email" :model="email" />
      <Input type="tel" placeholder="Téléphone" :model="tel" />
      <Input type="password" placeholder="Mot de passe" :model="password" />
      <Input
        type="password"
        placeholder="Vérification mot de passe"
        :model="verifPassword"
      />
      <button class="btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case">
        Continuer
      </button>
    </form>
    <p class="text-gray-400">
      Dejà un compte ?
      <router-link to="/connexion" class="text-green-500">Se connecter</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/shared/Input.vue";

import { ref } from "vue";

const email = ref("");
const password = ref("");
const verifPassword = ref("");
const tel = ref("");
</script>

<style></style>
