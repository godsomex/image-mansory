import React from "react";
import ColoredButton from "./ColoredButton";
import { orange, green } from "../../constants";

const ToggleButton = ({ isOn, onToggle, ...props }) => (
  <ColoredButton color={isOn ? green : orange} onClick={onToggle} {...props}>
    {isOn ? "Viral on" : "Viral off"}
  </ColoredButton>
);

export default ToggleButton;
