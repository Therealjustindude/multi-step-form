export type BillingCycleValue = 'monthly' | 'yearly'
export type SwitchOptions = {
  label: string;
  value: BillingCycleValue;
};
export const billingCycles: [
	SwitchOptions,
	SwitchOptions
] = [
	{ label: 'Monthly', value: 'monthly' },
	{ label: 'Yearly', value: 'yearly' }
]