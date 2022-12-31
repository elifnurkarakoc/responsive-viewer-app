import React from "react";

/** Components */
import Iphone from "components/svg/Iphone";

/** Stylesheets */
import "./Content.scss";

export const Content = () => {
  return (
    <div className="contentHolder">
      <div className="textTitleHolder">
        <div className="contentTitleHolder">
          View your product on different screens!
        </div>
        <div className="contentTextHolder">
          Check your product on every screen with us!
        </div>
      </div>
      <div className="imageHolder">
        <Iphone width={600} height={600} />
      </div>
    </div>
  );
};

export default Content;
