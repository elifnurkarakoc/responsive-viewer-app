
import Screens from "data/screens";

import { screensSuccess } from "store/actions";

/** deprecated */
export const getScreensData = () => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(screensSuccess(Screens));
    resolve();
  });
};

export default getScreensData;
