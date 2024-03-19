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
    <select v-model="product.category">
      <!-- Option pour afficher toutes les catégories -->
      <option value="">Toutes les catégories</option>
      <!-- Options pour sélectionner des catégories spécifiques -->
      <option value="pieces de rechange">Pièces de rechange</option>
      <option value="freins">Freins</option>
    </select>
    <button type="submit">Ajouter le produit</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Product from "../models/Product.model";

@Options({
  props: {
    products: Product[],
  },
})
export default class AddProductForm extends Vue {
  product: Product = { id: NaN, name: "", price: NaN, category: "" };

  addProduct(): void {
    this.product.id = Math.max(...products.map(p => p.id))++;
    products.push(this.product);
  }
}
</script>

<style scoped></style>
