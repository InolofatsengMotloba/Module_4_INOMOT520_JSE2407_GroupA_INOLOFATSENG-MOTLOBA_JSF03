<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useProductStore } from '../../store/productStore';

export default {
  name: 'ProductList',
  setup() {
    const productStore = useProductStore();
    
    onMounted(() => {
      productStore.fetchProducts();
    });

    return {
      products: productStore.products,
    };
  },
};
</script>

<style scoped>
</style>
