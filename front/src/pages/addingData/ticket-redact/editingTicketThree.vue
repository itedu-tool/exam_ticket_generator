<template>
  <!-- Редактирование билета. Третья страница с редактированием вопросов.-->
  <div class="editing__ticket__three">
    <div class="flex-container">
      <h1 class="title">Редактирование шаблона 2/2</h1>

      <DatabaseQuestions />

      <div class="box">
        <div class="box__image">
          <button class="button">Сохранить изменения</button>
          <div class="image">
            <button class="back__image" @click="sendData"></button>
            <a class="forward__image"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editingTicketTwo from './editingTicketTwo.vue';
import DatabaseQuestions from '../../../components/create/questions/databaseQuestions.vue';
export default {
  name: 'editingTicketThree',
  components: { DatabaseQuestions },
  methods: {
    sendData() {
      this.$emit('sendData', editingTicketTwo);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketThree.css"></style>
