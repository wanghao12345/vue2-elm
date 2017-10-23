import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
	city:'上海'
}

const mutations = {
	changecity(state,city){
		alert(state.city);
	}
}



export default new Vuex.Store({
	state
})