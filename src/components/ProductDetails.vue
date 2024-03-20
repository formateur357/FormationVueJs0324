<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.price }}</p>
    <!-- Vous pouvez ajouter plus de détails sur le produit ici -->
  </div>
  <div v-else>
    <p>Chargement du produit...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchProduct } from "@/api";

const route = useRoute();
const product = ref(null);

console.log(route.path);
console.log(route.params);

onMounted(async () => {
  const productId = route.params.id;
  product.value = await fetchProduct(productId);
});
</script>
