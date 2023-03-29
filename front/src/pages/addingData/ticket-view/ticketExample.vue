<template>
  <!-- Просмотр билета. Вторая страница с примером готового билета. -->
  <div class="ticket__example">
    <div class="title">
      <button class="back" @click="sendData">
        <div class="back__image"></div>
        <p class="back__text">Назад</p>
      </button>
      <p class="main__block__title">Просмотр билета</p>
    </div>

    <div class="flex-container">
      <div class="main__container">
        <div class="inner__container">
          <h1 class="text__university">ФГБОУ ВО «Воронежский государственный университет инженерных технологий»</h1>
          <h1 class="text__university">Цикловая комиссия Информационных технологий Факультет СПО</h1>
          <h1 class="text__university">
            Направление подготовки/специальность: 09.02.07 Информационные системы и программирование
          </h1>
          <h1 class="item__name">Основы алгоритмизации и программирования</h1>
          <h1>БИЛЕТ №</h1>
          <ol>
            <li>Обзор языков программирования. Области применения языков программирования.</li>
            <li>Процедуры и функции</li>
            <li>Практическое задание 1</li>
            <li>Практическое задание 2</li>
          </ol>
          <div class="teachers">
            <h1>Экзаменатор __ Старинин А.Н.</h1>
            <h1>Председатель ЦК __ Володина Ю.Ю.</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import viewTicket from './viewTicket.vue';
export default {
  name: 'ticketExample',
  methods: {
    sendData() {
      this.$emit('sendData', viewTicket);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-view/ticketExample.css"></style>
