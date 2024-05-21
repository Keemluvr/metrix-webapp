import { useState } from "react";

interface ToggleActions {
  setVisible: (visible: boolean) => void;
  onHidden: () => void;
  toggleVisibility: () => void;
}

function useToggle(initialValue = false): [boolean, ToggleActions] {
  const [isVisible, setIsVisible] = useState(initialValue);

  const setVisible = (visible: boolean) => setIsVisible(visible);

  const onHidden = () => setIsVisible(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const actions = {
    setVisible,
    onHidden,
    toggleVisibility
  };

  return [isVisible, actions];
}

export default useToggle;
