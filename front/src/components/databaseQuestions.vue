<template>
  <h1 class="text">База вопросов</h1>
  <div class="questions">
    <TypeOfQuestions typeOfQuestions="Теоритические вопросы" />
    <TypeOfQuestions typeOfQuestions="Практические задания" />
  </div>

  <div class="ul__container">
    <ul class="ul">
      <AddUlElement msg="Вопрос 4" />
      <DeleteUlElement msg="Вопрос 1" />
      <DeleteUlElement msg="Вопрос 2" />
      <DeleteUlElement msg="Вопрос 3" />
    </ul>

    <ul class="ul">
      <AddUlElement msg="Задание 3" />
      <DeleteUlElement msg="Задание 1" />
      <DeleteUlElement msg="Задание 2" />
    </ul>
  </div>
</template>
<script>
import TypeOfQuestions from './typeOfQuestions.vue';
import AddUlElement from './addUlElement.vue';
import DeleteUlElement from './deleteUlElement.vue';
export default {
  components: { TypeOfQuestions, AddUlElement, DeleteUlElement },
};
</script>
<style scoped src="@/css/databaseQuestions.css"></style>
