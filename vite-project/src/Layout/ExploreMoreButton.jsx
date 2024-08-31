import React from 'react';
import Button from './Button';

const ExploreMoreButton = ({ onClick = () => {} }) => {
  return (
    <Button
      text="Explore More"
      backgroundColor="bg-[#3D8AFF]" // Custom blue background color
      textColor="text-white"
      padding="py-[24px] px-0" // Adjust padding as specified
      borderRadius="rounded-tl-[10px] rounded-bl-none rounded-br-none rounded-tr-none"
      width="w-[244px]" // Fixed width
      height="h-[56px]" // Fixed height
      hoverColor="hover:bg-[#2C5BCC]" 
      onClick={onClick}
    />
  );
};

export default ExploreMoreButton;
