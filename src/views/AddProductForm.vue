<template>
  <form @submit.prevent="addProduct">
    <div>
      <label for="productName">Nom du produit</label>
      <input type="text" id="productName" v-model="product.name" required />
    </div>
    <div>
      <label for="productPrice">Prix du produit</label>
      <input type="number" id="productPrice" v-model="product.price" required />
    </div>
    <select v-model="product.category" required>
      <!-- Option pour afficher toutes les catégories -->
      <option value="">Toutes les catégories</option>
      <!-- Options pour sélectionner des catégories spécifiques -->
      <option value="pieces">Pièces de rechange</option>
      <option value="freins">Freins</option>
    </select>
    <button type="submit">Ajouter le produit</button>
  </form>
</template>

<script setup lang="ts">
// Importation de la composition API et du magasin Pinia
import { ref } from "vue";
import { useProductsStore } from "@/stores/product";
import { useRouter } from "vue-router";
import Product from "@/models/Product.model";

const router = useRouter();

// Utilisation du magasin Pinia
const productsStore = useProductsStore();
const product = ref(new Product(0, "", 0, "")); // Produit initialisé avec des valeurs par défaut

// Fonction pour ajouter un produit
function addProduct() {
  product.value.id = Math.max(...productsStore.products.map((p) => p.id)) + 1;
  productsStore.addProduct(product.value); // Ajout du produit au magasin
  product.value = new Product(0, "", 0, ""); // Réinitialisation du formulaire après l'ajout
  router.push("/");
  // router.push({ name: "Home" });
  // router.back();
  // router.push({ name: "ProductDetail", params: { id: userId } });
  // watch(() => route.params, (newParams, oldParams) => {
  //   Réagir au changement
  // });
}

// const isDirty = ref(false); // Supposons que cela contrôle si des modifications ont été faites

// onBeforeRouteLeave((to, from, next) => {
//   if (isDirty.value) {
//     const answer = window.confirm('Vous avez des modifications non sauvegardées. Êtes-vous sûr de vouloir partir ?');
//     if (answer) {
//       // L'utilisateur confirme vouloir partir, continuer la navigation
//       next();
//     } else {
//       // L'utilisateur décide de rester, annuler la navigation
//       next(false);
//     }
//   } else {
//     // Pas de modifications non sauvegardées, continuer la navigation
//     next();
//   }
// });
</script>

<style scoped></style>
