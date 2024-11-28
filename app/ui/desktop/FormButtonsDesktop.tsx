/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { usePathname, useRouter } from "next/navigation";
import clsx from 'clsx';
import { formSteps } from "@/app/util/form-steps";
import { useFormContext } from "react-hook-form";
import { handleNextClick } from "@/app/util/form-buttons/handleOnNext";
import { handleOnBackClick } from "@/app/util/form-buttons/handleOnBackClick";
import { handleOnSubmit } from "@/app/util/form-buttons/handleOnSubmit";

export const FormButtonsDesktop = () => {
	const pathname = usePathname();
	const router = useRouter();
	
	const { handleSubmit, formState: { errors }, trigger } = useFormContext();
	const currStep = formSteps.find(step => step.pathname === pathname);

	const handleConfirmClick = handleSubmit(handleOnSubmit);
	
	return (
		<div
			className={clsx("flex justify-between items-center hidden md:flex",
				{
					'md:hidden': pathname === '/'
				}
			)}
		>
			<button 
				type="button"
				className={"btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue"} 
				style={{ visibility: pathname !== '/step-one' ? 'visible' : 'hidden' }}
				onClick={() => handleOnBackClick({ currStep, router })}
			>
				Go Back
			</button>
			{currStep?.nextStep === null ? (
				<button
					type="button"
					className="btn ml-auto bg-purplish-blue hover:bg-purplish-blue opacity-90"
					onClick={handleConfirmClick}
				>
					Confirm
				</button>
			) : (
				<button
				type="button"
				className="btn ml-auto"
				onClick={() => handleNextClick({ currStep, router, trigger, errors })}
			>
				Next Step
			</button>
			)}
		</div>
	);
}
