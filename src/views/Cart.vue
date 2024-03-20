<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <router-view /> -->
  <!-- Début du template -->
  <div>
    <h2>Panier</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <div>
          {{ item.name }} - {{ item.price }} €
          <input
            type="number"
            min="1"
            :value="item.quantity"
            @input="updateQuantity(item, $event)"
          />
          <button @click="removeFromCart(item)">Supprimer</button>
        </div>
      </li>
    </ul>
    <p>Total: {{ productsStore.totalPrice }}$</p>
  </div>
</template>

<script setup lang="ts">
// Importations nécessaires
import { computed } from "vue";
import { useProductsStore } from "@/stores/product";
import CartItem from "@/models/CartItem.model";

// Utilisation du magasin Pinia pour le panier
const productsStore = useProductsStore();
const cartItems = computed(() => productsStore.cartItems);

// Fonction pour enlever un produit du panier
const removeFromCart = (item: CartItem) => {
  productsStore.removeFromCart(item);
};

const updateQuantity = (item: CartItem, event: Event) => {
  const target = event.target as HTMLInputElement; // Cast 'event.target' en 'HTMLInputElement'
  const quantity = parseInt(target.value, 10);
  productsStore.updateCartQuantity(item, quantity);
};
</script>

<style scoped>
h2 {
  margin: 40px 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
