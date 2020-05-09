import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Feed from "../views/Feed.vue";
import Player from "../views/Player.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Feed',
    component: Feed,
  },
  {
    path: '/:id',
    name: 'Player',
    component: Player,
  }
];

const router = new VueRouter({
  routes
});

export default router;

