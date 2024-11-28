export type CheckBoxItem = {
	title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type UpdatedCheckBoxItem = {
  title: string;
  description: string;
  billingCycle: string;
  price: number;
};

export const addOnItems: CheckBoxItem[]  = [
	{
		title: 'Online Service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
		yearlyPrice: 10
	},
	{
		title: 'Larger Storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
		yearlyPrice: 20
	},
	{
		title: 'Customizable Profile',
		description: 'Cutsom theme on your profile',
		monthlyPrice: 2,
		yearlyPrice: 20
	}
]