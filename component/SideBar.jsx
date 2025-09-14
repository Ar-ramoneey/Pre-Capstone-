import { useSideBar } from "../ContextAPI/StateContext";

export default function SideBar() {
  const { state, setState, active, setactive, setMenu } = useSideBar();

  return (
    <main>
      <nav className="flex">
        <div className="min-h-screen w-53 bg-[#08183A] p-5">
          <div className=" flex items-center mb-10">
            <p className="bg-yellow-500 p-2 rounded-lg font-semibold ">
              Jhon Doreamon
            </p>
            <button onClick={() => setMenu(true)} className="text-white text-2xl ml-auto"> <i class="fa-solid fa-bars"></i></button>
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
             <i class="fa-solid fa-eye"></i> Go To Super Admin
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
             <i class="fas fa-coins mr-3"></i> My School
            </button>
            <button
              onClick={() => {
                setState("management");
              }}
              className={`text-sm  ${
                state === "management"
                  ? "text-black bg-yellow-500 rounded-lg w-full py-1"
                  : "text-white"
              } font-semibold mb-3`}
            >
             <i class="fa-solid fa-eye"></i> School management
            </button>
            {state === "management" && (
              <div className="bg-yellow-400 flex flex-col w-46 items-start py-4 px-8 rounded-[20px]">
                <button
                  onClick={() => {
                    setactive("dashboard");
                  }}
                  className={`text-sm font-semibold w-31 ${
                    active === "dashboard"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                 <i class="fa-solid fa-file"></i> Dashboard
                </button>
                <button
                  onClick={() => {
                    setactive("branch");
                  }}
                  className={`text-md font-semibold w-36 ${
                    active === "branch"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                  <i class="fa-solid fa-file"></i> Add Branch
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
                 <i class="fa-solid fa-file"></i> Class
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
                 <i class="fa-solid fa-file"></i> Sessions
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
                  className={`text-md font-semibold w-34 ${
                    active === "dashboards"
                      ? "text-white bg-[#08183A] py-1 px-4 rounded-full"
                      : "text-[#08183A]"
                  }`}
                >
                 <i class="fa-solid fa-file"></i> Dashboard
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i>  Class
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Sections
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Subjects
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Time Table
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Attendance
                </button>
                <button className="text-md font-semibold w-32 mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Student Leave
                </button>
                <button className="text-md font-semibold w-35 mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Study Materials
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Home Work
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Notice Board
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                 <i class="fa-solid fa-file"></i> Events
                </button>
                <button className="text-md font-semibold mt-3 text-[#08183A]">
                  <i class="fa-solid fa-file"></i> Live Classes <br />
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
