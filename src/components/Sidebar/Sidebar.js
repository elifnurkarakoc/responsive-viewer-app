import React, { useState } from "react";
import { useEffect } from "react";
import { Input } from "antd";
/** Components */
import InputField from "./InputField/InputField";

/** Stylesheets */
import "./Sidebar.scss";

export const Sidebar = ({ screens, setScreens, onKeyDown, onSearch }) => {
  const [selectedScreens, setSelectedScreens] = useState([]);
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

    // let tmpselectedScreens =
    //   selectedScreens?.length > 0
    //     ? selectedScreens?.map((screen) => {
    //         if (screen?.deviceName === deviceName) {
    //           screen.checked = !checked;
    //         }
    //         return screen;
    //       })
    //     : selectedScreens?.push({ id, deviceName, checked: !checked });

    // setSelectedScreens([...tmpselectedScreens]);
    // console.log(selectedScreens);
  };
  const { Search } = Input;
  return (
    <div className="sidebarHolder">
      {/* <div className="sidebarTitleHolder">Selected Screens</div>
      {selectedScreens ? (
        selectedScreens?.map((screen, index) => (
          <InputField
            key={`screen-device-${screen?.deviceName}-${index}`}
            id={`screen-device-${screen?.deviceName}-${index}`}
            deviceName={screen?.deviceName}
            onChange={onChange}
            checked={screen?.checked}
          />
        ))
      ) : (
        <div>Not selected</div>
      )} */}

      {/* <input
        type="text"
        onKeyDown={(event) => onKeyDown(event)}
        placeholder="url"
      /> */}

      <Search
        placeholder="elifnurkarakoc.com"
        allowClear
        onKeyDown={(event) => onKeyDown(event)}
        enterButton
        onSearch={(event) => onSearch(event)}
      />

      <div className="sidebarTitleHolder">All Screens</div>
      <div className="screensCheckboxHolder">
        {allScreens?.map((screen, index) => (
          <InputField
            key={`screen-device-${screen?.deviceName}-${index}`}
            id={`screen-device-${screen?.deviceName}-${index}`}
            deviceName={screen?.deviceName}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
