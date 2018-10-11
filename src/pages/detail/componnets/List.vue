<template>
  <div>
    <!--推荐-->
    <div class="recommend "
    >
      <div class="title border-bottom" @click="handleClickShow">
        <span>去哪儿推荐</span>
        <span class="iconfont down-icon">&#xe62d;</span>
      </div>
      <div class="recommend-cont" >
        <div class="r-adult border-bottom" v-for="(item, index) of list" :key="index">
          <div v-show="showList">
            <div class="r-adult-l ">
              <p class="r-adult-title">{{item.title}}</p>
              <p class="r-time">
                <img class="r-time-img" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png"/>
                明日可订
              </p>
              <span class="r-desc"><img class="r-desc-img" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">自营</span>
              <span class="r-desc">随时退</span>
            </div>
            <div class="r-adult-r">
              <p class="r-price">{{item.price}}</p>
              <div class="r-btn">预定</div>
            </div>
          </div>
          <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      showList: false
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleClickShow () {
      let showList = this.showList
      if (!showList) {
        this.showList = true
      } else {
        this.showList = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    overflow: hidden
    position: relative
    margin: .2rem 0
    padding: .2rem .2rem .24rem 0
    background: #fff
    .title
      height: .88rem
      overflow: hidden
      padding-left: .2rem
      font-size: .32rem
      line-height: .88rem
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=')
      background-repeat: no-repeat
      background-size: .36rem .36rem
      background-position: .2rem center
      text-indent: .56rem
      .down-icon
        position: absolute
        top:0
        right: 0
        width: 1rem
        height: 1rem
        font-size: .4rem
        text-align: center
        color: #25a4bb
    .recommend-cont
      padding-left: .2rem
      .r-adult-l
        padding: .2rem 0
        .r-adult-title
          height: .52rem
          line-height: .52rem
          font-size: .3rem
          color: #616161
        .r-time
          height: .32rem
          line-height: .32rem
          font-size: .24rem
          color: #616161
          white-space: nowrap
          .r-time-img
            width:.2rem
            height: .2rem
        .r-desc
          display: inline-block
          border: 0.01rem solid #00afc7
          height: .32rem
          padding: 0 .01rem
          line-height: .32rem
          font-size: .2rem
          color: #00afc7
          white-space: nowrap
          .r-desc-img
            width:.2rem
            height: .2rem
      .r-adult-r
        position: absolute
        top: 0
        right: 0
        width: 2rem
        .r-price
          height: .4rem
          line-height: .4rem
          padding-top: .4rem
          padding-left: .04rem
          font-size: .4rem
          font-weight: bold
          text-align: center
          color: #ff9800
        .r-btn
          height: .65rem
          width: 1.8rem
          border-radius: .08rem
          background: #ff9800
          text-align: center
          line-height: .65rem
          color: white
          font-size: .32rem
      .item-children
        padding: 0 .2rem
</style>
