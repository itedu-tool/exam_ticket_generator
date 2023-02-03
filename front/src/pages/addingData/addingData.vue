<template>
  <!-- Основной контент страницы. Изменяемый для разных страниц. -->
  <main class="main">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <router-link :to="{ name: 'viewTicket' }" class="router-link" @click="mainSizeNormal()">Посмотреть</router-link>
        <router-link :to="{ name: 'creating' }" class="router-link" @click="mainSizeNormal()">Создать</router-link>
        <router-link :to="{ name: 'editing' }" class="router-link" @click="mainSizeNormal()">Редактировать</router-link>
        <router-link :to="{ name: 'generation' }" class="router-link" @click="mainSizeMin()">Сгенерировать</router-link>
      </div>
    </div>

    <div class="main__block">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: 'addingData',

  methods: {
    mainSizeMin: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    },
    mainSizeNormal: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 35)';
    },
  },
};
</script>

<style scoped src="@/css/publicMain.css"></style>
