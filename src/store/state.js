// localstorage 兼容
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  // state 存储全局公用数据
  city: defaultCity
}
