import { defineComponent } from "vue";

import { e_NavLinks } from "@/global/enums";

export default defineComponent({
	name: "Navbar",
	setup() {
		const links = [
			["home", e_NavLinks.home],
			["form validation", e_NavLinks.form],
			["route guards & modals", e_NavLinks.guard],
			["lifecycle hooks", e_NavLinks.lifecycle],
			["dynamic components & keep-alive", e_NavLinks.dynamic],
			["vueX", e_NavLinks.vuex],
			// ["custom store", e_NavLinks.vuex],
			// ["Async components", e_NavLinks.vuex],
			// ["TDD", "/tdd"],
			// ["Slots", "/slots"],
			// ["Teleport", "/teleport"],
			// ["Dynamic Components", "/dynamic-components"],
			// ["HTTP Requests", "/http-requests"],
		];

		return { links };
	},
});
