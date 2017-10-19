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
			<router-link :to="'/city/'+guessCityid" class="guess_city">
				<span>{{guessCity}}</span>
				<icon name="arrow-right" scale="1.3" style="color: #999;"></icon>
			</router-link>
		</nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="citylistul clear">
                <router-link to="/" tag="li" v-for="item in hotcity" class="ellipsis">
                    {{item.name}}
                </router-link>
            </ul>
        </section>
        <section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value,key,index) in sortgroupcity"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">(按字母排序)</span>     
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link to="/" tag="li" v-for="item in value" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                    
                </li>
            </ul>
        </section>
	</div>
</template>

<script>
	import headTop from '../../components/head/head'
    import {cityGuess,hotcity,groupcity} from '../../service/getData'
    //import {city} from '../../plug/map'
	export default{
		data(){
			return{
				guessCity:'',//当前城市
                guessCityid:'',//当前城市id
                hotcity:[],//热门城市列表
                groupcity:{},//所有城市列表
			}
		},
        mounted(){
            // 获取当前城市
            cityGuess().then(res => {
                this.guessCity = res.name;
                this.guessCityid = res.id;
            })
            //获取热门城市
            hotcity().then(res => {
                this.hotcity = res;
            })
            //获取所有城市
            groupcity().then(res =>{
                this.groupcity = res;
            })
        },
		components:{
			headTop
		},
        computed:{
            //将获取的数据按照A-Z字母开头排序
            sortgroupcity(){
                let sortobj = {};
                for (let i = 65; i <= 90; i++) {
                    if (this.groupcity[String.fromCharCode(i)]) {
                        sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                    }
                }
                return sortobj
            }
        },
		methods:{
			reload(){
				window.location.reload();
			}

	}
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

#hot_city_container {
    background-color: #fff;
    margin-bottom: 0.4rem;
}
#hot_city_container .city_title{
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem "Helvetica Neue";    
    margin:0;
}
#hot_city_container .citylistul{
    margin:0;
    overflow: hidden;
    padding: 0;
}
#hot_city_container .citylistul .ellipsis{
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem "Microsoft YaHei";
    list-style: none;
    box-sizing: border-box;
}
.group_city_container .letter_classify{
    padding: 0;
}
.group_city_container .letter_classify .letter_classify_li{
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    list-style: none;
}
.group_city_container .letter_classify .letter_classify_li .city_title{
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem "Helvetica Neue";
    margin:0;
}
.group_city_container .letter_classify .letter_classify_li .city_title span{
    font-size: 0.475rem;
    color: #999;
}
.group_city_container .letter_classify .letter_classify_li ul{
    padding: 0;
    overflow: hidden;
}
.group_city_container .letter_classify .letter_classify_li .ellipsis{
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem "Microsoft YaHei";
    color: #666;
    list-style: none;
    box-sizing: border-box;
    white-space:nowrap;
    text-overflow: ellipsis; 
    -o-text-overflow: ellipsis;
    overflow: hidden;
}
</style>