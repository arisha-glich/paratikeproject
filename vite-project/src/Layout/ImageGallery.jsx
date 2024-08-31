import React from 'react';

import img11 from "../assets/11.png"
import img12 from "../assets/12.png"
import img13 from "../assets/13.png"
const ImageGallery = () => {
  return (
    <div
      className="w-[1193px] h-[129px] relative"
      style={{ top: '265px', left: '127px', borderRadius: '10px 0px 0px 0px', opacity: '1' }}
    >
      <div className="w-full h-full flex gap-4 overflow-hidden">
        <div className="w-1/4 h-full flex-shrink-0">
          <img
            src={img11}
            alt="Gallery Image 1"
            className="w-full h-full object-cover"
            style={{ borderRadius: '10px 0px 0px 0px' }}
          />
        </div>
        <div className="w-1/4 h-full flex-shrink-0">
          <img
            src={img12}
            alt="Gallery Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/4 h-full flex-shrink-0">
          <img
            src={img13}
            alt="Gallery Image 3"
            className="w-full h-full object-cover"
          />
        </div>
       
      </div>
    </div>
  );
};

export default ImageGallery;
