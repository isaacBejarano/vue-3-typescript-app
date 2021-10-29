import { defineComponent, onMounted, ref } from "vue";

import { pegiAccess } from "@/global/constants";
import { e_NavLinks, e_Storage } from "@/global/enums";
import { RouterOperations } from "@/utils/router-operations";
import Modal from "@/components/modal/Modal.vue";

export default defineComponent({
	name: "Pegi",
	components: { Modal },
	setup() {
		/* data */

		const PEGI = ref(12);

		const modal = ref(false);

		const title = "Jessica Rabbit";

		const jessica = {
			src: "assets/img/jessica-rabbit.jpg",
			alt: "jessica rabbit",
			w: 484,
			h: 414,
		};

		const howToRemoveSessionStorageTitle = `How to reset the PEGI-${PEGI.value} modal guard?`;

		const howToRemoveSS1 = `This PEGI-${PEGI.value} guarded page uses the built-in-browser JavaScript 'sessionStorage' mechanism,
	This code allows developers to save the PEGI-${PEGI.value} status in your browser
	so your browser can remember the choices you made when clicking 'I am ${PEGI.value}' in the modal window. Once the status is saved
	to 'sessionStorage', this app doesn't ask you again about your PEGI-${PEGI.value} age compliance.
	If you are a developer and you still don't know about 'sessionStorage', go check this link out:`;

		const howToRemoveSSa1 = "https://www.w3schools.com/Jsref/prop_win_sessionstorage.asp";

		const howToRemoveSS2 = `To demonstrate this 'sessionStorage' guard mechanism programmatically,
			manually reset the PEGI-${PEGI.value} guard by clicking next button:`;

		const p1 = `For this PEGI-${PEGI.value} guard; we used component's lifecycle hook `;

		const hooks1 = "beforeMount()";

		const p2 = "in-component router hooks ";

		const hooks2 = "beforeRouteEnter()";

		const hooks3 = "beforeRouteLeave()";

		const p3 = ` as well as transition components for the PEGI-${PEGI.value} age-confirmation modal.`;

		/* hooks */

		// <Modal/> must be mounted
		onMounted(() => {
			if (sessionStorage.getItem(<string>pegiAccess) === e_Storage.none) modal.value = true;
		});

		/* methods */

		function resetGuard() {
			RouterOperations.reloadRouteAfterSessionStorageRemoved(<string>pegiAccess);
		}

		function subscribeModal(payload: boolean) {
			modal.value = payload;
		}

		return {
			PEGI,
			modal,
			title,
			jessica,
			howToRemoveSessionStorageTitle,
			howToRemoveSS1,
			howToRemoveSSa1,
			howToRemoveSS2,
			p1,
			hooks1,
			p2,
			hooks2,
			hooks3,
			p3,
			resetGuard,
			subscribeModal,
		};
	},

	/* guards */

	beforeRouteLeave(_to: any, _from: any) {
		if (sessionStorage.getItem(pegiAccess) === e_Storage.granted)
			return confirm("Are you shure you want to leave the page?");
		// else... default "return true"
	},

	beforeRouteEnter(_to: any, _from: any) {
		if (sessionStorage.getItem(pegiAccess) === e_Storage.denied) return { path: e_NavLinks.home };
		// else... default "return true"
	},
});
