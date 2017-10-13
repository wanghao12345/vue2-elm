import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	mode:'history',
	routes

})
new Vue({
  el: '#app',
  router,
  render:(h) =>h(App)
})
