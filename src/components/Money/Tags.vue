<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <!-- 遍历所有标签的集合----字符串数组dataSource中的每一个元素（标签），把标签放到li里面，这样就成功渲染标签们到页面中了-->
      <!--在遍历所有标签时，如果发现这个标签在selectedTags里面，说明这个标签是被我们点击选中的标签，那么就得给这个标签加上一个class：selected，这样才会有高亮的样式-->
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
        <!--在遍历所有标签时，每个标签都会加上一个事件监听函数toggle，参数就是这个标签 -->
      </li>
    </ul>
  </div>

</template>

<script lang="ts">

  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper) {
    selectedTags: string[] = [];  //内部数据selectedTags也是个字符串数组，以后会是被我们点击了的标签们的数组

    get tagList() {
      return this.$store.state.tagList;
    }
    created() {
      this.$store.commit('fetchTags');
    }
    toggle(tag: string) {
      //参数是标签tag
      //首先得看你这个标签是不是已经在selectedTags被选中的标签们的数组里
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) { //如果已经在，那就说明你再次点击是想把它从selectedTags被选中的标签们的数组里删去。
        this.selectedTags.splice(index, 1);
      } else {  //如果不在，你点击这个标签说明你就是想把它选中，放到selectedTags被选中的标签们的数组里去
        this.selectedTags.push(tag);
      }
      this.$emit("update:tags",this.selectedTags)
    }

  }
</script>
<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px;
    /*让最上面的tags占完剩余的地方*/
    flex-grow: 1;
    display: flex;
    /*从下往上排列 那顺序就反了，需要在html里也反过来 负负得正了*/
    flex-direction: column-reverse;

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

        &.selected {
          background: $color-three;
        }
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
</style>