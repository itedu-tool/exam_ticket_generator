<template>
  <!-- Создание билета. Первая страница с заполнением билета различной информацией. -->
  <div class="first__creating__template">
    <div class="flex">
      <h1 class="creating__template">Создание шаблона 1/2</h1>

      <InformAboutTicket />

      <div class="image">
        <a class="back__image"></a>
        <router-link :to="{ name: 'secondCreating' }" class="forward__image"></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import InformAboutTicket from '../../../components/create/informAboutTicket.vue';
export default {
  name: 'firstCreatingTemplate',
  components: { InformAboutTicket },
};
</script>

<style scoped src="@/css/addingData/ticket-create/firstCreatingTemplate.css"></style>
