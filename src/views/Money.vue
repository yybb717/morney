<template>
  <div>
    <Layout class-prefix="xxx">
      <NumberPad @update:number="onUpdateAmount" @submit="saveRecord"/>
      <Types :type="record.type" @update:type="onUpdateType"/>
      <FormItem fieldName="备注" placeholder="请在这里输入备注" @update:notes="onUpdateNotes"/>
      <Tags  @update:tags="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import store from '@/store/index2';
  // eslint-disable-next-line @typescript-eslint/no-var-requires

    const recordList = store.recordList;
  @Component({components: {FormItem, Tags, NumberPad, Types}})

  export default class Money extends Vue {
    recordList: RecordItem[] = recordList;
    tags = store.tagList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateType(value: string) {
      this.record.type = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
    store.createRecord(this.record)
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