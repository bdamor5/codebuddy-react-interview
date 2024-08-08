import { get } from "lodash";
import { Checkbox, FormControlLabel } from "@mui/material";

export const BaseCheckBoxWithText = ({ form, field, ...props }) => {
  const { name, value = "" } = field;
  const { touched, errors, setFieldValue } = form;

  const error = get(touched, field.name) && get(errors, field.name);

  return (
    <div className="relative mt-0 md:mt-[-10px]">
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={() => {
              setFieldValue(name, !value);
            }}
          />
        }
        label={<p className="md:text-md text-xs">I accept all the terms and conditions.</p>}
      />
      {error ? (
        <p
          className="absolute
       text-xs text-red-500"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
};
