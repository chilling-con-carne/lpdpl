<template>
  <div
    class="h-screen w-3/4 md:w-1/2 lg:w-1/4 m-auto flex flex-col gap-8 lg:gap-16 justify-center"
  >
    <h1 class="font-semibold text-xl">Connexion</h1>
    <form action="" class="flex flex-col gap-8 lg:gap-16">
      <Input type="email" placeholder="Adresse Email" :model="email" />
      <Input type="password" placeholder="Mot de passe" :model="password" />
      <button class="btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case">
        Continuer
      </button>
    </form>
    <p class="text-gray-400">
      Vous n'avez pas de compte ?
      <router-link to="/inscription" class="text-green-500">S'inscrire</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/shared/Input.vue";

import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<style></style>
