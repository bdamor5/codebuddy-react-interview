import { combineReducers } from "redux";
import { formReducer } from "./reducers/formReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({ formReducer, postsReducer });

export default rootReducer;
