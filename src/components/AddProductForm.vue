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
import { Prop } from "vue-property-decorator";
import Product from "../models/Product.model";

@Options({})
export default class AddProductForm extends Vue {
  @Prop({ default: () => [] }) products!: Product[];
  product: Product = new Product(0, "", 0, "");

  addProduct(): void {
    this.product.id = Math.max(...this.products.map((p) => p.id)) + 1;
    this.products.push(this.product);
  }
}
</script>

<style scoped></style>
