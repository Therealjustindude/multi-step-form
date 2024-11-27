import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot be longer than 10 digits")
    .required("Phone number is required"),
  name: Yup.string(),
  test: Yup.string()
});