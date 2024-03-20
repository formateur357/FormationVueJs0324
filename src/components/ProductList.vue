<template>
  <!-- Début du template -->
  <div>
    <!-- Titre de la liste des pièces automobiles -->
    <h2>Liste des pièces Automobile</h2>
    <!-- Sélecteur de catégorie de pièces automobiles -->
    <select v-model="selectedCategory">
      <!-- Option pour afficher toutes les catégories -->
      <option value="">Toutes les catégories</option>
      <!-- Options pour sélectionner des catégories spécifiques -->
      <option value="pieces de rechange">Pièces de rechange</option>
      <option value="freins">Freins</option>
    </select>
    <!-- Liste des pièces automobiles -->
    <ul>
      <!-- Itération sur les produits filtrés -->
      <li v-for="product in filteredProducts" :key="product.id">
        <!-- Affichage du nom et du prix de chaque pièce automobile -->
        {{ product.name }} pour {{ product.price }}
        <!-- Bouton pour supprimer la pièce automobile -->
        <button @click="productsStore.addToCart(product)">
          Ajouter au panier
        </button>
      </li>
    </ul>
  </div>
  <AddProductForm />
  <!-- Fin du template -->
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProductsStore } from "@/stores/product";
import Product from "../models/Product.model";
import AddProductForm from "./AddProductForm.vue";

// Utilisation du magasin Pinia
const productsStore = useProductsStore();

// Calcul de la liste des produits disponibles pour affichage
const availableProducts = computed(() => productsStore.availableProducts);

const selectedCategory = "";

// Calcul de la liste filtrees des produits
const filteredProducts = computed(() => {
  if (!availableProducts.value || availableProducts.value.length === 0) {
    return [];
  } else {
    return availableProducts.value.filter((product: Product) => {
      return selectedCategory ? product.category === selectedCategory : true;
    });
  }
});
</script>

<style scoped>
/* Styles CSS spécifiques à ce composant */
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
