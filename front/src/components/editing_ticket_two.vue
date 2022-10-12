<template>
  <div class="editing__ticket__two">
    <div class="flex">
      <h1 class="creating__template">Редактирование шаблона 1/2</h1>

      <div class="ticket__name">
        <h1 class="ticket__name__text">Название билета:</h1>
        <input class="ticket__name__input" type="text" />
      </div>

      <div class="grid__container">
        <div class="container">
          <h1 class="input__title">Цикловая комиссия</h1>
          <input class="input" type="text" />
        </div>
        <div class="container">
          <h1 class="input__title">Название предмета</h1>
          <input class="input" type="text" />
        </div>
        <div class="container">
          <h1 class="input__title">Факультет</h1>
          <input class="input" type="text" />
        </div>
        <div class="container">
          <h1 class="input__title">Экзаменатор</h1>
          <input class="input" type="text" />
        </div>
        <div class="container">
          <h1 class="input__title">Направлениеподготовки/специальность</h1>
          <input class="input" type="text" />
        </div>
        <div class="container">
          <h1 class="input__title">Председатель ЦК</h1>
          <input class="input" type="text" />
        </div>
      </div>

      <div class="image">
        <router-link to="/editing" class="back__image"></router-link>
        <router-link to="/editing/template__editing__two" class="forward__image"></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'editing__ticket__two',
};
</script>

<style scoped>
:root {
  --blue: rgba(64, 93, 145, 1);
  --light__blue: rgba(222, 226, 234, 1);

  --inter: 'Inter', sans-serif;
}

* {
  font-family: 'Inter', sans-serif;
  color: rgba(64, 93, 145, 1);
}

.editing__ticket__two {
  width: 90%;
  height: 90%;
}

.flex {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.creating__template {
  font-size: calc(calc(1vw + 1vh) * 1.15);
  text-align: center;
}

.ticket__name {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.ticket__name__text {
  margin: 0;
  font-size: calc(calc(1vw + 1vh) * 1.05);
}

.ticket__name__input {
  background-color: rgba(222, 226, 234, 1);
  border: none;
  border-bottom: 3px solid rgba(64, 93, 145, 1);
  outline: none;
  height: max-content;
  font-size: calc(calc(1vw + 1vh) * 1.05);
  padding-left: 10px;
}

/* grid */

.grid__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
}

.container:nth-child(2n + 1) {
  margin-right: calc(1vh + 1vw);
}
.container {
  margin-bottom: calc(1vw + 1vh);
}

.input__title {
  font-size: calc(calc(1vw + 1vh) / 1.15);
  margin-top: calc(calc(1vw + 1vh) / 2.15);
}

.input {
  width: 100%;
  padding: calc(calc(1vw + 1vh) * 0.3);
  box-sizing: border-box;
  background-color: rgba(222, 226, 234, 1);
  outline-color: rgba(64, 93, 145, 1);
  border: none;
  font-size: calc(calc(1vw + 1vh) / 1.15);
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
}

/* image */

.image {
  display: flex;
  align-self: flex-end;
}

.forward__image {
  background-image: url(../assets/forwrd_image_active.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 2.25);
  height: calc(calc(1vw + 1vh) * 2.25);
}

.back__image {
  background-image: url(../assets/back_image_active.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 2.25);
  height: calc(calc(1vw + 1vh) * 2.25);
  margin-right: calc(1vw + 1vh);
}
</style>
