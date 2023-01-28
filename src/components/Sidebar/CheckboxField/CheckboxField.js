import React from "react";
import { Checkbox } from "antd";

/** Stylesheets */
import "./CheckboxField.scss";

export const CheckboxField = ({ deviceName, onChange }) => {
  const handleOnChange = () => {
    if (onChange) {
      onChange(deviceName);
    }
  };

  return (
    <div>
      <Checkbox onChange={handleOnChange}>{deviceName}</Checkbox>
    </div>
  );
};

export default CheckboxField;
