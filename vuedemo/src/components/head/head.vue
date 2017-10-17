<template>
	<header class="head_top">
		<slot name='logo'></slot>
		<!-- 中间题目 -->
		<section  v-if="headTitle">
			<span>{{headTitle}}</span>
		</section>
		<!-- 左边导航 -->
<!-- 		<router-link>
	
</router-link> -->
		<!-- 登录注册 -->


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
		background-color: #3190e8;
		position: fixed;
		top: 0;
		left: 0;
		line-height: 2rem;
		font-size:0.8rem;
		text-align: center;
		color: white;
		font-weight: 700;
	}
</style>






