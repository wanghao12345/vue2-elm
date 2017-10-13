const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default[
    {
      path: '/',
      name: 'home',
      component: home
    }
]
