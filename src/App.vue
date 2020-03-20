<template>
  <div>
    <router-view />
  </div>

</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
  body{
    line-height: 1.5;
    font-family: $font-hei;
    font-size:16px;
    /*尤雨溪写好的ios系统更美观*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*这个是个不是纯黑色的颜色，看起来比纯黑色柔和一点*/
    color: #333;
    background: $color-six;
  }

</style>
