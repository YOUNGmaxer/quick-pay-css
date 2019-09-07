<template>
<li class="card-bind_card-item bg-white m-x-16 m-b-16 relative flex">
  <div class="card-bind_card-logo">
    <img src="@/assets/icon/logo1080.png" alt="citicbank" width="40px" height="40px">
  </div>
  <div class="card-bind_card-info" :class="{ 'gray-9': !isEnabled }">
    <div class="card-bind_card-name t-14"><slot>中信信用卡</slot></div>
    <div class="card-bind_card-number t-16">
      <span class="card-bind_card-number-piece"
       v-for="(piece, index) in cardNumber"
       :key="index">
        {{ piece }}
      </span>
    </div>
  </div>
  <div class="card-bind_card-next absolute align-center" :class="{ hidden: !isEnabled }">
    <span class="card-bind_card-next-icon"></span>
  </div>
</li>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: Array,
      default: () => ['6226', '****', '****', '8866']
    },
    status: {
      type: String,
      default: 'enabled',
      validator(value) {
        return ['enabled', 'disabled'].indexOf(value) !== -1;
      }
    }
  },
  computed: {

    isEnabled() {
      return this.status === 'enabled';
    }
  }
}
</script>

<style scoped>
.card-bind_card-item {
  padding-top: 20px;
  padding-left: 20px;
  height: 88px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 30px 0 rgba(221,221,221,.5);
}

.card-bind_card-info {
  margin-left: 10px;
}

.card-bind_card-name,
.card-bind_card-number {
  line-height: 20px;
}

.card-bind_card-number {
  margin-top: 6px;
}
.card-bind_card-number-piece:not(:last-child) {
  margin-right: 16px;
}

.card-bind_card-logo {
  width: 40px;
}

.card-bind_card-next {
  top: 0;
  right: 10px;
  height: 100%;
}
.card-bind_card-next-icon {
  display: inline-block;
  width: 8px;
  height: 13px;
  background-image: url('~Assets/icon/列表箭头 copy 31080.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>