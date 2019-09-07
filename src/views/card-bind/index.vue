<template>
  <div class="card-bind h-full bg-gray-f8">
    <citic-header>{{ title }}</citic-header>
    <main class="card-bind_main">
      <section class="card-bind_enabled">
        <p class="card-bind_enabled-title gray-9 t-center">{{ enabledTitle }}</p>
        <ul class="card-bind_enabled-cards">
          <card-item>中信淘宝联名卡淘气版金卡</card-item>
          <card-item>中信银行颜卡金卡</card-item>
        </ul>
      </section>
      <section class="card-bind_disabled">
        <p class="card-bind_disabled-title gray-9 t-center">{{ disabledTitle }}</p>        
        <card-item status="disabled">中信银行xx卡（VISA）</card-item>
        <card-item status="disabled">中信银行xx卡</card-item>
        <p class="card-bind_disabled-tip gray-9">{{ disabledTip }}</p>
      </section>
    </main>
  </div>
</template>

<script>
import CiticHeader from 'Components/CiticHeader.vue';
import CardItem from './components/CardItem.vue';

export default {
  components: {
    CiticHeader,
    CardItem
  },

  data() {
    return {
      title: '快捷支付',
      enabledTitle: '选择需绑定快捷支付的卡片',
      disabledTitle: '—— 以下卡片不可选择 ——',
      disabledTip: '外币单标卡片、未激活卡片、异常无效卡片等不支持快捷绑定支付业务'
    };
  }
}
</script>

<style scoped>
.card-bind_enabled-cards {
  overflow: hidden;
}
.card-bind_enabled-title,
.card-bind_disabled-title {
  font-size: 13px;
  line-height: 18px;
  margin: 10px auto;
}
.card-bind_disabled-title {
  margin-top: 6px;
}
.card-bind_disabled-tip {
  font-size: 13px;
  margin-left: 17px;
  margin-right: 15px;
  line-height: 18px;
}
</style>