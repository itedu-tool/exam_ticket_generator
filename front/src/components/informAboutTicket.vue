<!-- Контейнер с информацией о билете -->
<template>
  <div class="grid__container">
    <InputFields msg="Цикловая коммисия" />
    <InputFields msg="Название предмета" />
    <InputFields msg="Факультет" />
    <InputFields msg="Экзаменатор" />
    <InputFields msg="Направление подготовки/Специальность" />
    <InputFields msg="Председатель ЦК" />
  </div>
</template>

<script>
import InputFields from './inputFields.vue';
export default { components: { InputFields } };
</script>
<style scoped src="@/css/informAboutTicket.css"></style>
