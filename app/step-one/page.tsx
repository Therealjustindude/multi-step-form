"use client";
import { formSteps } from "../util/form-steps";

export default function Page() {
	const currStep = formSteps.find(step => step.pathname === '/step-one');

	return (
		<div className="flex flex-col justify-center items-start w-[100%]">
			<div className="mb-6">
				<h1 className="font-extrabold text-4xl ">{currStep?.formTitle}</h1>
				<p className="text-cool-gray font-semibold">{currStep?.formDescription}</p>
			</div>
			<form className="w-[100%]">
				{/* Form fields go here */}
				<div className="space-y-2 w-[100%]">
					<label>Name</label>
					<input type="text" placeholder="e.g. Stephen King" className="input-field w-[100%] p-4 rounded-lg" />
				</div>
			</form>
		</div>
	);
}