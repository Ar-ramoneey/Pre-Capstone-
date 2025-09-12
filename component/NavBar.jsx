import React from 'react'
import Profile from '../src/assets/selfie.jpeg'
import Logo from "../src/assets/Logo.png";

export default function NavBar() {
  return (
    <div className="bg-white  flex items-center justify-between shadow-md py-2 px-5">
      <div className="flex items-center">
          <div className="">
            <img src={Logo} alt="Logo" className='h-12' />
          </div>
          <div>
            <span className="ml-2 text-2xl font-semibold ">
              Delhi Public School
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <p className="text-gray-400 text-ms font-semibold">Free Trial -</p>
            <span className="text-yellow-400 text-sm font-semibold ml-2">
              30 Days Trial
            </span>
            <button className=" font-semibold text-md ml-3 text-[#08183A] ">
              Buy Now
            </button>
          </div>
          <div className="flex items-center">
            <img src={Profile} alt="Profile Picture" className="h-10 w-10 rounded-full" />
            <span className='text-[#08183A] ml-2 font-semibold'>John Doremon</span>
            <span className='ml-2 '><i class="fa-solid fa-chevron-down"></i></span>
            <button className='ml-7'><i class="fa-solid fa-bell"></i></button>
          </div>
        </div>
    </div>
  )
}
