'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const FormButtonsMobile = () => {
	const pathname = usePathname();

	return (
		<footer className={clsx("sticky bottom-0 w-full bg-white p-4 border-t shadow md:hidden flex items-center justify-between",
			{
				'hidden': pathname === '/'
			}
		)}>
			<button 
				className="btn bg-transparent text-cool-gray hover:bg-transparent hover:text-purplish-blue" 
				style={{ visibility: pathname !== '/step-one' ? 'visible' : 'hidden' }}
			>
				Go Back
			</button>
			<button className="ml-auto">Next Step</button>
		</footer>
	);
}