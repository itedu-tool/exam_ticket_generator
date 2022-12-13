<template>
  <section class="authorization">
    <div class="authorization__rectangle">
      <h2 class="authorization__rectangle__title">Авторизация</h2>
      <div class="choice">
        <router-link to="/">
          <img src="../assets/image_6.png" alt="" />
        </router-link>
        <a href="#" class="info__logo"><img src="../assets/student.png" alt="" /></a>
      </div>
      <form action="" class="form">
        <input name="name" class="form__information" placeholder="E-mail" type="email" id="email" />
        <input name="name" class="form__information" placeholder="Пароль" type="password" id="password" />

        <router-link to="/addingData">
          <button class="button">Войти</button>
        </router-link>

        <div class="registration">
          <router-link to="/registrationStudent">Зарегистрироваться</router-link>
        </div>
      </form>
    </div>
  </section>
  <router-view />
</template>

<script>
export default {
  name: 'autorizationTeacher',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

*,
*:before,
*:after {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  color: #405d91;
}

/*input[type='text'] {
  font-family: inherit; 
  font-size: inherit; 
  line-height: inherit; 
  margin: 0; 
}*/

/*h1 {
  font-size: 30px;
  text-align: center;
  color: #405d91;
}

h2 {
  font-size: 30px;
  text-align: center;
  color: #405d91;
  padding: 30px;
}

h3 {
  display: grid;
  gap: 5%;
}

p {
  color: black;
  text-align: center;
}*/

.authorization {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(217, 217, 217, 0.4);
}

.authorization__rectangle {
  width: calc(calc(1vw + 1vh) * 20);
  height: calc(calc(1vw + 1vh) * 25.75);
  background: #fff;
  margin: calc(calc(1vw + 1vh) * 1.25) 0px;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authorization__rectangle__title {
  margin: calc(calc(1vw + 1vh) * 1.5) 0px 0px 0px;
  font-size: calc(calc(1vw + 1vh) * 1.35);
  padding: 0px;
}

.form {
  margin: calc(calc(1vw + 1vh) * 1.25) 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__information {
  padding-left: 10px;
  margin-top: calc(calc(1vw + 1vh) * 1.25);
  width: calc(calc(1vw + 1vh) * 11.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background: #dee2ea;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
}

.form__information:first-child {
  margin-top: 0px;
}
.form__information::placeholder {
  font-size: calc(calc(1vw + 1vh) * 1.05);
}

.choice {
  margin: calc(calc(1vw + 1vh) * 1.25) 0px 0px 0px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  justify-content: space-around;
}
.choice__img {
  width: calc(calc(1vw + 1vh) / 0.35);
  height: calc(calc(1vw + 1vh) / 0.35);
}

.button {
  font-size: calc(calc(1vw + 1vh) * 1.05);
  width: calc(calc(1vw + 1vh) * 8.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background-color: #405d91;
  color: white;
  margin: calc(calc(1vw + 1vh) * 2.75) 0px 0px 0px;
  border: none;
  cursor: pointer;
}

.registration {
  text-align: center;
  padding: 10px;
  font-size: calc(calc(1vw + 1vh));
}
</style>
