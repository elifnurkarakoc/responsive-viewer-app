/** Dependencies */
import { combineReducers } from "redux-immutable";

/** Reducer */
import screensReducer from "./screenReducer";

const rootReducer = combineReducers({
  screens: screensReducer,
});

export default rootReducer;
