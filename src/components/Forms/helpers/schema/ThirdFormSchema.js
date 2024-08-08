import * as Yup from "yup";
import "yup-phone-lite";

export const thirdFormSchema = Yup.object().shape({
  countryCode: Yup.string().required("Country Code is required"),
  phoneNumber: Yup.string()
    .phone("*", "Please enter a valid phone number")
    .required("Phone is required"),
  acceptTermsAndCondition: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});
