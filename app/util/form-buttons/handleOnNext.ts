import { FieldErrors, FieldValues, useFormContext, UseFormTrigger } from "react-hook-form";
import { IFormSteps } from "../form-steps";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleNextClick = async ({
	currStep,
	router,
	trigger,
	errors
}: HandleNextClick) => {
	const isValid = await trigger();

	if (isValid) {
		if (currStep?.nextStep) {
			router.push(currStep?.nextStep);
		}
	} else {
		const errorMessages = Object.values(errors)
			.map((error: any) => error.message); 

		if (errorMessages.length > 0) {
			errorMessages.forEach(message => toast.error(`${message}`));
		} else {
			toast.error('There are validation errors.');
		}
	}
};

interface HandleNextClick {
	currStep: IFormSteps | undefined;
	router: AppRouterInstance;
	trigger: UseFormTrigger<FieldValues>;
	errors: FieldErrors<FieldValues>;
}