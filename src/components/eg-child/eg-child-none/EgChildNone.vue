<template>
	<section class="eg-child-none">
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
			<li class="btn border-ternary p-05 radius-sm" @click="updateCounter(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-ternary p-05 radius-sm" @click="updateCounter(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>

		<div class="border-1 border-secondary radius-sm p-1">
			<EgGrandNone />
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	import EgGrandNone from "@/components/eg-grand/eg-grand-none/EgGrandNone.vue";

	export default defineComponent({
		name: "EgChildNone",
		components: {
			EgGrandNone,
		},
		setup() {
			const title = "child uncommunicated";

			const defaultCounter = 0;
			const count = ref(defaultCounter);

			function updateCounter(n: number) {
				count.value += n;
			}

			return { title, count, updateCounter };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-child-none {
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
