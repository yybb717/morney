<template>
  <div class="layout-wrapper" >
    <div class="content" :class="classPrefix && `${classPrefix}-content`" >
<!--  只有content里的内容不一样。所以用插槽先占位。以后谁用了本组件就在本组件里面写上属于你自己的内容就行了    -->
      <slot />
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    props:['classPrefix'],
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .layout-wrapper {
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