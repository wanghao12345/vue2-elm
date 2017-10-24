<template>
	<div class="city">
		<head-top :head-title="$store.state.city" go-back='true'>
			<router-link to="/" slot="changecity" class="change_city">切换城市</router-link>
		</head-top>
		<form class="city_form" v-on:submit.prevent>
			<div>
				<input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputValue'>
			</div>
			<div>
				<input type="submit" name="submit" class="city_submit" @click='postpois'>
			</div>
		</form>
		<header v-if='historytitle' class="pois_search_history">搜索历史</header>
		<ul class="getpois_ul">
			<li v-for="(item,index) in placelist" @click='nextpage(index,item.geohash)' :key="index">
				<h4 class="pois_name ellipsis">{{item.name}}</h4>
				<p class="pois_address ellipsis">{{item.address}}</p>
			</li>
		</ul>
		<div class="search_none_place" v-if='placeNone'>很抱歉！无搜索结果</div>
	</div>
</template>


<script>
	import headTop from '../../components/head/head'
	import store from '@/vuex/store'
	import {currentcity,searchplace} from '../../service/getData'
	import {getStore,setStore} from '../../config/mUtils'

	export default{
		data(){
			return{
				cityname:'上海',
				cityid:'',//当前城市id
				inputValue:'',//搜索地址
				placelist:[],//搜索城市列表
				placeHistory:[],
				historytitle:true,
				placeNone:true
			}
		},
		mounted(){
			this.cityid = this.$route.params.cityid;
			//获取当前城市的名字
			currentcity(this.cityid).then(res => {
				this.cityname = res.name;
			})
			//获取搜索历史记录
			if (getStore('placeHistory')) {
				this.placelist = JSON.parse(getStore('placeHistory'));
			}
		},
		store,
		components:{
			headTop
		},
		methods:{
			/**
			 * 发送搜索信息inputVaule
			 */
			postpois(){
				if (this.inputValue) {
					searchplace(this.cityid,this.inputValue).then(res=>{
						this.historytitle = false;
						this.placelist = res;
						this.placeNone = res.length?false:true;
					})
				}
			},
			/**
			 * 点击搜索结果列表，然后进行localStorage判断是否已经有一样的历史记录
			 * 如果没有就新增，如果有就不做重复存储，判断完成后就进入下一页
			 */
			nextpage(index,geohash){
				let history = getStore('placeHistory');
				let choosePlace = this.placelist[index];
				if (history) {
					let checkrepeat = false;
					this.placeHistory = JSON.parse(history);
					this.placeHistory.forEach(item => {
						if (item.geohash == geohash) {
							checkrepeat = true;
						}
					})
					if (!checkrepeat) {
						this.placeHistory.push(choosePlace);
					}
				} else {
					this.placeHistory.push(choosePlace);
				}
				setStore('placeHistory',this.placeHistory);
				this.$router.push({path:'/msite',query:{geohash}});
			}
		}
	}


</script>

<style>
	.city{
		width: 100%;
		height: 100%;
		padding-top: 2.35rem;
	}

	.city .change_city{
		text-decoration: none;
		position: absolute;
		right: 0.4rem;
		font-size: 0.6rem;
    	color: #fff;
		font-weight: 500;
	}
	.city .city_form{
		background-color: #fff;
	    border-top: 1px solid #e4e4e4;
	    border-bottom: 1px solid #e4e4e4;
	    padding-top: 0.4rem;
	    padding-bottom: 0.4rem;
	}
	.city .city_form div{
		width: 90%;
	    margin: 0 auto;
	    text-align: center;
	}
	.city .city_form div .city_input{
		border: 1px solid #e4e4e4;
	    padding: 0 0.3rem;
	    font-size: 0.65rem;
	    color: #333;
	}
	.city .city_form div .city_submit{
		background-color: #3190e8;
	    font-size: 0.65rem;
	    color: #fff;
	    width: 100%;
	    padding: 0;
	    border: 0;
	    height: 1.4rem;
	    border-radius: 3px;
	}
	.city .city_form div .input_style{
	    border-radius: 0.1rem;
	    margin-bottom: 0.4rem;
	    width: 100%;
	    height: 1.4rem;
	}

	.city  .pois_search_history{
		border-top: 1px solid #e4e4e4;
	    border-bottom: 1px solid #e4e4e4;
	    padding-left: 0.5rem;
	    font: 0.475rem/0.8rem "Microsoft YaHei";
	}
	.city .getpois_ul{
		background-color: #fff;
    	border-top: 1px solid #e4e4e4;
    	padding: 0;
    	margin:0;
	}
	.city .getpois_ul li{
	    margin: 0 auto;
		padding-top: 0.65rem;
    	border-bottom: 1px solid #e4e4e4;
    	list-style: none;
	}
	.city .getpois_ul li .ellipsis{
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.city .getpois_ul li .pois_name{
		margin: 0 auto 0.35rem;
	    width: 90%;
	    font-size: 0.65rem;
	    color: #333;
	}
	.city .getpois_ul li .pois_address{
		width: 90%;
	    margin: 0 auto 0.55rem;
	    font-size: 0.45rem;
	    color: #999;
	}
	.city .search_none_place{
    margin: 0 auto;
    font: .65rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-indent: .5rem;
	}

</style>