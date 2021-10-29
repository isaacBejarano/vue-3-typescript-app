<template>
	<nav class="navbar shadow py-05">
		<router-link v-for="(link, i) in links" :key="link" class="nav-link" :to="link[1]">
			<span style="display: inline-flex; margin: .5rem" class="text-capitalize">
				{{ link[0] }}
			</span>
			<span class="nav-link-separator" v-if="i < links.length - 1">|</span>
		</router-link>
	</nav>
</template>

<script lang="ts" src="./navbar"></script>

<style lang="scss" scoped>
	@import "./navbar";
</style>
