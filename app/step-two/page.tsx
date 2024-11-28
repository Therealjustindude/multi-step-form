"use client";
import { useFormContext } from "react-hook-form";
import { ButtonGroupControl } from "../ui/Controls/ButtonGroupControl";
import { useState } from "react";

export default function Page() {
	const { control: formControl, setValue, watch } = useFormContext();
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
	let updatedButtonGroupItems: UpdatedButtonGroupItem[] = [];

  const handleSwitchChange = (checked: boolean) => {
    const newBillingCycle = checked ? 'yearly' : 'monthly';
    setBillingCycle(newBillingCycle); // Update local state
    setValue('billingCycle', newBillingCycle); // Update RHF state
	};

	const handleButtonGroupClick = () => {

	}
	
	if (billingCycle === 'monthly') {
		updatedButtonGroupItems = btnGroupItems.map((item) => {
			return ({
				name: item.name,
				price: item.monthlyPrice
			});
		})
	}

	if (billingCycle === 'yearly') {
		updatedButtonGroupItems = btnGroupItems.map((item) => {
			return ({
				name: item.name,
				price: item.yearlyPrice,
				extra: item.extra
			});
		})
	}

	return (
		<div className="flex flex-col justify-center items-start w-[100%]">
			<div className="flex flex-col gap-2 mb-6">
				<h1 className="font-extrabold text-2xl md:text-4xl">Select your plan</h1>
				<p className="text-cool-gray font-semibold">You have the option of monthly or yearly billing.</p>
			</div>
			<form className="w-[100%]">
				<div className="flex flex-col gap-2 md:gap-4 w-[100%]">
					<div className="space-y-1 md:space-y-2">
						<ButtonGroupControl
							formControl={formControl}
							formName="planType"
							rules={{
								required: 'Plan is required',
							}}
							groupItems={updatedButtonGroupItems}
							handleOnClick={handleButtonGroupClick}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export type ButtonGroupItem = {
  name: string;
  yearlyPrice: string;
  monthlyPrice: string;
  extra: string;
};

export type UpdatedButtonGroupItem = {
  name: string;
  price: string;
  extra?: string;
};

const btnGroupItems: ButtonGroupItem[] = [
	{ 
		name: 'Arcade', 
		monthlyPrice: '$9', 
		yearlyPrice: '$90', 
		extra: '2 months free'
	},
	{ 
		name: 'Advanced', 
		monthlyPrice: '$12', 
		yearlyPrice: '$120', 
		extra: '2 months free'
	},
	{ 
		name: 'Pro', 
		monthlyPrice: '$15', 
		yearlyPrice: '$150', 
		extra: '2 months free' 
	},
]

// billingCycle
export type SwitchOptions = {
  label: string;
  value: string;
};
const switchOptions: SwitchOptions[] = [
	{ label: 'Monthly', value: 'monthly' },
	{ label: 'Yearly', value: 'yearly' }
]