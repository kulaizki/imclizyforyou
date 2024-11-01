// Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef1cf] relative">
      <div className="flex flex-col z-10 text-center px-4 gap-8">
        <h1 className="text-7xl font-wedding text-gray-800 tracking-wide">
          Clive and Zyra&apos;s Wedding
        </h1>
        <p className="text-3xl font-serif text-gray-600 leading-7">
          Celebrate this special day with us!
        </p>
      </div>
    </div>
  );
};

export default Hero;
