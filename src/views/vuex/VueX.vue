<template>
	<main class="vuex py-5">
		<h1 class="mb-2">VueX</h1>

		<section class="mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<h2>
				<span class="d-block text-accent">{{ title.fragment1 }}</span>
				<span class="d-block">
					<small>
						{{ title.fragment2 }}
					</small>
				</span>
				<span>{{ title.fragment3 }}</span>
			</h2>

			<p class="text-justify text-italics">
				By clicking one of the buttons below, a
				<b>parent</b>
				component will load, and so its
				<b>child</b>
				and
				<b>grand-child</b>
				nested components. Thus, giving us a 3 level nesting.
			</p>

			<p class="text-justify">
				The
				<b>uncommunicated</b>
				cluster of nested components shows how data doesn't flow from one component to the other, since it is neither
				emitted nor managed by VueX store. Here, the counter won't communicate the data state throughout the nested
				components.
			</p>

			<p class="text-justify">
				The
				<b>emitter-driven</b>
				cluster of nested components shows how data do flow from one component to the other, by using event emitters and
				listeners. Here, the counter will definitely communicate the data state throughout the nested components. But,
				when components communice throughout more than 1 level of nesting, managing that state will be convoluted and
				verbose, so more prone to bugs.
			</p>

			<p class="text-justify">
				The
				<b>state-driven</b>
				cluster of nested components shows how data do flow from one component to the other, by using the VueX store.
				Here, the counter will definitely communicate the data state throughout the nested components. And VueX will do
				it clean, easy-to-read and easy-to-maintain throughout the 3 levels of nesting, by using actions, mutations and
				dispatchers to trigger both, and getters to read data. We could even nest infinite childs and still keep the
				readability of the data flow.
			</p>

			<p class="mt-2 text-italics">Go check this VueX State Management live example:</p>
			<a
				href="https://isaacbejarano.com/vuex-counter/"
				target="_blanck"
				rel="nofollow noopener noreferrer"
				class="text-accent"
			>
				https://isaacbejarano.com/vuex-counter/
			</a>
		</section>
	</main>
</template>

<script lang="ts" src="./vuex-page"></script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.vuex {
		background: linear-gradient(to right, lemonchiffon, palegreen);
	}
</style>
