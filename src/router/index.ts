import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/home/Home.vue";

/* ROUTES */

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/form",
		name: "Form",
		component: () => import(/* webpackChunkName: "Form" */ "@/views/form/Form.vue"),
	},
	{
		path: "/pegi",
		name: "Pegi",
		component: () => import(/* webpackChunkName: "Pegi" */ "@/views/pegi/Pegi.vue"),
	},
	{
		path: "/tdd",
		name: "TDD",
		component: () => import(/* webpackChunkName: "TDD" */ "@/views/tdd/TDD.vue"),
	},
	{
		path: "/lifecycle-hooks",
		name: "Lifecycle",
		component: () => import(/* webpackChunkName: "Lifecycle" */ "@/views/lifecycle/Lifecycle.vue"),
	},
	{
		path: "/vuex",
		name: "VueX",
		component: () => import(/* webpackChunkName: "VueX" */ "@/views/vuex/VueX.vue"),
	},

	/* redirects */
	{
		path: "/:catchAll(.*)",
		redirect: "/",
	},
];

/* ROUTER instance */

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

/* GUARDS

GLOBAL GUARDS
	router.beforeEach((to, from, [next]) => {}); 
	router.beforeResolve((to, from) => {}); 
	router.afterEach((to, from, failure) => {});

PER-ROUTE GUARDS
	beforeEnter: [(to, from, [next]) => {}, (to, from, [next]) => {}, ...]
	beforeEnter: (to, form, [next]) => next({ name: "User", params: { id: 200 } })

IN-COMPONENT GUARDS
	beforeRouteEnter: (to, from, [next]) => { 
		// access class attrs.
		next((vm: any) => vm.title = 'New Title');
 }
	beforeRouteUpdate: (to, from) => {}
	beforeRouteLeave: (to, from) => {}

	// you can also concatenate 'beforeRouteEnter' i array, like 'beforeEnter' per-route guards posibility

*/
