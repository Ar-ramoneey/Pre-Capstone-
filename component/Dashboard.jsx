import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Branch from "./Branch";
import { useSideBar } from "../ContextAPI/StateContext";
import SessionsTable from "./Session";
import Cards from "./Cards";
import StudentTable from "./MySchool";
import Profile from "./profile";
import Menu from "./Menu";

export default function Dashboard() {
  const { state, active, menu } = useSideBar();
  return (
    <div>
      {menu && (
        <div className="absolute  bg-white flex justify-center items-center z-50  ">
          <Menu/>
        </div>
      )}
      <div className="sticky top-0 w- w-196 md:w-screen">
        <NavBar />
      </div>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div>
          {active === "branch" && state === "management" && (
            <div className="overflow-y-auto">
              <Branch />
            </div>
          )}
          {active === "session" && state === "management" && (
            <div className="overflow-y-auto">
              <SessionsTable />
            </div>
          )}
          {((active === "dashboard" && state === "management") ||
            (state === "academics" && active === "dashboards")) && (
            <div className="overflow-y-auto">
              <Cards />
            </div>
          )}
          {state === "school" && (
            <div className="overflow-y-auto">
              <StudentTable />
            </div>
          )}
          {state === "admin" && (
            <div className="overflow-y-auto">
              <Profile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
