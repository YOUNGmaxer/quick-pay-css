<template>
<div class="quick-pay h-full bg-gray-f8">
  <citic-header>{{ title }}</citic-header>
  <main class="quick-pay_main">
    <ul class="quick-pay_pay-list bg-white">
      <pay-item></pay-item>
      <pay-item payType="jdpay"></pay-item>
      <pay-item payType="meituanpay" :bindStatus="true"></pay-item>
      <pay-item payType="wechatpay" :bindStatus="true"></pay-item>
    </ul>
    <div class="quick-pay_info m-t-16 m-l-18 gray-9">
      <p class="quick-pay_info-agreement">
        {{ infoAgreement }}<span style="color: #1ea6fe">{{ infoProtocol }}</span>
      </p>
      <p class="quick-pay_info-tip" v-for="(item, index) in infoTip" :key=index>{{ item }}</p>
    </div>
  </main>
</div>
</template>

<script>
import CiticHeader from 'Components/CiticHeader.vue';
import PayItem from './components/PayItem.vue';

export default {
  components: {
    CiticHeader,
    PayItem
  },

  data() {
    return {
      title: '快捷支付',
      infoAgreement: '点击绑定以上任意支付机构，即表明同意',
      infoProtocol: '《中信银行信用卡快捷支付绑卡服务协议》',
      infoTip: [ '温馨提示：',
        '1.如您后续需解除绑定，请登陆第三方支付平台操作。',
        '2.以上营销活动细则，请查阅中信银行信用卡官网。']
    }
  }
}
</script>

<style scoped>
.quick-pay_info {
  margin-right: 26px;
  font-size: 13px;
}
.quick-pay_info-agreement,
.quick-pay_info-tip {
  line-height: 19px;
}
.quick-pay_info-agreement {
  margin-bottom: 15px;
}
</style>