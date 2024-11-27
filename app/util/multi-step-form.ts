import { RegisterOptions } from "react-hook-form";

export const multiStepForm: IMultiStepForm = {
	steps: {
		'step-one' : {
			pathname: '/step-one',
			formTitle: 'Personal Info',
			formDescription: 'Please provide your name, email address, and phone number.',
			controls: [
				{
					control: {
						type: 'text',
						formRegister: 'name',
						label: 'Name',
						placeholder: 'e.g. Stephen King',
					}
				},
				{
					control: {
						type: 'email',
						formRegister: 'email',
						label: 'Email Address',
						placeholder: '',
						validation: {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Invalid email format'
							}
						}
					}
				},
				{
					control: {
						type: 'phone',
						formRegister: 'phoneNumber',
						label: 'Phone Number',
						placeholder: '',
						validation: {
							required: 'Phone number is required',
							validate: (value) => {
								const cleanValue = value.replace(/[-() ]/g, '');
								if (cleanValue.length < 10) {
									return 'Phone: minimum 10 digits';
								}
								if (cleanValue.length > 10) {
									return 'Phone: maximum 10 digits';
								}
								return true;
							}
						}
					}
				},
			]
		},
		'step-two' : {
			pathname: '/step-two',
			formTitle: 'Select your plan',
			formDescription: 'You have the option of monthly or yearly billing.',
			controls: [
				{
					control: {
						type: 'text',
						formRegister: 'test',
						label: 'Test input',
						placeholder: 'test input'
					}
				},
			]
		},
		'step-three' : {
			pathname: '/step-three',
			formTitle: 'Pick add-ons',
			formDescription: 'Add-ons help enhance your gaming experience.',
			controls: [
				{
					control: {
						type: 'text',
						formRegister: 'testOne',
						label: 'Test One input',
						placeholder: 'test input'
					}
				},
			]
		},
		'step-four' : {
			pathname: '/step-four',
			formTitle: 'Finishing up',
			formDescription: 'Double-check everything looks OK before confirming.',
			controls: [
				
			]
		},
	}
}

export type ControllerType = {
	type: 'text' | 'phone' | 'email' | 'checkbox' | 'select' | 'radio';
	label: string;
	formRegister: string;
	validation?: RegisterOptions;
  placeholder?: string;
  options?: string[]; 
};

export interface IMultiStepForm {
	steps: {
		[key: string]: {
			pathname: string
			formTitle: string,
			formDescription: string,
			controls: {
					control: ControllerType
			}[] 
		}
	}
}