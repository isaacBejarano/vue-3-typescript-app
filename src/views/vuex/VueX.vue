<template>
	<main class="vuex py-5">
		<h1 class="mb-0">VueX</h1>
		<h2 class="text-italics mt-0 mb-2">for state-driven applications</h2>

		<section class="mxw-568 mx-auto p-1 mb-3 shadow radius-sm">
			<p class="text-justify">
				The
				<b>uncommunicated</b>
				cluster of nested components shows how data doesn't flow from one component to the other, since it is neither
				emitted nor managed by VueX store. Here, the parent's global counter won't communicate the data state throughout
				the nested components and the nested counters have their own local state, which is not transmited to their
				ancestors.
			</p>

			<p class="text-justify">
				The
				<b>props/emitter-driven</b>
				cluster of nested components shows how data do flow from one component to the other, by using event emitters and
				listeners. Here, the parent's global counter will definitely communicate the data state throughout the nested
				components and so will do the nested local counters. But, when components communice throughout more than 1 level
				of nesting, managing that state will be convoluted and verbose, so more prone to bugs.
			</p>

			<p class="text-justify">
				The
				<b class="text-accent">state-driven</b>
				cluster of nested components shows how data do flow from one component to the other, by using the
				<code>VueX</code>
				store. Here, the parent's global counter will definitely communicate the data state throughout the nested
				components and so will do the nested local counters. VueX will do it clean, easy-to-read and easy-to-maintain
				throughout the 3 levels of nesting or more, by using actions and mutations, both triggered by dispatchers -to
				update data- and regular getters -to read data.
			</p>

			<p class="text-justify text-italics text-ternary mt-2">
				By clicking one of the buttons below, a
				<b>parent</b>
				component will load, and so its
				<b>child</b>
				and
				<b>grand-child</b>
				nested components. Thus, giving us a 3 level nesting.
			</p>
		</section>

		<!-- dynamic components -->
		<h2>Type of Components intercommunication</h2>
		<small class="text-italics">dynamic components</small>

		<ul class="btn-group mt-0 mb-2">
			<li class="btn border-accent radius-sm" @click="dynamicLoad('EgParentNone')">
				{{ title.fragment1 }}
			</li>
			<li class="btn border-accent radius-sm" @click="dynamicLoad('EgParentEmit')">
				{{ title.fragment2 }}
			</li>
			<li class="btn radius-sm border-accent text-accent" @click="dynamicLoad('EgParentVuex')">
				{{ title.fragment3 }}
			</li>
		</ul>

		<section v-if="componentName" class="dynamics mxw-568 mx-auto p-1 mb-2 shadow radius-sm">
			<!-- <keep-alive> -->
			<component :is="componentName"></component>
			<!-- </keep-alive> -->
		</section>
	</main>
</template>

<script lang="ts" src="./vuex-page.ts"></script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.vuex {
		background: linear-gradient(to right, lemonchiffon, palegreen);

		ul {
			list-style: none;
			padding-left: 0;
			li {
				margin: 0.5em;
				padding: 0.5em;
				&:hover {
					color: white;
					background: $accent;
				}
				&:active {
					background: lighten($accent, 15%);
				}
			}
		}
	}

	code {
		color: mediumvioletred;
		font-size: 1.3rem;
	}
</style>
