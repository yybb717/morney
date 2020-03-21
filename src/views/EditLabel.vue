<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" iconId="left"/>
      <span class="title">编辑标签</span>
      <span class="leftIcon"> </span>
    </div>
    <FormItem fieldName="标签名" placeholder="请在这里输入标签名"/>
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 18px;
    padding: 12px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftIcon {
      width: 28px;
      height: 28px;
    }
    .title {
    }
  }
</style>