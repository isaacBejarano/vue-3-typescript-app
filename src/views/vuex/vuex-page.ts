import { defineComponent, ref } from "vue";

import EgParentNone from "@/components/eg-parent/eg-parent-none/EgParentNone.vue";
import EgParentEmit from "@/components/eg-parent/eg-parent-emit/EgParentEmit.vue";
import EgParentVuex from "@/components/eg-parent/eg-parent-vuex/EgParentVuex.vue";
import { e_DynamicComponents } from "@/global/enums";

export default defineComponent({
	name: "VueX",
	components: { EgParentNone, EgParentEmit, EgParentVuex },
	setup() {
		const title = {
			fragment1: "uncommunicated",
			fragment2: "emitter-driven communication",
			fragment3: "VueX communication",
		};

		const componentName = ref<string>(e_DynamicComponents.EgParentNone); // def

		function dynamicLoad(name: e_DynamicComponents) {
			componentName.value = name;
		}

		return { title, componentName, dynamicLoad };
	},
});
