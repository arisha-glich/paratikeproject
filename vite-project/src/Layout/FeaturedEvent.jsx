import React from 'react';

const FeaturedEvents = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Featured Events</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Event Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>
        
        {/* Event Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>
        
        {/* Event Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>

        {/* Event Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>

        {/* Event Card 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>

        {/* Event Card 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-bold">Introduction Basic Programming HTML & CSS</h3>
            <p className="text-gray-500 mt-2">21 Feb, 2023 | Club Cirrus</p>
            <p className="text-blue-600 font-bold mt-4">$10.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default FeaturedEvents;
