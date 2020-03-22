<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" iconId="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="leftIcon"> </span>
    </div>
    <FormItem :value="tag.name"
              fieldName="标签名"
              placeholder="请在这里输入标签名"
              @update:notes="updateTag"/>
    <Button @click="removeTag">删除标签</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string; name: string } = undefined;

    created() {
      const tag = window.findTag(this.$route.params.id);
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }

    updateTag(value: string) {
      if (this.tag) {
        window.updateTag(this.tag.id,value)
      }
    }

    removeTag(){
      if (this.tag) {
        if(window.removeTag(this.tag.id)){
          this.$router.back()
        } else {
          window.alert('删除失败')
        }
      }
    }

    goBack(){
      this.$router.back()
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