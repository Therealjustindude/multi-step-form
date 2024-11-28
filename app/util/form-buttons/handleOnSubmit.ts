import { toast } from "react-toastify";
import { validationSchema } from "../yup-validation-schema";

export const handleOnSubmit = async (data: any) => {
	console.log('Form Data:', data)
	try {
		await validationSchema.validate(data, { abortEarly: false });
		console.log('Form is valid!');
	} catch (errors: any) {
		errors.inner.forEach((err: any) => {
			toast.error(err.message);
		});
	}
};