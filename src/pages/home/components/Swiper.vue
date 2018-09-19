<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data: function () {
    return {
      swiperOption: {
        // 传递class 名字
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/cf/f9621afec6986e02.jpg_750x200_093f15c5.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*因为单组件样式不受影响*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: white
  .wrapper
    /* 这是图片宽高自适应样式 */
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    .swipe-img
      width: 100%
</style>
