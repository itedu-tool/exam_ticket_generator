<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__body">
        <span class="nav__text" style="cursor: pointer">Создание билетов</span>
        <span class="nav__text"><a href="#" style="text-decoration: none; color: inherit">Личный кабинет</a></span>
      </div>
    </nav>
    <div class="title__box">
      <div class="logo"></div>
      <div class="title__text">
        <h1 class="title">Генератор экзаменационных билетов</h1>
        <p class="text">Программное средство создания<br />экзаменационных билетов <span class="vue">Vue</span>.js</p>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <router-link to="/" class="router-link" @click="mainSizeNormal()">Посмотреть</router-link>
        <router-link to="/creating" class="router-link" @click="mainSizeNormal()">Создать</router-link>
        <router-link to="/editing" class="router-link" @click="mainSizeNormal()">Редактировать</router-link>
        <router-link to="/generation" class="router-link" @click="mainSizeMin()">Сгенерировать</router-link>
      </div>
    </div>

    <div class="main__block">
      <router-view />
    </div>
  </main>

  <footer class="footer">
    <div class="lists">
      <ul class="about">
        <h1 class="lists__title">О нас</h1>
        <a href="https://github.com/itedu-tool/exam_ticket_generator" target="_blank" class="lists__link">GitHub</a>
        <a href="https://github.com/itedu-tool/exam_ticket_generator" target="_blank" class="lists__link">О проекте</a>
      </ul>
      <ul class="language">
        <h1 class="lists__title">Язык</h1>
        <a class="lists__link">Русский</a>
        <a class="lists__link">Английский</a>
      </ul>
    </div>

    <h1 class="authors__link">
      Сервис создан сообществом на GitHub<br />"<a
        href="https://github.com/itedu-tool/exam_ticket_generator"
        target="_blank"
        >Exam Ticket Generator</a
      >"
    </h1>
  </footer>
</template>

<script>
export default {
  name: 'MainIndex',
  components: {},

  methods: {
    mainSizeMin: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    },
    mainSizeNormal: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 35)';
    },
  },
};
</script>

<style scoped>
:root {
  --white: rgba(255, 255, 255, 1);
  --blue: rgba(64, 93, 145, 1);
  --vue: rgba(103, 197, 155, 1);
  --grey: rgba(245, 245, 245, 1);
  --light_blue: rgba(222, 226, 234, 1);

  --inter: 'Inter', sans-serif;
  --montserrat: 'Montserrat', sans-serif;

  --scale: calc(1vw + 1vh);
}

* {
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
  box-sizing: border-box;
}

/* header */

.header {
  width: 100%;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: rgba(64, 93, 145, 1);
  height: calc(calc(1vw + 1vh) * 4);
  color: rgba(255, 255, 255, 1);
  font-size: calc(calc(1vw + 1vh) * 1);
}

.nav__body {
  margin-right: calc(calc(1vw + 1vh) * 5);
}

.nav__text:first-child {
  margin-right: calc(calc(1vw + 1vh) * 4);
  border-bottom: calc(calc(1vw + 1vh) / 8.5) solid rgba(255, 255, 255, 1);
  text-decoration-skip-ink: none;
}

/* title__box */
.title__box {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 1);
}

.logo {
  background-image: url(../assets/logo.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 8);
  height: calc(calc(1vw + 1vh) * 4);
}

.title__text {
  align-self: flex-end;
}

.title {
  color: rgba(64, 93, 145, 1);
  margin: calc(calc(1vw + 1vh)) 0px;
  font-weight: bold;
  font-size: calc(calc(1vw + 1vh) * 1.5);
}

.text {
  margin-bottom: calc(calc(1vw + 1vh));
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.vue {
  color: rgba(103, 197, 155, 1);
}

/* main */
.main {
  background-color: rgba(245, 245, 245, 1);
  height: calc(calc(1vw + 1vh) * 30);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main__block {
  width: calc(calc(1vw + 1vh) * 35);
  height: calc(calc(1vw + 1vh) * 22.5);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* tickets control */

.tickets__control {
  width: calc(calc(1vw + 1vh) * 11);
  height: calc(calc(1vw + 1vh) * 22.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(255, 255, 255, 1);
}

.control__title {
  font-weight: bold;
  font-size: calc(calc(1vw + 1vh) * 1.5);
  text-align: center;
  color: rgba(64, 93, 145, 1);
}

.button__box {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router-link {
  width: 100%;
  background-color: rgba(64, 93, 145, 1);
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-decoration: none;
  padding: calc(1vw + 1vh) 0;
  font-size: calc(calc(1vw + 1vh) * 1);
}

.router-link:not(:last-child) {
  margin-bottom: calc(1vw + 1vh);
}

/* footer */
.footer {
  display: flex;
  background-color: rgba(222, 226, 234, 1);
}

.lists {
  display: flex;
  margin-left: calc(1vw * 6);
}

.lists__title {
  font-size: calc(calc(1vw + 1vh) * 1.15);
  color: rgba(64, 93, 145, 1);
  margin: 0;
  margin-bottom: calc(calc(1vw + 1vh) * 0.5);
}

.lists__link {
  text-decoration: none;
  color: inherit;
}

.about {
  margin-right: calc(calc(1vw + 1vh) * 4);
}

.about,
.language {
  display: flex;
  flex-direction: column;
  font-size: calc(calc(1vw + 1vh) * 0.8);
  padding: 0;
  text-align: center;
  list-style: none;
  width: calc(calc(1vw + 1vh) * 4.25);
  margin-top: 10px;
}

h1 + .lists__link {
  margin-bottom: calc(calc(1vw + 1vh) * 0.5);
}

.authors__link {
  width: 100%;
  height: max-content;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(calc(1vw + 1vh) * 0.8);
  text-align: right;
  margin-right: calc(1vw * 8);
  align-self: flex-end;
  color: rgba(58, 55, 61, 1);
  font-weight: 400;
}

h1.authors__link > a {
  color: rgba(58, 55, 61, 1);
}

@media (max-width: 620px) {
  .main {
    height: calc(calc(1vw + 1vh) * 40);

    flex-direction: column;
  }
  .tickets__control {
    width: 90%;
    height: calc(calc(1vw + 1vh) * 10);
  }

  .router-link {
    margin-bottom: calc(1vw + 1vh);
    width: 25%;
    font-size: calc(calc(1vw + 1vh) * 0.8);
  }

  .router-link:not(:last-child) {
    margin-right: calc(1vw + 1vh);
  }

  .button__box {
    width: 90%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .main__block {
    width: 90%;
    height: calc(calc(1vw + 1vh) * 23);
  }
}
</style>
