"use client";
import { useFormContext } from "react-hook-form";
import { ButtonGroupControl } from "../ui/Controls/ButtonGroupControl";
import { useState } from "react";
import { SwitchControl } from "../ui/Controls/SwitchControl";
import { billingCycles, BillingCycleValue } from "../util/billingCycles";
import { planTypes, UpdatedButtonGroupItem } from "../util/planTypes";

export default function Page() {
	const { control: formControl, getValues } = useFormContext();
	const [billingCycle, setBillingCycle] = useState<BillingCycleValue>(getValues('billingCycle') || 'monthly');
	let updatedButtonGroupItems: UpdatedButtonGroupItem[] = [];

  const handleSwitchChange = (newVal: string) => {
    const newBillingCycle = newVal as BillingCycleValue;
    setBillingCycle(newBillingCycle);
	};
	
	if (billingCycle === 'monthly') {
		updatedButtonGroupItems = planTypes.map((item) => {
			return ({
				name: item.name,
				value: item.value,
				billingCycle: billingCycle,
				price: item.monthlyPrice
			});
		})
	}

	if (billingCycle === 'yearly') {
		updatedButtonGroupItems = planTypes.map((item) => {
			return ({
				name: item.name,
				value: item.value,
				billingCycle: billingCycle,
				price: item.yearlyPrice,
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
							options={billingCycles}
							handleOnClick={handleSwitchChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}