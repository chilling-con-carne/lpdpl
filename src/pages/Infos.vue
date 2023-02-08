<template>
    <div class="my-24 w-3/4 md:w-2/3 lg:1/2 m-auto">
      <h1 class="text-2xl lg:text-4xl font-bold mb-6">F.A.Q</h1>
      <p class="italic text-sm lg:text-lg mb-10 text-green-500">
        Vos questions, nos réponses
      </p>
      <ol class="flex flex-col gap-8 md:gap-12">
        <li v-for="(question, index) in questions" :key="index">
          <Info :title="question.title" :body="question.body" />
        </li>
      </ol>
      <div class="text-left flex flex-col gap-8 mt-20">
        <h2 class="text-xl lg:text-3xl">Récupération de sa caution cabas</h2>
        <p class="">
          Pour bénéficier d'un panier <i class="underline">Classique</i> il vous faudra
          rendre 12 cabas.
        </p>
        <p class="mb-4">
          Pour bénéficier d'un panier <i class="underline">Plus</i> il vous faudra rendre 20
          cabas.
        </p>
  
        <p>Pour ce faire, glissez-y une feuille mentionnant:</p>
        <ol class="flex flex-col gap-4 list-disc -mt-8">
          <li class="mt-4 ml-4">
            Votre <b class="text-green-500">NOM</b> et <b class="text-green-500">Prénom</b>
          </li>
          <li class="ml-4">Le <b class="text-green-500">nombre de cabas</b> retournés</li>
          <li class="ml-4">
            La <b class="text-green-500">date de votre retour de consigne</b> et le
            <b class="text-green-500">nom du point relais</b> où vous cherchez vos paniers.
          </li>
        </ol>
  
        <div class="text-green-500 text-sm">
          <i>Tous cabas trop abimés ne pourras être pris en compte pour les retour</i>
        </div>
  
        <div>
          <p>
            Déposez vos cabas dans votre point relais. Indiquez au gérant votre retour et
            demandez à marquer votre retour sur la liste de livraisons.
          </p>
          <br /><br />
          <p>
            Nous vous créditerons alors d'un panier supplémentaire sous 15 jours et nous
            vous le confirmons par mail. <br />
            Plus d'économies et moins de pollution tout simplement.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Info from "../components/Info.vue";
  
  const questions = [
    {
      title: "Quel abonnement “les Paniers du petit Lucien” choisir ?",
      body:
        "En fonction de votre habitude de consommation et de votre tendance à consommer des fruits et légumes, plusieurs abonnements vous sont proposés.<br/>Vous devez choisir la durée et la fréquence de l’abonnement.<br/>Pour la fréquence vous avez le choix entre des livraisons “Hebdomadaire” ou “Bimensuelle”.<br/>Pour la durée vous avez le choix entre 3, 6 ou 12 mois.",
    },
    {
      title: "Panier Classique ou Plus ?",
      body:
        "Notre panier Classique est idéal pour 2 à 3 personnes, pour une semaine. Il se compose de sept à huit fruits et légumes de saison. Notre objectif est toujours de vous proposer un prix hyperconcurrentiel et une fraîcheur exceptionnelle. <br/><br/> Idéal pour 3 ou 4 personnes, notre panier Plus est composé du panier classique auquel on ajoute des articles plus rares comme des asperges, des fruits rouges, et des légumes anciens, topinambours, panais.",
    },
    {
      title: "Où et quand puis-je récupérer mon panier ?",
      body:
        'Plus de 50 points relais distribuent les Paniers du Petit Lucien. <br/> La liste intégrale avec l’adresse, le jour et les heures de distribution est disponible ici :<br/> <a href="https://www.lespaniersdupetitlucien.fr/point-relais">https://www.lespaniersdupetitlucien.fr/point-relais</a>',
    },
    {
      title:
        "Je ne suis pas intéressé par le panier de la semaine, je ne suis pas présent cette semaine pour récupérer le panier, puis-je reporter ma livraison ? ",
      body:
        "Vous pouvez reporter vos livraisons dans votre espace client jusqu’à 48h avant votre jour de livraison. Présent à côté de chaque date de livraison prévue, l’onglet “Reporter ma livraison” vous permet de gérer votre planning petit Lucien. Gratuite et illimitée, cette option vous offre la possibilité d’obtenir vos paniers à la carte.",
    },
    {
      title: "Offre annuel à 10€ le panier",
      body:
        "Nos abonnés choisissant un abonnement d'un ans ( soit 48 paniers ) pourrons bénéficier d'un tarif de 10 € par panier plus 1 € de caution par panier . ",
    },
    {
      title: "Je veux changer de point relais",
      body:
        "De nouveaux points relais sont en développement régulièrement, et cela nous rapproche. <br/>Un peu de patience. Il est possible de changer de point relais lors de votre réabonnement.",
    },
    {
      title: "Je n’aime pas tel produit, est-il possible de le remplacer par un autre ?",
      body:
        "Nous composons nos paniers en fonction de la saisons. Nous travaillons dur afin de vous proposer une composition diversifiée, colorée et appétissante. Nos produits sont issus d’une agriculture locale et raisonnée. <br/>Les compositions des paniers du Petit Lucien sont fixes et ne peuvent être modifiées. <br/>Cela nous permet également de vous proposer un rapport qualité/prix excellent.",
    },
    {
      title: "J’ai oublié de venir récupérer mon panier en point relais, que faire ?",
      body:
        'En ce cas, il vous faudra prévenir votre point relais dans la journée. Vous avez jusqu’au lendemain midi du jour de livraison pour récupérer votre panier en fonction des points relais. Une fois le délais dépassé votre panier est perdu. Si vous n\'avez pas contacté votre point relais pour lui signaler votre retard, le panier est également perdu. <br/><br/> <b class="text-green-500">Attention :</b> Pour les abonnements “bimensuels” nous avons remarqué un oubli courant des paniers. Merci de bien vouloir suivre vos dates de livraison dans votre espace client ici.',
    },
    {
      title:
        "Je veux bénéficier des paniers à 10 € pour le panier classique et 19 € pour le plus",
      body:
        "Pour nos clients les plus aciduent nous vous proposons une offre spéciale : pour un abonnement  sur l'année soit un abonnement à 48 paniers nous vous ajoutons 4 paniers à votre abonnement en panier classique et 3 pour votre abonnement en panier plus.",
    },
    {
      title: "Je veux en savoir plus sur le paiement sécurisé.",
      body:
        "Notre système de paiement sécurisé via le Crédit mutuel vous garantit une sécurité totale. Le paiement s'échelonne en trois échéances. La première lors de votre inscription, les deux suivantes espacées d’un mois. Le détail de vos transactions sera affiché à l’écran.",
    },
    {
      title: "Je ne me souviens plus de mon mot de passe / identifiant",
      body:
        "Votre identifiant est votre adresse email avec laquelle vous avez rejoint “Les paniers du Petit Lucien”. Vous pouvez réinitialiser votre mot de passe en cliquant sur “mot de passe oublié” ici.",
    },
    {
      title: "Comment recevoir les contenus des paniers chaque semaine ?",
      body:
        "Trois solutions s’offrent à vous :<br/><br/>La première est de s’inscrire à notre newsletter.<br/>La deuxième directement sur notre site internet.<br/>La troisième sur notre page Facebook.",
    },
    {
      title:
        "Je souhaite mettre en place une livraison “Les Paniers du Petit Lucien” dans mon entreprise",
      body:
        'Merci !  Il vous suffit de remplir les informations dans la rubrique "Inscription Entreprise". <br/>Vous pouvez également nous contacter directement par téléphone pour mettre en place un point relais au sein de l\'entreprise. Commande minimum de 10 paniers.',
    },
    {
      title: "Je veux rentrer en contact avec “les Paniers du petit Lucien”.",
      body:
        "Avec plaisir. Voici nos coordonnées : <br/><br/>Jacques GEISTEL<br/><br/>info@lespaniersdupetitlucien.fr<br/><br/>06 64 80 09 05",
    },
  ];
  </script>
  
  <style></style>