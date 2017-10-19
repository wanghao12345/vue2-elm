<template>
	<div class="city">
		<head-top :head-title="cityname" >
		</head-top>
	</div>
</template>


<script>
	import headTop from '../../components/head/head'

	export default{
		data(){
			return{
				cityname:'上海'
			}
		},
		components:{
			headTop
		}
	}


</script>