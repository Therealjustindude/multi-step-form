'use client';
import { FormProvider, useForm } from "react-hook-form";
import { FormStepsMobile } from "./mobile/FormStepsMobile";
import { FormStepsDesktop } from "./desktop/FormStepsDektop";
import { FormButtonsDesktop } from "./desktop/FormButtonsDesktop";
import { FormButtonsMobile } from "./mobile/FormButtonsMobile";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
			phoneNumber: '',
			test: ''
		},
		mode: 'onBlur',
  });

	return (
		<FormProvider {...methods}>
			<div className="flex flex-col h-[100vh] overflow-hidden md:bg-magnolia">
				{/* Mobile BG Image */}
				<div className="md:hidden absolute top-0 left-0 w-full h-[20%] bg-center z-[-20] bg-[url('/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover"/>
				<main className="flex-grow p-4">
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
						<FormStepsMobile />
						<div className="flex flex-row justify-between md:h-[80vh] md:col-span-12 p-4 bg-white rounded-xl shadow-xl">
							{/* Desktop steps */}
							<FormStepsDesktop />

							<div className="flex flex-col justify-between w-[100%] pt-4 pr-2 pb-4 pl-2 md:pt-14 md:pr-28 md:pb-4 md:pl-28">
								{/* Form Content */}
								{children}
								{/* Desktop Next and Go Back buttons */}
								<FormButtonsDesktop />
							</div>
						</div>
					</div>
				</main>

				{/* Mobile Next and Go Back buttons */}
				<FormButtonsMobile />
			</div>
		</FormProvider>
	);
}
