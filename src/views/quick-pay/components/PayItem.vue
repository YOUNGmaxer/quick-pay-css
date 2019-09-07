<template>
<li class="quick-pay_pay-item bg-white flex space-between m-l-16 relative">
  <div class="quick-pay_pay-item-symbol align-center">
    <img class="quick-pay_pay-item-logo" :src="payImgSrc"/>
    <div class="quick-pay_pay-item-name">{{ payName }}</div>
  </div>
  <div class="quick-pay_pay-item-info align-center m-r-16">
    <div class="quick-pay_pay-item-status t-12 gray-9" :class="unbindClass">{{ bindInfo }}</div>
    <span class="quick-pay_pay-item-next m-l-10" :class="{ hidden: bindStatus }"></span>
  </div>
</li>
</template>

<script>
export default {
  props: {
    payType: {
      type: String,
      default: 'alipay'
    },
    bindStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      payImgMap: {
        alipay: require('Assets/icon/支付宝1080.png'),
        jdpay: require('Assets/icon/京东支付1080.png'),
        meituanpay: require('Assets/icon/美团支付1080.png'),
        wechatpay: require('Assets/icon/微信支付1080.png')
      },
      payMap: {
        alipay: '支付宝',
        jdpay: '京东支付',
        meituanpay: '美团支付',
        wechatpay: '微信支付'
      },
      unbindContent: '绑定返10元刷卡金',
      bindContent: '已绑定'
    }
  },

  computed: {
    payImgSrc() {
      return this.payImgMap[this.payType];
    },
    payName() {
      return this.payMap[this.payType];
    },
    bindInfo() {
      return this.bindStatus ? this.bindContent : this.unbindContent;
    },
    unbindClass() {
      return {
        'quick-pay_pay-item-status__unbind': !this.bindStatus
      };
    }
  }
}
</script>

<style scoped>
.quick-pay_pay-item {
  height: 50px;
}

.quick-pay_pay-item:not(:last-child)::after {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  margin-left: 16px;
  background-color: #d7d7d7;
  transform: scaleY(.5);
}

.quick-pay_pay-item-logo {
  width: 22px;
  height: 22px;
}

.quick-pay_pay-item-name {
  font-size: 15px;
  line-height: 21px;
  padding-left: 9px;
}

.quick-pay_pay-item-next {
  display: inline-block;
  width: 7px;
  height: 12px;
  background-image: url('~Assets/icon/列表箭头 copy 31080.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.quick-pay_pay-item-status {
  line-height: 16px;
}

.quick-pay_pay-item-status__unbind {
  color: #f00036;
}
</style>