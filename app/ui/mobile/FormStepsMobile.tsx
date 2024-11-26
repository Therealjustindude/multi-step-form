"use client";
import { formSteps } from "@/app/util/form-steps";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const FormStepsMobile = () => {
	const pathname = usePathname();

	return (
		<nav className="md:hidden pt-7 pb-7 flex justify-center">
			<ul className={clsx("flex flex-row gap-4",
				{
					'hidden': pathname === '/'
				}
			)}>
				{formSteps?.map((step => {
					return (
						<div className="flex flex-row items-center" key={step.step}>
							<div className="border-solid border-white border w-9 h-9 rounded-full flex items-center justify-center">
								<span className="text-white text-md font-semibold">{step.step}</span>
							</div>
						</div>
					)
				}))}
			</ul>
		</nav>
	);
}