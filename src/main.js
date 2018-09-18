// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒延迟 引入fastclick
import fastClick from 'fastclick'
// 样式重置
import './assets/styles/reset.css'
// 1 像素边框解决方案
import './assets/styles/border.css'

Vue.config.productionTip = false
// 使用fastclick
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
