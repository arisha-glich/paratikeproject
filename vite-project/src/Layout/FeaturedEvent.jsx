import React from "react";
import { EventCard } from "./EventCard";

// Import your images
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';

const FeaturedEvents = () => {
  return (
    <>
    <div className="px-40"> 
      <div className="items-start bg-white flex flex-col p-8">
        <h2 className="font-outfit text-[12px] font-medium leading-[17.64px] tracking-[0.02em] text-left text-blue-600">
          Featured!
        </h2>
        <div className="font-outfit text-[48px] font-normal leading-[60.48px] tracking-[-0.02em] text-left">
  <span className="text-blue-900">Featured</span>
  <span className="text-blue-600"> Events</span>
</div>
        <div className="flex flex-wrap m-3 justify-center">
          <EventCard
            date="21 Feb, 2023"
            title="Introduction Basic Programming HTML & CSS"
            image={image1} // Pass the imported image here
            location="Club Cirrus"
            price="$10.00"
          />
          
          <EventCard
            date="21 Feb, 2023"
            title="Introduction Basic Programming HTML & CSS"
            image={image2} // Pass the imported image here
            location="Club Cirrus"
            price="$10.00"
          />
          
          <EventCard
            date="21 Feb, 2023"
            title="Introduction Basic Programming HTML & CSS"
            image={image3} // Pass the imported image here
            location="Club Cirrus"
            price="$10.00"
          />
        </div>
      </div> 
    </div>
    <div className="w-[11111px] h-0 border-t border-[#00000012] bg-gray-400  opacity-100 mt-[11] ml-[12px]"></div>
    </>

  );
};

export default FeaturedEvents;
