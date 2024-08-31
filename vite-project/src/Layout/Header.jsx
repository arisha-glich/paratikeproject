import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[453px] bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col items-center justify-between p-6">
      <div className="w-full max-w-screen-xl h-[56px] flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="../assets/react.svg" // Ensure the correct file extension and path
            alt="Logo"
            className="w-[193px] h-[29px]"
          />
        </div>
        
        {/* Login Button */}
        <div className="flex items-center">
          <span className="text-white mr-4">For Organization</span>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Login
          </button>
        </div>
      </div>

      <div className="w-[344px] h-[63px] text-white text-4xl font-outfit font-light text-center mt-12 opacity-100">
        Explore the Night
      </div>

      <div className="w-full max-w-screen-md mt-6  border-[#201F1F1A] rounded-lg ">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Event..."
            className="w-full p-4 rounded-lg text-black focus:outline-none"
          />
        </div>
        <div className="flex mt-4 space-x-4 justify-center">
          <button className="text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            All
          </button>
          <button className="text-white  px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Today
          </button>
          <button className="text-white  px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Tomorrow
          </button>
          <button className="text-white  px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Weekend
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
