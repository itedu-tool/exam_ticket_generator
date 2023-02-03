//импорт файлов добавления данных
import { createRouter, createWebHistory } from 'vue-router';
import addingData from '../pages/addingData/addingData.vue';
import viewTicket from '../pages/addingData/viewTicket.vue';
import ticketExample from '../pages/addingData/ticketExample.vue';
import firstCreatingTemplate from '../pages/addingData/firstCreatingTemplate.vue';
import secondCreatingTemplate from '../pages/addingData/secondCreatingTemplate.vue';
import editingTicket from '../pages/addingData/editingTicketOne.vue';
import templateEditingTwo from '../pages/addingData/editingTicketTwo.vue';
import templateEditingThree from '../pages/addingData/editingTicketThree.vue';
import generationTicket from '../pages/addingData/ticketsGenerationOne.vue';
import generationTicketTwo from '../pages/addingData/ticketsGenerationTwo.vue';
//импорт файлов авторизации
import authorizationTeacher from '../pages/authorization/authorizationTeacher.vue';
import authorizationStudent from '../pages/authorization/authorizationStudent.vue';
import registrationStudent from '../pages/registration/registStudent.vue';
import registrationTeacher from '../pages/registration/registTeacher.vue';
//импорт файлов личного кабинета
import exPersonalAccount from '../pages/personalAccount/exPersonalAccountInner.vue';

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
