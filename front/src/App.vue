<template>
<index></index>
  <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
  export default {
  name: 'app',
};
</script>

<style>
#app {
@import '/assets/style.css';
@import '/assets/style_autorization.css';
}
</style>
