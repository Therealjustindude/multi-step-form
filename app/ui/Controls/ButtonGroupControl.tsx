
import { Control, Controller, RegisterOptions } from "react-hook-form";
import Image from 'next/image'
import { clsx } from "clsx";
import { UpdatedButtonGroupItem } from "@/app/util/planTypes";

export const ButtonGroupControl: React.FC<IButtonGroupControl> = ({
	formName,
	formControl,
	rules,
	groupItems,
	// handleOnClick
}) => {
	const getItemImage = (itemValue: string) => {
		switch (itemValue) {
			case 'advanced':
				return '/icon-advanced.svg'
			case 'arcade':
				return '/icon-arcade.svg'
			case 'pro':
				return '/icon-pro.svg'
			default:
				return ''
		}
	}
	return (
		<Controller
			name={formName}
			control={formControl}
			rules={rules}
			render={({ field, fieldState }) => (
				<div className="flex flex-col">
					<div 
						{...field}
						className="flex flex-col md:flex-row justify-between gap-4 md:gap-8"
					>
						{groupItems.map((item, index) => {
							return (
								<button
									id={formName}
									name={formName}
									key={index}
									type="button"
									value={item.value}
									onClick={() => {
										field.onChange(item.value)
									}}
									className={clsx(
										'flex flex-grow max-h-[172px] gap-4 items-center md:items-start md:gap-2 md:flex-col md:justify-between md:pt-4 md:pb-4 md:h-52 md:w-40 text-black border-solid rounded-md hover:bg-alabaster',
										{
											'active border-purplish-blue bg-magnolia border-opacity-25': field.value === item.value,
											'bg-transparent': field.value !== item.value,
										}
									)}
								>
									<div>
										<Image
											src={getItemImage(item.value)}
											width={40}
											height={40}
											alt={`Picture of ${item.value} icon`}
										/>
									</div>
									<div className="flex flex-col items-start">
										<div className="font-semibold text-md">{item.name}</div>
										<div className="font-medium text-cool-gray text-sm">
											{
												item.billingCycle === 'monthly'
													? `$${item.price}/mo`
													: `$${item.price}/yr`
											}
										</div>
										<div className="text-sm">{item.extra}</div>
									</div>
								</button>
							);
						})
						}
					</div>
					{fieldState?.error && (
						<div className="flex justify-between">
								<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
						</div>
					)}
				</div>
			)}
		/>
	);
}

export interface IButtonGroupControl {
	formControl: Control;
	formName: string;
	rules?: RegisterOptions | undefined;
	groupItems: UpdatedButtonGroupItem[];
	handleOnClick?: () => void;
}