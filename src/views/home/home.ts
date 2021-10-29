import { defineComponent, onMounted, ref } from "vue";

import { RouterOperations } from "@/utils/router-operations";

export default defineComponent({
	name: "Home",
	setup() {
		// data

		const p = "This App is a live example of Vue 3.0 with...";

		const features = [
			"VueX",
			"TypeScript",
			"SASS/scss",
			"Component Template/Style/Logic Decoupling",
			"Class-Syntax Components",
			"OOP (Object Oriented Programming)",
			"Form Validation",
			"Route Guards",
			"Transitions",
			"Lifecycle Hooks",
			// "Slots", // TODO:
			// "Teleports", // TODO:
			// "Dynamic Components",
			"Asynchronous Components",
			"HTTP Requests",
			"Composition API",
			// "TDD (Test Driven Development) with Jest", // TODO:
		];

		const howToRemoveSS2 = `If you want to try the 'Route Guards' page again,
		manually reset the PEGI-12 guard by clicking the button below. Then navigate to the 'Route Guards' page.`;

		const appStorage = ref({ pegi: "none" });

		// methods

		function resetGuard(): void {
			RouterOperations.reloadRouteAfterSessionStorageRemoved("pegiAccess");
		}

		// hooks

		onMounted(() => {
			sessionStorage.setItem("pegiAccess", appStorage.value.pegi);
		});

		return { p, features, appStorage, howToRemoveSS2, resetGuard };
	},
});
