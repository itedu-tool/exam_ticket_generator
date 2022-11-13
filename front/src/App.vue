<template>
  <!-- Шапка.Статичная.Не изменять -->
  <header>
    <publicHeader></publicHeader>
  </header>

  <!-- Основной контент.Вставить свою компоненту -->
  <main>
    <publicMain>
      <index></index>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </publicMain>
  </main>

  <!-- Подвал.Статичный.Не изменять -->
  <footer>
    <publicFooter></publicFooter>
  </footer>
</template>
<script>
import publicHeader from './components/publicHeader.vue';
import publicMain from './components/publicMain.vue';
import publicFooter from './components/publicFooter.vue';

export default {
  name: 'App',
  components: { publicFooter, publicMain, publicHeader },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
@import '/assets/style.css';
@import '/assets/style_autorization.css';
}
</style>

