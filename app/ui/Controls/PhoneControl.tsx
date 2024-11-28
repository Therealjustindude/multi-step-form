import { Control, Controller, RegisterOptions } from "react-hook-form";
import { PatternFormat } from "react-number-format";

export const PhoneControl: React.FC<IPhoneControl> = ({
	label,
	formName,
	placeholder,
	formControl,
	rules
}) => {
	return (
		<Controller
			name={formName}
			control={formControl} 
			rules={rules} 
			render={({ field, fieldState }) => (
				<>
					<div className="flex justify-between">
						<label htmlFor={formName}>{label}</label>
						{fieldState?.error && (
							<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
						)}
					</div>
					<PatternFormat
						{...field}
						id={label}
						name={formName}
						format='(###) ###-####'
						type="tel"
						placeholder={placeholder}
						className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg"
					/>
				</>
			)}
		/>
	);
}

export interface IPhoneControl {
	formControl: Control;
	label: string;
	formName: string;
	placeholder?: string;
	rules?: RegisterOptions | undefined;
}