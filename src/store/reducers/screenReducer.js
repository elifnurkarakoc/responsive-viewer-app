/** Dependencies */
import { fromJS } from "immutable";

/** Store */
import { SET_SCREENS } from "store/constants";
import Screens from "data/screens";

// const arrScreen = Screens?.map((screen) =>
//   Object.assign({}, screen, { checked: false })
// );

const initialState = fromJS({
  screens: Screens,
});

export const screensReducer = (state = initialState, action = null) => {
  switch (action?.type) {
    case SET_SCREENS:
      return state?.set("screens", fromJS(action?.screens));
    default:
      return state;
  }
};

export { initialState };
export default screensReducer;
