<template>
  <div class="header">
   <div class="top">
     <div class="left">
       <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" class="avator">
     </div>
     <div class="right">
       <div class="title">
         <i class="brand"></i>
         <span class="address">嘉禾一品（温都水城）</span>
       </div>
       <div class="text">
         蜂鸟专送/38分钟送达
       </div>
       <div class="discount">
         <i class="sales"></i>
         在线支付满28减5，满50减10
         <div class="btn">
           <span class="text">5个</span>
           <i class="layout-keyboard_arrow_right"></i>
         </div>
       </div>
     </div>
   </div>
   <div class="bulletin"></div>
  </div>
</template>

<script>
  export default {
    name:"ele-header"
  }
</script>

<style lang="stylus" scoped>
.header
    .top
       position relative
       display flex
       padding 24px 0 18px 24px
       background  rgba(7,17,27,0.5)
       .left
          width 64px
          height 64px
          margin-right  16px
          .avator
              width 100%
              height 100%
              border-radius 2px
       .right
           .title
               display flex
               justify-content center
               align-items center
               font-size 16px
               font-weight bold
               line-height 18px
               color rgb(255,255,255,1)
               margin-top 2px
               margin-bottom 8px
               .brand
                   display inline-block
                   width 30px
                   height 18px
                   background url("./brand@2x.png") no-repeat
                   background-size 100%
                   margin-right 6px
            .text
               font-size 12px
               font-weight 200
               line-height 12px
               color rgb(255,255,255,1)
            .discount
               display flex
               align-items center
               font-size 10px
               font-weight 200
               line-height 12px
               color rgb(255,255,255,1)
               margin-top 10px
               margin-bottom 2px
               .sales
                   display inline-block
                   width 12px
                   height 12px
                   background url("./decrease_1@2x.png")
                   background-size 100%
                   margin-right 4px
              .btn
                 display flex
                 justify-content center
                 align-items center
                 position absolute
                 bottom 0
                 right 0
                 width 46px
                 height 24px
                 border-radius 8px
                 background rgba(0,0,0,.2)
                 color rgba(255,255,255,1)
                 font-size 10px
                 font-weight 200
                 line-height 12px
                 .text
                      margin-right 2px
    .bulletin
        background rgba(7,17,27,.2)
        height 28px

</style>