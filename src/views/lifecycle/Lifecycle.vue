<template>
	<main class="lifecycle py-5">
		<h1 class="p-1 text-capitalize">{{ title }}</h1>
		<h3 ref="pop" class="lol">LOL</h3>

		<section class="mxw-568 mx-auto mb-2 p-1 radius-sm shadow">
			<h2>
				operate on
				<code>mounted</code>
			</h2>
			<span class="d-block">programmatic CSS styling</span>

			<p ref="mounted">
				Change color once view is mounted
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
				The button below will change the title. Then we'll use the 'update' hook to trigger a change in the previuos
				programatically-colored text. Thus, we'll set its color to red, automatically on update event.
			</p>

			<!-- <button type="button" class="p-05 radius-sm" @click="operateOnUpdated()">Try Updated</button> -->
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
