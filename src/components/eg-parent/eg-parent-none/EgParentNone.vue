<template>
	<section class="eg-parent-none">
		<h3>
			e.g
			<span class="text-capitalize">
				{{ title }}
			</span>
		</h3>

		<hr />

		<ul class="btn-group">
			<li v-for="post in posts" :key="post" @click="selectedPost = post" class="btn border-primary radius-sm">
				{{ post.title }}
			</li>
		</ul>

		<div v-if="selectedPost">
			<article class="p-1 border radius-sm">
				<h4>{{ selectedPost.title }}</h4>
				<p class="text-justify text-italics">{{ selectedPost.content }}</p>
			</article>
		</div>
		<strong v-else>
			Click on a Post!
		</strong>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		name: "EgParentNone",
		setup() {
			const title = "parent none";
			const posts = ref([
				{
					title: "Post 1",
					content:
						"	Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste officia cumque necessitatibus natus magnam quaerat voluptates eligendi praesentium, voluptatum culpa in placeat debitis. Aut suscipit impedit perferendis magnam atque.",
				},
				{
					title: "Post 2",
					content:
						"Nesciunt laudantium ratione amet quas quasi quo laboriosam dicta itaque deleniti delectus est assumenda mollitia, eaque voluptatum repellat odit et! Perferendis iste possimus dolor ullam et ipsum id necessitatibus sapiente!",
				},
			]);
			const selectedPost = ref(null);

			return { title, posts, selectedPost };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	.eg-parent-none {
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
	}
</style>
