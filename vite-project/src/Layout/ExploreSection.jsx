import React from 'react';

const ExploreSection = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="px-20">
        <h2 className="text-2xl font-bold mb-6">Explore by Organizer</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded p-6">
            <img src="/path-to-image1.jpg" alt="Organizer 1" className="w-full rounded mb-4" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Follow Organizer 1</button>
          </div>
          <div className="bg-gray-800 rounded p-6">
            <img src="/path-to-image2.jpg" alt="Organizer 2" className="w-full rounded mb-4" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Follow Organizer 2</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
