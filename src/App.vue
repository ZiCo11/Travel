<template>
  <div id="app">
    <!--路由内容被加载一次后写入内存 再次加载的时候不用重新请求-->
    <!--exclude 是不再缓存该组件内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
