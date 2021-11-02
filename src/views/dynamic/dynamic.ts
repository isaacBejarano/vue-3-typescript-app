import { defineComponent, ref } from "vue";

import Post1 from "@/components/posts/post1/Post1.vue";
import Post2 from "@/components/posts/post2/Post2.vue";

export default defineComponent({
	name: "Dynamic",
	components: { Post1, Post2 },
	setup() {
		const title = "dynamic components & keep alive";

		const blog = ref<object>({
			post1: "Post 1",
			post2: "Post 2",
		});

		const componentName = ref<string>("Post1"); // def

		const KA = ref(false);

		// methods

		function dynamicLoad(name: string) {
			componentName.value = name;
		}

		function toggleKA() {
			KA.value = !KA.value;
		}

		return { title, blog, componentName, dynamicLoad, KA, toggleKA };
	},
});
