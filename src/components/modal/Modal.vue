<template>
	<transition name="blur">
		<div class="modal-bg" v-if="prop_modal"></div>
	</transition>

	<transition name="blur">
		<div class="modal radius-sm shadow" v-if="prop_modal">
			<div class="icon-group m-0">
				<a href="https://pegi.info/" target="_blanck" rel="nofollow noopener noreferrer">
					<img :src="require('@/' + assets.label.src)" :alt="assets.label.alt" width="80" height="98" />
					<img :src="require('@/' + assets.description.src)" :alt="assets.description.alt" width="80" height="80" />
				</a>
			</div>

			<p class="msg p-1">
				This page has a PEGI-{{ qualification }} qualification. Accept only if you are at least {{ qualification }} year
				old. Otherwise, please close.
			</p>

			<div class="btn-group">
				<button type="button" class="p-05 radius-sm" @click="bypassGuard(true)">I am {{ qualification }}</button>
				<button type="button" class="p-05 radius-sm" @click="bypassGuard(false)">Close</button>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" src="./modal"></script>

<style lang="scss" scoped>
	@import "@/sass/_variables";

	// modal FX
	@keyframes backdrop-blur-in {
		from {
			backdrop-filter: blur(0px);
		}
		to {
			backdrop-filter: blur(45px);
		}
	}

	.modal-bg {
		position: fixed;
		top: 0;
		z-index: 2010;
		width: 100vmax;
		height: 100vmax;

		// fx
		animation: backdrop-blur-in 0.5s ease-in;
		backdrop-filter: blur(45px);
		background-color: transparentize(blanchedalmond, 0.7);
	}

	.modal {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		text-align: justify;
		color: $primary;
		background-color: transparentize(red, 0.7);
		//
		position: fixed;
		top: 50%;
		z-index: 2015;
		transform: translateY(-50%); // correct position
		// responsive
		@media screen and (min-width: $md) {
			left: 50%;
			transform: translate(-50%, -50%); // correct position
			width: auto;
		}

		.icon-group {
			display: flex;
			a > img {
				margin: 0 1rem;
				&:hover {
					box-shadow: 0px 3px 8px 0px black;
				}
			}

			@media screen and (min-width: $md) {
				display: block;
			}
		}

		.msg,
		button {
			font-size: 1.2em;
			word-wrap: break-word;
		}

		.msg {
			color: whitesmoke;
		}

		.btn-group {
			button {
				display: inline;
				margin-right: 0.5em;
			}
			button:last-child {
				margin-right: 0em;
			}
		}
	}
</style>
