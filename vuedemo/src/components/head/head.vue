<template>
	<header class="head_top">
		<slot name='logo'></slot>
		<slot name='changecity'></slot>
		<!-- 中间题目 -->
		<section  v-if="headTitle">
			<span>{{headTitle}}</span>
		</section>
		<!-- 左边导航 -->
		<section class="head_goback" v-if="goBack" @click="$router.go(-1)">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
		</section>
		<!-- 登录注册 -->
		<router-link to="/" v-if='signinUp'>
			<span class="login_span">登录|注册</span>
		</router-link>




	</header>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		props:['headTitle','signinUp','goBack']
		
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
	.head_top .login_span{
		right: 0.55rem;
		position: absolute;
		font-size: 0.7rem;
		font-weight: 400;
		color: #fff;
	}
	.head_top .head_goback{
		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		position: absolute;
		top: 0;
		left: 0;
	}
	.head_top .head_goback svg{
		width: 100%;
		height: 100%;
		line-height: 2rem;
		box-sizing: border-box;
		padding-top: 0.5rem;
		padding-left: 0.5rem;
	}
</style>






