<!-- Билет -->
<template>
  <figure class="main__block__container">
    <img class="main__block__image" src="../assets/tickcet.png" alt="Билет" />
    <figcaption class="figcaption__image">Билет {{ identificator }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    identificator: Number,
  },
};
</script>
<style scoped src="@/css/ticketComponent.css"></style>
