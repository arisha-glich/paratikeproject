import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="px-20">
        <p>© 2024 Explore the Night</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-black hover:underline">Privacy Policy</a>
          <a href="#" className="text-black hover:underline">Terms of Service</a>
          <a href="#" className="text-black hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
