<template>
  <div>
    <div v-if="error">There was an error</div>
    <div v-else-if="product">
      <h2>{{ product.title }}</h2>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchSingleProduct } from "../api/api";

export default {
  name: "ProductDetailView",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const product = ref(null);
    const error = ref(null);

    const getProduct = async () => {
      const { response, error: fetchError } = await fetchSingleProduct(
        props.id
      );
      if (fetchError) {
        error.value = fetchError.message;
      } else {
        product.value = response;
      }
    };

    onMounted(() => {
      getProduct();
    });

    return {
      product,
    };
  },
};
</script>

<style scoped>
</style>