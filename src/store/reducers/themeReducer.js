/** Dependencies */
import { fromJS } from "immutable";

/** Store */
import { DARK_MODE } from "store/constants";

const initialState = {
  isdarkMode: !!JSON.parse(
    localStorage.getItem("darkmode-responsive-viewer-app")
  ),
};

export const themeReducer = (state = initialState, action = null) => {
  console.log();
  switch (action?.type) {
    case DARK_MODE:
      // console.log("action", action.payload);
      // return state?.set("isdarkMode", fromJS(action?.payload));
      return state;
    default:
      return state;
  }
};

export default themeReducer;
