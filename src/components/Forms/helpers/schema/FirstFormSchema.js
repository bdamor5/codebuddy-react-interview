import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const firstFormSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Must be a valid email")
    .max(50, "Should not exceed 50 characters")
    .required("Email is required")
    .typeError("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .max(50, "Should not exceed 50 characters")
    .min(8, "Password must contain atleast 8 Characters")
    .minUppercase(2, "Password must contain at least 2 Capital letters")
    .minLowercase(2, "Password must contain at least 2 Small letters")
    .minNumbers(2, "Password must contain at least 2 Numbers")
    .minSymbols(2, "Password must contain at least 2 Special Character"),
});
