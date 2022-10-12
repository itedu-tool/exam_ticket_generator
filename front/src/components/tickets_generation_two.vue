<template>
  <div class="flex-container">
    <div class="flex-size">
      <h1 class="title">Генерация билетов</h1>
      <router-link to="/generation" class="back__box">
        <div class="back__img"></div>
        <h1 class="back__text">Назад</h1>
      </router-link>
      <h1 class="complete">Билеты успешно<br />сгенерированы</h1>
      <div class="complete__image"></div>
      <h1 class="choise__format">Выберите формат</h1>
      <div class="document__box__image">
        <a href="#" class="doc__img"></a>
        <a href="#" class="pdf__img"></a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'tickets__generation__two',
};
</script>

<style scoped>
:root {
  --white: rgba(255, 255, 255, 1);
  --blue: rgba(64, 93, 145, 1);
  --vue: rgba(103, 197, 155, 1);
  --grey: rgba(245, 245, 245, 1);
  --light__blue: rgba(222, 226, 234, 1);

  --inter: 'Inter', sans-serif;
  --montserrat: 'Montserrat', sans-serif;
}

* {
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: rgba(64, 93, 145, 1);
  text-align: center;
}

.flex-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.flex-size {
  width: 90%;
}
.title {
  margin: calc(calc(1vw + 1vh) * 0.75) 0;
  font-size: calc(calc(1vw + 1vh) * 1.5);
}
.back__box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: calc(calc(1vw + 1vh) * 0.75);
  text-decoration: none;
}
.back__img {
  background-image: url(../assets/back.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 1.5);
  height: calc(calc(1vw + 1vh) * 1.5);
  margin-right: 20px;
}
.back__text {
  font-size: calc(calc(1vw + 1vh) * 1.5);
  font-weight: 400;
  margin: 0;
}
.complete {
  font-size: calc(calc(1vw + 1vh) * 1.5);
  margin: calc(calc(1vw + 1vh) * 0.75);
}

.complete__image {
  background-image: url(../assets/successfully.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 3.5);
  height: calc(calc(1vw + 1vh) * 2.75);
  margin: auto;
}

.choise__format {
  margin: calc(calc(1vw + 1vh) * 0.75);
  font-size: calc(calc(1vw + 1vh) * 1.5);
}

.document__box__image {
  display: flex;
  justify-content: center;
  margin: calc(calc(1vw + 1vh) * 1.15);
}
.doc__img {
  background-image: url(../assets/doc_format.png);
  width: calc(calc(1vw + 1vh) * 3.5);
  height: calc(calc(1vw + 1vh) * 2.75);
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
}
.pdf__img {
  background-image: url(../assets/pdf_format.png);
  width: calc(calc(1vw + 1vh) * 3.5);
  height: calc(calc(1vw + 1vh) * 2.75);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
