"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { formSteps } from "@/app/util/form-steps";
import Link from "next/link";

export const FormStepsDesktop = () => {
  const pathname = usePathname();

  return (
    <nav className="md:block hidden bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-center p-4 flex flex-col items-start justify-between rounded-xl min-w-[300px] shadow-md">
      <div
        className={clsx("flex flex-col gap-4 p-8", {
          "md:hidden": pathname === "/",
        })}
      >
        {formSteps?.map((step) => {
					return (
						<Link
							href={step.pathname}
							className="flex flex-row items-center gap-8 hover:no-underline"
							key={step.stepNumber}
						>
              <div
                className={clsx(
                  "border-solid border-cool-gray border w-8 h-8 rounded-full flex items-center justify-center",
                  {
                    "bg-light-blue": pathname === step.pathname,
                  }
                )}
              >
                <span
                  className={clsx("text-sm font-semibold", {
                    "text-black": pathname === step.pathname,
                    "text-white": pathname !== step.pathname,
                  })}
                >
                  {step.stepNumber}
                </span>
              </div>
              <div>
                <div className="text-light-gray font-thin text-sm">
                  STEP {step.stepNumber}
                </div>
                <div className="text-white font-semibold text-md">
                  {step.navDescription}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
