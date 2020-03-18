<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NumberPad.vue'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {

    .output {
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 8px 16px;
      text-align: right;
      //加个阴影，但是只要上下阴影！自己调整！阴影似有似无才是最好！
      @extend %innerShadow
    }

    .buttons {
      /*得用float布局了,父元素要加clearfix，其实就是给父元素加个伪元素，所以可以直接写在父元素的css里把*/
      /*但是要是有很多地方都要写clearfix的这些东西呢？那就写在helper.scss用$clearFix写这些东西，然后我们在要用的地方继承就行了-->*/
      /*&::after{*/
      /*  content: '';*/
      /*  display: block;*/
      /*  clear: both;*/
      /*}*/
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        /*得用float布局了，子元素用float*/
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 128px;
          float: right;
        }

        &.zero {
          width: 50%
        }

        &:nth-child(1) {
          background: $color-five;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($color-five, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($color-five, 8%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($color-five, 12%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($color-five, 16%);
        }

        &:nth-child(14) {
          background: darken($color-five, 20%);
        }

        &:nth-child(12) {
          background: darken($color-five, 24%);
        }
      }
    }
  }
</style>