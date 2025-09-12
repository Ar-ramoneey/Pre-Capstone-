import { useState } from "react";
import { SideBarContext } from "./StateContext";
export const SideBarProvider = ({ children }) => {
  const [state, setState] = useState("");
  const [active, setactive] = useState("");
  const value = { state, setState, active, setactive };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
