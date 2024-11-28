"use client";
import { useFormContext } from "react-hook-form";
import { ButtonGroupControl } from "../ui/Controls/ButtonGroupControl";
import { useState } from "react";
import { SwitchControl } from "../ui/Controls/SwitchControl";

export default function Page() {
	const { control: formControl, getValues } = useFormContext();
	const [billingCycle, setBillingCycle] = useState<SwitchValue>(getValues('billingCycle') || 'monthly');
	let updatedButtonGroupItems: UpdatedButtonGroupItem[] = [];

  const handleSwitchChange = (newVal: string) => {
    const newBillingCycle = newVal as SwitchValue;
    setBillingCycle(newBillingCycle);
	};
	
	if (billingCycle === 'monthly') {
		updatedButtonGroupItems = btnGroupItems.map((item) => {
			return ({
				name: item.name,
				value: item.value,
				price: item.monthlyPrice + '/mo'
			});
		})
	}

	if (billingCycle === 'yearly') {
		updatedButtonGroupItems = btnGroupItems.map((item) => {
			return ({
				name: item.name,
				value: item.value,
				price: item.yearlyPrice + '/yr',
				extra: item.extra
			});
		})
	}

	return (
		<div className="flex flex-col gap-10 justify-center items-start w-[100%]">
			<div className="flex flex-col gap-2">
				<h1 className="font-extrabold text-2xl md:text-4xl">Select your plan</h1>
				<p className="text-cool-gray font-semibold">You have the option of monthly or yearly billing.</p>
			</div>
			<form className="w-[100%]">
				<div className="flex flex-col gap-8">
					<div className="space-y-1 md:space-y-2">
						<ButtonGroupControl
							formControl={formControl}
							formName="planType"
							rules={{
								required: 'Plan is required',
							}}
							groupItems={updatedButtonGroupItems}
							// handleOnClick={handleButtonGroupClick}
						/>
					</div>
					<div className="space-y-1 md:space-y-2">
						<SwitchControl
							formControl={formControl}
							formName="billingCycle"
							options={switchOptions}
							handleOnClick={handleSwitchChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export type ButtonGroupItem = {
	name: string;
  value: string;
  yearlyPrice: string;
  monthlyPrice: string;
  extra: string;
};

export type UpdatedButtonGroupItem = {
  name: string;
  value: string;
  price: string;
  extra?: string;
};

const btnGroupItems: ButtonGroupItem[] = [
	{ 
		name: 'Arcade',
		value: 'arcade', 
		monthlyPrice: '$9', 
		yearlyPrice: '$90', 
		extra: '2 months free'
	},
	{ 
		name: 'Advanced',
		value: 'advanced', 
		monthlyPrice: '$12', 
		yearlyPrice: '$120', 
		extra: '2 months free'
	},
	{ 
		name: 'Pro',
		value: 'pro', 
		monthlyPrice: '$15', 
		yearlyPrice: '$150', 
		extra: '2 months free' 
	},
]

// billingCycle
export type SwitchValue = 'monthly' | 'yearly'
export type SwitchOptions = {
  label: string;
  value: SwitchValue;
};
const switchOptions: [
	SwitchOptions,
	SwitchOptions
] = [
	{ label: 'Monthly', value: 'monthly' },
	{ label: 'Yearly', value: 'yearly' }
]