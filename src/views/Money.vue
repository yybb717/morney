<template>
  <div>
    <Layout class-prefix="xxx">
      <NumberPad @update:number="onUpdateAmount" @submit="saveRecord"/>
      <Tabs :data-source="recordTypeList"
            :value.sync="record.type"/>
      <FormItem fieldName="备注" placeholder="请在这里输入备注" :value="record.notes" @update:notes="onUpdateNotes"/>
      <Tags  @update:tags="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';

  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';

    import Tabs from '@/components/Tabs.vue';

    import recordTypeList from '@/constants/recordTypeList'
    @Component({components: {FormItem, Tags, NumberPad, Tabs}})

  export default class Money extends Vue {
      recordTypeList = recordTypeList;
    get recordList() {
      return this.$store.state.recordList;
    }
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    created() {
      this.$store.commit('fetchRecords');
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
    saveRecord() {
      if(!this.record.tags||this.record.tags.length===0){
        window.alert('请至少选择一个标签')
        return
      }
      this.$store.commit('createRecord', this.record);
      this.record.notes=''
    }
      onUpdateTags(value: Tag[]){
      this.record.tags=value
      }
      onUpdateAmount(value: number){
        this.record.amount=value
      }
  }
</script>

<style lang="scss">
  .xxx-content {
    display: flex;
    /*从下往上排列 那顺序就反了，需要在html里也反过来 负负得正了*/
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>


</style>