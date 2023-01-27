import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/** Store */
import { setScreens } from "store/actions";
import { setScreensSelector } from "store/selectors";

import { Result } from "antd";

/** Component */
import Screens from "components/Screens/Screens";
import Sidebar from "components/Sidebar/Sidebar";

/** Stylesheets */
import "./Home.scss";
import { isCheckedScreenExist } from "utils/helper";

const Home = ({ setScreens, screensValues }) => {
  const [url, setUrl] = useState();
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    setScreens();
  }, []);

  const handleKeyDown = (event) => {
    if (event?.key === "Enter") {
      setUrl(event?.target?.value);
    }
  };

  const handleSearch = (event) => {
    if (event) {
      setUrl(event);
    }
  };

  useEffect(() => {
    console.log(url);
  }, [url]);

  const handleZoomChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    if (value === 0) {
      setZoom(0.25);
    } else if (value === 25) {
      setZoom(0.5);
    } else if (value === 50) {
      setZoom(0.75);
    } else if (value === 100) {
      setZoom(1);
    }
  };
  return (
    <>
      <div className="homePageholder">
        <Sidebar
          screens={screensValues}
          setScreens={setScreens}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
          onZoomChange={handleZoomChange}
        />

        <>
          {(!isCheckedScreenExist(screensValues) || url === undefined) && (
            <div className="emptyStateHolder">
              <Result
                status="warning"
                title="You can enter the url and select the screens"
              />
            </div>
          )}
          {isCheckedScreenExist(screensValues) && url && (
            <Screens screens={screensValues} url={url} zoom={zoom} />
          )}
        </>
      </div>
      <div className="mobileHolder">
        To view the page, you should view it from the Desktop view.
      </div>
    </>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  setScreens: (data) => dispatch(setScreens(data)),
});

export const mapStateToProps = createStructuredSelector({
  screensValues: setScreensSelector,
});

Home.propTypes = {
  setScreens: PropTypes.func.isRequired,
  screensValues: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Home.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
