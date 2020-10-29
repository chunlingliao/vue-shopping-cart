import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '../public/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../public/css/style.css'

import toastr from 'toastr'
import 'toastr/toastr.scss'

// toastr 自動消失的時間
toastr.options.timeOut = 3000
// toastr 消失(淡化)的時間
toastr.options.hideDuration = 200

// Vue.use(toastr)
Vue.prototype.$toastr = toastr

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
