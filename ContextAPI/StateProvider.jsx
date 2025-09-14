import { useState } from "react";
import { SideBarContext } from "./StateContext";
export const SideBarProvider = ({ children }) => {
  const [state, setState] = useState("admin");
  const [active, setactive] = useState("");
  const [image, setImage] = useState(null);
  const [menu, setMenu] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // show preview
    }
  };
  const value = { state, setState, active, setactive, image, handleImageChange, menu, setMenu };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
