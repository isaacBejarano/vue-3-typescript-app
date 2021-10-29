import { defineComponent } from "vue";

export default defineComponent({
	name: "Footer",

	setup() {
		const title = "© 2021 Isaac Bejarano";
		const tech = "Made with 💚 with Vue, VueX, SASS and TypeScript";
		const subtitle = "MIT License";

		return { title, tech, subtitle };
	},
});
