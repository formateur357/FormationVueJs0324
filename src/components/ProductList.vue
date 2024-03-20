<template>
  <div>
    <h2>Liste des pièces Automobile</h2>
    <select v-model="selectedCategory">
      <!-- Option pour afficher toutes les catégories -->
      <option value="">Toutes les catégories</option>
      <option value="pieces">Pièces de rechange</option>
      <option value="freins">Freins</option>
    </select>
    <ul>
      <!-- Itération sur les produits filtrés -->
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} pour {{ product.price }}
        <button @click="productsStore.addToCart(product)">
          Ajouter au panier
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useProductsStore } from "@/stores/product";
import Product from "../models/Product.model";

// Utilisation du magasin Pinia
const productsStore = useProductsStore();

// Calcul de la liste des produits disponibles pour affichage
const availableProducts = computed(() => productsStore.availableProducts);

let selectedCategory = ref("");

// Calcul de la liste filtrees des produits
const filteredProducts = computed(() => {
  if (!availableProducts.value || availableProducts.value.length === 0) {
    return [];
  } else {
    return availableProducts.value.filter((product: Product) => {
      return selectedCategory.value
        ? product.category === selectedCategory.value
        : true;
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
