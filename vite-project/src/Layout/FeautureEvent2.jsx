import React from "react";
import { EventCard } from "./EventCard";

// Import your images

import image4 from "../assets/4.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import ExploreMoreButton from "./ExploreMoreButton";

const FeatureEvent2 = () => {
  return (
    <>
      <div className="px-40">
        <div className="items-start bg-white flex flex-col p-8">
          <div className="flex flex-wrap m-3 justify-center">
            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image4} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />

            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image7} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />

            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image6} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />

            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image8} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />

            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image9} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />

            <EventCard
              date="21 Feb, 2023"
              title="Introduction Basic Programming HTML & CSS"
              image={image10} // Pass the imported image here
              location="Club Cirrus"
              price="$10.00"
            />
          </div>
        </div>
      </div>
      <ExploreMoreButton/> <br /><br /><br />
    
    </>
  );
};

export default FeatureEvent2;
