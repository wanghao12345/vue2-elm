<template>
	<div class="city">
		<head-top :head-title="$store.state.city" go-back='true'>
			<router-link to="/" slot="changecity" class="change_city">切换城市</router-link>
		</head-top>
	</div>
</template>


<script>
	import headTop from '../../components/head/head'
	import store from '@/vuex/store'


	export default{
		data(){
			return{
				cityname:'上海'
			}
		},
		store,
		components:{
			headTop
		}
	}


</script>

<style>
	.city{
		width: 100%;
		height: 100%;
	}

	.city .change_city{
		text-decoration: none;
		position: absolute;
		right: 0.4rem;
		font-size: 0.6rem;
    	color: #fff;
		font-weight: 500;
	}
</style>