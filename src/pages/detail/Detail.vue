<template>
  <div class="wrapper">
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './componnets/Banner'
import DetailHeader from './componnets/Header'
import DetailList from './componnets/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        data.forEach((value, index) => {
          if (value.id === this.$route.params.id) {
            this.sightName = value.sightName
            this.bannerImg = value.bannerImg
            this.gallaryImgs = value.gallaryImgs
            this.list = value.categoryList
          }
        })
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    background: #cacaca
  .content
    height: 50rem
</style>
