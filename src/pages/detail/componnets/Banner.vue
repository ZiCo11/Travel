<template>
  <div>
    <div class="banner" @click="handleBanneClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe610;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!--监听子组件派发的时间-->
    <fade-animation>
      <common-gallery
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
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
    CommonGallery,
    FadeAnimation
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
        font-size: .36rem
        padding: 0 .2rem .2rem .2rem
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
