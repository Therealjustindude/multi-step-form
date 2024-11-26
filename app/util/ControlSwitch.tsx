import { ControllerType } from "./multi-step-form";

export const ControlSwitch: React.FC<ControlSwitchProps> = ({ control }) => {
	const { type, label, placeholder, options, required } = control;
	switch (type) {
		case 'text':
			return (
				<>
					<label htmlFor={label}>{label}</label>
					<input id={label} name={label} type="text" placeholder={placeholder} className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg" required={required} />
				</>
			)
		case 'phone':
			return (
				<>
					<label htmlFor={label}>{label}</label>
					<input id={label} name={label} type="tel" placeholder={placeholder} className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg" required={required} />
				</>
			)
		case 'email':
			return (
				<>
					<label htmlFor={label}>{label}</label>
					<input id={label} name={label} type="email" placeholder={placeholder} className="input-field w-[100%] pl-4 pr-4 pt-2 pb-2 rounded-md md:pl-6 md:pr-6 md:pt-4 md:pb-4 md:rounded-lg" required={required} />
				</>
			)
	}
}

type ControlSwitchProps = {
  control: ControllerType;
};