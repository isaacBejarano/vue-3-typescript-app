<template>
	<transition name="blur">
		<div class="modal-bg" v-if="modal"></div>
	</transition>

	<transition name="blur">
		
		<div class="modal radius-sm shadow" v-if="modal">
		{{ PEGI }}
		{{ modal }}
		
			<div class="icon-group m-0">
				<a href="https://pegi.info/" target="_blanck" rel="nofollow noopener noreferrer">
					<img :src="require('@/' + assets.label.src)" :alt="assets.label.alt" width="80" height="98" />
					<img :src="require('@/' + assets.description.src)" :alt="assets.description.alt" width="80" height="80" />
				</a>
			</div>

			<p class="msg p-1">
				This page has a PEGI-{{ PEGI }} qualification. Accept only if you are at least {{ PEGI }} year old. Otherwise,
				please close.
			</p>

			<div class="btn-group">
				<button type="button" class="p-05 radius-sm" @click="bypassGuard(true)">I am {{ PEGI }}</button>
				<button type="button" class="p-05 radius-sm" @click="bypassGuard(false)">Close</button>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" src="./modal"></script>

<style lang="scss" scoped>
	@import "./modal";
</style>
