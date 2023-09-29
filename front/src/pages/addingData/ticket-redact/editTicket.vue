<template>
  <!-- Редактирование билета. Первая страница со списком билетов.-->
  <div class="template__container" v-if="currentComponent === 'editOne'">
    <h1 class="main__block__title">Редактирование билетов</h1>
  </div>
  <div class="template__container" v-else-if="currentComponent === 'editTwo'">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>
      <InformAboutTicket />
    </div>
    <div class="image">
      <button class="back__image-second" @click="nextComponent(`editOne`)"></button>
      <button class="forward__image-first" @click="nextComponent(`editThree`)"></button>
    </div>
  </div>
  <!-- Редактирование билета. Третья страница с редактированием вопросов.-->
  <div class="template__container" v-else-if="currentComponent === 'editThree'">
    <div class="flex-container">
      <h1 class="title">Редактирование шаблона 2/2</h1>

      <DatabaseQuestions />

      <div class="box">
        <div class="box__image">
          <button class="button">Сохранить изменения</button>
          <div class="image">
            <button class="back__image-second" @click="nextComponent(`editTwo`)"></button>
            <a class="forward__image-second"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import editingTicketTwo from '../ticket-redact/editingTicketTwo.vue';
// import TicketComponent from '../../../components/ticketComponent.vue';
// import TicketsList from '../../../components/ticketsList.vue';
import InformAboutTicket from '../../../components/informAboutTicket.vue';
import DatabaseQuestions from '../../../components/databaseQuestions.vue';

export default {
  components: {
    InformAboutTicket,
    DatabaseQuestions,
  },
  data() {
    return {
      tickets: [],
      currentComponent: 'editOne',
    };
  },
  methods: {
    nextComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>

<style scoped src="@/css/addingData/editingTicket.css"></style>
