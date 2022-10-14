import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
