import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '../public/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../public/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
