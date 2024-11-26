export const formSteps: IFormSteps[] = [
	{
		stepNumber: 1,
		navDescription: 'YOUR INFO',
		
		pathname: '/step-one',
		prevStep: '/',
		nextStep: '/step-two'
	},
	{
		stepNumber: 2,
		navDescription: 'SELECT PLAN',
		pathname: '/step-two',
		prevStep: '/step-one',
		nextStep: '/step-three'
	},
	{
		stepNumber: 3,
		navDescription: 'ADD-ONS',
		pathname: '/step-three',
		prevStep: '/step-two',
		nextStep: '/step-four'
	},
	{
		stepNumber: 4,
		navDescription: 'SUMMARY',
		pathname: '/step-four',
		prevStep: '/step-three',
		nextStep: null
	},
]

export interface IFormSteps {
	stepNumber: number,
	navDescription: string,
	// should match your routes
	pathname: string,
	// should match your routes
	prevStep: null | string
	// should match your routes
	nextStep: null | string
}