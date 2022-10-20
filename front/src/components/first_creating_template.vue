<template>
  <div class="first__creating__template">
    <div class="flex">
      <h1 class="creating__template">Создание шаблона 1/2</h1>

      <div class="ticket__name">
        <h1 class="ticket__name__text">Название билета:</h1>
        <input class="ticket__name__input" type="text" />
      </div>

      <InformAboutTicket />

      <div class="image">
        <a class="back__image"></a>
        <router-link to="/creating/second__creating" class="forward__image"></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import InformAboutTicket from './informAboutTicket.vue';
export default {
  name: 'first__creating__template',
  components: { InformAboutTicket },
};
</script>

<style scoped src="@/css/first_creating_template.css"></style>
