import { defineStore } from "pinia";
import Product from "@/models/Product.model";
import CartItem from "@/models/CartItem.model";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [
      new Product(0, "Filtre à air", 15, "pieces de rechange"),
      new Product(1, "Plaquettes de frein", 40, "freins"),
      new Product(2, "Bougies d'allumage", 22, "pieces de rechange"),
    ],
    cart: [] as CartItem[],
  }),
  getters: {
    availableProducts: (state) => state.products,
    cartItems: (state) => state.cart,
    totalPrice: (state) => {
      return state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
  actions: {
    addProduct(newProduct: Product) {
      this.products.push(newProduct);
    },
    addToCart(product: Product) {
      const found = this.cart.find((item) => item.id === product.id);
      if (found) {
        found.quantity += 1;
      } else {
        const cartProduct = new CartItem(
          product.id,
          product.name,
          product.price,
          1
        );
        this.cart.push(cartProduct);
      }
    },
    removeFromCart(item: CartItem) {
      const index = this.cart.findIndex((p) => p.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    updateCartQuantity(item: CartItem, quantity: number) {
      const found = this.cart.find((p) => p.id === item.id);
      if (found) {
        found.quantity = quantity;
      }
    },
  },
});
