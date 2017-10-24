import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')),'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')),'msite')


// export default[
//     {
//       path: '/',
//       name: 'home',
//       component: home
//     }
// ]
export default[{
	path:'/',
	component:App,//顶层路由，对应index.html
	children:[
		//地址为空时跳转home页面
		{
			path:'',
			redirect:'/home'
		},
		//首页城市列表页
		{
			path:'/home',
			name:'home',
			component:home
		},
		//当前所选城市页
		{
			path:'/city/:cityid',
			component:city
		},
		//所有商铺列表页
		{
			path:'/msite',
			component:msite
		}
	]
}]