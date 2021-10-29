import { defineComponent, Ref, ref, watchEffect } from "vue";

import { i_Form } from "@/interfaces/form";

export default defineComponent({
	name: "Form",

	setup() {
		// data

		const title = "Form Validation";

		const labels = ["name", "surname", "role", "accept privacy policy", "subscribe to newsletter"];

		const formdata: Ref<i_Form> = ref({
			name: "",
			surname: "",
			role: "front", // def
			policies: <string[]>[],
		});

		const validation: Ref<any> = ref({
			required: { msg: "Field required" },
			inputs: [
				{
					msg: "Name must have at least 2 letters",
					errors: 0,
				},
				{
					msg: "Surname must have at least 2 letters",
					errors: 0,
				},
				{
					msg: "Select one",
					errors: 0,
				},
				{
					msg: "You must accept our Privacy Policy befor continuing",
					errors: 0,
				},
			],
		});

		// template refs

		const in0 = ref(null);
		const in1 = ref(null);
		const in2 = ref(null);
		const in3 = ref(null);

		// watchEffect(in0, () => console.warn("W"));

		// methods
		function validateOnTouched(i: string) {
			let errorType = 0;
			let v: string;

			if (+i === 0) v = in0.value!["value"];
			else if (+i === 1) v = in1.value!["value"];
			else if (+i === 2) v = in2.value!["value"];
			else if (+i === 3) v = in3.value!["value"];
			else v = "";
			// ...

			// shared error - errorType 1
			if (v.trim().length === 0) errorType += 1;

			// specific error - errorType 2
			if (+i <= 1 && v.trim().length < 2) errorType += 1;
			else if (+i === 3 && !in3.value!["checked"]) errorType += 1;

			validation.value.inputs[+i].errors = <number>errorType; // @change/@input CSS
		}

		function validateForm() {
			let errors = 0;

			for (let i = 0; i < validation.value.inputs.length; i++) {
				validateOnTouched(<string>"" + i);
			}

			for (let input of validation.value.inputs) {
				errors += input.errors;
			}

			// submit
			if (errors === 0) {
				alert("Form submited :)"); // @submit HTTP
				formdata.value = <i_Form>{}; // reset v-model
			} else alert("Invalid form :(");
		}

		return { title, labels, formdata, validation, in0, in1, in2, in3, validateOnTouched, validateForm };
	},
});
