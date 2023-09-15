<template>
  <!-- Контейнер с удалением вопроса -->
  <div class="ul__element">
    <input class="ul__input" :placeholder="msg" disabled />
    <button class="delete__block" @click="deleteButton">X</button>
  </div>
</template>
<script>
import databaseQuestions from './databaseQuestions.vue';
export default {
  props: {
    msg: String,
  },
  methods: {
    deleteButton() {
      this.$emit('deleteElement', databaseQuestions);
    },
  },
};
</script>
<style scoped src="@/css/deleteUlElement.css"></style>
