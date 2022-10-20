<template>
  <PublicHeader />

  <main class="main">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <router-link to="/" class="router-link" @click="mainSizeNormal()">Посмотреть</router-link>
        <router-link to="/creating" class="router-link" @click="mainSizeNormal()">Создать</router-link>
        <router-link to="/editing" class="router-link" @click="mainSizeNormal()">Редактировать</router-link>
        <router-link to="/generation" class="router-link" @click="mainSizeMin()">Сгенерировать</router-link>
      </div>
    </div>

    <div class="main__block">
      <router-view />
    </div>
  </main>

  <PublicFooter />
</template>

<script>
import PublicHeader from './publicHeader.vue';
import PublicFooter from './publicFooter.vue';
export default {
  name: 'MainIndex',
  components: { PublicHeader, PublicFooter },

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

<style scoped src="@/css/style.css"></style>
