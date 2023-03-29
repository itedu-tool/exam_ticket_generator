<template>
  <!-- Генерация билета. Вторая страница.-->
  <div class="tickets__generation__two">
    <div class="flex-size">
      <h1 class="title">Генерация билетов</h1>
      <button class="back__box" @click="sendData">
        <div class="back__img"></div>
        <h1 class="back__text">Назад</h1>
      </button>
      <h1 class="complete">Билеты успешно<br />сгенерированы</h1>
      <div class="complete__image"></div>
      <h1 class="choise__format">Выберите формат</h1>
      <div class="document__box__image">
        <a href="#" class="doc__img"></a>
        <a href="#" class="pdf__img"></a>
      </div>
    </div>
  </div>
</template>

<script>
import ticketsGenerationOne from './ticketsGenerationOne.vue';
export default {
  name: 'ticketsGenerationTwo',
  methods: {
    sendData() {
      this.$emit('sendData', ticketsGenerationOne);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-generation/ticketsGenerationTwo.css"></style>
