import { FastField } from "formik";
import { BasePhoneNumberTextField } from "../../../../Base/BasePhoneNumberTextField";
import { BaseCheckBoxWithText } from "../../../../Base/BaseCheckBoxWithText";

export const thirdFormFields = [
  (form) => (
    <FastField
      name="phoneNumber"
      label="Phone Number*"
      placeholder="e.g. +91 xxxxx xxxxx"
      component={BasePhoneNumberTextField}
    />
  ),
  (form) => (
    <FastField
      name="acceptTermsAndCondition"
      error={
        form.errors?.acceptTermsAndCondition && form.touched?.acceptTermsAndCondition
          ? form.errors?.acceptTermsAndCondition
          : ""
      }
      component={BaseCheckBoxWithText}
    />
  ),
];
