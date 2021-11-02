<template>
	<h3 class="text-capitalize">
		{{ title }}
	</h3>

	<ul class="btn-group">
		<li v-for="article in articles" :key="article" @click="selectedPost = article" class="btn border-primary radius-sm">
			{{ article.title }}
		</li>
	</ul>

	<p>This Post has 0 hardcoded articles and 2 dynamic articles</p>
	<p class="text-accent" v-show="KA">Now Article state in Post 1 will be kept</p>

	<div v-if="selectedPost">
		<article class="p-1 border radius-sm">
			<h4>{{ selectedPost.title }}</h4>
			<p class="text-justify text-italics">{{ selectedPost.content }}</p>
		</article>
	</div>
	<strong v-else>
		Click on an Article!
	</strong>
</template>

<script>
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		name: "Post1",
		props: ["KA"],
		setup() {
			const title = "Post 1";

			const articles = ref([
				{
					title: "Article 1",
					content:
						"	Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste officia cumque necessitatibus natus magnam quaerat voluptates eligendi praesentium, voluptatum culpa in placeat debitis. Aut suscipit impedit perferendis magnam atque.",
				},
				{
					title: "Article 2",
					content:
						"Nesciunt laudantium ratione amet quas quasi quo laboriosam dicta itaque deleniti delectus est assumenda mollitia, eaque voluptatum repellat odit et! Perferendis iste possimus dolor ullam et ipsum id necessitatibus sapiente!",
				},
			]);

			const selectedPost = ref(null);

			return { title, articles, selectedPost };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	ul {
		list-style: none;
		padding-left: 0;
		li {
			margin: 0.5em;
			padding: 0.5em;
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
