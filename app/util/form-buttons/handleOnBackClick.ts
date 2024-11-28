import { useRouter } from "next/router";
import { IFormSteps } from "../form-steps"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleOnBackClick = ({
	currStep,
	router
}: HandleBackClick) => {
	if (currStep?.prevStep) {
		router.push(currStep?.prevStep)
	}
}

interface HandleBackClick {
	currStep: IFormSteps | undefined;
	router: AppRouterInstance;
}