import { shallowMount } from "@vue/test-utils";

import EgChildEmit from "@/components/eg-child/eg-child-emit/EgChildEmit.vue";
import EgGrandEmit from "@/components/eg-grand/eg-grand-emit/EgGrandEmit.vue";

describe("EgChildEmit & EgGrandEmit state communication", () => {
	/* 1. SETUP STATE */
	const setup = 99;
	const count: any = { props: { count: setup } };

	/* 2. OUTPUTS */
	const egChildEmit = shallowMount(EgChildEmit, count);
	const egGrandEmit = shallowMount(EgGrandEmit, count);

	/* 3. VALIDATION */
	it("EgChildEmit renders props.count from EgParentEmit", () => {
		expect(egChildEmit.html()).toContain("counter: 99"); // test DOM effects
	});

	it("EgGrandEmit renders props.count from EgChildEmit", () => {
		expect(egGrandEmit.html()).toContain("counter: 99"); // test DOM effects
	});

	/* 4. RESET STATE (if it was changed during Validation) */
});
