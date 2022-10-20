<template>

  <section class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__block">
          <div class="info__rectangle">
            <h2>Авторизация</h2>
            <div class="choice">
              <p1><a href="Authorization.vue" class="info__logo"><img src="image_6.png" alt="">
              </a></p1>
              <p1><a href="#" class="info__logo"><img src="student.png" alt="">
              </a></p1>
            </div>
            <form action="">
              <div class="wrapper__form">
                <p><input  class="form__active" placeholder="ФИО" type="text" id="name"></p>
                <p><input  class="form__active" placeholder="E-mail" type="email" id="email"></p>
                <p><input  class="form__active" placeholder="Придумайте пароль" type="text" id="password"></p>
                <p><input  class="form__active" placeholder="Повторите пароль" type="text"></p>
              </div>
              <button class="button"> Войти </button>
              <div class="registration">

                <a href="Regist_Student.vue">Зарегистрироваться</a>

              </div>
            </form>
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
  padding: 30px;
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

.info__rectangle {
  width: 380px;
  height: 554px;
  margin:auto;
  background: #FFFFFF;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
}

.info__logo {
  margin: 1px 30px 1px 25px;
  display: flex;
  justify-content: space-evenly;
}

.registration {
  text-align: center;
  padding: 10px;
  color: #405D91;

}

text {
  float: right;
  margin: 15px;
  text-align: center;
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

.wrapper__form {
  margin: 10px;
  padding: 10px;
}

.choice {
  text-align: center;
}

</style>
