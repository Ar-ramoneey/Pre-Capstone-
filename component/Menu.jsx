import { useSideBar } from "../ContextAPI/StateContext";

export default function Menu () {

      const { menu, setMenu } = useSideBar();


  const box = [
    {
      name: "institues Management",
      image: <i class="fas fa-tasks text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Online Admission",
      image: <i class="fas fa-user-graduate text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Finance Management",
      image: <i class="fas fa-coins text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Fees Management",
      image: <i class="fas fa-tree text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Result Management",
      image: <i class="fas fa-chart-line text-yellow-600 text-7xl"></i>,
    },
    {
      name: "HR Management",
      image: <i class="fas fa-users text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Lesson Planning",
      image: <i class="fas fa-book-open text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Time-Table Module",
      image: <i class="fas fa-calendar-alt text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Inquiry Management",
      image: <i class="fas fa-question-circle text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Library Management",
      image: <i class="fas fa-book text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Complain/ Grievance",
      image: <i class="fas fa-tachometer-alt text-yellow-600 text-7xl"></i>,
    },
    {
      name: "target Management With Rating",
      image: <i class="fas fa-bullseye text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Hostel Management",
      image: <i class="fas fa-server text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Gate-pass Management",
      image: <i class="fas fa-user-friends text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Analysis & Reports",
      image: <i class="fas fa-chart-bar text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Auto Voice Calls",
      image: <i class="fas fa-phone-alt text-yellow-600 text-7xl"></i>,
    },
  ];

  const more = [
    {
      name: "Smart Attendance Management System",
      image: <i class="fas fa-fingerprint text-yellow-600 text-7xl"></i>,
    },
    {
      name: "GPS Bus Tracking",
      image: <i class="fas fa-bus text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Online Fee Payment",
      image: <i class="fas fa-credit-card text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Sms Gateway",
      image: <i class="fas fa-shield-alt text-yellow-600 text-7xl"></i>,
    },
    {
      name: "Profile Scan Via QR Code",
      image: <i class="fas fa-qrcode text-yellow-600 text-7xl"></i>,
    },
  ];
  return (
    <div className="p-9">
      <div className="mb-9 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#08183A]">Add-On Services</h1>
          <h2 className="text-sm text-yellow-400 font-semibold">
            To Get More Features
          </h2>
        </div>
        <div>
            <button onClick={() => setMenu(false)}>
          <i class="fa-solid fa-circle-xmark text-[#08183A] text-xl"></i>
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap gap-5 mb-15">
        {box.map((boxs, i) => (
          <div key={i} className="flex">
            <div className="flex flex-col justify-center items-center  bg-gray-100 h-50 w-50 py-2 px-1 shadow-md transition duration-150 ease-in-out delay-150 hover:-translate hover:scale-110 rounded-lg">
              <p>{boxs.image}</p>
              <h2 className="text-xl text-[#08183A] text-center font-semibold mb-3">
                {boxs.name}
              </h2>

              <button className="bg-[#F2BA1D] border border-[#F2BA1D] py-1 text-[#08183A] font-semibold text-center px-9 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-9">
        <h1 className="text-2xl font-bold text-[#08183A]">
          Intregrations Services
        </h1>
        <h2 className="text-sm text-yellow-400 font-semibold">
          To Get More Features
        </h2>
      </div>
      <div className=" flex flex-wrap gap-5">
        {more.map((e, f) => (
          <div key={f} className="flex">
            <div className="flex flex-col justify-center items-center  bg-gray-100 h-50 w-50 py-8 px-1 shadow-md transition duration-150 ease-in-out delay-150 hover:-translate hover:scale-110 rounded-lg">
              <p>{e.image}</p>
              <h2 className="text-xl text-[#08183A] text-center font-semibold mb-3">
                {e.name}
              </h2>

              <button className="bg-[#F2BA1D] border border-[#F2BA1D] py-1 text-[#08183A] font-semibold text-center px-9 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
