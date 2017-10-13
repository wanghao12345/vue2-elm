<template>
	<header class="head_top">
		<section  v-if="headTitle">
			<span>{{headTitle}}</span>
		</section>
	</header>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		props:['headTitle']
		
	}
</script>

<style>
	.head_top{
		width: 100%;
		height: 2rem;
		background-color: blue;
	}
</style>