<template>
  <div class="ticket__example">
    <div class="title">
      <router-link class="back" to="/">
        <div class="back__image"></div>
        <h1 class="back__text">Назад</h1>
      </router-link>
      <h1 class="main__block__title">Просмотр билета</h1>
    </div>

    <div class="flex-container">
      <div class="main__container">
        <div class="inner__container">
          <h1 class="text__university">ФГБОУ ВО «Воронежский государственный университет инженерных технологий»</h1>
          <h1 class="text__university">Цикловая комиссия Информационных технологий Факультет СПО</h1>
          <h1 class="text__university">
            Направление подготовки/специальность: 09.02.07 Информационные системы и программирование
          </h1>
          <h1 class="item__name">Основы алгоритмизации и программирования</h1>
          <h1>БИЛЕТ № 1</h1>
          <ol>
            <li>Обзор языков программирования. Области применения языков программирования.</li>
            <li>Процедуры и функции</li>
            <li>Практическое задание 1</li>
            <li>Практическое задание 2</li>
          </ol>
          <div class="teachers">
            <h1>Экзаменатор __ Старинин А.Н.</h1>
            <h1>Председатель ЦК __ Володина Ю.Ю.</h1>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ticket__example',
};
</script>

<style scoped>
:root {
  --blue: rgba(64, 93, 145, 1);
  --black: rgba(0, 0, 0, 1);

  --inter: 'Inter', sans-serif;
}

.ticket__example {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 50%;
  cursor: pointer;
}

.back__image {
  background-image: url(../assets/back.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(calc(1vw + 1vh) * 1.15);
  width: calc(calc(1vw + 1vh) * 1.15);
  margin-right: calc(1vw + 1vh);
}

.back__text {
  font: calc(calc(1vw + 1vh) * 1.25) 'Inter', sans-serif;
  color: rgba(64, 93, 145, 1);
  margin: 0;
}

.main__block__title {
  display: flex;
  justify-content: flex-start;
  font: bold calc(calc(1vw + 1vh) * 1.5) 'Inter', sans-serif;
  margin: 15px 0px;
  color: rgba(64, 93, 145, 1);
  width: 100%;
}

.main__block__text {
  font: bold 28px 'Inter', sans-serif;
  margin: 0;
  color: rgba(64, 93, 145, 1);
  margin-left: 66px;
}

.flex-container {
  display: flex;
  justify-content: center;
}

.main__container {
  display: flex;
  width: 90%;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 1);
}

.inner__container {
  width: 90%;
}

.inner__container > * {
  font: calc(calc(1vw + 1vh) / 1.5) 'Inter', sans-serif;
  margin-bottom: calc(calc(1vw + 1vh) / 1.15);
}

.inner__container > h1 {
  text-align: center;
}
.teachers {
  display: flex;
  justify-content: space-around;
}
.teachers > h1 {
  font: calc(calc(1vw + 1vh) / 1.5) 'Inter', sans-serif;
  margin: 0;
}
</style>
