export const formSteps: IFormSteps[] = [
	{
		stepNumber: 1,
		navDescription: 'YOUR INFO',
		formTitle: 'Personal Info',
		formDescription: 'Please provide your name, email address, and phone number.',
		pathname: '/step-one',
		prevStep: '/',
		nextStep: '/step-two'
	},
	{
		stepNumber: 2,
		navDescription: 'SELECT PLAN',
		formTitle: 'Select your plan',
		formDescription: 'You have the option of monthly or yearly billing.',
		pathname: '/step-two',
		prevStep: '/step-one',
		nextStep: '/step-three'
	},
	{
		stepNumber: 3,
		navDescription: 'ADD-ONS',
		formTitle: 'Pick add-ons',
		formDescription: 'Add-ons help enhance your gaming experience.',
		pathname: '/step-three',
		prevStep: '/step-two',
		nextStep: '/step-four'
	},
	{
		stepNumber: 4,
		navDescription: 'SUMMARY',
		formTitle: 'Finishing up',
		formDescription: 'Double-check everything looks OK before confirming.',
		pathname: '/step-four',
		prevStep: '/step-three',
		nextStep: null
	},
]

export interface IFormSteps {
	stepNumber: number,
	navDescription: string,
	formTitle: string,
	formDescription: string,
	// should match your routes
	pathname: string,
	// should match your routes
	prevStep: null | string
	// should match your routes
	nextStep: null | string
}