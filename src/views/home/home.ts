import { defineComponent } from "vue";

import { RouterOperations } from "@/utils/router-operations";
import { pegiAccess } from "@/global/constants";

export default defineComponent({
	name: "Home",
	setup() {
		/* data */

		const p = "This App is a live example of Vue 3.0 with...";

		const features = [
			"Composition API",
			"TypeScript",
			"VueX 4.0",
			"Lifecycle Hooks",
			"Dynamic Components",
			"Asynchronous Components",
			"Route Guards",
			"Form Validation",
			"Session Storage",
			"Transitions",
			"Modals",
			"HTTP Requests",
			"Template-Style-Logic Decoupling",
			"SASS",
			"TDD (Test Driven Development) / Jest", // TODO:
			// "Slots", // TODO:
			// "Teleports", // TODO:
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
