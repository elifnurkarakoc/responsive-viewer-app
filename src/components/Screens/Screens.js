import React from "react";
import Iframe from "./Iframe/Iframe";

import "./Screens.scss";

export const Screens = ({ screens, url, zoom }) => {
  return (
    <div>
      <div className="screensContainer">
        <div className="screenHolder">
          {screens && (
            <div
              className="screensHolder"
              style={{
                transform: `scale(${zoom})`,
                width: `calc((100vw - 300px) / ${zoom} )`,
              }}
            >
              <div className="iframesHolder">
                {screens?.map(
                  (screen) =>
                    screen?.checked && (
                      <div>
                        <div>
                          {screen?.width}x{screen?.height}
                        </div>
                        <div className="iframeHolder">
                          {url !== "" && <Iframe screen={screen} url={url} />}
                        </div>
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
