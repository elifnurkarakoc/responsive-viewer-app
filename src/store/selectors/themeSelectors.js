/** Dependencies */
import { createSelector } from "reselect";
import { toJS } from "immutable";

const themeStateSelector = (state) => state.get("isdarkMode").toJS();

export const setThemeSelector = createSelector(
  themeStateSelector,
  (themeState) => themeState?.isdarkMode
);

export default themeStateSelector;
