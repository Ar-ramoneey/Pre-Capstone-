import React from "react";
import ProfileUpload from "./ProfileImage";

export default function Profile() {
  return (
    <div>
      <div className="flex-1 flex flex-col h-screen">
        <main className="flex-1 text-gray-500   p-6">
          <form className="grid grid-col w-auto md:grid-col lg:grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-4">
              <ProfileUpload />
              <div className="flex items-center ">
                <label className="text-sm  font-medium">
                  Student Name
                  <input
                    type="text"
                    className="w-85 border ml-19 rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex items-center ">
                <label className="text-sm font-medium">
                  Father's Name
                  <input
                    type="text"
                    className="w-85 ml-19  border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Mother's Name
                  <input
                    type="text"
                    className="w-85 ml-17 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex ">
                <label className="text-sm font-medium relative top-3">
                  Address
                </label>
                <textarea
                  className="w-85 ml-29 border rounded-md px-3 py-2 mt-1"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex ">
                <label className="font-semibold">Gender</label>
                <div className="ml-28 space-x-2">
                  <input
                  name="gender"
                    type="radio"
                    className="appearance-none ml-2 w-3 h-3 bg-gray-200 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                  />{" "}
                  <span className="font-semibold">Male</span>
                  <input
                  name="gender"
                    type="radio"
                    className="appearance-none ml-4 w-3 h-3 bg-gray-200 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                  />
                  <span className="font-semibold">Female</span>
                  <input
                  name="gender"
                    type="radio"
                    className="appearance-none ml-4 w-3 h-3 bg-gray-200 border border-gray-400 rounded-full checked:bg-yellow-400 checked:ring-4 checked:ring-black"
                  />
                  <span className="font-semibold">Others</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Pincode
                  <input
                    type="email"
                    className="w-85 ml-30 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">
                  State
                  <select
                    className="w-85 ml-35 border rounded-md px-3 py-2 mt-1"
                  >
                     <option>-- Choose a state --</option>
                    </select>
                </label>
              </div>
            
              
              
            </div>

            {/* Right side */}
            <div className="space-y-4">
             
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  District
                  
                  <select className="w-90 ml-12 border rounded-md px-3 py-2 mt-1">
                    <option>District</option>
                  </select>
                </label>
              </div>
                <div>
                <label className="text-sm font-medium relative left-5">
                  Phone No.
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-90 ml-10 border rounded-md px-3 py-2 mt-1"
                  />
                  
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  Tax Number
                  <input
                    type="text"
                    
                    className="w-90 ml-5 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  REG No.
                  <input
                    type="text"
                    className="w-90 ml-12 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  Email
                  <input
                    type="email"
                    className="w-90 ml-17 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  Date Of Birth
                  <input
                    type="date"
                    className="w-90 border ml-6 rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  Blood Group
                  <input
                    type="text"
                    
                    className="w-90 ml-5 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">
                  Any Abilities
                  <input
                    type="text"
                    
                    className="w-90 ml-5 border rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
            </div>
          </form>

          {/* Save button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-yellow-400 px-6 py-2 rounded-full text-white font-medium">
              <i class="fa-solid fa-check"></i> Save
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
