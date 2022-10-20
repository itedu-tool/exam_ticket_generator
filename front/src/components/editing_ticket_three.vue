<template>
  <div class="editing__ticket__three">
    <div class="flex-container">
      <h1 class="title">Редактирование шаблона 2/2</h1>

      <DatabaseQuestions />

      <div class="box">
        <div class="box__image">
          <button class="button">Сохранить изменения</button>
          <div class="image">
            <router-link to="/editing/template__editing__one" class="back__image"></router-link>
            <a class="forward__image"></a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import DatabaseQuestions from './databaseQuestions.vue';
export default {
  name: 'editing__ticket__three',
  components: { DatabaseQuestions },
};
</script>

<style scoped src="@/css/editing_ticket_three.css"></style>
