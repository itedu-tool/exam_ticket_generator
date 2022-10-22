<template>
  <div class="editing__ticket__two">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>

      <div class="ticket__name">
        <h1 class="ticket__name__text">Название билета:</h1>
        <input class="ticket__name__input" type="text" />
      </div>

      <InformAboutTicket />

      <div class="image">
        <router-link to="/editing" class="back__image"></router-link>
        <router-link to="/editing/template__editing__two" class="forward__image"></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import InformAboutTicket from '@/components/informAboutTicket.vue';

export default {
  name: 'editing__ticket__two',
  components: { InformAboutTicket },
};
</script>

<style scoped src="@/css/editingTicketTwo.css"></style>
