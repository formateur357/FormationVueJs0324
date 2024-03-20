<template>
  <div id="app">
    <!-- Barre de navigation -->
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/addProducts">Ajout de nouveau produit</router-link> |
      <router-link to="/cart">Panier</router-link>
    </nav>

    <!-- Contenu de la page -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>

<script setup>
// Pas besoin d'ajouter quelque chose dans <script setup> pour le routage de base.
// Mais vous pouvez importer et utiliser des composants ou des utilitaires supplémentaires ici au besoin.
</script>

<style>
/* Styles pour l'élément avec l'ID "app" */
#app {
  /* Définition de la police de caractères à utiliser */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* Amélioration du rendu de la police sur les navigateurs WebKit */
  -webkit-font-smoothing: antialiased;
  /* Amélioration du rendu de la police sur les navigateurs Mozilla */
  -moz-osx-font-smoothing: grayscale;
  /* Centrage du texte dans l'élément */
  text-align: center;
  /* Couleur du texte */
  color: #2c3e50;
  /* Marge supérieure de l'élément pour créer un espacement avec le haut de la page */
  margin-top: 60px;

  /* .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
}
</style>
