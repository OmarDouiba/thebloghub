import React from 'react';

export const Hero = () => {
  return (
    <section className="relative bg-gray-100 p-8">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Hero"
        className="w-full h-64 object-cover rounded"
      />
      <div className="absolute top-16 left-8 bg-white shadow-lg p-4 rounded">
        <h2 className="text-xl font-bold">
          The Impact of Technology on the Workplace
        </h2>
        <p className="text-sm text-gray-500">January 1, 2025</p>
      </div>
    </section>
  );
};
