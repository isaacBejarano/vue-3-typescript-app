import { defineComponent } from "vue";

import { e_NavLinks } from "@/global/enums";

export default defineComponent({
	name: "Navbar",
	setup() {
		const links = [
			["home", e_NavLinks.home],
			["form validation", e_NavLinks.form],
			["route guards & modals", e_NavLinks.pegi],
			["lifecycle hooks", e_NavLinks.lifecycle],
			["vueX / dynamic & async components", e_NavLinks.vuex],
			// ["TDD", "/tdd"],
			// ["Slots", "/slots"],
			// ["Teleport", "/teleport"],
			// ["Dynamic Components", "/dynamic-components"],
			// ["HTTP Requests", "/http-requests"],
		];

		return { links };
	},
});
