"use client";
import { useFormContext } from "react-hook-form";
import { TextInputControl } from "../ui/Controls/TextInputControl";
import { EmailControl } from "../ui/Controls/EmailControl";
import { PhoneControl } from "../ui/Controls/PhoneControl";

export default function Page() {
	const { control: formControl } = useFormContext();
	return (
		<div className="flex flex-col justify-center gap-10 items-start w-[100%]">
			<div className="flex flex-col gap-2">
				<h1 className="font-extrabold text-2xl md:text-4xl">Personal Info</h1>
				<p className="text-cool-gray font-semibold">Please provide your name, email address, and phone number.</p>
			</div>
			<form className="w-[100%]">
				{/* Form fields go here */}
				<div className="flex flex-col gap-2 md:gap-4">
					<div className="space-y-1 md:space-y-2">
						<TextInputControl
							formControl={formControl}
							formName='name'
							label='Name'
							placeholder='e.g. Stephen King'
						/>
					</div>
					<div className="space-y-1 md:space-y-2">
						<EmailControl
							formControl={formControl}
							formName='email'
							label='Email address'
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Invalid email format'
								}
							}}
						/>
					</div>
					<div className="space-y-1 md:space-y-2">
						<PhoneControl
							formControl={formControl}
							formName='phoneNumber'
							label='Phone number'
							rules={{
								required: 'Phone number is required',
								validate: (value) => {
									const cleanValue = value.replace(/[-() ]/g, '');
									if (cleanValue.length < 10) {
										return 'Phone: minimum 10 digits';
									}
									if (cleanValue.length > 10) {
										return 'Phone: maximum 10 digits';
									}
									return true;
								}
							}}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}