import React from 'react';
import logo1 from '../assets/LogoLogo2.svg'; // Ensure this path and file extension are correct

const Header = () => {
  return (
    <header className="w-full bg-[#3D8AFF] flex flex-col items-center justify-between p-4 md:p-8 lg:p-14">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo1} // Use the imported logo1 variable
            alt="Logo"
            className="w-[150px] md:w-[193px] h-auto"
          />
        </div>
        
        {/* Login Button */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <span className="text-white md:mr-4">For Organization</span>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition md:px-6 md:py-2">
            Login
          </button>
        </div>
      </div>

      <div className="font-outfit text-[32px] md:text-[50px] leading-[40px] md:leading-[63px] tracking-[-0.05em] mt-4 md:mt-[62px] text-white text-center">
        Explore the Night
      </div>

      <div className="w-full max-w-screen-md mt-4 md:mt-6 border-[#201F1F1A] rounded-lg">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Event..."
            className="w-full p-2 md:p-4 rounded-lg text-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <button className="text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            All
          </button>
          <button className="text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Today
          </button>
          <button className="text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Tomorrow
          </button>
          <button className="text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Weekend
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
