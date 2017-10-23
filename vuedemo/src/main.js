import Vue from 'vue'
import VueRouter from 'vue-router'
import Icon from 'vue-svg-icon/Icon.vue'
import App from './App'
import routes from './router/routes'
import './config/rem'
import storeConfig from './vuex/store'


Vue.use(VueRouter)
//Icon.inject('sun')

Vue.component('icon',Icon)


Vue.config.productionTip = false

const router = new VueRouter({
	mode:'history',
	routes

})
new Vue({
  el: '#app',
  router,
  storeConfig,
  render:(h) =>h(App)
})
