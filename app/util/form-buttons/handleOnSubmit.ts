import { toast } from "react-toastify";
import { validationSchema } from "../yup-validation-schema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IFormSteps } from "../form-steps";

export const handleOnSubmit = async ({data, router, currStep}: HandleOnSubmit) => {
	console.log('Form Data:', data)
	try {
		await validationSchema.validate(data, { abortEarly: false });
		toast.success('Form is valid');
		if (currStep?.nextStep) {
			router.push(currStep?.nextStep);
		}
	} catch (errors: any) {
		errors.inner.forEach((err: any) => {
			toast.error(err.message);
		});
	}
};

interface HandleOnSubmit {
	data: any;
	currStep: IFormSteps | undefined;
	router: AppRouterInstance;
}