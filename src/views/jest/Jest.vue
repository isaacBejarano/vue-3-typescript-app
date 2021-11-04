<template>
	<main class="jest py-5">
		<section class="mxw-768 mx-auto p-2 mb-2 shadow radius-sm">
			<h1 class="mb-2">
				Unit Testing
				<small class="d-block">with Vue-Utils &amp; Jest</small>
			</h1>

			<article class="py-1">
				<h2 class>
					Spec 1:
					<code class="text-accent">
						emit-driven.spec.ts
					</code>
				</h2>

				<textarea :value="p1" class="p-1 mt-1 border radius-sm" disabled></textarea>
			</article>
		</section>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { emitDrivenDoc } from "@/docs/emit-driven-doc";

	export default defineComponent({
		name: "Jest",
		setup() {
			const p1 = emitDrivenDoc.p1;

			return { p1 };
		},
	});
</script>

<style lang="scss" scoped>
	.jest {
		background: linear-gradient(to right, #e47594, palegreen);

		textarea {
			color: purple;
			background-color: whitesmoke;
			box-shadow: inset 0 3px 10px 0px #00000080;
			width: 300px;
			height: 900px;
			resize: vertical;
			overflow: hidden;
			font-size: .8rem;

			@media screen and (min-width: 568px) {
				width: 500px;
			}
			@media screen and (min-width: 768px) {
				width: 750px;
			}
		}
	}
</style>
