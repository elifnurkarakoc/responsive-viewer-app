/** Dependencies */
import { combineReducers } from "redux-immutable";

/** Reducer */
import screensReducer from "./screenReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  screens: screensReducer,
  isdarkMode: themeReducer,
});

export default rootReducer;
