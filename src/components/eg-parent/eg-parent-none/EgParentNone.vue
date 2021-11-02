<template>
	<section class="eg-parent-none">
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
			<li class="btn border-vue p-05 radius-sm" @click="updateCounter(0)">
				<span class="d-block">
					reset
				</span>
			</li>
			<li class="btn border-accent p-05 radius-sm" @click="updateCounter(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-accent p-05 radius-sm" @click="updateCounter(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>

		<div class="border-ternary border-1 radius-sm p-1">
			<EgChildNone />
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	import EgChildNone from "@/components/eg-child/eg-child-none/EgChildNone.vue";

	export default defineComponent({
		name: "EgParentNone",
		components: {
			EgChildNone,
		},
		setup() {
			const title = "parent uncommunicated";
			const defaultCounter = 0;
			const count = ref(defaultCounter);

			function updateCounter(n: number) {
				count.value = n === 0 ? defaultCounter : (count.value += n);
			}

			return { title, count, updateCounter };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-parent-none {
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
