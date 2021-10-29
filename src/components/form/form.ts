import { Options, Vue } from "vue-class-component";

import { i_Form } from "@/interfaces/form";

@Options({
	data() {
		return {
			labels: ["NAME", "SURNAME", "ROLE", "Accept Privacy Policy", "Subscribe to Newsletter"],
			formdata: <i_Form>{
				name: "",
				surname: "",
				role: "front", // def
				policies: <string[]>[],
			},
			validation: {
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
			},
		};
	},

	methods: {
		validateOnTouched(i: string) {
			// errors repertoire
			const ref: any = this.$refs[i];

			// local error counter
			let errorType = 0;

			// shared error - errorType 1
			if (ref.value.length === 0) errorType += 1;

			// specific error - errorType 2
			if (+i <= 1 && ref.value.length < 2) errorType += 1;
			else if (+i == 3 && !ref.checked) errorType += 1;

			this.validation.inputs[+i].errors = errorType; // @change/@input CSS
		},
		validateForm() {
			for (let i = 0; i < this.validation.inputs.length; i++) {
				this.validateOnTouched(<string>"" + i);
			}

			let errors = 0;
			for (let input of this.validation.inputs) {
				errors += input.errors;
			}

			// submit
			if (errors === 0) {
				alert("Form submited :)"); // @submit HTTP
				this.formdata = {}; // reset v-model
			} else alert("Invalid form :(");
		},
	},
})
export default class Form extends Vue {}
