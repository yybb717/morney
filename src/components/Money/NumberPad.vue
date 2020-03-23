<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.output.length === 16) { return; }
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      const number = parseFloat(this.output);
      this.$emit('update:number', number);
      this.$emit('submit', number);
      this.output = '0'
    }
  }
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