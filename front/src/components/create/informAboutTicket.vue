<!-- Контейнер с информацией о билете -->
<template>
  <div class="ticket__name">
    <h1 class="ticket__name__text">Название билета:</h1>
    <input class="ticket__name__input" type="text" v-model="name" />
  </div>
  <div class="grid__container">
    <div class="container-input">
      <label class="input__title">Цикловая коммисия</label>
      <input class="input" type="text" v-model="commission" />
    </div>
    <div class="container-input">
      <label class="input__title">Название предмета</label>
      <input class="input" type="text" v-model="subject" />
    </div>
    <div class="container-input">
      <label class="input__title">Факультет</label>
      <input class="input" type="text" v-model="faculty" />
    </div>
    <div class="container-input">
      <label class="input__title">Экзаменатор</label>
      <input class="input" type="text" v-model="examiner" />
    </div>
    <div class="container-input">
      <label class="input__title">Направление подготовки/cпециальность</label>
      <input class="input" type="text" v-model="specialization" />
    </div>
    <div class="container-input">
      <label class="input__title">Председатель ЦК</label>
      <input class="input" type="text" v-model="chairman" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      commission: '',
      subject: '',
      faculty: '',
      examiner: '',
      specialization: '',
      chairman: '',
    };
  },
  methods: {},
  mounted() {
    if (
      localStorage.name ||
      localStorage.commission ||
      localStorage.subject ||
      localStorage.faculty ||
      localStorage.examiner ||
      localStorage.specialization ||
      localStorage.chairman
    ) {
      this.name = localStorage.name;
      this.commission = localStorage.commission;
      this.subject = localStorage.subject;
      this.faculty = localStorage.faculty;
      this.examiner = localStorage.examiner;
      this.specialization = localStorage.specialization;
      this.chairman = localStorage.chairman;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    commission(newCommission) {
      localStorage.commission = newCommission;
    },
    subject(newSubject) {
      localStorage.subject = newSubject;
    },
    faculty(newFaculty) {
      localStorage.faculty = newFaculty;
    },
    examiner(newExaminer) {
      localStorage.examiner = newExaminer;
    },
    specialization(newSpecialization) {
      localStorage.specialization = newSpecialization;
    },
    chairman(newChairman) {
      localStorage.chairman = newChairman;
    },
  },
  beforeUnmount() {
    this.$emit('data-updated', {
      name: this.name,
      commission: this.commission,
      subject: this.subject,
      faculty: this.faculty,
      examiner: this.examiner,
      specialization: this.specialization,
      chairman: this.chairman,
    });
  },
};
</script>
<style scoped src="@/css/informAboutTicket.css"></style>
