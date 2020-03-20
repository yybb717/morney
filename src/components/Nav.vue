<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon iconId="label"/>
      标签
    </router-link>

    <router-link to="/money" class="item" active-class="selected">
      <Icon iconId="money"/>
      记一笔
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon iconId="statistics"/>
      统计
    </router-link>
  </nav>

</template>

<script lang="ts">
  export default {
    name: 'Nav',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav {
    background: white;
    display: flex;
   @extend %outerShadow;
    flex-direction: row;
  >.item{
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
    font-size: 18px;
    color:$color-three;
> .icon{
  width: 30px;
  height: 30px;
}
  }
    > .item.selected{
      color: $color-highlight;
    }
  }
</style>
