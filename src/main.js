// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 swiper 插件 全局引用
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入store Vuex
import store from './store'
// 解决移动端300毫秒延迟 引入fast-click
import fastClick from 'fastclick'
// 样式重置
import 'styles/reset.css'
// 1 像素边框解决方案
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'
// 引入swiper css文件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 使用fastclick
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
