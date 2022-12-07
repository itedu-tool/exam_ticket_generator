<!-- Билет -->
<template>
  <figure class="main__block__container" @click="clickOnElement">
    <img class="main__block__image" src="../assets/tickcet.png" alt="Билет" />
    <figcaption class="figcaption__image">Билет {{ identificator }}</figcaption>
  </figure>
</template>
<script>
export default {
  rops: {
    identificator: Number,
  },
  /*methods: {
    clickOnElement(event) {
      let target = event;
      if (
        event.target.tagName === 'FIGURE' ||
        event.target.tagName === 'IMG' ||
        event.target.tagName === 'FIGCAPTION'
      ) {
        target.path[1].childNodes[1].classList.add('border');
        console.log(target.path[1].childNodes[1]);
      } else {
        return;
      }
    },
  },*/
};
</script>
<style scoped src="@/css/ticketComponent.css"></style>
