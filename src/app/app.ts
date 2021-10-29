import Header from "@/components/header/Header.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

import { defineComponent, onBeforeMount } from "vue";
import { e_Storage } from "@/global/enums";
import { pegiAccess } from "@/global/constants";

export default defineComponent({
	name: "App",
	components: {
		Header,
		Navbar,
		Footer,
	},
	setup() {
		/* hooks */
		onBeforeMount(() => {
			sessionStorage.setItem(<string>pegiAccess, e_Storage.none);
		});

		// !return data
	},
});
