import React, { useState } from "react";
import { useEffect } from "react";
import { Input, Slider } from "antd";

/** Components */
import InputField from "./InputField/InputField";

/** Stylesheets */
import "./Sidebar.scss";

export const Sidebar = ({
  screens,
  setScreens,
  onKeyDown,
  onSearch,
  onZoomChange,
}) => {
  const [allScreens, setAllScreens] = useState(screens);

  useEffect(() => {
    setAllScreens(screens);
  }, []);

  const handleChange = (deviceName) => {
    const tmpAllScreens = allScreens?.map((screen) => {
      if (screen?.deviceName === deviceName) {
        screen.checked = !screen.checked;
      }
      return screen;
    });
    setAllScreens([...tmpAllScreens]);

    setScreens([...tmpAllScreens]);
  };

  const marks = {
    25: "25%",
    50: "50%",
    100: {
      style: { color: "#f50" },
      label: <strong>100%</strong>,
    },
  };

  const { Search } = Input;
  return (
    <div className="sidebarHolder">
      <Search
        style={{ marginBottom: 8, width: 200 }}
        placeholder="https://elifnurkarakoc.com"
        defaultValue={"https://elifnurkarakoc.com"}
        allowClear
        onKeyDown={(event) => onKeyDown(event)}
        enterButton
        onSearch={(event) => onSearch(event)}
        onChange={handleChange}
      />
      <div className="sliderNameHolder">Zoom</div>
      <Slider
        defaultValue={100}
        tooltip={{ open: false }}
        onChange={onZoomChange}
        marks={marks}
        step={null}
      />
      <div className="sidebarTitleHolder">All Screens</div>
      <div className="screensCheckboxHolder">
        {allScreens?.map((screen, index) => (
          <InputField
            key={`screen-device-${screen?.deviceName}-${index}`}
            deviceName={screen?.deviceName}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
