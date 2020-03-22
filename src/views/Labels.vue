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
      <div>
        <Button @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';
  //首先需要从数据库获取最新的标签列表data
  // tagListModel.fetch();
  @Component({
    components: {Button}
  })
  export default class Labels extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList;
    }
    beforeCreate() {
      this.$store.commit('fetchTags');
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
    background: $color-four;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    color: #4d424c;
    margin-top: 44px;
    margin-left: 37%;
  }

</style>