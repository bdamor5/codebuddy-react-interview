import {
  CLEAR_STORE,
  CLOSE_ALERT_MESSAGE,
  CURRENT_SELECTED_FORM,
  DISPLAY_ALERT_MESSAGE,
  ERROR_ALERT,
  IS_USER_AUTHENTICATED,
  SUCCESS_ALERT,
} from "../actionTypes";

export const updateSelectedForm = (payload) => {
  return {
    type: CURRENT_SELECTED_FORM,
    payload,
  };
};

export const displayAlertMessage = (status, message) => {
  return {
    type: DISPLAY_ALERT_MESSAGE,
    payload: { status, message },
  };
};

export const closeAlertMessage = () => {
  return {
    type: CLOSE_ALERT_MESSAGE,
    payload: null,
  };
};

export const submitFormDetails = (payload) => {
  return async (dispatch) => {
    try {
      await fetch("https://codebuddy.review/submit", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      dispatch(displayAlertMessage(SUCCESS_ALERT, "Details Submitted Successfully!"));
      dispatch(authenticateUser(true));
    } catch (error) {
      dispatch(authenticateUser(false));
      dispatch(displayAlertMessage(ERROR_ALERT, "Something went wrong! Please try again later."));
    }
  };
};

export const authenticateUser = (payload) => {
  return {
    type: IS_USER_AUTHENTICATED,
    payload,
  };
};

export const clearStore = () => {
  return {
    type: CLEAR_STORE,
  };
};
