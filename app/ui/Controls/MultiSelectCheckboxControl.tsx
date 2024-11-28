import { UpdatedCheckBoxItem } from "@/app/util/addOns";
import Image from "next/image";
import { Control, Controller, RegisterOptions } from "react-hook-form";

export const MultiSelectCheckboxControl: React.FC<IMultiSelectCheckboxControl> = ({
	formName,
	formControl,
	rules,
	checkboxItems
}) => {
	return (
		<Controller
			name={formName}
			control={formControl} 
			rules={rules}
			render={({ field }) => {
				const selectedOptions: string[] = field.value || [];

        const handleToggle = (value: string) => {
          const updatedValues = selectedOptions.includes(value)
            ? selectedOptions.filter((item) => item !== value) // Remove if already selected
            : [...selectedOptions, value]; // Add if not selected
          field.onChange(updatedValues);
				};
				
				return (
					<div className="flex flex-col gap-4">
						{checkboxItems.map((item) => (
							<div
								key={item.title} // Ensure the key is unique for each item
								className={
									`flex items-center max-h-[120px] border rounded-lg border-solid hover:bg-magnolia hover:cursor-pointer ${
										selectedOptions.includes(item.title)
											? 'border-2 border-purplish-blue bg-magnolia'
											: 'border-2 border-light-gray'
									}`
								}
								onChange={() => handleToggle(item.title)}
							>
								<label className="flex items-center gap-8 p-8 w-[100%] hover:cursor-pointer">
									<input
										type="checkbox"
										{...field}
										id={item.title}
										name={formName}
										checked={selectedOptions.includes(item.title)}
										className="hidden" // Hide the default checkbox
									/>
									<div
										className={`flex items-center justify-center min-w-[24px] min-h-[24px] rounded-lg border-2 ${
											selectedOptions.includes(item.title)
												? 'bg-purplish-blue border-purplish-blue'
												: 'bg-white border-light-gray'
										}`}
									>
										{selectedOptions.includes(item.title) && (
											<Image
												src="/icon-checkmark.svg"
												alt="checkmark"
												height={60}
												width={60}
												className="h-5 w-4"
											/>
										)}
									</div>
									<div className="flex justify-between items-center w-[100%] gap-2">
										<div className="flex flex-col gap-1">
											<span className="font-semibold text-md">{item.title}</span>
											<span className="font-semibold text-sm text-cool-gray">{item.description}</span>
										</div>
										<span className="font-medium text-sm text-purplish-blue">
											{item.billingCycle === 'monthly'
												? `+$${item.price}/mo`
												: `+$${item.price}/yr`}
										</span>
									</div>
								</label>
							</div>
						))}
					</div>
				)
			}}	
		/>
	);
}

export interface IMultiSelectCheckboxControl {
	formControl: Control;
	formName: string;
	checkboxItems: UpdatedCheckBoxItem[];
	rules?: RegisterOptions | undefined;
}