<template>

  <section class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__block">
          <div class="info_rectangle">
            <h2>Регистрация</h2>
            <div class="choice">
              <p1><a href="Regist_Student.vue" class="info__logo"><img src="image%206.png" alt="">
              </a></p1>
              <p1><a href="#" class="info__logo"><img src="student.png" alt="">
              </a></p1>
            </div>
            <form action="">
              <div class="wrapper__form">
                <input name="name" class="form" disabled placeholder="Факультет" type="text" id="faculty" />
                <input name="name" class="form__active" placeholder="ФИО" type="text" id="name" />
                <input name="name" class="form" disabled placeholder="Группа" type="text" id="group" />
                <input name="name" class="form__active" placeholder="E-mail" type="email" id="email" />
                <input name="name" class="form" disabled placeholder="№ зачётной книжки" type="text" id="books" />



                <input name="name" class="form__active" placeholder="Придумайте пароль" type="text" id="password" />
                <input name="name" class="form__none" type="text" />
                <input name="name" class="form__active" placeholder="Повторите пароль" type="text" />
              </div>
            </form>
            <button class="button"> Зарегистрироваться </button>
            <div class="registration">
              <a href="Authorization.html">Уже есть аккаунт? Войти</a>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


*,*:before,*:after {
  box-sizing: border-box;

}

input[type="text"] {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 1 */
  line-height: inherit; /* 1 */
  margin: 0; /* 2 */
}

body {
  background: #F5F5F5;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

h1{
  font-size: 30px;
  text-align: center;
  color: #405D91;
}
h2 {
  font-size: 30px;
  text-align: center;
  color: #405D91;
  padding: 10px;
}

h3{
  display: grid;
  gap: 5%;
}

p{
  color: black;
  text-align: center;
}



.container {
  width: 100%;
  margin: 0 auto;
}


.info {

}

.info__wrapper {

}

.info__logo {
  margin: 1px 30px 1px 25px;
  display: flex;
  justify-content: space-between;
}


.registration {
  text-align: center;
  padding: 10px;
  color: #405D91;
  vertical-align: middle;
}

button {
  font-size: 16px;
  width: 209px;
  height: 43px;
  text-align: center;
  background: #405D91;
  color: white;
  margin: 0 auto;
  display: block;
}

.form {
  width: 211px;
  height: 35px;
  left: 471px;
  top: 468px;
  background: #DEE2EA;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
}

.form__active {
  width: 221px;
  height: 35px;
  left: 749px;
  top: 468px;
  background: #DEE2EA;
  border: 2px solid #405D91;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
}

.wrapper__form {
  margin: 23px;
  display: grid;
  grid-template-areas: "a b" "c d";
}

.form__none {
  display: none;
}


</style>
