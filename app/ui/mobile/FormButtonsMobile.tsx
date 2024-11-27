/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { formSteps } from '@/app/util/form-steps';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

export const FormButtonsMobile = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { handleSubmit, formState: { errors }, trigger} = useFormContext();
	const currStep = formSteps.find(step => step.pathname === pathname);

	const handleBackClick = () => {
		console.log('clicked back')
		if (currStep?.prevStep) {
			router.push(currStep?.prevStep)
		}
	}
	
	const onSubmit = (data: any) => {
		console.log('Form submitted with data:', data);
		// send this data somewhere
  };
	const handleConfirmClick = handleSubmit(onSubmit);

	const handleNextClick = async () => {
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
	
	return (
		<footer className={clsx("sticky bottom-0 w-full bg-white p-4 border-t md:hidden flex items-center justify-between",
			{
				'hidden': pathname === '/'
			}
		)}>
			<button 
				className="btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue" 
				style={{ visibility: pathname !== '/step-one' ? 'visible' : 'hidden' }}
				onClick={handleBackClick}
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
				onClick={handleNextClick}
			>
				Next Step
			</button>
			)}
		</footer>
	);
}