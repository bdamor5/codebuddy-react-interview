import { FastField } from "formik";
import { BaseTextInputField } from "../../../../Base/BaseTextInputField";

export const firstFormFields = [
  (form) => (
    <FastField
      name="emailId"
      label="Email*"
      placeholder="e.g john.doe@gmail.com"
      error={form.errors?.emailId && form.touched?.emailId ? form.errors?.emailId : ""}
      component={BaseTextInputField}
    />
  ),
  (form) => (
    <FastField
      name="password"
      label="Password*"
      placeholder="e.g xxxxxxx"
      error={form.errors?.password && form.touched?.password ? form.errors?.password : ""}
      type="password"
      component={BaseTextInputField}
    />
  ),
];
