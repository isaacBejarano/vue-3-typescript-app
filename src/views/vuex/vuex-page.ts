import { defineAsyncComponent, defineComponent, ref } from "vue";

import { e_DynamicComponents } from "@/global/enums";

export default defineComponent({
	name: "VueX",
	components: {
		EgParentNone: defineAsyncComponent(() =>
			import(/* webpackChunkName: "Uncommunicated" */ "@/components/eg-parent/eg-parent-none/EgParentNone.vue")
		),
		EgParentEmit: defineAsyncComponent(() =>
			import(/* webpackChunkName: "PropsEmitter_Driven" */ "@/components/eg-parent/eg-parent-emit/EgParentEmit.vue")
		),
		EgParentVuex: defineAsyncComponent(() =>
			import(/* webpackChunkName: "VueX_State_Managed" */ "@/components/eg-parent/eg-parent-vuex/EgParentVuex.vue")
		),
	},
	setup() {
		const title = {
			fragment1: "uncommunicated",
			fragment2: "props/emitter-driven",
			fragment3: "state-managed",
		};

		const componentName = ref<string | any>(null); // def

		function dynamicLoad(name: e_DynamicComponents) {
			componentName.value = name;
		}

		return { title, componentName, dynamicLoad };
	},
});
