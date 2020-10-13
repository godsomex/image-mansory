import { useState } from "react";

export default function useToggle(initialState = false) {
  const [isOn, onToggle] = useState(initialState);
  const handleToggle = () => onToggle((isOn) => !isOn);
  return [isOn, handleToggle];
}
