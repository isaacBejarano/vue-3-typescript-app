<template>
	<main class="home py-5">
		<section class="mxw-568 mx-auto pb-1">
			<img src="@/assets/icons/logo.png" alt="vue logo" width="80" height="80" />

			<p class="mb-2 text-italics">{{ p }}</p>

			<ul class="mxw-320 mx-auto">
				<li v-for="feature in features" :key="feature" class="text-left my-1">
					{{ feature }}
				</li>

				<li class="mb-2 text-left text-italics">among others...</li>
			</ul>
		</section>

		<section class="mxw-568 mx-auto mt-2 p-1 shadow radius-sm">
			<span class="d-block text-left text-accent">NOTE:</span>

			<p class="text-justify">{{ howToRemoveSS2 }}</p>

			<button type="button" @click="resetGuard()" class="text-accent p-05 mb-05 radius-sm">Reset Guard</button>
		</section>
	</main>
</template>

<script lang="ts" src="./home"></script>

<style lang="scss" scoped>
	.home {
		background-color: palegreen;
	}
</style>
