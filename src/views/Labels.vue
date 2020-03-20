<template>
  <div>
    <Layout>
      <ol class="tags">
        <li>
          <span>衣</span>
          <Icon iconId="right"/>
        </li>
        <li>
          <span>食</span>
          <Icon iconId="right"/>
        </li>
        <li>
          <span>住</span>
          <Icon iconId="right"/>
        </li>
        <li>
          <span>行</span>
          <Icon iconId="right"/>
        </li>
      </ol>
      <div class="creatTag">
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 18px;
    padding: 0 8px;
    background: white;

    > li {
      border-bottom: 1px solid #e6e6e6;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;



      > svg {
        color: #999999;
        width: 26px;
        height: 26px;
      }
    }
  }

  .creatTag {
    text-align: center;
    margin-top: 44px;

    > button {
      background: $color-four;
    padding: 10px 18px;
      border-radius: 5px;
      border: none;
     color: #4d424c;
    }
  }

</style>