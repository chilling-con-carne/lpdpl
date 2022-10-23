<template>
  <div
    class="h-screen w-3/4 md:w-1/2 lg:w-1/4 m-auto flex flex-col gap-8 lg:gap-16 justify-center"
  >
    <h1 class="font-semibold text-xl">Informations de facturation</h1>
    <form action="" class="flex flex-col gap-8 lg:gap-16">
      <div class="flex flex-row w-full gap-2">
        <Input class="w-1/2" type="text" placeholder="Prénom" :model="firstName"></Input>
        <Input class="w-1/2" type="text" placeholder="Nom" :model="lastName"></Input>
      </div>
      <Input placeholder="Adresse e-mail" type="text" :model="email"></Input>
      <Input placeholder="Téléphone" type="tel" :model="phone"></Input>
      <Input placeholder="Mot de passe" type="password" :model="password"></Input>
      <Input
        placeholder="Vérification mot de passe"
        type="password"
        :model="confirmPass"
      ></Input>
      <button
        @click="goToOrderDetails()"
        class="btn btn-md bg-green-500 hover:bg-green-600 border-none normal-case"
      >
        Continuer
      </button>
    </form>
    <p class="text-gray-400">
      Vous avez dejà un compte ?
      <router-link to="/connexion" class="text-green-500">Se connecter</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import Input from "../../components/shared/Input.vue";
import { validateEmail } from "../../utils";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const firstName = ref("");
const lastName = ref("");

const email = ref("");
const phone = ref("");

const password = ref("");
const confirmPass = ref("");

const goToOrderDetails = () => {
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    validateEmail(email.value) &&
    phone.value != "" &&
    password.value.length >= 8 &&
    password.value == confirmPass.value
  ) {
    router.push("/order/details");
  }
};
</script>

<style></style>
