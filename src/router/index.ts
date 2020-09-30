import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Trains from "@/views/Trains.vue";
import Train from "@/views/Train.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Trains",
    component: Trains,
  },
  {
    path: "/train/:train",
    name: "Train",
    component: Train,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
