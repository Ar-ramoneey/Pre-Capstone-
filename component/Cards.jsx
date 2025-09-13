export default function Cards() {
  const box = [
    { name: "class" },
    { name: "Section" },
    { name: "Subject" },
    { name: "Time Table" },
    { name: "Attendance" },
    { name: "Student Leaves" },
    { name: "Study Materials" },
    { name: "Home Work" },
    { name: "Notice Board" },
    { name: "Events" },
    { name: "Live Classes (Go Pro)" },
  ];
  return (
    <div className="p-7 flex flex-wrap gap-5 h-screen">
      {box.map((boxs, i) => (
        <div key={i} className="flex">
          <div className="bg-white h-fit w-fit py-8 px-8 shadow transition duration-150 ease-in-out delay-150 hover:-translate hover:scale-110 rounded-lg">
            <h2 className="text-xl text-[#08183A] font-semibold mb-3">
              {boxs.name}
            </h2>
            <div className="flex gap-4">
              <button className="bg-[#F2BA1D] border border-[#F2BA1D] py-1 text-white font-semibold text-center px-9 rounded-full">
                class
              </button>
              <button className=" border-3 border-[#F2BA1D] py-1 px-3 text-[#F2BA1D] rounded-full  font-semibold">
                <i class="fa-solid fa-plus"></i> Add New
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
