<template>
	<main class="tdd py-5">
		<section class="mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<h1>
				Test Driven Development
				<small class="d-block">with Vue-Utils &amp; Jest</small>
			</h1>
		</section>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "TDD",
	});
</script>

<style lang="scss" scoped>
	.tdd {
		background: linear-gradient(to right, #e47594, palegreen);

		textarea {
			min-width: 320px;
			width: 500px;
			height: 180px;
		}
	}
</style>
