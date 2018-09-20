<template>
  <div class="list" ref="wrapper">
    <!--这一层的div是为了配合引入的插件 better-scroll-->
    <div>
      <!--当前城市-->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!--热门城市-->
      <div class="area">
        <div class="title border-topbottom" >热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--下面的城市列表-->
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    cities: Object,
    hot: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
 @import "~styles/varibles.styl"
 /* 这里是引入的1像素边框*/
 .border-topbottom
   &:before
      border-color: #ccc
   &:after
     border-color: #ccc
 .border-bottom
   &:before
     border-color: #ccc
 .list
   overflow: hidden
   position: absolute
   top: 1.58rem
   left: 0
   right: 0
   bottom: 0
   .title
     line-height: .54rem
     background: #eee
     padding-left: .2rem
     font-size: .26rem
     color: #666
   .button-list
     /* 这里父盒子overflowhidden 触发BFC*/
     overflow: hidden
     padding: .1rem .6rem .1rem .1rem
     .button-wrapper
       float: left
       width: 33.33%
       .button
         margin: .1rem
         padding: .1rem 0
         text-align: center
         border: .02rem solid #ccc
         border-radius: .06rem
   .item-list
     .item
       line-height: .76rem
       padding-left: .2rem
</style>
