<template>
  <div>
    <!--Просмотр билета. Первая страница со списком билетов.-->
    <div class="template__container" v-if="!showTicketDetails">
      <h1 class="main__block__title">Просмотр билетов</h1>
      <div v-if="tickets.length > 0">
        <h2 class="main__block__text">Выбирите билет:</h2>
        <ul>
          <li v-for="ticket in paginatedTickets" :key="ticket.id">
            <div
              class="ticket"
              @click="
                showTicketDetails = true;
                selectedTicket = ticket;
              "
            >
              <img class="ticket__image" src="@/assets/tickcet.png" alt="Билет" />
              <div class="ticket__content">
                <h2 class="ticket__name"><strong>Билет:</strong> {{ ticket.name }}</h2>
                <div class="ticket__subject"><strong>Предмет:</strong> {{ ticket.subject }}</div>
                <div class="ticket__text">
                  <strong>Теоретические вопросы:</strong> {{ countTheoreticalQuestions(ticket) }}
                </div>
                <div class="ticket__text">
                  <strong>Практические вопросы:</strong> {{ countPracticalQuestions(ticket) }}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="pagination">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="{ active: page === currentPage }"
          >
            {{ page }}
          </button>
        </div>
      </div>
      <div v-else>
        <h1 class="main__block__no-ticket">У вас пока нет билетов</h1>
      </div>
    </div>
    <!--Просмотр билета. Вторая страница с примером билета.-->
    <div class="template__container" v-if="showTicketDetails">
      <div class="title">
        <button class="back" @click="showTicketDetails = false">
          <div class="back__image"></div>
          <p class="back__text">Назад</p>
        </button>
        <p class="main__block__title">Просмотр билета</p>
      </div>

      <div class="ticket__example">
        <div class="main__container">
          <div class="inner__container">
            <p class="text__university">ФГБОУ ВО «Воронежский государственный университет инженерных технологий»</p>
            <hr />
            <div class="text__university-group">
              <p class="text__university">Цикловая комиссия {{ selectedTicket.commission }}</p>
              <p class="text__university">Факультет {{ selectedTicket.faculty }}</p>
            </div>
            <p class="text__university mb">Направление подготовки/специальность: {{ selectedTicket.specialization }}</p>
            <p class="item__name mb">{{ selectedTicket.subject }}</p>
            <h2 class="mb">БИЛЕТ №1</h2>
            <ol class="questions mb">
              <li v-for="question in theoreticalQuestions" :key="question.text">
                {{ question.text }}
              </li>
              <li v-for="question in practicalQuestions" :key="question.text">
                {{ question.text }}
              </li>
            </ol>
            <div class="teachers">
              <p>Экзаменатор ______ {{ selectedTicket.examiner }}</p>
              <p>Председатель ЦК ______ {{ selectedTicket.chairman }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'viewTicket',
  data() {
    return {
      tickets: [],
      paginatedTickets: [],
      itemsPerPage: 3,
      currentPage: 1,
      showTicketDetails: false,
      selectedTicket: null,
    };
  },
  async mounted() {
    let id;
    try {
      const userData = {
        jwt: localStorage.getItem('jwt'),
      };
      await axios.post(`/user/validate_token.php`, userData).then((res) => {
        id = res.data.data.id;
      });
      const data = {
        userID: id,
      };
      await axios.post(`/ticket/getAll_tickets.php`, data).then((res) => {
        this.tickets = res.data;
        this.updatePaginatedTickets();
      });
    } catch (error) {
      alert('Ошибка в работе сервера');
    }
  },
  methods: {
    countPracticalQuestions(ticket) {
      return ticket.questions.filter((question) => question.typeQuestion === 'Практика').length;
    },
    countTheoreticalQuestions(ticket) {
      return ticket.questions.filter((question) => question.typeQuestion === 'Теория').length;
    },
    nextComponent(componentName) {
      this.currentComponent = componentName;
    },
    goToPage(page) {
      this.currentPage = page;
      this.updatePaginatedTickets();
    },
    updatePaginatedTickets() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedTickets = this.tickets.slice(startIndex, endIndex);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tickets.length / this.itemsPerPage);
    },
    practicalQuestions() {
      return this.selectedTicket.questions.filter((question) => question.typeQuestion === 'Практика').slice(0, 2);
    },
    theoreticalQuestions() {
      return this.selectedTicket.questions.filter((question) => question.typeQuestion === 'Теория').slice(0, 2);
    },
  },
};
</script>

<style scoped src="@/css/addingData/viewTicket.css"></style>
