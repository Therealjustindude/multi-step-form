export const FormSteps: IFormSteps[] = [
	{
		step: 1,
		description: 'YOUR INFO',
		nextStep: 'step-two'
	},
	{
		step: 2,
		description: 'SELECT PLAN',
		nextStep: 'step-three'
	},
	{
		step: 3,
		description: 'ADD-ONS',
		nextStep: 'step-four'
	},
	{
		step: 4,
		description: 'SUMMARY',
		nextStep: null
	},
]

export interface IFormSteps {
	step: number,
	description: string,
	nextStep: null | string
}