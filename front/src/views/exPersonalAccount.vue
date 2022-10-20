<template>
  <div class="exPersonalAccount">
    <exHeader></exHeader>
    <div class="wrapper">
      <main class="main">
        <div class="container">
          <exPersonalAccountInner></exPersonalAccountInner>
        </div>
      </main>
      <exFooter></exFooter>
    </div>
  </div>
</template>

<script>
import exHeader from '../components/exHeader.vue';
import exFooter from '../components/exFooter.vue';
import exPersonalAccountInner from '../components/exPersonalAccountInner.vue';

export default {
  name: 'exPersonalAccount',
  components: {
    exHeader,
    exFooter,
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
