<template>
  <!-- Создание билета. Вторая страница с вопросами.-->
  <div class="second__creating__template">
    <div class="flex-container">
      <h1 class="title">Создание шаблона 2/2</h1>

      <DatabaseQuestions />

      <div class="box">
        <div class="box__image">
          <button class="button">Создать шаблон</button>
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
import firstCreatingTemplateVue from './firstCreatingTemplate.vue';
import DatabaseQuestions from '../../../components/create/questions/databaseQuestions.vue';
export default {
  name: 'secondCreatingTemplate',
  components: { DatabaseQuestions },
  methods: {
    sendData() {
      this.$emit('sendData', firstCreatingTemplateVue);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-create/secondCreatingTemplate.css"></style>
