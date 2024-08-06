import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import ProductDetailView from "../pages/ProductDetailView.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "ProductDetailView",
    component: ProductDetailView,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
