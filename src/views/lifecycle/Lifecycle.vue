<template>
	<main class="lifecycle py-5">
		<h1 ref="refTitle" class="p-1 text-capitalize">{{ title }}</h1>

		<section class="mxw-568 mx-auto mb-2 p-1 radius-sm shadow">
			<h2>
				operate once
				<code>mounted</code>
			</h2>
			<span class="d-block">programmatic textContent</span>

			<p ref="mounted">
				Switch title once view is mounted
			</p>
			<button type="button" class="p-05 radius-sm" @click="operateOnMounted()">Try Mounted</button>
		</section>

		<section class="mxw-568 mx-auto mb-1 p-1 radius-sm shadow">
			<h2>
				operate on
				<code>updated</code>
			</h2>
			<span class="d-block">programmatic component update</span>
			<p>
				Type in some text in the input below.
				That will dynamically update the title value.
				Then we'll use the 'update' hook
				to randomly change its color
			</p>

			<input type="text" v-model="title" class="p-05 radius-sm" />
		</section>
	</main>
</template>

<script lang="ts" src="./lifecycle"></script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.lifecycle {
		background: linear-gradient(to right, lavenderblush, palegreen);

		code {
			color: $accent;
			font-size: 1.3rem;
		}

		span {
			font-style: italic;
		}
	}
</style>
