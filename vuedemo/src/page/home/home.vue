<template>
	<div class="home">
		<head-top>
			<span slot='logo' class="head_logo" @click="reload">ele.me</span>
		</head-top>
		<div class="box">Home</div>
	</div>
</template>

<script>
	import headTop from '../../components/head/head'
	export default{
		data(){
			return{
				profiletitle:'我的'
			}
		},
		components:{
			headTop
		},
		methods:{
			reload(){
				window.location.reload();
			}



		},



	}


</script>




<style>
.home{
	width: 100%;
	height: 100%;
}



</style>