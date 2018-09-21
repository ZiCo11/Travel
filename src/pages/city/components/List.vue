<template>
  <div class="list" ref="wrapper">
    <!--这一层的div是为了配合引入的插件 better-scroll-->
    <div>
      <!--当前城市-->
      <div class="area">
        <!--border-bottom 是引入的 1 像素边框解决方案样式-->
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!--这是vuex-->
              <!--{{this.$store.state.city}}-->
              <!--这是mapState映射来的-->
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <!--热门城市-->
      <div class="area">
        <div class="title border-topbottom" >热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--下面的城市列表-->
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入本地安装的 better-scroll
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    // ... 展开运算符
    // mapState 是指把vuex的数据映射到组件的计算属性里
    // 传递的数据可以是数组 也可以是对象
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 触发action 使用dispatch
      // 派发一个changeCity  把city传过去
      // this.$store.dispatch('changeCity', city)
      // 通过mapMutations改进代码
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 在组件中提交 Mutation,可以在组件中使用 this.$store.commit('xxx') 提交 mutation，
    // 或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit
    // 调用（需要在根节点注入 store）。
    ...mapMutations(['changeCity'])
  },
  // 在页面挂载完成之后 钩子函数
  mounted () {
    // 这里是引入的插件 better-scroll 达到页面滚动效果
    // $refs是为了获取dom元素 类似js的id
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  // 侦听器 watch 侦听letter的改变
  watch: {
    letter () {
      if (this.letter) {
        // 这里letter是数组
        const element = this.$refs[this.letter][0]
        // 这里用的是scroll的方法
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*这里是公共样式 以变量的形式 优化代码 便于管理*/
 @import "~styles/varibles.styl"
 /* 这里是引入的1像素边框的样式*/
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
     /* 这里父盒子overflow: hidden 触发BFC*/
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
