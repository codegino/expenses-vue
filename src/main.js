import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import router from 'src/router'
import BootstrapVue from 'bootstrap-vue'

import store from 'src/store'
import App from './App.vue'

Vue.use(BootstrapVue)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
