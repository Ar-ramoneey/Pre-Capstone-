import { MySchoolData } from "./MySchoolData";
export default function StudentTable() {
  

  return (
    <div className="p-6 h-screen w-281">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-9 px-5 ">
        <div>
        <input
          type="text"
          placeholder="Search Student"
          className="border px-3 py-2 rounded-md w-74"
        />
        <i class="fa-solid fa-magnifying-glass relative right-12"></i>
        </div>
        <div className="flex items-center text-sm space-x-2">
          <button className="px-5 py-1 font-semibold  border-2 border-[#F2BA1D] text-[#F2BA1D] rounded-lg ">
            <i class="fa-solid fa-plus"></i> ADD
          </button>
          <button className="px-5 py-1 font-semibold  border-2 border-[#F2BA1D] text-[#F2BA1D] rounded-md">
            SHIFTS <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button className="px-1 py-1 font-semibold border-2 border-[#F2BA1D] text-[#F2BA1D] rounded-md">
            DOWNLOAD <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button className="px-4 py-1 font-semibold border-2 border-[#F2BA1D] text-[#F2BA1D] rounded-md">
            <i class="fa-solid fa-file-import"></i> IMPORT
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">Sl. No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Roll number</th>
              <th className="px-4 py-2 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {MySchoolData.map((student, i) => (
              <tr
                key={student.id}
              >
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2 flex items-center space-x-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-xs text-gray-500">Id: {student.reg}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{student.class}</td>
                <td className="px-4 py-2">{student.roll}</td>
                <td className="px-4 py-2 flex items-center justify-center space-x-3 text-yellow-500">
                  <i class="fa-solid fa-bars"></i>
                  <i class="fa-solid fa-file-pen"></i>
                   <i class="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}