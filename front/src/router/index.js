//импорт файлов добавления данных
import { createRouter, createWebHistory } from 'vue-router';
import addingData from '../components/addingData.vue';
import viewTicket from '../components/viewTicket.vue';
import ticketExample from '../components/ticketExample.vue';
import firstCreatingTemplate from '../components/firstCreatingTemplate.vue';
import secondCreatingTemplate from '../components/secondCreatingTemplate.vue';
import editingTicket from '../components/editingTicketOne.vue';
import templateEditingTwo from '../components/editingTicketTwo.vue';
import templateEditingThree from '../components/editingTicketThree.vue';
import generationTicket from '../components/ticketsGenerationOne.vue';
import generationTicketTwo from '../components/ticketsGenerationTwo.vue';
//импорт файлов авторизации
import authorizationTeacher from '../components/authorTeacher.vue';
import authorizationStudent from '../components/authorizationStudent.vue';
import registrationStudent from '../components/registStudent.vue';
import registrationTeacher from '../components/registTeacher.vue';
//импорт файлов личного кабинета
import exPersonalAccount from '../components/exPersonalAccountInner.vue';

const routes = [
  //роутеры добавления данных
  {
    path: '/addingData',
    name: 'addingData',
    component: addingData,
    children: [
      {
        path: '/addingData/viewTicket',
        name: 'viewTicket',
        component: viewTicket,
      },
      {
        path: '/addingData/viewTicket/ticketExample',
        name: 'ticketExample',
        component: ticketExample,
      },
      {
        path: '/addingData/creating',
        name: 'creating',
        component: firstCreatingTemplate,
      },
      {
        path: '/addingData/creating/secondCreating',
        name: 'secondCreating',
        component: secondCreatingTemplate,
      },
      {
        path: '/addingData/editing',
        name: 'editing',
        component: editingTicket,
      },
      {
        path: '/addingData/editing/templateEditingTwo',
        name: 'templateEditingTwo',
        component: templateEditingTwo,
      },
      {
        path: '/addingData/editing/templateEditingThree',
        name: 'templateEditingThree',
        component: templateEditingThree,
      },
      {
        path: '/addingData/generation',
        name: 'generation',
        component: generationTicket,
      },
      {
        path: '/addingData/generation/successfully',
        name: 'successfully',
        component: generationTicketTwo,
      },
    ],
  },

  //роутеры авторизации
  {
    path: '/',
    name: 'authorizationStudent',
    component: authorizationStudent,
  },
  {
    path: '/authorizationTeacher',
    name: 'authorizationTeacher',
    component: authorizationTeacher,
  },
  {
    path: '/registrationStudent',
    name: 'registrationStudent',
    component: registrationStudent,
  },
  {
    path: '/registrationTeacher',
    name: 'registrationTeacher',
    component: registrationTeacher,
  },
  //роутеры личного кабинета
  {
    path: '/personalAccount',
    name: 'personalAccount',
    component: exPersonalAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE__URL),
  routes,
});

export default router;
