<template>
	<section class="eg-child-emit">
		<h3 class="text-capitalize">
			{{ title }}

			<small class="d-block text-lowercase">
				<code>
					counter:

					{{ count }}
				</code>
			</small>
		</h3>

		<ul class="btn-group mt-0 mb-2">
			<li class="btn border-ternary p-05 radius-sm" @click="emitIncreaseForCount(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-ternary p-05 radius-sm" @click="emitIncreaseForCount(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>

		<div class="border-1 border-secondary radius-sm p-1">
			<EgGrandEmit :count="count" @grandChildCount="emitIncreaseForCount($event, payload)" />
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import EgGrandEmit from "@/components/eg-grand/eg-grand-emit/EgGrandEmit.vue";

	export default defineComponent({
		name: "EgChildEmit",
		components: {
			EgGrandEmit,
		},
		props: ["count"],
		emits: ["childCount"],
		setup(_props, { emit }) {
			const title = "child props/emitter";

			function emitIncreaseForCount(payload: number) {
				emit("childCount", payload);
			}

			return { title, emitIncreaseForCount };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-child-emit {
		ul {
			list-style: none;
			padding-left: 0;
			li {
				margin: 0.5em;
				padding: 0.5em;
				&:hover {
					color: white;
					background: $ternary;
				}
				&:active {
					background: lighten($ternary, 15%);
				}
			}
		}

		code {
			color: $ternary;
			font-size: 1.3em;
		}
	}
</style>
