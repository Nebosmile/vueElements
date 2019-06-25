import Vue from 'vue'
import Router from 'vue-router'
// import notfound from '@/components/notfound'
import cupon from '@/components/cupon/cupon'
import betslip from '@/components/cupon/betSlipwrap'


Vue.use(Router)


const router = new Router({
	hashbang: false,
	history: true,
	mode: 'history',
	routes: [
		{
			path: '/cupon',
			name: 'cupon',
			component: cupon
		},
		{
			path: '/betslip',
			name: 'betslip',
			component: betslip
		},
		// {
		// 	path: '*',
		// 	component: notfound
		// }, {
		// 	path: '*/*',
		// 	component: notfound
		// }, {
		// 	path: '*/*/*',
		// 	component: notfound
		// }
	]
},)
// router.beforeEach((to, from,next) => {
// 	// console.log(userdata.userRole);
// 	// if(to.fullPath=='/adminpanel/settings/killbutton' && userdata.userRole.name != 'admin' &&  userdata.accessLevel!= 'global'){
// 	// 	next('/')
// 	// }else{
// 	// 	next(true)
// 	// }
// })
export default router;
