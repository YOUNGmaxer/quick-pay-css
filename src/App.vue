<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable */
import CardBind from './views/card-bind/index';
import QuickPay from './views/quick-pay/index';

export default {
  name: 'app',
  components: {
    QuickPay
  }
}
</script>

<style>
</style>
