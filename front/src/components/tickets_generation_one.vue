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

<style scoped src="@/css/tickets_generation_one.css"></style>
