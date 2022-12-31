import React from "react";
import { isCheckedScreenExist } from "utils/helper";
import Iframe from "./Iframe/Iframe";

import "./Screens.scss";

export const Screens = ({ screens, url }) => {
  return (
    <div>

      <div className="screensContainer">
        <div className="screenHolder">
          {screens && (
            <div className="screensHolder">
              <div className="iframesHolder">
                {screens?.map(
                  (screen) =>
                    screen?.checked && (
                      <div className="iframeHolder">
                        {url !== "" && <Iframe screen={screen} url={url} />}
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Screens;
