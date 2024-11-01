"use client";

import React from "react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-[#fef1cf] relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex flex-col z-10 text-center px-4 gap-8 transform transition-transform duration-1000 ${
          isVisible ? "translate-y-0" : "-translate-y-10"
        }`}
      >
        <h1 className="text-7xl font-wedding text-gray-800 tracking-wide animate-fadeIn">
          Clive & Zyra&apos;s Wedding
        </h1>
        <p className="text-3xl font-serif text-gray-600 leading-7 animate-fadeIn delay-200">
          Celebrate this special day with us!
        </p>
      </div>
    </div>
  );
};

export default Hero;
