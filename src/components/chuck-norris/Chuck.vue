<template>
	<div class="chuck">
		<img src="@/assets/img/chuck-norris.jpg" alt="chuck norris picture" width="250" class="shadow" />
		<p class="text-justify text-italics p-1 mt-1 shadow">"{{ chuck }}"</p>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";

	import store from "@/store";

	export default defineComponent({
		name: "Chuck",
		setup() {
			const chuck = computed(() => store.state.chuck);

			return { chuck };
		},
	});
</script>

<style lang="scss" scoped>
	.chuck {
		p {
			font-size: 1rem;
			color: white;
			background-color: mediumpurple;
		}
	}
</style>
