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
    display: flex;
    /*用阴影的诀窍就是不能让别人看出你用了阴影*/
    box-shadow: 0 0 3px rgba(255,41,41,0.25);
    flex-direction: row;
  >.item{
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
    font-size: 22px;
    color:$color-three;
> .icon{
  width: 32px;
  height: 32px;
}
  }
    > .item.selected{
      color: $color-highlight;
    }
  }
</style>
