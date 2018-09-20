<template>
 <ul class="list">
   <li class="item"
       v-for="item  of letters"
       :key="item"
       :ref="item"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       @click="handleClick"
   >{{item}}</li>
 </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      // 当手指滑动时 函数执行频率很高 这里要函数节流
      timer: null
    }
  },
  // 钩子 当数据更新完毕后执行
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 79 是顶部的宽度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
