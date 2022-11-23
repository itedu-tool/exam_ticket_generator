<template>
  <!-- Контейнер с билетами-->
  <div class="grid__container">
    <TicketComponent v-for="number in numbers" :key="number" :identificator="number" />
  </div>
</template>
<script>
import TicketComponent from '@/components/ticketComponent.vue';

export default {
  components: { TicketComponent },
  data: function () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  /*methods: {
    clickOnElement(event) {
      let target = event.target;
      if (target.tagName === 'FIGURE' || target.tagName === 'IMG' || target.tagName === 'FIGCAPTION') {
       document.querySelector('.figcaption__image').classList.add('bottom')
      } else {
        return;
      }
    },
  },*/
};
</script>
<style scoped src="@/css/ticketsList.css"></style>
