export default function SessionsTable() {
  const sessions = [
    {
      id: "050000321",
      name: "John Tripathi",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000322",
      name: "Jane Doe",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000321",
      name: "John Tripathi",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000322",
      name: "Jane Doe",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000321",
      name: "John Tripathi",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000322",
      name: "Jane Doe",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000321",
      name: "John Tripathi",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
    {
      id: "050000322",
      name: "Jane Doe",
      level: "Administration",
      startDate: "Administration",
      endDate: "Administration",
    },
  ];

  return (
    <div className="py-6 bg-white h-screen">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 ml-6 items-center mb-6">
        <select className="border p-2 rounded-lg w-59 border-gray-300 text-md ">
          <option>All Sessions</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <input
          type="text"
          placeholder="Search Sessions"
          className="border p-2 rounded-lg w-75 ml-4 border-gray-300 text-black"
        />
        <i class="fa-solid fa-magnifying-glass relative right-12"></i>
      </div>
      <div className="ml-6 mb-5">
        <h2 className="text-lg font-semibold mb-2">Sessions</h2>
        <input
          type="text"
          placeholder="Enter Sessions Level"
          className="border border-gray-300 p-2 rounded-lg w-70"
        />
        <input
          type="date"
          className="border border-gray-300 p-2 rounded-lg ml-9"
        />
        <input
          type="date"
          placeholder="stat"
          className="border border-gray-300 p-2 rounded-lg ml-9"
        />

        <button className="ml-25 gap-2 border-3 border-yellow-500 text-yellow-500 font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition">
          + ADD NEW SESSIONS
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto  shado rounde">
        <table className="w-277 border-collapse">
          <thead className="bg-gray-100 text-left text-sm font-semibold w-screen">
            <tr>
              <th className="px-4 py-3">Sl No.</th>
              <th className=" py-3">Sessions</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">End Date</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, index) => (
              <tr key={s.id} className="border- text-sm">
                <td className="px-4 py-">{index + 1}.</td>
                <td className=" py-3">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-gray-500">Id: {s.id}</div>
                </td>
                <td className="px-4 py-3">{s.startDate}</td>
                <td className="px-4 py-3">{s.endDate}</td>
                <td className="px-4 py-3 flex gap-15">
                  <button className="text-yellow-500 hover:text-yellow-600">
                    <i class="fa-solid fa-file-pen"></i>
                  </button>
                  <button className="text-yellow-500 hover:text-red-600">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
