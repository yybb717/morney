<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop() readonly type!: string; //type现在是外部数据了    !表示我就不给你初始值
    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:type', type)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .types {
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
      }
    }

  }
</style>