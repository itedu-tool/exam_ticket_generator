<template>
  <!-- Создание билета. Первая страница с заполнением билета различной информацией. -->
  <div class="first__creating__template">
    <div class="flex">
      <h1 class="creating__template">Создание шаблона 1/2</h1>

      <InformAboutTicket />

      <div class="image">
        <a class="back__image"></a>
        <button class="forward__image" @click="sendData"></button>
      </div>
    </div>
  </div>
</template>

<script>
import secondCreatingTemplate from './secondCreatingTemplate.vue';
import InformAboutTicket from '../../../components/create/informAboutTicket.vue';
export default {
  name: 'firstCreatingTemplate',
  components: { InformAboutTicket },
  methods: {
    sendData() {
      this.$emit('sendData', secondCreatingTemplate);
    },
  },
};
</script>

<style scoped src="@/css/addingData/ticket-create/firstCreatingTemplate.css"></style>
