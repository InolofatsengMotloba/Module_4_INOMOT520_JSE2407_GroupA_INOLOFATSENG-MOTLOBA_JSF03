import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const filteredProducts = ref([]);
  const error = ref(null);
  const currentCategory = ref("all");
  const currentSortOrder = ref("default");
  const isLoading = ref(false); // Make isLoading reactive

  // Computed property to get sorted and filtered products
  const sortedFilteredProducts = computed(() => {
    let result = [...products.value];

    // Apply category filter
    if (currentCategory.value !== "all") {
      result = result.filter(
        (product) => product.category === currentCategory.value
      );
    }

    // Apply sorting
    if (currentSortOrder.value === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (currentSortOrder.value === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  });

  const fetchProducts = async () => {
    isLoading.value = true; // Set isLoading to true
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(
          "Data fetching failed, please check your network connection"
        );
      }
      let data = await response.json();
      products.value = data;
      filteredProducts.value = sortedFilteredProducts.value; // Initialize with sorted and filtered list
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;e
    }
  };

  const filterByCategory = (category) => {
    currentCategory.value = category;
    filteredProducts.value = sortedFilteredProducts.value;
  };

  const sortProducts = (order) => {
    currentSortOrder.value = order;
    filteredProducts.value = sortedFilteredProducts.value;
  };

  return {
    products,
    filteredProducts,
    error,
    currentCategory,
    currentSortOrder,
    isLoading,
    fetchProducts,
    filterByCategory,
    sortProducts,
  };
});
