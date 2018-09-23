<template>
  <div>
    <div class="banner" @click="handleBanneClick">
      <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_600x330_1be7ea5e.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">上海杜莎夫人蜡像馆(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe610;</span>
          28
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1803/5e/5e5cf1907207dd16a3.water.jpg_r_800x800_babf93e6.jpg',
        'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_r_800x800_545e2646.jpg']
    }
  },
  methods: {
    handleBanneClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallery
  }

}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        color: #fff
      .banner-number
        padding: 0 .4rem
        height: .32rem
        margin-top: .14rem
        line-height: .4rem
        border-radius: .2rem
        font-size: .24rem
        color: #fff
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
