import React from 'react';

const Policy = () => {
  return (
    <div className=" w-[1198] h-[940]bg-gray-50 p-20 m-10 rounded-lg space-y-10">
      {/* Policies Section */}
      <div>
        <h2 className="font-bold text-xl items-start mb-4">Policies</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Privacy and Policy
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Terms of Services
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            FAQ's
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Payment Policies
          </button>
        </div>
      </div>

      {/* Articles Section */}
      <div>
        <h2 className="font-bold text-xl mb-4">Articles</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            For Ticket Buyers
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Ticket Ankers
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Party Tickets
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            How to join in Events
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Party Tickets
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Ticket Ankers
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            For Ticket Buyers
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            How to join in Events
          </button>
        </div>
        <div className="flex items-center mt-4">
          {/* Avatar Icons */}
          <div className="flex -space-x-2">
            <img
              src="avatar1.png"
              alt="Avatar 1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="avatar2.png"
              alt="Avatar 2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="avatar3.png"
              alt="Avatar 3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/* Others Section */}
      <div>
        <h2 className="font-bold text-xl mb-4">Others</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Other links will be here
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            Other links will be here
          </button>
          <button className="bg-blue-100 text-black p-2 rounded-lg">
            For Ticket Buyers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Policy;
