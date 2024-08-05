import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const error = ref(null);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(
          "Data fetching failed, please check your network connection"
        );
      }

      let data = await response.json();
      products.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    products,
    error,
    fetchProducts,
  };
});
