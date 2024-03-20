// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "@/views/Cart.vue";
import AddProductForm from "@/views/AddProductForm.vue";

// Définissez vos routes ici
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addProducts",
    name: "AddProducts",
    component: AddProductForm,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  // Vous pouvez ajouter plus de routes ici
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
