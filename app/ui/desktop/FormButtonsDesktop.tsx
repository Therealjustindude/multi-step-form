'use client';
import { usePathname, useRouter } from "next/navigation";
import clsx from 'clsx';
import { formSteps } from "@/app/util/form-steps";

export const FormButtonsDesktop = () => {
	const pathname = usePathname();
	const router = useRouter();
	const currStep = formSteps.find(step => step.pathname === pathname);

	const handleBackClick = () => {
		console.log('clicked back')
		if (currStep?.prevStep) {
			router.push(currStep?.prevStep)
		}
	}
	const handleNextClick = () => {
		console.log('clicked next')
		if (currStep?.nextStep) {
			router.push(currStep?.nextStep)
		}
	}
	return (
		<div
			className={clsx("flex justify-between items-center hidden md:flex",
				{
					'md:hidden': pathname === '/'
				}
			)}
		>
			<button 
				className={"btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue"} 
				style={{ visibility: pathname !== '/step-one' ? 'visible' : 'hidden' }}
				onClick={handleBackClick}
			>
				Go Back
			</button>
			<button
				className={clsx("btn ml-auto", 
					{
						'bg-purplish-blue hover:bg-purplish-blue opacity-90': currStep?.nextStep === null
					}
				)}
				onClick={handleNextClick}
			>
				{currStep?.nextStep === null ? 'Confirm' : 'Next Step'}
			</button>
		</div>
	);
}