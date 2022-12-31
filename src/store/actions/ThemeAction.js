import { DARK_MODE } from "../constants/ThemeConstants";

export const setDarkMode = (e) => ({
  type: DARK_MODE,
  payload: e,
});
