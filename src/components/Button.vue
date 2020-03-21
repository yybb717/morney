<template>
  <div class="wrapper">
    <button class="button" @click="$emit('click',$event)" ><slot/></button>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Button extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .wrapper{
    text-align: center;
    margin-top: 50px;
    .button {
    background: $color-four;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    color: #4d424c;
  }}

</style>