<template>
  <div>
    <Layout class-prefix="xxx">
      <NumberPad/>
      <Types/>
      <Notes/>
      <Tags/>

    </Layout>
  </div>
</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default {
    name: 'Money',
    components: {Notes, Tags, NumberPad, Types},
  };
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