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
						label: 'Name',
						placeholder: 'e.g. Stephen King',
					}
				},
				{
					control: {
						type: 'email',
						label: 'Email Address',
						placeholder: 'stephenking@lorem.com',
						required: true
					}
				},
				{
					control: {
						type: 'phone',
						label: 'Phone Number',
						placeholder: '123-456-7890',
						required: true
					}
				},
			]
		},
		'step-two' : {
			pathname: '/step-two',
			formTitle: 'Select your plan',
			formDescription: 'You have the option of monthly or yearly billing.',
			controls: [
				
			]
		},
		'step-three' : {
			pathname: '/step-three',
			formTitle: 'Pick add-ons',
			formDescription: 'Add-ons help enhance your gaming experience.',
			controls: [
				
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
  placeholder?: string;  // Optional placeholder for text inputs
  options?: string[];    // Optional options for select inputs (e.g., ['Option 1', 'Option 2'])
  required?: boolean;    // Optional flag to mark the input as required
  // Add more properties as needed in the future
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