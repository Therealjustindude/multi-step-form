'use client';
import { usePathname } from "next/navigation";
import clsx from 'clsx';
export const FormButtonsDesktop = () => {
	const pathname = usePathname();
	return (
		<div className={clsx("flex justify-between items-center mt-8 hidden md:flex",
			{
				'md:hidden': pathname === '/'
			}
		)}>
			<button 
				className={"btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue"} 
				style={{ visibility: pathname !== '/step-one' ? 'visible': 'hidden' }}
			>
				Go Back
			</button>
			<button className="btn ml-auto">Next Step</button>
		</div>
	);
}