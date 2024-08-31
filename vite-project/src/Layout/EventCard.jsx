import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";

export function EventCard({ date, title, location, image, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full md:w-1/3 px-[30px]">
      
      {/* Date with Icon */}
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <FiClock className="mr-2" /> 
        {date}
      </div>
      
      {/* Image section */}
      <img 
        src={image} 
        alt={title} 
        className="w-[379px] h-[200px] rounded-tl-[10px] rounded-br-none rounded-bl-none rounded-tr-none object-cover mb-4"
      />
      
      {/* Title */}
      <div className="font-bold text-lg">{title}</div>
      
      {/* Location with Icon */}
      <div className="flex items-center text-gray-400 text-sm mt-2">
        <FiMapPin className="mr-2" /> 
        {location}
      </div>
      
      <div className="mt-4">
        <button className="bg-blue-300 text-blue-900 text-m py-2 px-28 rounded-lg shadow hover:bg-blue-500 transition">
          {price}
        </button>
      </div>
    </div>
  );
}
