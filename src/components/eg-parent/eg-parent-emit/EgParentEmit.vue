<template>
	<section class="eg-parent-emit">
		<h3 class="text-capitalize">
			{{ title }}
			<small class="d-block  text-lowercase">
				<code>
					counter:
					{{ count }}
				</code>
			</small>
		</h3>

		<ul class="btn-group mt-0 mb-2">
			<li class="btn border-vue p-05 radius-sm" @click="updateCount(0)">
				<span class="d-block">
					reset
				</span>
			</li>
			<li class="btn border-accent p-05 radius-sm" @click="updateCount(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-accent p-05 radius-sm" @click="updateCount(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>

		<div class="border-ternary border-1 radius-sm p-1">
			<EgChildEmit :count="count" @childCount="updateCount($event, payload)" />
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	import EgChildEmit from "@/components/eg-child/eg-child-emit/EgChildEmit.vue";

	export default defineComponent({
		name: "EgParentEmit",
		components: {
			EgChildEmit,
		},
		setup() {
			const title = "parent props/emitter";
			const defaultCounter = 0;
			const count = ref(defaultCounter);

			function updateCount(n: number) {
				count.value = n === 0 ? defaultCounter : (count.value += n);
			}

			return { title, count, updateCount };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-parent-emit {
		ul {
			list-style: none;
			padding-left: 0;
			li {
				&:not(.border-vue) {
					margin: 0.5em;
					padding: 0.5em;
					&:hover {
						color: white;
						background: $accent;
					}
					&:active {
						background: lighten($accent, 15%);
					}
				}

				&.border-vue {
					margin: 0.5em;
					padding: 0.5em;
					&:hover {
						color: white;
						background: $vue;
					}
					&:active {
						background: lighten($vue, 15%);
					}
				}
			}
		}

		code {
			color: $accent;
			font-size: 1.3em;
		}
	}
</style>
