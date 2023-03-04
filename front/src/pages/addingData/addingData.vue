<template>
  <div class="adding-data">
    <div class="tickets__control">
      <h1 class="control__title">Управление билетами</h1>
      <div class="button__box">
        <router-link :to="{ name: 'viewTicket' }" class="router-link" @click="allFunc()">Посмотреть</router-link>
        <router-link :to="{ name: 'ticket-creating' }" class="router-link" @click="allFunc()">Создать</router-link>
        <router-link :to="{ name: 'ticket-edit' }" class="router-link" @click="allFunc()">Редактировать</router-link>
        <router-link :to="{ name: 'ticket-generation' }" class="router-link" @click="mainSizeMin()"
          >Сгенерировать
        </router-link>
      </div>
    </div>

    <div class="main__block">
      <appSlot>
        <template v-slot:default>
          <view-ticket></view-ticket>
        </template>
      </appSlot>
    </div>
  </div>
</template>

<script>
import appSlot from '@/pages/slots/slot.vue';
import viewTicket from './ticket-view/viewTicket.vue';
export default {
  name: 'addingData',

  components: { appSlot, viewTicket },

  methods: {
    allFunc: function () {
      this.mainSizeNormal();
      this.deleteElement();
    },
    deleteElement: function () {
      if (document.querySelector('.main__block').querySelector('.main__block__p')) {
        document.querySelector('.main__block__p').remove();
      }
    },
    mainSizeMin: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    },
    mainSizeNormal: function () {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 35)';
    },
  },
  mounted() {
    if (document.querySelector('.main__block').childNodes.length > 2) {
      document.querySelector('.main__block__p').remove();
    }
    if (document.querySelector('.tickets__generation__one') || document.querySelector('.tickets__generation__two')) {
      document.querySelector('.main__block').style.width = 'calc(calc(1vw + 1vh) * 20)';
    }
  },
};
</script>

<style scoped src="@/css/addingData/addingData.css"></style>
