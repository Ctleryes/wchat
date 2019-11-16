import Vue from 'vue'
import App from './App'
import http from './utils/https.js'
import status from './components/status.vue'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.request = http
Vue.prototype.$store = store

// 全局注册组件
Vue.component('page-status',status)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
