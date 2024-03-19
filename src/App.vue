<template>
  <!-- Le contenu de ce template sera rendu dans l'application -->
  <!-- Utilisation du composant ProductList -->
  <Cart :cartItems="cartItems" />
  <ProductList @add-product="handleAddToCart($event)" />
  <!-- <ProductListJsVue /> -->
</template>

<script lang="ts">
// Import des modules nécessaires depuis Vue.js
import { Options, Vue } from "vue-class-component";
// Import du composant ProductList depuis le fichier correspondant
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import CartItem from "./models/CartItem.model";
import Product from "./models/Product.model";

// Définition des options du composant principal App
@Options({
  components: {
    // Enregistrement du composant ProductList pour qu'il puisse être utilisé dans ce composant
    ProductList,
    Cart,
  },
})
// Définition de la classe du composant principal App
export default class App extends Vue {
  cartItems: CartItem[] = [];

  handleAddToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = new CartItem(product.id, product.name, product.price, 1);
      this.cartItems.push(newItem);
      console.log(this.cartItems);
    }
  }
}
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
}
</style>
