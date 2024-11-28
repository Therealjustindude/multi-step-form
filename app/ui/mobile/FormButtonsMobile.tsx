/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { formSteps } from '@/app/util/form-steps';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { handleOnSubmit } from '@/app/util/form-buttons/handleOnSubmit';
import { handleOnBackClick } from '@/app/util/form-buttons/handleOnBackClick';
import { handleNextClick } from '@/app/util/form-buttons/handleOnNext';

export const FormButtonsMobile = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { handleSubmit, formState: { errors }, trigger } = useFormContext();
	const currStep = formSteps.find(step => step.pathname === pathname);

	const handleConfirmClick = handleSubmit(handleOnSubmit);
	
	return (
		<footer className={clsx("sticky bottom-0 w-full bg-white p-4 border-t md:hidden flex items-center justify-between",
			{
				'hidden': pathname === '/'
			}
		)}>
			<button 
				className="btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue" 
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
				onClick={() => handleNextClick({ currStep, router, trigger, errors  })}
			>
				Next Step
			</button>
			)}
		</footer>
	);
}