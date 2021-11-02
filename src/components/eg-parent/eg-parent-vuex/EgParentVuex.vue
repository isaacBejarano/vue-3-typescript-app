<template>
	<section class="eg-parent-vuex">
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
			<EgChildVuex />
		</div>
	</section>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import store from "@/store";

	import EgChildVuex from "@/components/eg-child/eg-child-vuex/EgChildVuex.vue";

	export default defineComponent({
		name: "EgParentVuex",
		components: {
			EgChildVuex,
		},
		setup() {
			const title = "parent vuex";
			const count = computed(() => store.state.count);

			function updateCount(n: number) {
				if (n === 0) store.commit("resetCount");
				else store.commit("mutateCount", n);
			}

			return { title, count, updateCount };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-parent-vuex {
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
