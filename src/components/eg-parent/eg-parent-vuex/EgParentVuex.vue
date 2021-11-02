<template>
	<h3>
		e.g
		<span class="text-capitalize">
			{{ title }}
		</span>
	</h3>

		<hr />
</template>

<script>
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "EgParentVuex",
		setup() {
			const title = "parent vuex";
			return { title };
		},
	});
</script>

<style lang="scss" scoped></style>
