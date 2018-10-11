<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl" alt="去哪儿门票">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        // 传递class 名字
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*因为单组件样式不受影响*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: white
  .wrapper >>> .swiper-pagination
    bottom: .4rem
  .wrapper
    /* 这是图片宽高自适应样式 */
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%
    .swipe-img
      width: 100%
</style>
