export const setUserAgent = (window, userAgent) => {
  if (window.navigator.userAgent !== userAgent) {
    var userAgentProp = {
      get: function () {
        return userAgent;
      },
    };
    try {
      console.log({ window });
      Object.defineProperty(window.navigator, "userAgent", userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp,
      });
    }
  }
};

export const isCheckedScreenExist = (screens) => {
  return screens?.filter((screen) => screen?.checked)?.length > 0;
};
