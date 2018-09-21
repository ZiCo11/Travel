<template>
  <div id="app">
    <!--路由内容被加载一次后写入内存 再次加载的时候不用重新请求-->
    <keep-alive>
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
