<template>
	<div>
		<img src="@/assets/img/chuck-norris.jpg" alt="chuck norris picture" width="250" class="shadow" />
		<p class="text-accent text-justify text-italics mt-1">"{{ joke }}"</p>
	</div>
</template>
<script lang="ts">
	import { watchEffect } from "vue";
	import { Vue } from "vue-class-component";
	import store from "@/store";

	export default class Chuck extends Vue {
		joke = "";

		beforeMount() {
			// VUEX @watch
			watchEffect(() => {
				if (store.getters.getChuck !== "") {
					this.joke = store.getters.getChuck;
				}
			});
		}
	}
</script>
