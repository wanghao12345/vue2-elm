<template>
	<div class="home">
		<head-top signin-up='home'>
			<span slot='logo' class="head_logo" @click="reload">ele.me</span>
		</head-top>
		<nav class="city_nav">
			<div class="city_tip">
				<span>当前定位城市：</span>
				<span>定位不准时，请在城市列表中选择</span>
			</div>
			<router-link to="/" class="guess_city">
				<span>上海</span>
				<icon name="arrow-right" scale="1.3" style="color: #999;"></icon>
			</router-link>
		</nav>
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
.home .head_logo{
	position: absolute;
	left: 0.4rem;
	font-size: 0.7rem;
	font-weight: 400;
}
.city_nav{
    padding-top: 2.35rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: 0.4rem;
}
.city_nav .city_tip{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 0.45rem;
}
.city_nav .city_tip span:nth-child(1){
    font-size: 0.55rem;
    color: #666;
}
.city_nav .city_tip span:nth-child(2){
    font-weight: 900;
    font-size: 0.475rem;
    color: #9f9f9f;
}
.city_nav .guess_city{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: 0.75rem/1.8rem "Microsoft YaHei";	
    text-decoration: none;
}
.city_nav .guess_city span{
    color: #3190e8;
}
.city_nav .arrow_right{
    width: 0.6rem;
    height: 0.6rem;
    fill: #999;	
}
</style>