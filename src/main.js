import Vue from 'vue'
import App from './App'
import jQuery from 'jquery/dist/jquery.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { apolloProvider } from './vue-apollo'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
