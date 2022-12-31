import React from "react";
import { Checkbox } from "antd";

/** Stylesheets */
import "./InputField.scss";

export const InputField = ({ id, deviceName, checked, onChange }) => {
  const handleOnChange = () => {
    if (onChange) {
      onChange(deviceName);
    }
  };

  return (
    <div>
      <Checkbox
        // className="inputHolder"
        // type="checkbox"
        // id={id}
        // name={deviceName}
        // value={deviceName}
        // checked={checked}
        onChange={handleOnChange}
      >
        {deviceName}
      </Checkbox>
    </div>
  );
};

export default InputField;
