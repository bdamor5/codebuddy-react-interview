import {
  CLOSE_ALERT_MESSAGE,
  CURRENT_SELECTED_FORM,
  DISPLAY_ALERT_MESSAGE,
  IS_USER_AUTHENTICATED,
  CLEAR_STORE,
} from "../actionTypes";

const initialState = {
  currentSelectedFormData: {},
  alertMessageStatus: null,
  userAuthenticated: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SELECTED_FORM:
      return {
        ...state,
        currentSelectedFormData: { ...state.currentSelectedFormData, ...action.payload },
      };
    case DISPLAY_ALERT_MESSAGE:
      return {
        ...state,
        alertMessageStatus: { status: action.payload?.status, message: action.payload?.message },
      };
    case CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        alertMessageStatus: action.payload,
      };
    case IS_USER_AUTHENTICATED:
      return {
        ...state,
        userAuthenticated: action.payload,
      };
    case CLEAR_STORE:
      return { state: initialState };
    default:
      return state;
  }
};
