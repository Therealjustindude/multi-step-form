"use client";
import { formSteps } from "@/app/util/form-steps";
import clsx from "clsx";
import Link from "next/link";
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
						<Link
							href={step.pathname}
							className="flex flex-row items-center gap-8 hover:no-underline"
							key={step.stepNumber}
						>
							<div className={clsx("border-solid border-cool-gray border w-8 h-8 rounded-full flex items-center justify-center shadow-md", 
								{
									'bg-light-blue': pathname === step.pathname
								}
							)}>
								<span className={clsx("text-sm font-semibold",
									{
                    "text-black": pathname === step.pathname,
                    "text-white": pathname !== step.pathname,
                  }
								)}>{step.stepNumber}</span>
							</div>
						</Link>
					)
				}))}
			</ul>
		</nav>
	);
}