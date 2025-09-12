import { createContext, useContext } from "react";

export const SideBarContext = createContext()

export const useSideBar = () => useContext(SideBarContext)