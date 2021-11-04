import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { e_NavLinks } from "@/global/enums";
import Home from "../views/home/Home.vue";

/* ROUTES */

const routes: Array<RouteRecordRaw> = [
	{
		path: e_NavLinks.home,
		name: "Home",
		component: Home,
	},

	// lazy
	{
		path: e_NavLinks.form,
		name: "Form",
		component: () => import(/* webpackChunkName: "Form" */ "@/views/form/Form.vue"),
	},
	{
		path: e_NavLinks.guard,
		name: "Pegi",
		component: () => import(/* webpackChunkName: "Pegi" */ "@/views/pegi/Pegi.vue"),
	},
	{
		path: e_NavLinks.lifecycle,
		name: "Lifecycle",
		component: () => import(/* webpackChunkName: "Lifecycle" */ "@/views/lifecycle/Lifecycle.vue"),
	},
	{
		path: e_NavLinks.dynamic,
		name: "Dynamic",
		component: () => import(/* webpackChunkName: "Dynamic" */ "@/views/dynamic/Dynamic.vue"),
	},
	{
		path: e_NavLinks.vuex,
		name: "VueX",
		component: () => import(/* webpackChunkName: "VueX" */ "@/views/vuex/VueX.vue"),
	},
	{
		path: e_NavLinks.async,
		name: "Async",
		component: () => import(/* webpackChunkName: "Async" */ "@/views/async/Async.vue"),
	},
	{
		path: e_NavLinks.jest,
		name: "Jest",
		component: () => import(/* webpackChunkName: "Jest" */ "@/views/jest/Jest.vue"),
	},
	{
		path: e_NavLinks.tdd,
		name: "TDD",
		component: () => import(/* webpackChunkName: "TDD" */ "@/views/tdd/TDD.vue"),
	},

	// redirects
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

IN-COMPONENT GUARDS - outta setup()
	beforeRouteEnter: (to, from, [next]) => { 
		// access class attrs.
		next((vm: any) => vm.title = 'New Title');
 }
	beforeRouteUpdate: (to, from) => {}
	beforeRouteLeave: (to, from) => {}

	// you can also concatenate 'beforeRouteEnter' and array, like 'beforeEnter' per-route guards posibility

*/
