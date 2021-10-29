import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Navbar",
	setup() {
		const links = ref([
			["Home", "/"],
			["Form Validation", "/contact"],
			["Route Guards & Modals", "/pegi"],
			["Lifecycle Hooks", "/lifecycle-hooks"],
			["VueX / Dynamic & Async Components", "/vuex"],
			// ["TDD", "/tdd"],
			// ["Slots", "/slots"],
			// ["Teleport", "/teleport"],
			// ["Dynamic Components", "/dynamic-components"],
			// ["HTTP Requests", "/http-requests"],
		]);

		return { links };
	},
});
