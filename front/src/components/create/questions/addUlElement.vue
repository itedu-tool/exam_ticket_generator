<template>
  <!-- Контейнер с добавлением нового вопроса -->
  <div class="ul__element">
    <input class="ul__input" :placeholder="msg" />
    <button class="add__block" @click="emitClick">Добавить</button>
  </div>
</template>
<script>
import databaseQuestions from './databaseQuestions.vue';
export default {
  data() {
    return {
      foo: '',
    };
  },
  methods: {
    emitClick() {
      this.$emit('emitClick', databaseQuestions);
    },
  },
  props: {
    msg: String,
  },
};
</script>
<style scoped src="@/css/addUlElement.css"></style>
