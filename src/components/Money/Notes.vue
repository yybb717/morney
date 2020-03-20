
<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model="value"
             placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    value = '';  //还是得声明一个value，用户不写当做写了个空字符串
  }
</script>



<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .notes {
    /*默认是display:inline;背景色只在字那里，所以要变成block*/
    display: block;
    background: $color-five;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }



</style>
