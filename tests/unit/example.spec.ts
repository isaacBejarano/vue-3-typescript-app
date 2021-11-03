import { shallowMount } from "@vue/test-utils";

import EgChildEmit from "@/components/eg-child/eg-child-emit/EgChildEmit.vue";

describe("EgChildEmit.vue", () => {
	it("renders props.count from EgParentEmit", () => {
		const count = 99;
		const wrapper = shallowMount(EgChildEmit, {
			props: { count },
		});

		console.log(wrapper.html());

		expect(wrapper.html()).toContain("counter: 99");
	});
});
