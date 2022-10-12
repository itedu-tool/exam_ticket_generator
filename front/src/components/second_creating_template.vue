<template>
  <div class="editing__ticket__three">
    <div class="flex-container">
      <h1 class="title">Создание шаблона 2/2</h1>
      <h1 class="text">База вопросов</h1>
      <div class="questions">
        <div style="display: flex; align-items: center">
          <h1 class="questions__title">Теоритические вопросы</h1>
          <a href="#" class="image__doc"></a>
        </div>
        <div style="display: flex; align-items: center">
          <h1 class="questions__title">Практические занятия</h1>
          <a href="#" class="image__doc"></a>
        </div>
      </div>

      <div class="ul__container">
        <ul class="ul">
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Вопрос 4" />
            <button class="add__block">Добавить</button>
          </div>
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Вопрос 1" disabled />
            <button class="delete__block" type="reset">X</button>
          </div>
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Вопрос 2" disabled />
            <button class="delete__block" type="reset">X</button>
          </div>
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Вопрос 3" disabled />
            <button class="delete__block" type="reset">X</button>
          </div>
        </ul>

        <ul class="ul">
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Задание 3" />
            <button class="add__block">Добавить</button>
          </div>
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Задание 1" disabled />
            <button class="delete__block" type="reset">X</button>
          </div>
          <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
            <input class="ul__input" placeholder="Задание 2" disabled />
            <button class="delete__block" type="reset" @click="deleteElement()">X</button>
          </div>
        </ul>
      </div>
      <div class="box">
        <div class="box__image">
          <button class="button">Создать шаблон</button>
          <div class="image">
            <router-link to="/creating" class="back__image"></router-link>
            <a class="forward__image"></a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'editing__ticket__three',
};
</script>

<style scoped>
:root {
  --white: rgba(255, 255, 255, 1);
  --blue: rgba(64, 93, 145, 1);
  --grey: rgba(245, 245, 245, 1);
  --light__blue: rgba(222, 226, 234, 1);
  --black: rgb(0, 0, 0);

  --inter: 'Inter', sans-serif;
}

* {
  font-family: 'Inter', sans-serif;
}

.editing__ticket__three {
  width: 100%;

  display: flex;
  justify-content: center;
}

.flex-container {
  width: 90%;
}

/* header */

.title {
  text-align: center;
  color: rgba(64, 93, 145, 1);
  font-size: calc(calc(1vw + 1vh) * 1.25);
  margin: calc((1vw + 1vh) / 3);
}

.questions__title {
  font-size: calc(calc(1vw + 1vh) * 1.05);
  margin: calc((1vw + 1vh) / 3);
}

.text {
  text-align: center;
  color: rgba(64, 93, 145, 1);
  font-size: calc(calc(1vw + 1vh) * 1.05);
  margin: calc((1vw + 1vh) / 3);
}

.questions {
  display: flex;
  justify-content: space-around;
  color: rgba(64, 93, 145, 1);
}

.image__doc {
  background-image: url(../assets/doc.png);
  width: calc(1vw + 1vh);
  height: calc(1vw + 1vh);
  background-size: cover;
}

.ul__container {
  display: flex;
  justify-content: space-around;
}

.ul {
  color: rgb(0, 0, 0);
  font-size: 10px;
  font-weight: bold;
  width: 45%;
  padding: 0;
  margin: 0;
}

.ul__element {
  display: flex;
  align-items: center;
  margin-bottom: calc((1vw + 1vh) / 1.5);
  width: 100%;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
}

.ul__input {
  outline: none;
  margin: 0;
  padding: 8px;
  border: none;
  width: 100%;
  color: rgb(0, 0, 0);
  background-color: rgba(222, 226, 234, 1);
}

.ul__input::placeholder {
  color: rgba(58, 55, 61, 0.7);
}

.ul__element:nth-child(4n + 1) > *:first-child::placeholder {
  color: rgb(0, 0, 0);
}

.add__block {
  color: rgba(64, 93, 145, 1);
  background-color: rgba(217, 217, 217, 1);
  padding: 8px;
  margin: 0;
  width: 40%;
  border: none;
}
.add {
  margin: 0;
  font-size: 16px;
}

.delete__block {
  color: rgba(64, 93, 145, 1);
  background-color: rgba(217, 217, 217, 1);
  padding: 8px;
  margin: 0;
  width: 40%;
  border: none;
  cursor: pointer;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.button {
  color: rgba(255, 255, 255, 1);
  padding: calc((1vw + 1vh) / 1.5);
  background-color: rgba(64, 93, 145, 1);
  border-radius: 40px;
  font-size: calc((1vw + 1vh) / 1.25);
  border: none;
}
.box__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: calc(1vw + 1vh);
}

.image {
  display: flex;
}

.back__image {
  background-image: url(../assets/back_image_active.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(calc(1vw + 1vh) * 2.25);
  height: calc(calc(1vw + 1vh) * 2.25);
  margin-right: calc(1vw + 1vh);
}
.forward__image {
  background-image: url(../assets/forward_image_inactive.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(calc(1vw + 1vh) * 2.25);
  height: calc(calc(1vw + 1vh) * 2.25);
}

.delete__block,
.add__block,
.ul__input {
  font-size: calc(calc(1vw + 1vh) / 1.1);
  font-weight: bold;
}

.delete {
  display: none;
}
</style>
