<template>
  <!-- Редактирование билета. Вторая страница с информацией о билете.-->
  <div class="editing__ticket__two">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>

      <InformAboutTicket />

      <div class="image">
        <button class="back__image" @click="sendData"></button>
        <button class="forward__image" @click="sendData"></button>
      </div>
    </div>
  </div>
</template>

<script>
import editingTicketOne from './editingTicketOne.vue';
import editingTicketThree from './editingTicketThree.vue';
import InformAboutTicket from '@/components/create/informAboutTicket.vue';

export default {
  name: 'editingTicketTwo',
  components: { InformAboutTicket },
  methods: {
    sendData(event) {
      if (event.target == document.querySelector('.back__image')) {
        console.log('back');
        this.$emit('sendData', editingTicketOne);
      } else {
        console.log('forward');
        this.$emit('sendData', editingTicketThree);
      }
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketTwo.css"></style>
