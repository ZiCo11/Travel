<template>
  <div>
    <!--箭头 返回上一页-->
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div  class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <!--滚动 吸顶-->
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div  class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 获取滑动的时候距离顶部的距离
      // 从而控制opacity
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 移除监听事件 对于全局事件 必须解绑！！！
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: 0.1rem
    top: 0.1rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 8
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position:absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: white
</style>
