import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/${i + 1}.jpeg`,
    alt: `Slideshow Image ${i + 1}`
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="rounded-xl relative w-full h-screen bg-black">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-contain" 
              sizes="100vw"
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
