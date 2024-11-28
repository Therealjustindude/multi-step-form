import { SwitchOptions } from "@/app/step-two/page";
import { Control, Controller, RegisterOptions } from "react-hook-form";

export const SwitchControl: React.FC<ISwitchControl> = ({
	formName,
	formControl,
	rules,
	options,
	handleOnClick,
}) => {
	return (
		<Controller
			name={formName}
			control={formControl}
			rules={rules}
			render={({ field, fieldState }) => (
				<div>
          {/* Switch container */}
          <div className="flex items-center justify-center bg-magnolia rounded-md p-4">
            <div className="flex items-center gap-8">
              {/* Active label */}
							<span className={`text-sm font-semibold ${field.value === options[0].value ? 'text-black' : 'text-cool-gray'}`}>
								{options[0].label}
							</span>

							{/* Switch */}
							<div
								className="relative inline-flex items-center cursor-pointer"
								onClick={() => {
									const newVal = field.value === options[0].value ? options[1].value : options[0].value
									field.onChange(newVal)
									handleOnClick(newVal)
								}}
							>
								{/* Switch Background */}
								<div className="bg-marine-blue w-[38px] h-[18px] rounded-full transition-all duration-300 ease-in-out">
									{/* Switch Knob */}
									<div
										className={`${
											field.value === options[0].value ? 'translate-x-0' : 'translate-x-[20px]'
										} absolute left-0.5 top-0.5 w-[14px] h-[14px] bg-white rounded-full transition-all duration-300 ease-in-out`}
									/>
								</div>
							</div>

							{/* Inactive label */}
							<span className={`text-sm font-semibold ${field.value === options[1].value ? 'text-black' : 'text-cool-gray'}`}>
								{options[1].label}
							</span>
            </div>
					</div>
					{/* Error message */}
          {fieldState?.error && (
            <p className="text-red-500 text-sm mt-1">{fieldState?.error.message}</p>
          )}
        </div>
			)}
		/>
	);
};

export interface ISwitchControl {
	formControl: Control;
	formName: string;
	rules?: RegisterOptions | undefined;
	options: [ SwitchOptions, SwitchOptions ];
	handleOnClick: (newVal: string) => void;
}