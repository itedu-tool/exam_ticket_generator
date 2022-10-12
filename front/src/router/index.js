import { createRouter, createWebHistory } from 'vue-router';
import view__ticket from '../components/view_ticket.vue';
import ticket__example from '../components/ticket_example.vue';
import first__creating__template from '../components/first_creating_template.vue';
import second__creating__template from '../components/second_creating_template.vue';
import editing__ticket from '../components/editing_ticket_one.vue';
import template__editing__one from '../components/editing_ticket_two.vue';
import template__editing__two from '../components/editing_ticket_three.vue';
import generation__ticket from '../components/tickets_generation_one.vue';
import generation__ticket__two from '../components/tickets_generation_two.vue';

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
