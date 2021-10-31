// export default class TDD extends Vue {
// 	title: string = setup(() => ref("Lifecycle Hooks"));
// 	p1!: HTMLElement;

import { defineComponent, isRef, onBeforeMount, onMounted, proxyRefs, reactive, Ref, ref } from "vue";

// 	mounted() {
// 		// this.$nextTick(() => {
// 		this.p1 = <HTMLElement>this.$refs.mounted;
// 		this.p1.style.color = "blue";
// 		// });
// 	}

// 	// methods
// 	operateOnMounted() {
// 		this.p1.style.color = this.p1.style.color === "blue" ? "darkgoldenrod" : "blue";
// 	}

// 	operateOnUpdated() {
// 		this.title = "The title changed!";
// 	}

// 	updated() {
// 		this.p1.style.color = "red";
// 	}
// }

export default defineComponent({
	setup() {
		/* data */

		const title = ref<string>("lifecycle hooks");
		const lol = ref<any>("pop");

		/* methods */

		function operateOnMounted() {
			// title.value.style.color = this.p1.style.color === "blue" ? "darkgoldenrod" : "blue";
			console.log(title.value);
			console.log(proxyRefs(lol.value.innerText))
			title.value = "lifecycle cooks";
		}

		onMounted(() => {
			console.log(lol.value.innerText);
		});

		onBeforeMount(() => {
			console.log(lol.value.innerText);
		});

		return { title, operateOnMounted };
	},
});
