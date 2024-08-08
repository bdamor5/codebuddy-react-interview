import * as Yup from "yup";

export const secondFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name Too short")
    .max(50, "Should not exceed 50 characters")
    .matches(/^[A-Za-z]+$/, "First name should only contain letters")
    .required("First name is required")
    .typeError("First name is required"),
  lastName: Yup.string()
    .max(50, "Should not exceed 50 characters")
    .matches(/^[A-Za-z]+$/, "Last name should only contain letters"),
  address: Yup.string()
    .min(10, "Address Too short")
    .max(200, "Should not exceed 200 characters")
    .required("Address is required")
    .typeError("Address is required"),
});
