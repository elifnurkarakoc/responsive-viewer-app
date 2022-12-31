/** Dependencies */
import { createSelector } from "reselect";

const screensStateSelector = (state) => state.get("screens").toJS();

export const setScreensSelector = createSelector(
  screensStateSelector,
  (screenState) => screenState?.screens
);

export default screensStateSelector;
