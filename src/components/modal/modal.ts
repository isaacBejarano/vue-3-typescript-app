import { defineComponent } from "vue";
import router from "@/router";

import { pegiAccess } from "@/global/constants";
import { e_NavLinks, e_Storage } from "@/global/enums";

export default defineComponent({
	name: "Modal",
	props: ["PEGI", "modal"],
	emits: ["of-modal"],
	setup(props, { emit }) {
		/* data */
		const assets = {
			label: {
				src: "assets/icons/pegi_12_sm.png",
				alt: "PEGI-" + props.PEGI + " icon",
			},
			description: {
				src: "assets/icons/pegi_sex_sm.png",
				alt: "sex",
			},
		};

		/* methods */

		function bypassGuard(access: boolean) {
			// set guard
			sessionStorage.setItem(pegiAccess, access ? e_Storage.granted : e_Storage.denied);

			// auto close
			emit("of-modal", false);

			// redirect to trigger guard
			setTimeout(() => router.push(access ? e_NavLinks.guard : e_NavLinks.home), 500);
		}

		return { props, assets, bypassGuard };
	},
});
