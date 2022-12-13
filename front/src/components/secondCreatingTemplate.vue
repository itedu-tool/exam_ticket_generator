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
            <router-link :to="{ name: 'creating' }" class="back__image"></router-link>
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
  name: 'secondCreatingTemplate',
  components: { DatabaseQuestions },
};
</script>

<style scoped src="@/css/secondCreatingTemplate.css"></style>
