<template>
<header class="citic-header flex relative bg-white">
  <div class="citic-header_back absolute align-center">
    <span class="citic-header_back-icon"></span>
    <div class="citic-header_back-content t-14 gray-6">{{ backContent }}</div>
  </div>
  <div class="citic-header_title flex-1 flex-center t-18"><slot></slot></div>
</header>
</template>

<script>
export default {
  props: {
    backContent: {
      type: String,
      default: '返回'
    }
  }
}
</script>

<style scoped>
.citic-header {
  height: 44px;
  padding-top: 20px;
}

.citic-header_back {
  left: 16px;
  bottom: 10px;
}

.citic-header_back-icon {
  display: inline-block;
  width: 10px;
  height: 15px;
  background-image: url('~Assets/icon/头部返回 copy1080.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.citic-header_back-content {
  line-height: 24px;
  margin-left: 5px;
}
</style>