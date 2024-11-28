"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { billingCycles } from "../util/billingCycles";
import { planTypes } from "../util/planTypes";
import { addOnItems, UpdatedCheckBoxItem } from "../util/addOns";

export default function Page() {
	const { control: formControl, getValues } = useFormContext();
	const formValues = getValues();
	const currBillingCycle = billingCycles?.find(cycle => cycle.value === formValues.billingCycle)
	const currPlan = planTypes?.find(plan => plan.value === formValues.planType)
	const currAddOns = addOnItems?.filter(addOnItem => 
		formValues.addOns?.some((addOn: string) => addOnItem.title === addOn)
	);
	const hasAddOns = currAddOns?.length > 0
	let updatedCurrAddOns: UpdatedCheckBoxItem[] = [];
	let total = 0;
	let currPlanPrice = currPlan?.monthlyPrice;

	if (currBillingCycle?.value === 'monthly') {
		if (currPlan) {
			currPlanPrice = currPlan?.monthlyPrice;
			total += currPlanPrice;
		}

		updatedCurrAddOns = currAddOns.map((item) => {
			total += item.monthlyPrice;
			return ({
				title: item.title,
				description: item.description,
				billingCycle: currBillingCycle?.value,
				price: item.monthlyPrice
			});
		})
	}

	if (currBillingCycle?.value === 'yearly') {
		if (currPlan) {
			currPlanPrice = currPlan?.yearlyPrice;
			total += currPlanPrice;
		}

		updatedCurrAddOns = currAddOns.map((item) => {
			total += item.yearlyPrice;
			return ({
				title: item.title,
				description: item.description,
				billingCycle: currBillingCycle?.value,
				price: item.yearlyPrice
			});
		})
	}
	
	return (
		<div className="flex flex-col justify-center items-start w-[100%]">
			<div className="flex flex-col gap-2 mb-6">
				<h1 className="font-extrabold text-2xl md:text-4xl">Finishing up</h1>
				<p className="text-cool-gray font-semibold">Double-check everything looks OK before confirming.</p>
			</div>
			<div className="flex flex-col gap-2 md:gap-4 h-full w-[100%]">
				<div className="flex flex-col flex-grow p-6 w-[100%] bg-magnolia rounded-lg">
					<div className="flex justify-between items-center">
						<div className="flex flex-col gap-1">
							<div className="flex gap-1 items-center">
									{currPlan
										? <span className="font-semibold text-lg">{currPlan.name}</span>
										: <span className="font-semibold text-lg text-strawberry-red">Please choose a plan</span>}	
								<span className="font-semibold text-lg">
									{currBillingCycle && (
										<>({currBillingCycle.label})</>
									)}
								</span>
							</div>
							<Link
								href="/step-two"
								className="underline text-cool-gray text-sm font-semibold hover:text-purplish-blue"
							>
								Change
							</Link>
						</div>
						<div>
							{currPlan
								? <span className="font-semibold text-lg">
										{
											currBillingCycle?.value === 'monthly'
												? `$${currPlanPrice}/mo`
												: `$${currPlanPrice}/yr`
										}
									</span>
								: <span className="font-medium text-lg text-strawberry-red">---</span>
							}	
						</div>
					</div>
					{hasAddOns && <hr className="border-t-1 border-light-gray my-4"></hr>}
					{hasAddOns && 
						<div className="flex flex-col gap-3">
							{updatedCurrAddOns.map((addOn, index) => {
								return (
									<div className="flex justify-between items-center" key={`${index}-${addOn.title}`}>
										<div className="flex gap-1 items-center">
											<span className="font-medium text-md text-cool-gray">
												{addOn.title}
											</span>
										</div>
										<div className="font-medium text-sm">
											{
												addOn.billingCycle === 'monthly'
													? `+$${addOn.price}/mo`
													: `+$${addOn.price}/yr`
											}
										</div>
									</div>
								);
							})}
						</div>
					}
				</div>
				<div className="flex flex-grow justify-between items-center p-6">
					<div className="font-medium text-md text-cool-gray">
						{
							currBillingCycle?.value === 'monthly'
								? 'Total (per month)'
								: 'Total (per year)'
						}
					</div>
					<div className="font-medium text-md text-cool-gray">
						{
							currBillingCycle?.value === 'monthly'
								? `+$${total}/mo`
								: `+$${total}/yr`
						}
					</div>
				</div>
			</div>
		</div>
	);
}