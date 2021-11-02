<template>
	<section class="eg-grand-vuex">
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
			<li class="btn border-secondary p-05 radius-sm" @click="updateCount(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-secondary p-05 radius-sm" @click="updateCount(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>
	</section>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import store from "@/store";

	export default defineComponent({
		name: "EgGrandVuex",
		setup() {
			const title = "grand child vuex";
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

	.eg-grand-vuex {
		ul {
			list-style: none;
			padding-left: 0;
			li {
				margin: 0.5em;
				padding: 0.5em;
				&:hover {
					color: white;
					background: $secondary;
				}
				&:active {
					background: lighten($secondary, 15%);
				}
			}
		}

		code {
			color: $secondary;
			font-size: 1.3em;
		}
	}
</style>
