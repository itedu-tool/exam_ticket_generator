<template>
  <!-- Поле ввода информации -->
  <div class="container">
    <h1 class="input__title">{{ msg }}</h1>
    <input class="input" type="text" />
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style scoped src="@/css/inputFields.css"></style>
