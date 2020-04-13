<template>
  <div id="App">
    <ele-header></ele-header>
    <ul class="navs">
      <li class="items">
      <router-link to="/goods">商品</router-link>
        </li>
      <li class="items">
       <router-link to="/comments">评价</router-link> 
        </li>
      <li class="items">
       <router-link to="/shops">商家</router-link>  
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    name:'App',
    components:{
      "ele-header":Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #App
    .navs
      one-px(black)
      display flex 
      width 100%
      height 40px
      & > .items 
          width 33.3%
          color rgba(77,85,93,1)
        a 
          width 100%
          height 100%
          display flex
          align-items center
          justify-content center
          &.active
            color rgba(240,20,20,1)
</style>