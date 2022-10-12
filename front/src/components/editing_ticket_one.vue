<template>
  <div class="editing__ticket__one">
    <h1 class="main__block__title">Редактирование билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <div class="grid__container">
      <div class="main__block__container" onfocus="focusElement()">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link"> Билет 1</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 2</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 3</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 4</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 5</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 6</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 7</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 8</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 9</a></figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image"><a href="#" class="ticket__link">Билет 10</a></figcaption>
      </div>
    </div>

    <div class="main__button__box">
      <div class="back__image"></div>
      <router-link to="/editing/template__editing__one">
        <div class="forward__image"></div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'editing__ticket__one',
};
</script>

<style scoped>
:root {
  --white: rgba(255, 255, 255, 1);
  --blue: rgba(64, 93, 145, 1);

  --inter: 'Inter', sans-serif;
}

.editing__ticket__one {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
}

.main__block__title {
  font-weight: bold;
  font-size: calc(calc(1vw + 1vh) * 1.5);
  font-family: 'Inter', sans-serif;
  text-align: center;
  margin: calc(1vw + 1vh) 0px;
  color: rgba(64, 93, 145, 1);
}

.main__block__text {
  font-size: calc(calc(1vw + 1vh) * 1.25);
  font-weight: bold;
  margin-top: calc(1vw + 1vh);
  margin-bottom: calc(1vw + 1vh);
  margin-left: 4%;
  color: rgba(64, 93, 145, 1);
}

.grid__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
}

.main__block__container {
  width: calc(calc(1vw + 1vh) * 4.5);
  margin-bottom: calc(1vw + 1vh);
  cursor: pointer;
}

.main__block__container:nth-child(n + 6) {
  margin: 0;
}

.main__block__image {
  background-image: url(../assets/tickcet.png);
  width: inherit;
  height: calc(calc(1vw + 1vh) * 4);
  background-repeat: no-repeat;
  background-size: contain;
}

.figcaption__image {
  text-align: center;
}

.ticket__link {
  text-decoration: none;
  color: rgba(64, 93, 145, 1);
  font-size: calc(1vw + 1vh);
  font-weight: bold;
}

.ticket__link:focus {
  border-bottom: 2px solid rgba(64, 93, 145, 1);
}

.main__button__box {
  display: flex;
  justify-content: flex-end;
}

.back__image {
  background-image: url(../assets/back_image_inactive.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 2);
  height: calc(calc(1vw + 1vh) * 2);
  margin-right: 20px;
}
.forward__image {
  background-image: url(../assets/forwrd_image_active.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 2);
  height: calc(calc(1vw + 1vh) * 2);
}
</style>
