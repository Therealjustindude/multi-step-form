import { Controller, FieldValues, useFormContext, UseFormRegister } from "react-hook-form";
import { ControllerType } from "./multi-step-form";
import { PatternFormat } from "react-number-format";

export const ControlSwitch: React.FC<ControlSwitchProps> = ({ control }) => {
	const { type, label, placeholder, formRegister: formName, validation } = control;
	const { control: formControl } = useFormContext();
	switch (type) {
		case 'text':
			return (
				<Controller
					name={formName}
					control={formControl} 
					rules={validation}
					render={({ field, fieldState }) => (
						<>
							<div className="flex justify-between">
								<label htmlFor={formName}>{label}</label>
								{fieldState?.error && (
									<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
								)}
							</div>
							<input
								{...field}
								id={label}
								name={formName}
								type="text"
								placeholder={placeholder}
								className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg"
							/>
							{fieldState?.error && (
								<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
							)}
						</>
					)}	
				/>
			)
		case 'phone':
			return (
				<Controller
					name={formName}
					control={formControl} 
					rules={validation} 
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
			)
		case 'email':
			return (
				<Controller
					name={formName}
					control={formControl}
					rules={validation}
					render={({ field, fieldState }) => (
						<>
							<div className="flex justify-between">
								<label htmlFor={formName}>{label}</label>
								{fieldState?.error && (
									<p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
								)}
							</div>
							<input
								{...field}
								id={label}
								name={formName}
								type="text"
								placeholder={placeholder}
								className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg"
							/>
						</>
					)}
				/>
			)
	}
}

type ControlSwitchProps = {
	control: ControllerType;
	rhfRegister: UseFormRegister<FieldValues>
};