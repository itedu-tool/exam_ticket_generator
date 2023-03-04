<template>
  <!-- Редактирование билета. Вторая страница с информацией о билете.-->
  <div class="editing__ticket__two">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>

      <InformAboutTicket />

      <div class="image">
        <router-link :to="{ name: 'ticket-edit' }" class="back__image"></router-link>
        <router-link :to="{ name: 'templateEditingThree' }" class="forward__image"></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import InformAboutTicket from '@/components/create/informAboutTicket.vue';

export default {
  name: 'editingTicketTwo',
  components: { InformAboutTicket },
};
</script>

<style scoped src="@/css/addingData/ticket-edit/editingTicketTwo.css"></style>
