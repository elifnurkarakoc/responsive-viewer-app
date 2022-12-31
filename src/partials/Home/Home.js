import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/** Store */
import { setScreens } from "store/actions";
import { setScreensSelector } from "store/selectors";

/** Component */
import Screens from "components/Screens/Screens";
import Sidebar from "components/Sidebar/Sidebar";

/** Stylesheets */
import "./Home.scss";
import { isCheckedScreenExist } from "utils/helper";

const Home = ({ setScreens, screensValues }) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    setScreens();
  }, []);

  const handleKeyDown = (event) => {
    if (event?.key === "Enter") {
      setUrl(event?.target?.value);
    }
  };

  const handleSearch = (event) => {
    setUrl(event);
  };
  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <div className="homePageholder">
      <Sidebar
        screens={screensValues}
        setScreens={setScreens}
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
      />

      <>
        {(!isCheckedScreenExist(screensValues) || url === undefined) && (
          <div className="emptyStateHolder">
            You can enter the url and select the screens
          </div>
        )}
        {isCheckedScreenExist(screensValues) && url && (
          <Screens screens={screensValues} url={url} />
        )}
      </>
    </div>
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
