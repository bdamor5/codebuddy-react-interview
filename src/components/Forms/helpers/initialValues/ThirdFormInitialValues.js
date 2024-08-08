export const thirdFormInitialValues = (values) => ({
  countryCode: values?.countryCode || "",
  phoneNumber: values?.phoneNumber || "",
  acceptTermsAndCondition: values?.acceptTermsAndCondition || false,
});
