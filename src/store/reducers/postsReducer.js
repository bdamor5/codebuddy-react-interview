import { CLEAR_STORE, ALL_POSTS_LISTS_DATA } from "../actionTypes";

const initialState = {
  allPostsLists: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POSTS_LISTS_DATA:
      return {
        ...state,
        allPostsLists: [...state?.allPostsLists, ...action.payload],
      };

    case CLEAR_STORE:
      return { ...state, allPostsLists: [] };
    default:
      return state;
  }
};
