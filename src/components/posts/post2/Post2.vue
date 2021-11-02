<template>
	<h3 class="text-capitalize">
		{{ title }}
	</h3>

	<p>This Post has 1 hardcoded article and 0 dynamic articles</p>

	<article class="p-1 border radius-sm">
		<h4>{{ article.title }}</h4>
		<p class="text-justify text-italics">{{ article.content }}</p>
	</article>

	<hr />
</template>

<script>
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "Post2",
		setup() {
			const title = "Post 2";

			const article = {
				title: "Article 3",
				content:
					"Magnam voluptas tempore, eaque voluptatum cupiditate accusantium impedit facere suscipit perspiciatis unde sed fugiat est doloribus, sunt consequuntur recusandae. Quis obcaecati minima quasi ut distinctio ipsa voluptates veniam modi id?\
					Dicta quisquam voluptatum nemo placeat, autem molestiae. Incidunt sequi culpa dicta quo eaque non voluptatem omnis, perferendis laboriosam voluptate, dolore iure nemo explicabo impedit ea quisquam labore. Cupiditate, corrupti nesciunt?",
			};

			return { title, article };
		},
	});
</script>

<style lang="scss" scoped></style>
