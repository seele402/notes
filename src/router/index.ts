import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/note/:id",
      name: "notePage",
      component: () => import("../views/NoteView.vue"),
      props: true,
    },
  ],
});

export default router;
