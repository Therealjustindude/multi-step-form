"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const FormStepsDesktop = () => {
	const pathname = usePathname();

	return (
		<nav className="md:block hidden bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-center p-4 md:col-span-4 md:h-[97vh] flex flex-col items-start justify-between rounded-xl">
			<ul className={clsx("font-bold",
				{
					'md:hidden': pathname === '/'
				}
			)}>
				<li>Step 1</li>
				<li>Step 2</li>
				<li>Step 3</li>
			</ul>
		</nav>
	);
}