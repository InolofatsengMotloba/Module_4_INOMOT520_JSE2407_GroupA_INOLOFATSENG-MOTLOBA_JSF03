<template>
  <div class="grid justify-center">
    <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden"
      >
        <img
          class="object-contain h-48 mt-3"
          :src="product.image"
          :alt="product.title"
        />
        <div class="flex-1 flex flex-col p-6">
          <div class="flex-1">
            <header class="mb-2 flex-2">
              <h2
                class="text-lg line-clamp-2 font-extrabold leading-snug text-slate-600"
              >
                {{ product.title }}
              </h2>
            </header>
          </div>
          <div
            class="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug"
          >
            <h2>$ {{ product.price }}</h2>
          </div>
          <div class="flex mt-1 space-x-2">
            <div class="justify-start flex-1">
              <span
                class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-blue-700/10"
              >
                {{ product.category }}
              </span>
            </div>
            <div class="justify-end space-x-2">
              <button aria-label="Add to Favourites">
                <svg
                  class="me-1.5 h-5 w-5 hover:fill-red-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  transform="scale(1.6)"
                >
                  <path
                    stroke="currentColor"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <router-link
            :to="{ name: 'ProductDetailView', params: { id: product.id } }"
            class="flex rounded-lg justify-center mt-3 bg-gray-500 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          >
            Product Details
          </router-link>
          <button
            class="flex rounded-lg justify-center mt-3 bg-violet-900 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useProductStore } from "../../store/productStore";

export default {
  name: "ProductList",
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProducts();
    });

    return {
      products: computed(() => productStore.products),
    };
  },
};
</script>

<style scoped>
</style>
