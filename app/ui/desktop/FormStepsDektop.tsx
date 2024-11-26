"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { formSteps } from "@/app/util/form-steps";

export const FormStepsDesktop = () => {
	const pathname = usePathname();

	return (
		<nav className="md:block hidden bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-center p-4 md:col-span-4 md:h-[70vh] flex flex-col items-start justify-between rounded-xl">
			<div className={clsx("flex flex-col gap-4 p-8",
				{
					'md:hidden': pathname === '/'
				}
			)}>
				{formSteps?.map((step => {
					return (
						<div className="flex flex-row items-center gap-8" key={step.step}>
							<div className="border-solid border-white border w-8 h-8 rounded-full flex items-center justify-center">
								<span className="text-white text-sm font-semibold">{step.step}</span>
							</div>
							<div>
								<div className="text-light-gray font-thin text-sm">STEP {step.step}</div>
								<div className="text-white font-semibold text-md">{step.description}</div>
							</div>
						</div>
					)
				}))}
			</div>
		</nav>
	);
}