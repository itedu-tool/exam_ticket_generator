<template>
  <!-- Редактирование билета. Первая страница со списком билетов.-->
  <div class="editing__ticket__one">
    <h1 class="main__block__title">Редактирование билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <TicketsList />

    <div class="main__button__box">
      <div class="back__image"></div>
      <router-link :to="{ name: 'templateEditingTwo' }">
        <div class="forward__image"></div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import TicketsList from './ticketsList.vue';
export default {
  name: 'editingTicketOne',
  components: { TicketsList },
};
</script>

<style scoped src="@/css/editingTicketOne.css"></style>
