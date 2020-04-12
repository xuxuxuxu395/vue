import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$http = http;
Vue.config.productionTip = false
import './mock'
import http from './http'
import router from './router'
import store from './store'
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
