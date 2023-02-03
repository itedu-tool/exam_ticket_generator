<template>
  <!-- Генерация билета. Вторая страница.-->
  <div class="flex-container">
    <div class="flex-size">
      <h1 class="title">Генерация билетов</h1>
      <router-link :to="{ name: 'generation' }" class="back__box">
        <div class="back__img"></div>
        <h1 class="back__text">Назад</h1>
      </router-link>
      <h1 class="complete">Билеты успешно<br />сгенерированы</h1>
      <div class="complete__image"></div>
      <h1 class="choise__format">Выберите формат</h1>
      <div class="document__box__image">
        <a href="#" class="doc__img"></a>
        <a href="#" class="pdf__img"></a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ticketsGenerationTwo',
};
</script>

<style scoped src="@/css/ticketsGenerationTwo.css"></style>
