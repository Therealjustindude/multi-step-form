"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const FormStepsMobile = () => {
	const pathname = usePathname();

	return (
		<nav className="md:hidden mb-12 mt-4 p-1 flex justify-center">
			<ul className={clsx("flex gap-4",
				{
					'hidden': pathname === '/'
				}
			)}>
				<li>Step 1</li>
				<li>Step 2</li>
				<li>Step 3</li>
			</ul>
		</nav>
	);
}