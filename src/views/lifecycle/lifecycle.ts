// export default class TDD extends Vue {
// 	refTitle: string = setup(() => ref("Lifecycle Hooks"));
// 	p1!: HTMLElement;

import { defineComponent, onBeforeMount, onMounted, onUpdated, ref } from "vue";
import randomRGB from "@/utils/rgb-generator";

export default defineComponent({
	setup() {
		/* data */

		let refTitle: any = ref<any>("");
		let title: any = ref<any>("title");

		onBeforeMount(() => {
			console.log("beforeMount: => refTitle textContent is", refTitle.value.textContent);
		});

		onMounted(() => {
			refTitle.value.textContent = "lifecycle hooks";
			console.log("on mounted: programatic operation => refTitle textContent is", refTitle.value.textContent);
		});

		onUpdated(() => {
			const [R, G, B] = randomRGB();

			refTitle.value.style.color = `rgb(${R},${G},${B})`;
			console.log("on mounted: programatic operation => subrefTitle color is", refTitle.value.style.color);
		});

		/* methods */

		function operateOnMounted() {
			refTitle.value.textContent =
				refTitle.value.textContent === "lifecycle hooks" ? "bicycle looks" : "lifecycle hooks";
			console.log("once mounted: programatic operation => refTitle is", refTitle.value.textContent);
		}

		return { refTitle, title, operateOnMounted };
	},
});
