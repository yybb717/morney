<template>
  <div>
    <router-view />

  </div>

</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body{
    line-height: 1.5;
  }
  /*把a标签的下划线去掉，颜色是继承他的父元素的颜色*/
  a{
    text-decoration: none;
    color:inherit;
  }
</style>
