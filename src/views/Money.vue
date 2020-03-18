<template>
  <div>
    <Layout>

      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>

      </div>

      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入备注"/>
        </label>
      </div>

      <div>
        <ul class="types">
          <li class="selected">
            支出
          </li>
          <li>收入</li>
        </ul>
      </div>

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

      <div class="color" id="a"></div>
      <div class="color" id="b"></div>
      <div class="color" id="c"></div>
      <div class="color" id="d"></div>
      <div class="color" id="e"></div>
    </Layout>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        background: $color-four;
        /*只有一行，上下居中的话可以让高度和行高相等*/
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }

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

  .numberPad {

    .output {
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 8px 16px;
      text-align: right;
      //加个阴影，但是要下阴影！自己调整！阴影似有似无才是最好！
      box-shadow: inset 0 -5px 5px -5px fade_out($color-highlight,0),inset 0 5px 5px -5px fade_out($color-highlight,0)
    ;
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
      >button{
        width: 25%;
        height: 64px;
        /*得用float布局了，子元素用float*/
        float: left;
        background: transparent;
        border: none;
        &.ok{
          height: 128px;
          float: right;
        }
        &.zero{
          width:50%
        }
        &:nth-child(1){
          background: $color-five;
        }
        &:nth-child(2), &:nth-child(5){
          background: darken($color-five,4%);
        }
        &:nth-child(3), &:nth-child(6),&:nth-child(9){
          background: darken($color-five,8%);
        }
        &:nth-child(4), &:nth-child(7),&:nth-child(10){
          background: darken($color-five,12%);
        }
        &:nth-child(8), &:nth-child(11),&:nth-child(13){
          background: darken($color-five,16%);
        }
        &:nth-child(14){
          background: darken($color-five,20%);
        }
        &:nth-child(12){
          background: darken($color-five,24%);
        }
      }
    }
  }
</style>