<template>
  <div
    class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center"
  >
    <Filter @filter-category="filterByCategory" />
    <Sort @sort-order="sortProducts" />
  </div>
  <ProductsList />
</template>

<script>
import Filter from "../components/Filter.vue";
import ProductsList from "../components/products/ProductsList.vue";
import Sort from "../components/Sort.vue";
import { useProductStore } from "../store/productStore";

export default {
  name: "Home",
  components: { ProductsList, Filter, Sort },
  setup() {
    const productStore = useProductStore();
    // const route = useRoute();

    const filterByCategory = (category) => {
      productStore.filterByCategory(category);
    };

    const sortProducts = (order) => {
      productStore.sortProducts(order);
    };

    return {
      filterByCategory,
      sortProducts,
      productStore,

    };
  },
};
</script>
