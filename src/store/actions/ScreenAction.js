import Screens from "data/screens";
import { SET_SCREENS } from "store/constants";

export const setScreens = (data = Screens) => ({
  type: SET_SCREENS,
  screens: data,
});
