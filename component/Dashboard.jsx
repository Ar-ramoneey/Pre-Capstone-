import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Branch from "./Branch";
import { useSideBar } from "../ContextAPI/StateContext";

export default function Dashboard() {
    const { state, setState, active, setactive} = useSideBar()
  return (
    <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        
          {active === "branch" && (
            <div className="overflow-y-auto">
              <Branch />
            </div>
          )}
        
      </div>
      </div>
    </div>
  );
}
