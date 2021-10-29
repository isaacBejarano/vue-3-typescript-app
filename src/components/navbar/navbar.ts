import { defineComponent } from "vue";

export default defineComponent({
	name: "Navbar",
	setup() {
		const links = [
			["home", "/"],
			["form validation", "/form"],
			["route guards & modals", "/pegi"],
			["lifecycle hooks", "/lifecycle-hooks"],
			["vueX / dynamic & async components", "/vuex"],
			// ["TDD", "/tdd"],
			// ["Slots", "/slots"],
			// ["Teleport", "/teleport"],
			// ["Dynamic Components", "/dynamic-components"],
			// ["HTTP Requests", "/http-requests"],
		];

		return { links };
	},
});
