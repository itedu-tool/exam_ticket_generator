<template>
  <!-- Редактирование билета. Первая страница со списком билетов.-->
  <div class="editing__ticket__one">
    <h1 class="main__block__title">Редактирование билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <TicketsList />

    <div class="main__button__box">
      <div class="back__image"></div>
      <button @click="sendData">
        <div class="forward__image"></div>
      </button>
    </div>
  </div>
</template>

<script>
import editingTicketTwo from '../ticket-redact/editingTicketTwo.vue';
import TicketsList from '../../../components/view/ticketsList.vue';
export default {
  name: 'editingTicketOne',
  components: { TicketsList },
  methods: {
    sendData() {
      this.$emit('sendData', editingTicketTwo);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketOne.css"></style>
