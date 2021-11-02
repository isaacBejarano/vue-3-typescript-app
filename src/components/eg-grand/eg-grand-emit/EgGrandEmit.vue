<template>
	<section class="eg-grand-emit">
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
			<li class="btn border-secondary p-05 radius-sm" @click="updateCounter(1)">
				<span class="d-block" style="width: 20px">
					+
				</span>
			</li>
			<li class="btn border-secondary p-05 radius-sm" @click="updateCounter(-1)">
				<span class="d-block" style="width: 20px">
					-
				</span>
			</li>
		</ul>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		name: "EgGrandEmit",
		setup() {
			const title = "grand child props/emitter";
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

	.eg-grand-emit {
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
