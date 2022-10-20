import { createRouter, createWebHistory } from 'vue-router';
import exPersonalAccount from '../views/exPersonalAccount.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [{ path: '/', component: exPersonalAccount }],
});

export default router;
