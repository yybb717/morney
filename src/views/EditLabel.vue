<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" iconId="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="leftIcon"> </span>
    </div>
    <FormItem :value="currentTag.name"
              fieldName="标签名"
              placeholder="请在这里输入标签名"
              @update:notes="update"/>
    <Button @click="remove">删除标签</Button>
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
    get currentTag() {
      return this.$store.state.currentTag;
    }

    created() {
      const id = this.$route.params.id;
      this.$store.commit('fetchTags');
      this.$store.commit('setCurrentTag', id);
      if (!this.currentTag) {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.currentTag) {
        this.$store.commit('updateTag', {
          id: this.currentTag.id, name
        });
      }
    }
    remove() {
      if (this.currentTag) {
        this.$store.commit('removeTag', this.currentTag.id);
      }
    }
    goBack() {
      this.$router.back();
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