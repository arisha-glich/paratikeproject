import React from "react";
import logo2 from "../assets/Logo2.png"; // Adjust the path as necessary
import social from "../assets/socials.png"; // Use the imported image

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={logo2} alt="Logo" className="w-[193px] h-[29px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-6 text-black text-lg">
          <a href="#" className="hover:underline">
            Policies
          </a>
          <a href="#" className="hover:underline">
            Contact us
          </a>
          <a href="#" className="hover:underline">
            About us
          </a>
        </div>

        {/* Flex container for Copyright and Social Media Links */}
        <div className="flex justify-between items-center px-6">
          {/* Copyright Text */}
          <div className="text-black text-sm">
            <p>&copy; 2023 partikarte. All Rights Reserved.</p>
          </div>

          {/* Social Media Links Image */}
          <div className="flex">
            <img src={social} alt="Social Media Links" className="w-[150px] h-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
