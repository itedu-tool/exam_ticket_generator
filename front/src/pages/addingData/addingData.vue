<template>
  <!-- Основной контент страницы. Изменяемый для разных страниц. -->
  <main class="main">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <router-link :to="{ name: 'viewTicket' }" class="router-link" @click="allFunc()">Посмотреть</router-link>
        <router-link :to="{ name: 'creating' }" class="router-link" @click="allFunc()">Создать</router-link>
        <router-link :to="{ name: 'editing' }" class="router-link" @click="allFunc()">Редактировать</router-link>
        <router-link :to="{ name: 'generation' }" class="router-link" @click="mainSizeMin()">Сгенерировать</router-link>
      </div>
    </div>

    <div class="main__block">
      <p class="main__block__p">Нажмите на интересующую вас категорию в списке управления билетами</p>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: 'addingData',

  methods: {
    allFunc: function () {
      this.mainSizeNormal();
      this.deleteElement();
    },
    deleteElement: function () {
      if (document.querySelector('.main__block').querySelector('.main__block__p')) {
        document.querySelector('.main__block__p').remove();
      }
    },
    mainSizeMin: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    },
    mainSizeNormal: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 35)';
    },
  },
  mounted() {
    if (document.querySelector('.main__block').childNodes.length > 2) {
      document.querySelector('.main__block__p').remove();
    }
    if (document.querySelector('.tickets__generation__one') || document.querySelector('.tickets__generation__two')) {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    }
  },
};
</script>

<style scoped src="@/css/publicMain.css"></style>
