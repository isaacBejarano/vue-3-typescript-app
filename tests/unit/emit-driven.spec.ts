import { shallowMount, VueWrapper } from "@vue/test-utils";

import EgParentEmit from "@/components/eg-parent/eg-parent-emit/EgParentEmit.vue";
import EgGrandEmit from "@/components/eg-grand/eg-grand-emit/EgGrandEmit.vue";

// suite #1

describe("EgParentEmit to EgGrandEmit state communication", () => {
	/* SETUP / TEARDOWN */

	let wrapper1: VueWrapper<any>, wrapper3: VueWrapper<any>;

	// reset data before each it()

	beforeEach(() => {
		wrapper1 = shallowMount(EgParentEmit);
		wrapper3 = shallowMount(EgGrandEmit, { props: { count: 99 } });
	});

	// reset moking fn after each it()

	afterEach(() => {
		wrapper1.unmount();
		wrapper3.unmount();
	});

	/* OUTPUT + VALIDATE */

	it("EgParentEmit updates and renders 'count' and renders 'title'", async () => {
		// mock updateCount(1) => count: 3
		await wrapper1.find("li:nth-child(2)").trigger("click");
		await wrapper1.find("li:nth-child(2)").trigger("click");
		await wrapper1.find("li:nth-child(2)").trigger("click");
		// mock updateCount(0) => count: 0
		await wrapper1.find("li:nth-child(1)").trigger("click");
		// mock updateCount(-1) => count: -2
		await wrapper1.find("li:nth-child(3)").trigger("click");
		await wrapper1.find("li:nth-child(3)").trigger("click");

		// 'count'

		expect(wrapper1.vm.count).toBe(-2); // test SETUP state
		expect(wrapper1.html()).toContain("counter: -2"); // test DOM render

		// 'title'

		expect(wrapper1.vm.title).toMatch("parent props/emitter"); // test SETUP state
		expect(wrapper1.html()).toContain("parent props/emitter"); // test DOM effects
	});

	it("EgGrandEmit renders 'props.count'", async () => {
		// 'props.count'

		expect(wrapper3.vm.count).toBe(99); // test SETUP state
		expect(wrapper3.html()).toContain("counter: 99"); // test DOM effects
	});
});
