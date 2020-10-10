import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import axios from 'axios'

// Vue.prototype.$http = axios.create({
//   timeout: 20000,
//   baseURL: '/bigscreen'
// })

Vue.prototype.$http = axios.create({
  timeout: 20000,
  baseURL: '/'
})

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')
