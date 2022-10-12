<template>
  <div class="tickets__generation__one">
    <div class="flex-container">
      <h1 class="title">Генерация билетов</h1>
      <div class="choise__container">
        <h1 class="choise">Выберите шаблон билета</h1>
        <input type="text" list="datalist" placeholder="Шаблон №" class="datalist__box" />
        <datalist class="datalist" id="datalist">
          <option value="Шаблон №1"></option>
          <option value="Шаблон №2"></option>
          <option value="Шаблон №3"></option>
          <option value="Шаблон №4"></option>
          <option value="Шаблон №5"></option>
          <option value="Шаблон №6"></option>
          <option value="Шаблон №7"></option>
          <option value="Шаблон №8"></option>
          <option value="Шаблон №9"></option>
          <option value="Шаблон №10"></option>
        </datalist>
      </div>
      <h1 class="amount__tickets">Укажите количество<br />гинерируемых билетов</h1>
      <div class="amount__flex-container">
        <input type="number" class="amount" min="1" max="10" />
        <h1 class="tickets__text">Билетов</h1>
      </div>
      <div class="router-link__box__size">
        <router-link class="router-link" to="/generation/successfully">Сгенерировать</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'generation__ticket',
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
  color: rgba(64, 93, 145, 1);
}

.tickets__generation__one {
  width: 90%;
}

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: calc(calc(1vw + 1vh) * 1.5);
  text-align: center;
  margin: calc(1vw + 1vh) 0;
}

.choise {
  margin-top: calc(calc(1vw + 1vh) / 1.5);
  margin-bottom: calc(calc(1vw + 1vh) / 1.5);
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.datalist__box {
  width: 60%;
  padding: calc((1vw + 1vh) / 3);
  margin-bottom: calc((1vw + 1vh) * 1.1);
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.datalist {
  width: 300px;
  height: 60px;
}

.amount__tickets {
  margin-top: 0;
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.amount__flex-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.amount {
  width: calc(calc(1vw + 1vh) * 4);
  height: calc(calc(1vw + 1vh) * 2);
  margin-right: calc(1vw + 1vh);
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  padding: calc((1vw + 1vh) / 3);
  box-sizing: border-box;
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.tickets__text {
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.router-link__box__size {
  display: flex;
  justify-content: center;
  width: 100%;
}

.router-link {
  font-size: calc(calc(1vw + 1vh) * 1.25);
  color: rgba(255, 255, 255, 1);
  padding: calc(calc(1vw + 1vh) / 1.25);
  background-color: rgba(64, 93, 145, 1);
  border-radius: 40px;
  border: none;
  text-decoration: none;
}
</style>
