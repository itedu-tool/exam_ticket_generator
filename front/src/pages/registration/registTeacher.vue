<template>
  <section class="registration">
    <div class="registration__rectangle">
      <h2 class="registration__rectangle__title">Регистрация</h2>
      <!--<div class="choice">
        <a href="#" class="info__logo"><img src="../assets/info_logo.png" alt="" /></a>
        <a href="Regist_Teacher.vue" class="info__logo"><img src="../assets/info_logo2.png" alt="" /></a>
      </div>
      <form action="" class="form">
        <input name="name" class="form__active" placeholder="Факультет" type="text" id="faculty" />
        <input name="name" class="form" disabled placeholder="ФИО" type="text" id="name" />
        <input name="name" class="form__active" placeholder="Группа" type="text" id="group" />
        <input name="name" class="form" disabled placeholder="E-mail" type="email" id="email" />
        <input name="name" class="form__active" placeholder="№ зачётной книжки" type="text" id="books" />

        <input name="name" class="form" disabled placeholder="Придумайте пароль" type="text" id="password" />
        <input name="name" class="form__none" disabled type="text" />
        <input name="name" class="form" disabled placeholder="Повторите пароль" type="text" />
      </form>-->
      <div class="choice">
        <div class="student__block">
          <router-link to="/registrationStudent" class="info__logo"
            ><img src="@/assets/image_6.png" alt=""
          /></router-link>
          <form action="" class="form">
            <input type="text" placeholder="Факультет" class="information__input" disabled />
            <input type="text" placeholder="Группа" class="information__input" disabled />
            <input type="text" placeholder="№ зачётной книжки" class="information__input" disabled />
          </form>
        </div>
        <div class="teacher__block">
          <a href="Regist_Teacher.vue" class="info__logo"><img src="@/assets/student.png" alt="" /></a>
          <form action="" class="form">
            <input type="text" placeholder="ФИО" class="information__input active" />
            <input type="text" placeholder="E-mail" class="information__input active" />
            <input type="password" placeholder="Придумайте пароль" class="information__input active" />
            <input type="password" placeholder="Повторите пароль" class="information__input active" />
          </form>
        </div>
      </div>
      <router-link :to="{ name: 'addingData' }">
        <button class="button">Зарегистрироваться</button>
      </router-link>

      <div class="autorization">
        <router-link to="/">Уже есть аккаунт? Войти</router-link>
      </div>
    </div>
  </section>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

*,
*:before,
*:after {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  color: #405d91;
}

.registration {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(217, 217, 217, 0.4);
}

.registration__rectangle {
  width: calc(calc(1vw + 1vh) * 30);
  height: calc(calc(1vw + 1vh) * 30);
  background: #fff;
  margin: calc(calc(1vw + 1vh) * 1.25) 0px;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  align-items: center;
}

.registration__rectangle__title {
  margin: calc(calc(1vw + 1vh) * 1.5) 0px 0px 0px;
  font-size: calc(calc(1vw + 1vh) * 1.35);
  padding: 0px;
}

.info__logo {
  margin: 1px 30px 1px 25px;
}

.choice {
  margin: calc(calc(1vw + 1vh) * 1.25) 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

.form {
  margin: calc(calc(1vw + 1vh) * 1.25) 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.autorization {
  padding: 10px;
  color: #405d91;
  font-size: calc(calc(1vw + 1vh) / 1.4);
}
.student__block {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: calc(calc(1vw + 1vh) * 1.25) 0px 0px 0px;
  border: none;
  cursor: pointer;
}
</style>
