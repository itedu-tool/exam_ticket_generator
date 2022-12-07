import { createRouter, createWebHistory } from 'vue-router';
import view__ticket from '../components/viewTicket.vue';
import ticket__example from '../components/ticketExample.vue';
import first__creating__template from '../components/firstCreatingTemplate.vue';
import second__creating__template from '../components/secondCreatingTemplate.vue';
import editing__ticket from '../components/editingTicketOne.vue';
import template__editing__one from '../components/editingTicketTwo.vue';
import template__editing__two from '../components/editingTicketThree.vue';
import generation__ticket from '../components/ticketsGenerationOne.vue';
import generation__ticket__two from '../components/ticketsGenerationTwo.vue';

const routes = [
  {
    path: '/',
    name: 'view__ticket',
    component: view__ticket,
  },
  {
    path: '/ticket__example',
    name: 'ticket__example',
    component: ticket__example,
  },
  {
    path: '/creating',
    name: 'creating',
    component: first__creating__template,
  },
  {
    path: '/creating/second__creating',
    name: 'second__creating',
    component: second__creating__template,
  },
  {
    path: '/editing',
    name: 'editing',
    component: editing__ticket,
  },
  {
    path: '/editing/template__editing__one',
    name: 'template__editing__1',
    component: template__editing__one,
  },
  {
    path: '/editing/template__editing__two',
    name: 'template__editing__two',
    component: template__editing__two,
  },
  {
    path: '/generation',
    name: 'generation',
    component: generation__ticket,
  },
  {
    path: '/generation/successfully',
    name: 'successfully',
    component: generation__ticket__two,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE__URL),
  routes,
});

export default router;
