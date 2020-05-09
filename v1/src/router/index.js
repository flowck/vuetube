import Vue from 'vue';
import Router from 'vue-router';
import Feed from '../components/Feed';
import Player from '../components/Player';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/:id',
      name: 'Player',
      component: Player,
    },
  ],
});
