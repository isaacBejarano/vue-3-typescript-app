import { defineComponent } from "vue";

export default defineComponent({
	name: "VueX",
	setup() {
		const title = {
			fragment1: "uncommunicated",
			fragment2: "emitter-driven communication",
			fragment3: "VueX communication",
		};

		return { title };
	},
});
