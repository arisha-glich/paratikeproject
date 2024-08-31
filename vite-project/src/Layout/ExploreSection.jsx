import React from "react";
import Button from "./Button";

import icon from "../assets/Icon.png";
import ImageGallery from "./ImageGallery";
const ExploreSection = () => {
  return (
    <section
      className="w-[1440px] h-[587px] px-[120px] pt-[62px] pb-[53px] bg-black"
      style={{ top: "2247px" }}
    >
      <div className="w-[1200px] h-[472px] mx-auto relative">
        <div className="font-frank-ruhl-libre text-[50px] font-normal  tracking-[-0.05em] text-left ">
          <span className="text-white">Explore </span>
          <span className="text-blue-500">by Organizer</span>
        </div>
        <Button
          text="Explore All Organizers"
          backgroundColor="bg-blue-600"
          hoverColor="hover:bg-blue-700"
          width="w-[232px]"
          height="h-[56px]"
          top="top-[90px]"
          left="left-[931px]"
          opacity="opacity-100"
          onClick={() => alert("Button clicked!")}
        />{" "}
        <img
          src={icon}
          alt="Icon"
          className="absolute w-[119.56px] h-[66px] top-[85px] left-[1000px] opacity-100"
          style={{
            borderRadius: "210.43px 0px 0px 0px",
          }}
        />  <ImageGallery/>
      </div>
    
    </section>
  );
};

export default ExploreSection;
