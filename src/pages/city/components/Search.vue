<template>
  <div class="search">
    <input class="sear-input" type="text" placeholder="输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    padding: 0 .1rem
    height: .72rem
    background: $bgColor
    .sear-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .1rem
      color: #666
</style>
