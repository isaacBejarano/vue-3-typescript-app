<template>
	<section class="eg-child-vuex">
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
			<li class="btn border-ternary p-05 radius-sm" @click="updateCount(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-ternary p-05 radius-sm" @click="updateCount(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>

		<div class="border-1 border-secondary radius-sm p-1">
			<EgGrandVuex />
		</div>
	</section>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import store from "@/store";

	import EgGrandVuex from "@/components/eg-grand/eg-grand-vuex/EgGrandVuex.vue";

	export default defineComponent({
		name: "EgChildVuex",
		components: {
			EgGrandVuex,
		},

		setup() {
			const title = "child vuex";
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

	.eg-child-vuex {
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
