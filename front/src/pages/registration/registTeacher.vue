<template>
  <div class="registration-teacher">
    <form action="" class="form">
      <h2 class="registration__rectangle__title">Регистрация</h2>

      <div class="teacher__block">
        <img class="info-logo" src="@/assets/img/icon-teacher.svg" alt="" />

        <input type="text" placeholder="ФИО" class="information__input" disabled />
        <input type="text" placeholder="E-mail" class="information__input" disabled />
        <input type="text" placeholder="Придумайте пароль" class="information__input" disabled />
        <input type="text" placeholder="Повторите пароль" class="information__input" disabled />
      </div>

      <router-link :to="{ name: 'personalAccount' }">
        <button class="button">Зарегистрироваться</button>
      </router-link>
      <div class="autorization">
        <router-link to="/">Уже есть аккаунт? <span>Войти!</span></router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
.registration-teacher {
  margin: auto;
}

.form {
  background: #fff;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  width: calc(calc(1vw + 1vh) * 15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
}

.registration__rectangle__title {
  font-size: calc(calc(1vw + 1vh) * 1.35);
  padding: 0;
  margin-bottom: 25px;
}

.information__input {
  padding-left: 10px;
  margin-top: calc(calc(1vw + 1vh) * 1.25);
  width: calc(calc(1vw + 1vh) * 11.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background: #dee2ea;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
}

.autorization {
  padding: 10px;
  color: #405d91;
  font-size: calc(calc(1vw + 1vh) / 1.4);
}

.teacher__block {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active {
  border: 1px solid #405d91;
}

.button {
  font-size: calc(calc(1vw + 1vh) / 1.4);
  width: calc(calc(1vw + 1vh) * 8.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background-color: #405d91;
  color: white;
  margin: calc(calc(1vw + 1vh) * 1.25) 0 0 0;
  border: none;
  cursor: pointer;
}

.autorization span {
  text-decoration: underline;
}
</style>
