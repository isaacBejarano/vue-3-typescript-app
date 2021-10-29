import { defineComponent } from "vue";

import { RouterOperations } from "@/utils/router-operations";
import { pegiAccess } from "@/global/constants";

export default defineComponent({
	name: "Home",
	setup() {
		/* data */

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

		/* methods */

		function resetGuard(): void {
			RouterOperations.reloadRouteAfterSessionStorageRemoved(<string>pegiAccess);
		}

		return { p, features, howToRemoveSS2, resetGuard };
	},
});
