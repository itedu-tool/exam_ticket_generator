import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
import exPersonalAccount from '../views/exPersonalAccount.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [{ path: '/', component: exPersonalAccount }],
=======

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [],
>>>>>>> develop
});

export default router;
