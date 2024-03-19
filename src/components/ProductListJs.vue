<template>
  <!-- Le contenu de ce template sera rendu dans le composant ProductList -->
  <div>
    <!-- Titre de la liste des pièces automobiles -->
    <h2>Liste des pièces automobiles</h2>
    <!-- Liste des pièces automobiles -->
    <ul>
      <!-- Les éléments de la liste seront affichés dynamiquement -->
      <!-- à partir des données du tableau "products" -->
      <li v-for="product in products" :key="product.id">
        <!-- Affichage du nom et du prix de chaque pièce automobile -->
        {{ product.name }} - {{ product.price }} €
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Filtre à air", price: 15 },
        { id: 2, name: "Plaquettes de frein", price: 40 },
        { id: 3, name: "Bougies d'allumage", price: 22 },
      ],
    };
  },
};
</script>

<!-- Ajout de l'attribut "scoped" pour limiter les styles CSS à ce composant uniquement -->
<style scoped></style>
