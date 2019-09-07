import Vue from 'vue';
import Router from 'vue-router';
import CardBind from 'Views/card-bind/index.vue';
import QuickPay from 'Views/quick-pay/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',

  routes: [
    {
      path: '/card-bind',
      component: CardBind
    },
    {
      path: '/quick-pay',
      component: QuickPay
    }
  ]
})