<template>
	<main class="dynamic py-5">
		<h1 class="mb-2 text-capitalize">{{ title }}</h1>

		<ul class="btn-group">
			<li class="btn border-accent radius-sm" @click="dynamicLoad('Post1')">
				{{ blog.post1 }}
			</li>
			<li class="btn border-accent radius-sm" @click="dynamicLoad('Post2')">
				{{ blog.post2 }}
			</li>
		</ul>

		<section class="mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<p class="text-justify">
				We'll load two components dynamically: Post 1 and Post 2. The first has dynamic data while the second has only
				hardcoded data. On navigating through both posts, Articles in Post 1 won't persist their state. To solve this,
				we'll use
				<code>keep-alive</code>
				with dynamic components for that pourpose.

				<span class="d-block mt-1">
					Press the button below to toggle the
					<b>keep-alive</b>
					state persistance functionality. Take a look at the Articles persistance in Post 1 to notice so.
				</span>
			</p>

			<div class="btn-group">
				<div style="width: 50%">
					<button class="btn border-accent radius-sm" @click="toggleKA()">
						<span style="line-height: 2em">
							Toggle
						</span>
					</button>
				</div>

				<p style="width: 50%">
					<code v-if="KA">keep-alive</code>
				</p>
			</div>
		</section>

		<!-- dynamic components -->
		<section class="dynamic mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<keep-alive v-if="KA">
				<component :is="componentName" :KA="KA"></component>
			</keep-alive>
			<div v-else>
				<component :is="componentName"></component>
			</div>
		</section>
	</main>
</template>

<script lang="ts" src="./dynamic"></script>

<style lang="scss" scoped>
	@import "./dynamic";
</style>
