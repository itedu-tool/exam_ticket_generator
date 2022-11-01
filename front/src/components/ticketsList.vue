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
};
</script>
<style scoped src="@/css/ticketsList.css"></style>
