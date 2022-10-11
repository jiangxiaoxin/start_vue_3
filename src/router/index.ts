import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComponentViewVue from "@/views/ComponentView.vue";
import components from "./components";
import TestViewVue from "@/views/TestView.vue";
import tests from "./tests";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/component",
    name: "component",
    component: ComponentViewVue,
    children: components,
  },
  {
    path: "/test",
    name: "test",
    component: TestViewVue,
    children: tests,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
