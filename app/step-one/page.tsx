"use client";
import { ControlSwitch } from "../util/ControlSwitch";
import { formSteps } from "../util/form-steps";
import { multiStepForm } from "../util/multi-step-form";
export default function Page() {
	const currStep = multiStepForm['steps']['step-one'];

	return (
		<div className="flex flex-col justify-center items-start w-[100%]">
			<div className="flex flex-col gap-2 mb-6">
				<h1 className="font-extrabold text-2xl md:text-4xl">{currStep?.formTitle}</h1>
				<p className="text-cool-gray font-semibold">{currStep?.formDescription}</p>
			</div>
			<form className="w-[100%]">
				{/* Form fields go here */}
				<div className="flex flex-col gap-2 md:gap-4 w-[100%]">
					{
						currStep.controls.map(({ control }) => {
							return (
								<div className="space-y-1 md:space-y-2" key={control.label}>
									<ControlSwitch control={control} />
								</div>
							)
						})
					}
				</div>
			</form>
		</div>
	);
}