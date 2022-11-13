<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__body">
        <span class="nav__text" style="cursor: pointer">Создание билетов</span>
        <span class="nav__text"><a href="#" style="text-decoration: none; color: inherit">Личный кабинет</a></span>
      </div>
    </nav>
    <div class="title__box">
      <div class="logo"></div>
      <div class="title__text">
        <h1 class="title">Генератор экзаменационных билетов</h1>
        <p class="text">Программное средство создания<br />экзаменационных билетов <span class="vue">Vue</span>.js</p>
      </div>
    </div>
  </header>
</template>
<script></script>
<style>
* {
  font-family: 'Inter', sans-serif;
}

.header {
  width: 100%;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: rgba(64, 93, 145, 1);
  height: calc(calc(1vw + 1vh) * 4);
  color: rgba(255, 255, 255, 1);
  font-size: calc(calc(1vw + 1vh) * 1);
}

.nav__body {
  margin-right: calc(calc(1vw + 1vh) * 5);
}

.nav__text:first-child {
  margin-right: calc(calc(1vw + 1vh) * 4);
  border-bottom: calc(calc(1vw + 1vh) / 8.5) solid rgba(255, 255, 255, 1);
  text-decoration-skip-ink: none;
}

.title__box {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 1);
}

.logo {
  background-image: url(../../assets/img/icon-VGYIT.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: calc(calc(1vw + 1vh) * 8);
  height: calc(calc(1vw + 1vh) * 4);
}

.title__text {
  align-self: flex-end;
}

.title {
  color: rgba(64, 93, 145, 1);
  margin: calc(calc(1vw + 1vh)) 0px;
  font-weight: bold;
  font-size: calc(calc(1vw + 1vh) * 1.5);
}

.text {
  margin-bottom: calc(calc(1vw + 1vh));
  font-size: calc(calc(1vw + 1vh) * 1.25);
}

.vue {
  color: rgba(103, 197, 155, 1);
}
</style>
