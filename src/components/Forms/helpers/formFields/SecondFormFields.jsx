import { FastField } from "formik";
import { BaseTextInputField } from "../../../../Base/BaseTextInputField";

export const secondFormFields = [
  (form) => (
    <FastField
      name="firstName"
      label="First Name*"
      placeholder="e.g John"
      error={form.errors?.firstName && form.touched?.firstName ? form.errors?.firstName : ""}
      component={BaseTextInputField}
    />
  ),
  (form) => (
    <FastField
      name="lastName"
      label="Last Name"
      placeholder="e.g Doe"
      error={form.errors?.lastName && form.touched?.lastName ? form.errors?.lastName : ""}
      component={BaseTextInputField}
    />
  ),
  (form) => (
    <FastField
      name="address"
      label="Address Details*"
      placeholder="e.g B-304, Bourbon Street, Washington"
      error={form.errors?.address && form.touched?.address ? form.errors?.address : ""}
      component={BaseTextInputField}
    />
  ),
];
