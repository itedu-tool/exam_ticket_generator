<template>
  <!--Просмотр билета. Первая страница со списком билетов.-->
  <div class="view__ticket">
    <h1 class="main__block__title__text">Просмотр билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <TicketsList />

    <div class="main__router-link__box">
      <button class="main__block__router-link" @click="sendData">Просмотреть</button>
    </div>
  </div>
</template>

<script>
import TicketsList from '../../../components/view/ticketsList.vue';
import ticketExample from './ticketExample.vue';
export default {
  name: 'viewTicket',
  components: { TicketsList },
  methods: {
    sendData() {
      this.$emit('sendData', ticketExample);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-view/viewTicket.css"></style>
