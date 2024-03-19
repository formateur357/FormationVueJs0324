<!-- eslint-disable prettier/prettier -->
<template>
  <!-- Début du template -->
  <div>
    <h2>Panier</h2>
    <ul>
        <li v-for="(item, index) in cartItems" :key="item.id">
            {{ item.name }} - {{ item.quantity }} x {{ item.price }}$
            <button @click="decreaseQuantity(index)">-</button>
            <button @click="increaseQuantity(index)">+</button>
            <button @click="removeItem(index)">Supprimer</button>
        </li>
    </ul>
    <p>Total: {{ totalPrice }}$</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import CartItem from "../models/CartItem.model";

@Options({})
export default class Cart extends Vue {
  @Prop({ default: () => [] }) cartItems!: CartItem[];

  // Méthode pour calculer le total du panier
  get totalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // // Le watcher sur `cartItems`
  // @Watch("cartItems", { deep: true }) // Utilisez { deep: true } pour surveiller les changements dans les objets/arrays
  // onCartItemsChanged(newVal: CartItem[], oldVal: CartItem[]) {
  //   console.log("cartItems changed", newVal);
  //   // Ici, vous pouvez effectuer la tâche pertinente, par exemple calculer le total du panier
  //   this.calculateTotal();
  // }

  // calculateTotal() {
  //   // Supposons que vous voulez calculer le total
  //   const total = this.cartItems.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );
  //   console.log("Total du panier: ", total);
  //   // Vous pouvez également stocker ce total dans une variable de données si nécessaire
  // }

  // Méthode pour augmenter la quantité d'un article
  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  // Méthode pour diminuer la quantité d'un article
  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.removeItem(index); // Supprime l'article si la quantité est 0
    }
  }

  // Méthode pour supprimer un article du panier
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
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
