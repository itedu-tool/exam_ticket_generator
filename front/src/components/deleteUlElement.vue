<template>
  <div class="ul__element">
    <input class="ul__input" :placeholder="msg" disabled />
    <button class="delete__block" type="reset">X</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>
<style scoped src="@/css/deleteUlElement.css"></style>
