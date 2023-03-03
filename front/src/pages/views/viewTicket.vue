<template>
  <!--Просмотр билета. Первая страница со списком билетов.-->
  <div class="view__ticket">
    <h1 class="main__block__title__text">Просмотр билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <TicketsList />

    <div class="main__router-link__box">
      <router-link :to="{ name: 'ticketExample' }" class="main__block__router-link">Просмотреть</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TicketsList from '../../components/view/ticketsList.vue';
export default {
  name: 'viewTicket',
  components: { TicketsList },
};
</script>

<style scoped src="@/css/viewTicket.css"></style>
