import React from 'react'

export default function Branch() {
  return (
    <div>
      {/* main */}
      <div className="flex-1 flex flex-col ">
      <main className="flex-1 text-gray-500   p-6">
          <form className="grid grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-4">
              <div className="flex items-center ">
                <label className="text-sm  font-medium">Billing Name
                <input
                  type="text"
                  className="w-85 border ml-23 rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div className="flex items-center ">
                <label className="text-sm font-medium">Organization Website
                <input
                  type="text"
                  className="w-85 ml-9  border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Time-zone
                <select className="w-85 ml-26 border rounded-md px-3 py-2 mt-1">
                  <option>Select timezone</option>
                  
                </select>
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Email
                <input
                  type="email"
                  className="w-85 ml-34 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Contact number
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-85 ml-17 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Registration Number
                <input
                  type="text"
                  className="w-85 ml-9 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Organization Code
                <input
                  type="text"
                  className="w-85 ml-12 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Upload Files
                <input type="file" className="mt-1 ml-22" />
                </label>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <label className="text-sm font-medium relative top-3">Address</label>
                <textarea
                  className="w-90 ml-12 border rounded-md px-3 py-2 mt-1"
                  rows="3"
                ></textarea>
                
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">State
                <input
                  type="text"
                  className="w-90 ml-17 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">District
                <input
                  type="text"
                  className="w-90 ml-13 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">Country
                <select className="w-90 ml-12 border rounded-md px-3 py-2 mt-1">
                  <option>Select country</option>
                </select>
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">Pincode
                <input
                  type="text"
                  className="w-90 ml-12 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">Tax Number
                <input
                  type="text"
                  className="w-90 ml-5 border rounded-md px-3 py-2 mt-1"
                />
                </label>
              </div>
              <div className="flex justify-center">
                <label className="text-sm font-medium">GST Info
                <input
                  type="text"
                  className="w-90 border ml-12 rounded-md px-3 py-2 mt-1"
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
  )
}
