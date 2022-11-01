<template>
  <!--Просмотр билета. Первая страница со списком билетов.-->
  <div class="view__ticket">
    <h1 class="main__block__title__text">Просмотр билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <TicketsList />

    <div class="main__router-link__box">
      <router-link to="/ticket__example" class="main__block__router-link">Просмотреть</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TicketsList from './ticketsList.vue';
export default {
  name: 'view__ticket',
  components: { TicketsList },
};
</script>

<style scoped src="@/css/viewTicket.css"></style>
