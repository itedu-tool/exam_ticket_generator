<template>
  <div class="authorization-teacher">
    <form action="" class="form">
      <h2 class="authorization__rectangle__title">Авторизация</h2>
      <img src="@/assets/img/icon-teacher.svg" alt="" />

      <input name="name" class="form__information" placeholder="E-mail" type="email" id="email" />
      <input name="name" class="form__information" placeholder="Пароль" type="password" id="password" />

      <router-link to="/personalAccount">
        <button class="button">Войти</button>
      </router-link>

      <div class="registration">
        <router-link to="/registrationTeacher">Зарегистрироваться!</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'autorizationTeacher',
};
</script>

<style scoped>
.authorization-teacher {
  margin: auto;
}
.form {
  width: calc(calc(1vw + 1vh) * 15);
  background: #fff;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
}

h2 {
  margin-bottom: 20px;
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
  margin-top: 0;
}

.form__information::placeholder {
  font-size: calc(calc(1vw + 1vh) * 1.05);
}

.button {
  font-size: calc(calc(1vw + 1vh) * 1.05);
  width: calc(calc(1vw + 1vh) * 8.5);
  height: calc(calc(1vw + 1vh) * 1.75);
  background-color: #405d91;
  color: white;
  margin-top: 50px;
  border: none;
  cursor: pointer;
}

.registration {
  text-align: center;
  padding: 10px;
  font-size: calc(calc(1vw + 1vh));
  text-decoration: underline #405d91;
}
</style>
