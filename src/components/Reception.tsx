import React from 'react';
import Image from 'next/image';

const Reception = () => {
  return (
    <div className="bg-[#faf5e7] bg-opacity-80 rounded-lg shadow-lg p-20 max-w-5xl w-full">
      <h1 className="select-none text-5xl font-wedding text-gray-800 tracking-wide text-center mb-8">
        Reception
      </h1>

      <div className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
        <p className="mb-6">
          <span className="select-none font-bold text-gray-800">PEOPLE&apos;S CENTER, TACLOBAN, LEYTE.</span>
        </p>
        <p className='select-none'>
          Scan here for the directions:
        </p>
      </div>

      <div className="flex justify-center">
        <Image 
          src="/assets/reception-qr.png" 
          alt="QR Code for Directions"
          width={180}
          height={180}
          draggable='false'
          className='rounded-xl'
        />
      </div>
    </div>
  );
};

export default Reception;
