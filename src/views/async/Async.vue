<template>
	<main class="async py-5">
		<h1 class="mb-2">Asynchronous Components &amp; HTTP calls</h1>

		<section class="async mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<p class="text-justify">
				The Chuk Norris Component will load asynchronously once the app gets an HTTP response from the the Chuck Norris'
				Jokes open REST API.
			</p>

			<a href="https://api.chucknorris.io/" target="_blanck" rel="nofollow noopener noreferrer" class="d-block mb-2">
				https://api.chucknorris.io/
			</a>

			<p class="text-justify text-accent">
				Once the Chuk Norris Component is loaded, click the
				<b>
					"Async Load"
				</b>
				button again to load more funny jokes. :)
			</p>


			<div class="btn-group mb-2">
				<button type="button" class="btn border-primary p-05 radius-sm" @click="loadAsyncCompo()">Async Load</button>
			</div>

			<!-- // Asynchronously Loaded Component -->
			<div v-if="toggleNorris">
				<Chuck />
			</div>
			<div v-else>
				{{ loading }}
			</div>
		</section>
	</main>
</template>

<script lang="ts" src="./async"></script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.async {
		background: linear-gradient(to right, rgb(168, 157, 189), palegreen);

		button {
			&:hover {
				color: white;
				background: $primary;
			}
			&:active {
				background: lighten($primary, 15%);
			}
		}
	}
</style>
