'use client';
import { FormProvider, useForm } from "react-hook-form";
import { FormNavStepsMobile } from "./mobile/FormNavStepsMobile";
import { FormNavStepsDesktop } from "./desktop/FormNavStepsDesktop";
import { FormButtonsDesktop } from "./desktop/FormButtonsDesktop";
import { FormButtonsMobile } from "./mobile/FormButtonsMobile";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { usePathname } from "next/navigation";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
			phoneNumber: '',
			planType: '',
			billingCycle: 'monthly',
			addOns: []
		},
		mode: 'onBlur',
	});
	const pathname = usePathname();

	return (
		<FormProvider {...methods}>
			<div className="flex flex-col h-[100vh] overflow-hidden md:bg-magnolia overflow-x-auto-on-short">
				{/* Mobile BG Image */}
				<div className="md:hidden absolute top-0 left-0 w-full h-[20%] bg-center z-[-20] bg-[url('/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover"/>
				<main className="flex-grow p-4 overflow-y-auto-on-short min-w-[318px]">
					<ToastContainer
						stacked
						position="top-center"
						autoClose={5000}
						hideProgressBar={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
						transition={Bounce}
						className="custom-toast-container"
					/>

					{/* Grid for desktop */}
					<div className="h-screen md:grid md:items-center md:grid-cols-12 md:gap-4">
						{/* Mobile steps */}
						<FormNavStepsMobile />
						<div className="flex flex-row justify-between md:min-h-[600px] md:max-h-[700px] md:h-[80vh] md:col-span-12 p-4 bg-white rounded-xl shadow-xl ">
							{/* Desktop steps */}
							<FormNavStepsDesktop />

							<div className="flex flex-col justify-between w-[100%] md:min-w-[60%] md:max-w-[60%] mr-auto ml-auto pt-4 pr-2 pb-4 pl-2 md:pt-12 md:pr-14 md:pb-4 md:pl-14">
								{/* Form Content */}
								{children}
								{/* Desktop Next and Go Back buttons */}
								{pathname !== '/thank-you' &&
									<FormButtonsDesktop />
								}
							</div>
						</div>
					</div>
				</main>

				{/* Mobile Next and Go Back buttons */}
				{pathname !== '/thank-you' && 
					<FormButtonsMobile />
				}
			</div>
		</FormProvider>
	);
}
