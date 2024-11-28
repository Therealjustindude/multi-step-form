"use client";

import { useFormContext } from "react-hook-form";
import { addOnItems, UpdatedCheckBoxItem } from "../util/addOns";
import { MultiSelectCheckboxControl } from "../ui/Controls/MultiSelectCheckboxControl";

export default function Page() {
	const { control: formControl, getValues } = useFormContext();
	const billingCycle = getValues('billingCycle')
	let updatedCheckboxItems: UpdatedCheckBoxItem[] = [];

	if (billingCycle === 'monthly') {
		updatedCheckboxItems = addOnItems.map((item) => {
			return ({
				title: item.title,
				description: item.description,
				billingCycle: billingCycle,
				price: item.monthlyPrice
			});
		})
	}

	if (billingCycle === 'yearly') {
		updatedCheckboxItems = addOnItems.map((item) => {
			return ({
				title: item.title,
				description: item.description,
				billingCycle: billingCycle,
				price: item.yearlyPrice
			});
		})
	}
	return (
		<div className="flex flex-col justify-center items-start w-[100%]">
			<div className="flex flex-col gap-2 mb-6">
				<h1 className="font-extrabold text-2xl md:text-4xl">Pick add-ons</h1>
				<p className="text-cool-gray font-semibold">Add-ons help enhance your gaming experience.</p>
			</div>
			<form className="w-[100%]">
				{/* Form fields go here */}
				<div className="flex flex-col gap-2 md:gap-4">
					<MultiSelectCheckboxControl
						checkboxItems={updatedCheckboxItems}
						formName="addOns"
						formControl={formControl}
					/>
				</div>
			</form>
		</div>
	);
}