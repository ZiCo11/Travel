import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 创建仓库
export default new Vuex.Store({
  // state 存储全局公用数据
  state,
  // actions接收 dispatch派发的函数 必须一样的名字 接收传递的city 参数
  // actions: {
  // ctx 是上下文 city 是传递过来的数据
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  // 因此你可以调用 context.commit 提交一个 mutation，
  // 或者通过 context.state 和 context.getters 来获取 state 和 getters
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutation 第一个参数必须是 state
  // mutation是唯一能改变store中的状态的方法
  mutations
})
