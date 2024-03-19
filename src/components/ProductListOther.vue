<template>
  <!-- Le contenu de ce template sera rendu dans le composant ProductList -->
  <div>
    <select v-model="selectedCategory">
      <option value="">Toutes les categories</option>
      <option value="pieces">Pieces de rechanges</option>
      <option value="freins">Freins</option>
    </select>

    <!-- Liste des pièces automobiles -->
    <ul>
      <!-- Les éléments de la liste seront affichés dynamiquement -->
      <!-- à partir des données du tableau "products" -->
      <li v-for="product in filteredProducts" :key="product.id">
        <!-- Affichage du nom et du prix de chaque pièce automobile -->
        {{ product.name }} - {{ product.price }} €
        <button @click="removeProduct(product.id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<!-- With Composition Api -->
<!-- <script setup lang="ts">
// Import du module "ref" pour créer une référence réactive
import { ref } from "vue";

// Interface décrivant le format d'une pièce automobile
interface Product {
  id: number;
  name: string;
  price: number;
}

// Tableau contenant les données des pièces automobiles
const products = ref<Product[]>([
  { id: 1, name: "Filtre à air", price: 15 },
  { id: 2, name: "Plaquettes de frein", price: 40 },
  { id: 3, name: "Bougies d'allumage", price: 22 },
]);
</script> -->

<!-- With Options Api -->
<script lang="ts">
import { Vue } from "vue-class-component";

// Définition des types pour nos produits et catégories
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export default class ProductList extends Vue {
  // Déclaration de la propriété 'msg' comme étant de type string
  msg!: string;

  // Déclaration du tableau de produits avec le type Product[]
  products: Product[] = [
    { id: 0, name: "Filtre à air", price: 15, category: "pieces de rechange" },
    { id: 1, name: "Plaquettes de frein", price: 40, category: "freins" },
    {
      id: 2,
      name: "Bougies d'allumage",
      price: 22,
      category: "pieces de rechange",
    },
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
}
</script>

<!-- With option API and Data-->
<!-- <script lang="ts">
/* eslint-disable*/
import { Options, Vue } from 'vue-class-component'

// Interface décrivant le format d'une pièce automobile
interface Product {
  id: number;
  name: string;
  price: number;
}

@Options({
  props: {
    msg: String
  },
  data() {
    return {
        products: [
            { id: 1, name: 'Filtre à air', price: 15},
            { id: 2, name: 'Plaquettes de frein', price: 40},
            { id: 3, name: "Bougie d'allumage", price: 22}
        ] as Product[],
    };
  },
})
export default class ProductList extends Vue {
  msg!: string

  // Ajout de la propriété products avec le type Product[]
  products!: Product[];
}
</script> -->

<!-- Ajout de l'attribut "scoped" pour limiter les styles CSS à ce composant uniquement -->
<style scoped></style>
