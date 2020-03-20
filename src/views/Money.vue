<template>
  <div>
    <Layout class-prefix="xxx">
      <NumberPad @update:number="onUpdateAmount"/>
      <Types :type="record.type" @update:type="onUpdateType"/>
      <Notes @update:notes="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:tags="onUpdateTags"/>
       {{record}}
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }

  @Component({components: {Notes, Tags, NumberPad, Types}})

  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {
      tags:[] ,notes:'', type: '-',amount :0
    };
    onUpdateTags(value: string[]) {
      this.record.tags = value
    }
    onUpdateType(value: string){
      this.record.type = value
    }
    onUpdateNotes(value: string){
      this.record.notes=value
    }
    onUpdateAmount(value: string){
      this.record.amount = parseFloat(value)
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