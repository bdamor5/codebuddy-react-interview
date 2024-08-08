import { MuiTelInput } from "mui-tel-input";
import { get } from "lodash";
import { useCallback } from "react";
import debounce from "lodash/debounce";

export const BasePhoneNumberTextField = ({ form, field, ...props }) => {
  const { name, value = "" } = field;
  const { handleBlur, touched, errors, setFieldValue, validateField } = form;
  const {
    label,
    required,
    placeholder,
    size = "small",
    fullWidth = true,
    className,
    displayError = true,
  } = props;

  // Debounced function for validation
  const debouncedValidateField = useCallback(
    debounce((fieldName) => {
      validateField(fieldName);
    }, 100),
    [validateField],
  );

  // Handle input change
  const handleInput = (value, info) => {
    setFieldValue(name, value);
    setFieldValue("countryCode", `+${info.countryCallingCode}`);
    setFieldValue("nationalNumber", info?.nationalNumber);
    debouncedValidateField(name);
  };

  const error = get(touched, field.name) && get(errors, field.name);

  return (
    <MuiTelInput
      id={name}
      name={name}
      className={className}
      value={value || ""}
      label={label}
      error={Boolean(error)}
      helperText={displayError && error}
      required={required}
      placeholder={placeholder}
      fullWidth={fullWidth}
      size={size}
      variant="outlined"
      onChange={handleInput}
      onBlur={handleBlur}
      defaultCountry="IN"
      onlyCountries={["IN", "US"]}
    />
  );
};
