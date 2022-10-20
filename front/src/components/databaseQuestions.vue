<template>
  <h1 class="text">База вопросов</h1>
  <div class="questions">
    <div style="display: flex; align-items: center">
      <h1 class="questions__title">Теоритические вопросы</h1>
      <a href="#" class="image__doc"></a>
    </div>
    <div style="display: flex; align-items: center">
      <h1 class="questions__title">Практические занятия</h1>
      <a href="#" class="image__doc"></a>
    </div>
  </div>

  <div class="ul__container">
    <ul class="ul">
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Вопрос 4" />
        <button class="add__block">Добавить</button>
      </div>
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Вопрос 1" disabled />
        <button class="delete__block" type="reset">X</button>
      </div>
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Вопрос 2" disabled />
        <button class="delete__block" type="reset">X</button>
      </div>
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Вопрос 3" disabled />
        <button class="delete__block" type="reset">X</button>
      </div>
    </ul>

    <ul class="ul">
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Задание 3" />
        <button class="add__block">Добавить</button>
      </div>
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Задание 1" disabled />
        <button class="delete__block" type="reset">X</button>
      </div>
      <div class="ul__element" style="background-color: rgba(222, 226, 234, 1)">
        <input class="ul__input" placeholder="Задание 2" disabled />
        <button class="delete__block" type="reset" @click="deleteElement()">X</button>
      </div>
    </ul>
  </div>
</template>
<script></script>
<style scoped src="@/css/databaseQuestions.css"></style>
