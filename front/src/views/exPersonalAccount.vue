<template>
  <div class="exPersonalAccount">
    <publicHeader></publicHeader>
    <div class="wrapper">
      <main class="main">
        <div class="container">
          <exPersonalAccountInner></exPersonalAccountInner>
        </div>
      </main>
      <publicFooter></publicFooter>
    </div>
  </div>
</template>

<script>
import publicHeader from '../components/common/publicHeader.vue';
import publicFooter from '../components/common/publicFooter.vue';
import exPersonalAccountInner from '../components/exPersonalAccountInner.vue';

export default {
  name: 'exPersonalAccount',
  components: {
    publicHeader,
    publicFooter,
    exPersonalAccountInner,
  },
};
</script>

<style>
/*main------------------------------------------*/

.main {
  background: rgba(217, 217, 217, 0.4);
}

.main .container {
  align-self: center;
}
</style>
