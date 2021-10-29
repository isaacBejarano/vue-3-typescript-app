import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Header",

	setup() {
		const title = ref("Vue 3.0");
		const subtitle = ref("sample features");

		return { title, subtitle };
	},
});
