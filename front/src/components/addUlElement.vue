<template>
  <!-- Контейнер с добавлением нового вопроса -->
  <div class="ul__element">
    <input class="ul__input" :placeholder="msg" />
    <button class="add__block">Добавить</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style scoped src="@/css/addUlElement.css"></style>
