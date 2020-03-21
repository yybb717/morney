<template>
  <div>
    <Layout>
      <div class="tags">
<!--        把标签渲染到页面-->
        <router-link class="tag" v-for="tag in tags" :key="tag.id"
                     :to="`/labels/edit/${tag.id}`">
          <span>{{tag.name}}</span>
          <Icon iconId="right"/>
        </router-link>
      </div>
      <div class="creatTag">
        <button @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  //首先需要从数据库获取最新的标签列表data
  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    //其次本组件用tags表示标签列表，内容就是tagListModel里的data
    tags = tagListModel.data;
    //当点击新建标签按钮，事件处理函数createTag会让用户输入标签名，然后执行create函数，返回值命名为message
    //如果message是duplicated，那肯定就是重复了，那就提醒用户重复了；如果message是success，那就加入成功，提醒用户成功了
    createTag() {
      const name = window.prompt('请输出标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        } else if (message === 'success') {
          window.alert('添加成功');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 18px;
    padding: 0 8px;
    background: white;

    > .tag {
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