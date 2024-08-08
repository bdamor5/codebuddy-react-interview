import { ALL_POSTS_LISTS_DATA, ERROR_ALERT } from "../actionTypes";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      let payload;
      await fetch("https://codebuddy.review/posts")
        .then((res) => res.json())
        .then((data) => (payload = data?.data));

      dispatch({
        type: ALL_POSTS_LISTS_DATA,
        payload,
      });
    } catch (error) {
      dispatch(displayAlertMessage(ERROR_ALERT, "Something went wrong! Please try again later."));
    }
  };
};
