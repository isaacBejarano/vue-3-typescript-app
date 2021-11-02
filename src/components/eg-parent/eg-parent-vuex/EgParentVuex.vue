<template>
	<h3 class="text-capitalize">
		{{ title }}
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
