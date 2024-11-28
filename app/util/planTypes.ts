export type ButtonGroupItem = {
	name: string;
  value: string;
  yearlyPrice: number;
  monthlyPrice: number;
  extra: string;
};

export type UpdatedButtonGroupItem = {
  name: string;
	value: string;
	billingCycle: string;
  price: number;
  extra?: string;
};

export const planTypes: ButtonGroupItem[] = [
	{ 
		name: 'Arcade',
		value: 'arcade', 
		monthlyPrice: 9, 
		yearlyPrice: 90, 
		extra: '2 months free'
	},
	{ 
		name: 'Advanced',
		value: 'advanced', 
		monthlyPrice: 12, 
		yearlyPrice: 120, 
		extra: '2 months free'
	},
	{ 
		name: 'Pro',
		value: 'pro', 
		monthlyPrice: 15, 
		yearlyPrice: 150, 
		extra: '2 months free' 
	},
]