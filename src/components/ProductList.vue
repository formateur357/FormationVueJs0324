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
      <li v-for="(product, index) in filteredProducts" :key="product.id">
        <!-- Affichage du nom et du prix de chaque pièce automobile -->
        {{ product.name }} pour {{ product.price }}
        <!-- Bouton pour supprimer la pièce automobile -->
        <button @click="removeProduct(index)">Supprimer</button>
        <button @click="addToCart(product)">Ajouter au panier</button>
      </li>
    </ul>
  </div>
  <AddProductForm :products="products" />
  <!-- Fin du template -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Product from "../models/Product.model";
import AddProductForm from "./AddProductForm.vue";

@Options({
  components: {
    // Enregistrement du composant ProductList pour qu'il puisse être utilisé dans ce composant
    AddProductForm,
  },
})
export default class ProductList extends Vue {
  // Déclaration de la propriété 'msg' comme étant de type string
  msg!: string;

  // Déclaration du tableau de produits avec le type Product[]
  products: Product[] = [
    new Product(0, "Filtre à air", 15, "pieces de rechange"),
    new Product(1, "Plaquettes de frein", 40, "freins"),
    new Product(2, "Bougies d'allumage", 22, "pieces de rechange"),
  ];

  // Initialisation de la propriété selectedCategory avec une chaîne vide
  selectedCategory = "";

  // Méthode pour filtrer les produits en fonction de la catégorie sélectionnée
  get filteredProducts(): Product[] {
    if (!this.products || this.products.length === 0) {
      return [];
    } else {
      return this.products.filter((product: Product) => {
        return this.selectedCategory
          ? product.category === this.selectedCategory
          : true;
      });
    }
  }

  // Méthode pour supprimer un produit de la liste
  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }

  addToCart(product: Product): void {
    this.$emit("add-product", product);
  }
}
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
