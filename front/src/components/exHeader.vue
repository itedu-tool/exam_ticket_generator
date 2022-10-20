<template>
  <header class="header">
    <div class="header__wrapper header__wrapper--blue">
      <div class="container">
        <div class="header__inner-one">
          <nav class="header__menu">
            <a class="header__menu-item" href="ticket-generator.html">Создание билетов</a>
            <a class="header__menu-item" href="#"><u>Личный кабинет</u></a>
          </nav>
        </div>
      </div>
    </div>
    <div class="header__wrapper">
      <div class="container">
        <div class="header__inner-two">
          <div class="header__inner-two-image">
            <a href="#"><img src="../assets/img/icon-VGYIT.svg" alt="Значок ВГУИТ" /></a>
          </div>
          <div class="header__inner-two-title">
            <h1><a href="#">Генератор экзаменационных билетов</a></h1>
            <p>Программное средство создания экзаменационных билетов<span> Vue</span>.js</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'exHeader',
};
</script>

<style>
.header__wrapper--blue {
  background-color: #405d91;
}

.header__inner-one {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}

/* .header__menu {
} */
.header__menu-item {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  transform: rotate(-0.09deg);
}

.header__menu-item:not(:last-child) {
  margin-right: 60px;
}

.header__inner-two {
  display: flex;
  justify-content: center;
  padding: 25px 0;
}

.header__inner-two-image {
  margin-right: 20px;
}

/* .header__inner-two-title {
} */

.header__inner-two-title h1 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 31px;

  color: #405d91;
}

.header__inner-two-title p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 29px;

  color: #3a373d;
  padding-top: 15px;

  max-width: 500px;
}

.header__inner-two-title p span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #67c59b;
}
</style>
