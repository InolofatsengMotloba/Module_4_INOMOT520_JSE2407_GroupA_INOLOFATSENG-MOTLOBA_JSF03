<template>
  <div
    class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center"
  >
    <Filter />
    <Sort />
  </div>
  <ProductsList />
</template>

<script>
import Filter from '../components/Filter.vue';
import ProductsList from '../components/products/ProductsList.vue';
import Sort from '../components/Sort.vue';

export default {
  components: { ProductsList, Filter, Sort, Filter },
  name: "Home",
};
</script>
