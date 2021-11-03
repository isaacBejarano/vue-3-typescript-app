import { computed, defineAsyncComponent, defineComponent, ref, watch } from "vue";

import store from "@/store";

export default defineComponent({
	name: "Async",
	components: {
		Chuck: defineAsyncComponent(() => import(/* webpackChunkName: "Chuck" */ "@/components/chuck-norris/Chuck.vue")),
	},
	setup() {
		const API = "https://api.chucknorris.io/jokes/random";
		const toggleNorris = ref(false);
		const loading = ref("");
		const chuck = computed(() => store.state.chuck);
		const i = ref(0);

		function loadAsyncCompo() {
			loading.value = "loading component...";
			if (i.value === 0) {
				setTimeout(() => store.dispatch("mutateChuckAsync", API), 1500); // add extra delay to notice asynchronisity
				i.value = 1;
			} else store.dispatch("mutateChuckAsync", API);
		}

		watch(chuck, () => {
			if (chuck) toggleNorris.value = true;
		});

		return { loading, toggleNorris, loadAsyncCompo };
	},
});
