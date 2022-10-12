<template>
  <div class="view__ticket">
    <h1 class="main__block__title__text">Просмотр билета</h1>
    <h1 class="main__block__text">Выбирите билет:</h1>

    <div class="grid__container">
      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 1</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 2</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 3</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 4</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 5</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 6</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 7</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 8</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 9</figcaption>
      </div>

      <div class="main__block__container">
        <div class="main__block__image"></div>
        <figcaption class="figcaption__image">Билет 10</figcaption>
      </div>
    </div>

    <div class="main__router-link__box">
      <router-link to="/ticket__example" class="main__block__router-link">Просмотреть</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'view__ticket',
};
</script>

<style scoped>
:root {
  --white: rgba(255, 255, 255, 1);
  --blue: rgba(64, 93, 145, 1);

  --inter: 'Inter', sans-serif;
}

.view__ticket {
  background-color: rgba(255, 255, 255, 1);
  width: 90%;
  height: 90%;
}

.main__block__title__text {
  font: bold calc(calc(1vw + 1vh) * 1.5) 'Inter', sans-serif;
  text-align: center;
  margin: calc(1vw + 1vh) 0px;
  color: rgba(64, 93, 145, 1);
}

.main__block__text {
  font: bold calc(calc(1vw + 1vh) * 1.25) 'Inter', sans-serif;
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

.main__block__image {
  background-image: url(../assets/tickcet.png);
  width: inherit;
  height: calc(calc(1vw + 1vh) * 4);
  background-repeat: no-repeat;
  background-size: contain;
}

.figcaption__image {
  cursor: pointer;
  text-align: center;
  font: bold calc(1vw + 1vh) 'Inter', sans-serif;
  color: rgba(64, 93, 145, 1);
}

.figcaption__image:focus {
  outline: 2px solid rgba(64, 93, 145, 1);
}

.main__router-link__box {
  display: flex;
  justify-content: flex-end;
  margin-right: 3%;
}

.main__block__router-link {
  font: calc(calc(1vw + 1vh)) 'Inter', sans-serif;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(64, 93, 145, 1);
  border-radius: 40px;
  padding: calc(1vw * 1.25);
  border: none;
  text-decoration: none;
  cursor: pointer;
}
</style>
