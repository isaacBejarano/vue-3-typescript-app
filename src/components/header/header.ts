import { defineComponent } from "vue";

export default defineComponent({
	name: "Header",

	setup() {
		const title = "Vue 3.0";
		const subtitle = "features & ecosystem";

		return { title, subtitle };
	},
});
