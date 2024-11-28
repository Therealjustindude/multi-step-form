import { UpdatedButtonGroupItem } from "@/app/step-two/page";
import { Control, Controller, RegisterOptions } from "react-hook-form";

export const ButtonGroupControl: React.FC<IButtonGroupControl> = ({
	formName,
	formControl,
	rules,
	groupItems,
	// handleOnClick
}) => {
	return (
		<Controller
			name={formName}
			control={formControl}
			rules={rules}
			render={({ field, fieldState }) => (
				<div {...field}>
					{groupItems.map((item, index) => {
						return (
							<button
								id={formName}
								name={formName}
								key={index}
								type="button"
								value={item.name}
								onClick={() => {
									console.log('clicked:', item.name)
									field.onChange(item.name)
								}}
								className={field.value === item.name ? 'active' : ''}
							>
								<div>{item.name}</div>
								<div>{item.price}</div>
								<div>{item.extra}</div>
							</button>
						);
					})
					}
					<div className="flex justify-between">
						{fieldState?.error && (
							<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
						)}
					</div>
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
	handleOnClick: () => void;
}