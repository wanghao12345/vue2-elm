<template>
	<div class="home">
		<head-top :head-title="profiletitle">
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
		}



	}


</script>




<style>
.home{
	width: 100%;
	height: 100%;
	background-color: red;
}



</style>