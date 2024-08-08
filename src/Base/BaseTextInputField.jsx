import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const BaseTextInputField = ({ form, field, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { name, value = "" } = field;
  const { handleChange, handleBlur, s } = form;
  const {
    label,
    required,
    multiline,
    placeholder,
    type,
    size = "small",
    fullWidth = true,
    error,
    className,
    disabled,
  } = props;

  return (
    <TextField
      id={name}
      name={name}
      value={value || ""}
      label={label}
      error={error}
      helperText={error || ""}
      className={className}
      required={required}
      multiline={multiline}
      minRows={multiline && 3}
      rowsMax={Infinity}
      placeholder={placeholder}
      type={showPassword ? "text" : type}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      variant="outlined"
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        endAdornment: name === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              tabIndex={-1}
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
              size="large"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
