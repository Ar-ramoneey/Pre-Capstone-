import { useSideBar } from "../ContextAPI/StateContext";
import Branch from "./Branch";

export default function SideBar() {
  const { state, setState, active, setactive } = useSideBar();

  return (
    <main>
      <nav className="flex">
        <div className="min-h-screen w-53 bg-[#08183A] p-5">
          <div className=" flex items-center mb-10">
            <p className="bg-yellow-500 p-2 rounded-lg font-semibold ">
              Jhon Doreamon
            </p>
            <button className="text-white text-2xl ml-auto"> <i class="fa-solid fa-bars"></i></button>
          </div>
          <div className="flex flex-col items-start">
            <button
              onClick={() => {
                setState("admin");
              }}
              className={`text-md  ${
                state === "admin"
                  ? "text-black bg-yellow-500 rounded-lg w-full py-1"
                  : "text-white"
              } font-semibold mb-3`}
            >
              Go To Super Admin
            </button>
            <button
              onClick={() => {
                setState("school");
              }}
              className={`text-md  ${
                state === "school"
                  ? "text-black bg-yellow-500 rounded-lg w-full py-1"
                  : "text-white"
              } font-semibold mb-3`}
            >
              My School
            </button>
            <button
              onClick={() => {
                setState("management");
              }}
              className={`text-md  ${
                state === "management"
                  ? "text-black bg-yellow-500 rounded-lg w-full py-1"
                  : "text-white"
              } font-semibold mb-3`}
            >
              School management
            </button>
            {state === "management" && (
              <div className="bg-yellow-400 flex flex-col w-46 items-start py-4 px-8 rounded-[20px]">
                <button
                  onClick={() => {
                    setactive("dashboard");
                  }}
                  className={`text-md font-semibold ${
                    active === "dashboard"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setactive("branch");
                  }}
                  className={`text-md font-semibold ${
                    active === "branch"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  Add Branch
                </button>
                <button
                  onClick={() => {
                    setactive("class");
                  }}
                  className={`text-md font-semibold ${
                    active === "class"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  Class
                </button>
                <button
                  onClick={() => {
                    setactive("session");
                  }}
                  className={`text-md font-semibold  ${
                    active === "session"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  Sessions
                </button>
              </div>
            )}
            <button
              onClick={() => {
                setState("academics");
              }}
              className={`text-md  ${
                state === "academics"
                  ? "text-black bg-yellow-500 rounded-lg w-full py-1"
                  : "text-white"
              } font-semibold mb-3`}
            >
              Academics
            </button>
            {state === "academics" && (
              <div className="bg-yellow-500 flex flex-col w-46 items-start py-4 px-8 rounded-[20px]">
                <button
                  onClick={() => {
                    setactive("dashboards");
                  }}
                  className={`text-md font-semibold ${
                    active === "dashboards"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  Dashboard
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Class
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Sections
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Subjects
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Time Table
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Attendance
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Student Leave
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Study Materials
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Home Work
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Notice Board
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Events
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  Live Classes <br />
                  <span className="underline">( Go Pro)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
