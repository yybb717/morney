<template>
  <div class="nav-wrapper">
    <div class="content"><p>Money.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    /*让整个记账页面的高度固定为全部屏幕。需要固定高度100vh*/
    height: 100vh;
  }
  .content {
    /*让内容能多宽（高）就多宽（高），这样导航栏就到最底部了*/
    flex-grow: 1;
    /* 让内容溢出的部分可以滚动*/
    overflow: auto;
  }
</style>