import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

	state:{
		city:'上海'
	},
	mutations:{
		changecity(state,cityName){
			state.city = cityName;
		}
	},
	getters:{

	},
	actions:{

	}
})

export default store