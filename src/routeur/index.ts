// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "@/views/Cart.vue";

// Définissez vos routes ici
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/product/:id",
  //   name: "productDetails",
  //   component: ProductDetail,
  // },
  {
    path: "/addProducts",
    name: "AddProducts",
    component: () => import("@/views/AddProductForm.vue"),
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    // beforeEnter: (to, from, next) => {
    //   if(!isAuthentificated()) {
    //     next({ path '/login' });
    //   } else {
    //     next();
    //   }
    // }
    // children: [
    //   {
    //     path: "cartHistory",
    //     name: "CartHistory",
    //     component: CartHistory,
    //   },
    //   {
    //     path: "cartDetails",
    //     name: "CartDetails",
    //     component: CartDetails,
    //   },
    //   // Vous pouvez ajouter plus de routes ici
    // ],
  },
  // Vous pouvez ajouter plus de routes ici
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   // if (to.meta.requiresAuth && !isAuthentificated) {
//   //   next({ path '/login' });
//   // } else {
//     next();
//   }
// })

export default router;
