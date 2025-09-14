import { useSideBar } from "../ContextAPI/StateContext";

export default function rofileUpload() {
  const {image, handleImageChange} = useSideBar()

  return (
    <div className="flex items-end space-x-6 p-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={image || "https://img.icons8.com/?size=100&id=j1UxMbqzPi7n&format=png&color=000000"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <label className="mt-2 text-sm text-gray-600 cursor-pointer">
          Upload Photo
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Choose Media Button */}
      <div>
        <label className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer text-sm text-gray-600 hover:bg-gray-300">
          Choose Media
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
