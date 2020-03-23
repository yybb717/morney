<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
    <li v-for="item in dataSource" :key="item.value" class="tabs-item"
        :class="{ [classPrefix + '-tabs-item']: classPrefix, selected: item.value === value }"
        @click="select(item)">{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  type DataSourceItem = { text: string;value: string }
  @Component
  export default class Tabs extends Vue {
    //外部数据dataSource用于接受到底有几个块，每个块的名字和符号是啥
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    //外部数据value用于表示选中了哪个块（的符号）
    @Prop(String) readonly value!: string;
    //外部数据 classPrefix用于给加上class的前缀。父组件传值后就会成为唯一的选择器
    @Prop(String) classPrefix?: string;

    liClass(item: DataSourceItem) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: item.value === this.value
      };
    }

    //若是点击了一个块，就会把这个块的符号给父组件，父组件会让这个符号成为新的value。selected: item.value === value因此这个块就会有class：selected了
    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tabs {
    background: $color-three;
    display: flex;
    font-size: 24px;

    > li {
      /*border: 1px solid black;*/
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 0;
      position: relative;

      &.selected::after {
        /*不可以用border，不然消失的时候整个会动，那就加一个伪元素，让伪元素绝对定位在它下面就行了*/
        /*border-bottom: 4px solid;*/
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
      }}}

</style>