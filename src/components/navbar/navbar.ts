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
			["http & async components", e_NavLinks.async],
			// ["TDD with JEST", "/tdd"],
			// ["custom reactive store", e_NavLinks.vuex],
			// ["Slots", "/slots"],
			// ["Teleport", "/teleport"],
		];

		return { links };
	},
});
