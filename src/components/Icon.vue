<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+iconId"/>
  </svg>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    name: 'Icon',
    props:["iconId"]
  };
</script>

<style lang="scss" scoped>
.icon {
    /*从iconfont的帮助文档抄过来*/
    /*因为icon放在字旁边，所以和字一样大在这就算好看的了*/
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>