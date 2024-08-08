import { Alert, Snackbar } from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_ALERT, SUCCESS_ALERT } from "../../store/actionTypes";
import { closeAlertMessage } from "../../store/actions/formActions";

const SnackbarAlert = () => {
  const dispatch = useDispatch();

  const { alertMessageStatus } = useSelector((state) => state.formReducer);

  let { open, severity, message } = useMemo(() => {
    if (alertMessageStatus && Object.keys(alertMessageStatus)) {
      return {
        open: true,
        severity:
          alertMessageStatus?.status === SUCCESS_ALERT
            ? "success"
            : alertMessageStatus?.status === ERROR_ALERT
              ? "error"
              : "info",
        message: alertMessageStatus?.message,
      };
    } else {
      return { open: false, severity: "", message: "" };
    }
  }, [alertMessageStatus]);

  const handleClose = (event, reason) => {
    dispatch(closeAlertMessage());

    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <>
      {open && message && severity && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default SnackbarAlert;
