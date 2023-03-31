<!-- Контейнер с информацией о билете -->
<template>
  <div class="ticket__name">
    <h1 class="ticket__name__text">Название билета:</h1>
    <input class="ticket__name__input" type="text" v-model="ticketName" />
  </div>
  <div class="grid__container">
    <InputFields msg="Цикловая коммисия" @dataTransmission="getStorageData" />
    <InputFields msg="Название предмета" @dataTransmission="getStorageData" />
    <InputFields msg="Факультет" @dataTransmission="getStorageData" />
    <InputFields msg="Экзаменатор" @dataTransmission="getStorageData" />
    <InputFields msg="Направление подготовки/cпециальность" @dataTransmission="getStorageData" />
    <InputFields msg="Председатель ЦК" @dataTransmission="getStorageData" />
  </div>
</template>

<script>
import InputFields from './inputFields.vue';
export default {
  components: { InputFields },
  data() {
    return {
      ticketName: '',
      //setArray: [],
    };
  },
  methods: {
    getStorageData(data) {
      console.log(data.id);
    },
  },
  mounted() {
    if (localStorage.ticketName) {
      this.ticketName = localStorage.ticketName;
    }
  },
  watch: {
    ticketName(newTicketName) {
      localStorage.ticketName = newTicketName;
    },
  },
};
</script>
<style scoped src="@/css/informAboutTicket.css"></style>
