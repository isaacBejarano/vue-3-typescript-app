<template>
	<main class="contact py-5">
		<h1 class="mb-2">{{ title }}</h1>

		<!-- FORM -->
		<form @submit.prevent="validateForm()" class="form mxw-568 mx-auto text-left p-05 radius-sm shadow">
			<label for="label0" class="d-block m-1">
				<span class="text-uppercase">
					{{ labels[0] }}
				</span>
				<input
					v-model="formdata.name"
					type="text"
					name="name"
					id="label0"
					placeholder="Type in your name"
					class="ml-1"
					ref="in0"
					@input="validateOnTouched('0')"
				/>
				<!-- invalid -->
				<span class="d-block is-invalid" v-show="this.validation.inputs[0].errors === 2">
					{{ validation.required.msg }}
				</span>
				<span class="d-block is-invalid" v-show="this.validation.inputs[0].errors === 1">
					{{ validation.inputs[0].msg }}
				</span>
			</label>

			<label for="label1" class="d-block m-1">
				<span class="text-uppercase">
					{{ labels[1] }}
				</span>
				<input
					v-model="formdata.surname"
					type="text"
					name="surname"
					id="label1"
					placeholder="Type in your surname"
					class="ml-1"
					ref="in1"
					@input="validateOnTouched('1')"
				/>
				<!-- invalid -->
				<span class="d-block is-invalid" v-show="this.validation.inputs[1].errors === 2">
					{{ validation.required.msg }}
				</span>
				<span class="d-block is-invalid" v-show="this.validation.inputs[1].errors === 1">
					{{ validation.inputs[1].msg }}
				</span>
			</label>

			<label for="label2" class="d-block m-1">
				<span class="text-uppercase">
					{{ labels[2] }}
				</span>
				<select v-model="formdata.role" name="role" id="label2" class="ml-1" ref="in2" @change="validateOnTouched('2')">
					<option value="frontend">Frontend Developer</option>
					<option value="backend">Backend Developer</option>
					<option value="ui">UI Designer</option>
				</select>

				<!-- invalid -->
				<span class="d-block is-invalid" v-show="this.validation.inputs[2].errors === 1">
					{{ validation.inputs[2].msg }}
				</span>
			</label>

			<label for="label3" class="d-block m-1 text-capitalize">
				{{ labels[3] }}
				<input
					type="checkbox"
					name="lgpd"
					id="label3"
					value="lgpd"
					v-model="formdata.policies"
					ref="in3"
					@change="validateOnTouched('3')"
				/>
				<!-- invalid -->
				<span class="d-block is-invalid" v-show="this.validation.inputs[3].errors === 1">
					{{ validation.inputs[3].msg }}
				</span>
			</label>

			<label for="label4" class="ml-1 text-capitalize">
				{{ labels[4] }}
			</label>
			<input type="checkbox" name="newsletter" id="label4" value="newsletter" v-model="formdata.policies" />

			<button type="submit" class="d-block p-05 m-1 radius-sm">Submit</button>

			<!-- debug -->
			<div style="color:crimson; border: 1px dashed crimson; max-width: 320px" class="mx-auto p-1 mt-2 mb-1 ">
				<h4 class="mt-0">
					DEBUG formdata
				</h4>
				Name: {{ formdata.name }}
				<br />
				Surname: {{ formdata.surname }}
				<br />
				Role: {{ formdata.role }}
				<br />
				Policies: {{ formdata.policies }}
			</div>
		</form>
	</main>
</template>

<script lang="ts" src="./form"></script>

<style lang="scss" scoped>
	.contact {
		background: linear-gradient(to right, powderblue, palegreen);
	}

	@import "./form";
</style>
