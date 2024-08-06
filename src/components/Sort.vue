<template>
  <div>
    <h1>Sort by:</h1>
    <select @change="onSortChange($event)">
      <option value="default">Default</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Sort",
  emits: ["sort-order"],
  setup(_, { emit }) {
    const onSortChange = (event) => {
      emit("sort-order", event.target.value);
    };

    return {
      onSortChange,
    };
  },
};
</script>
