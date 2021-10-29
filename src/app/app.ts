import Header from "@/components/header/Header.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	components: {
		Header,
		Navbar,
		Footer,
	},
});
