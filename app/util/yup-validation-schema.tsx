import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string().email("Step 1: Invalid email format").required("Step 1: Email is required"),
  phoneNumber: Yup.string()
    .transform((value) => value.replace(/[^\d]/g, ''))
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  name: Yup.string(),
  billingCycle: Yup.string(),
  planType: Yup.string().required("Step 2: Plan type is required"),
});