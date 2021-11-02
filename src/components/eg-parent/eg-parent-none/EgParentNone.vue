<template>
	<section class="eg-parent-none">
		<h3>
			e.g
			<span class="text-capitalize">
				{{ title }}
			</span>
		</h3>

		<hr />
	</section>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "EgParentNone",
		setup() {
			const title = "parent none";

			return { title };
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
				margin: 0.5em;
				padding: 0.5em;
				&:hover {
					color: white;
					background: $primary;
				}
				&:active {
					background: lighten($primary, 15%);
				}
			}
		}
	}
</style>
