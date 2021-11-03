<template>
	<main class="tdd py-5">
		<section class="mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<h1>
				Test Driven Development
				<small class="d-block">with Jest</small>
			</h1>

			<textarea :value="p1" class="p-1 border radius-sm"></textarea>
		</section>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "TDD",
		setup() {
			const p1 =
				'describe("EgChildEmit.vue", () => { \
				\n \
				\nit("renders props.count from EgParentEmit", () => { \
				const count = 99;\
				\nconst	wrapper = shallowMount(EgChildEmit,\
				{ props: { count }, });\
				\n \
				\nexpect(wrapper.html()).toContain("counter: 99");\
				\n});\
				\n \
				\n}';

			return { p1 };
		},
	});
</script>

<style lang="scss" scoped>
	.tdd {
		background: linear-gradient(to right, #e47594, palegreen);

		textarea {
			min-width: 320px;
			width: 500px;
			height: 180px;
		}
	}
</style>
