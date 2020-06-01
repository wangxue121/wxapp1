import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()


// 目标 ：配置插件
// 一般用法，插件是单独的一个js文件
// 一会use()里面函数，单独写在一个js文件内
// 导入main.js内

import request1 from './utils/request'

Vue.use(request1)