<template>
  <div>
    <h1>Filter:</h1>
    <select @change="onCategoryChange($event)">
      <option value="all">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getCategories } from "../api/api";

export default {
  name: "Filter",
  emits: ["filter-category"],
  setup(_, { emit }) {
    const categories = ref([]);

    const fetchCategories = async () => {
      const { response, error } = await getCategories();
      if (response) {
        categories.value = response;
      } else {
        console.error(error);
      }
    };

    const onCategoryChange = (event) => {
      emit("filter-category", event.target.value);
    };

    onMounted(() => {
      fetchCategories();
    });

    return {
      categories,
      onCategoryChange,
    };
  },
};
</script>