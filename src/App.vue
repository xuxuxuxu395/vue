<template>
  <div id="App">
    测试1.0
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'App',
     async mounted() {
         const body = await this.$http.seller.getSeller()
         console.log(body);
    },
  }
</script>

<style scoped>

</style>