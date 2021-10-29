import { Options, Vue } from "vue-class-component";

@Options({
	/* data / props */
	props: ["qualification", "modal"], // readonly

	data() {
		return {
			assets: {
				label: {
					src: "assets/icons/pegi_12_sm.png",
					alt: "PEGI-" + this.qualification + " icon",
				},
				description: {
					src: "assets/icons/pegi_sex_sm.png",
					alt: "sex",
				},
			},
			prop_modal: this.modal, // init
		};
	},

	/* methods */

	methods: {
		bypassGuard(access: boolean) {
			// set guard
			sessionStorage.setItem("pegiAccess", access ? "granted" : "denied");

			// auto close
			this.prop_modal = false; // grab data, not prop -> this.prop_modal !== this.modal

			// redirect to trigger guard
			setTimeout(() => this.$router.push(access ? "/pegi" : "/"), 500);
		},
	},
})
export default class Modal extends Vue {}
