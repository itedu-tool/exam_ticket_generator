<template>
  <!-- Блок с базой вопросов -->
  <h1 class="text">База вопросов</h1>
  <div class="questions">
    <TypeOfQuestions typeOfQuestions="Теоритические вопросы" />
    <TypeOfQuestions typeOfQuestions="Практические задания" />
  </div>

  <div class="ul__container">
    <ul class="ul ul-teoretical">
      <AddUlElement class="teoretical" msg="Введите вопрос" @emitClick="addComponent" />
      <li v-for="(question, index) in teoreticalQuestions" :key="index">
        <component :is="question" @click="teoreticalQuestions.slice(index, 1)"></component>
      </li>
    </ul>

    <ul class="ul ul-practical">
      <AddUlElement class="practical" msg="Введите задание" @emitClick="addComponent" />
      <li v-for="(question, index) in practicalQuestions" :key="index">
        <component :is="question" @click="practicalQuestions.slice(index, 1)"></component>
      </li>
    </ul>
  </div>
</template>
<script>
import TypeOfQuestions from './typeOfQuestions.vue';
import AddUlElement from './addUlElement.vue';
import DeleteUlElement from './deleteUlElement.vue';
export default {
  components: { TypeOfQuestions, AddUlElement, DeleteUlElement },
  data() {
    return {
      teoreticalQuestions: [],
      practicalQuestions: [],
    };
  },
  methods: {
    addComponent() {
      this.teoreticalQuestions.push('DeleteUlElement');
      /*if (event.target.parentElement.className.includes('teoretical')) {
        if (this.teoreticalQuestions.length >= 2) {
          alert('Вы не можете добавить больше двух теоритических вопросов');
          return;
        }
        this.teoreticalQuestions.push('DeleteUlElement');
      } else if (event.target.parentElement.className.includes('practical')) {
        if (this.practicalQuestions.length >= 2) {
          alert('Вы не можете добавить больше двух практических вопросов');
          return;
        }
        this.practicalQuestions.push('DeleteUlElement');
      }*/
    },
  },
};
</script>
<style scoped src="@/css/databaseQuestions.css"></style>
