<template>
	<main class="pegi py-5">
		<section class="mxw-568 mx-auto pb-1">
			<h1 class="m-0 p-1">{{ title }}</h1>
			<img
				:src="require('@/' + jessica.src)"
				:alt="jessica.alt"
				:width="jessica.w"
				:height="jessica.h"
				class="shadow responsive-img"
			/>

			<section class="mxw-568 mx-auto my-2 p-1 shadow radius-sm">
				<span class="d-block text-left text-accent">NOTE:</span>

				<p class="text-justify">
					<span>{{ p1 }}</span>
					<code class="text-accent">{{ hooks1 }}</code>
					and
					<span>{{ p2 }}</span>
					<code class="text-accent">{{ hooks2 }}</code>
					and
					<code class="text-accent">{{ hooks3 }}</code>
					<span>{{ p3 }}</span>
				</p>
			</section>

			<h2 class="text-accent">{{ howToRemoveSessionStorageTitle }}</h2>

			<p class="text-justify p-1">{{ howToRemoveSS1 }}</p>
			<a :href="howToRemoveSSa1" target="_blanck" rel="nofollow noopener noreferrer" class="p-1">
				{{ howToRemoveSSa1 }}
			</a>
			<p class="text-justify p-1">{{ howToRemoveSS2 }}</p>

			<button type="button" @click="resetGuard()" class="text-accent p-05 radius-sm">Reset Guard</button>
		</section>
	</main>

	<!-- MODAL outta <main> -->
	<Modal :PEGI="PEGI" :modal="modal" @of-modal="subscribeModal" />
</template>

<script lang="ts" src="./pegi"></script>

<style lang="scss" scoped>
	.pegi {
		background: linear-gradient(to right, lightpink, palegreen);
	}
</style>
