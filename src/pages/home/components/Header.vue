<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <!-- 路由跳转-->
    <router-link to="/city">
      <div class="header-right">
        <!--这是vuex-->
        <!--{{this.$store.state.city}}-->
        <!--这是mapState映射来的-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    // ... 展开运算符
    // mapState 是指把vuex的数据映射到组件的计算属性里
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  /*对于一些通用的样式，进行变量化，提高可维护性 创建stylus 通过@import引入 */
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: $HeaderHeight
    line-height: $HeaderHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .06rem
      color: #e4e7ea
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
