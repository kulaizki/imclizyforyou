"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Crew from "@/components/Crew";
import Sponsors from "@/components/Sponsors";
import ReceptionGuest from "@/components/ReceptionGuest";
import GiftsChildren from "@/components/GiftsChildren";
import Venue from "@/components/Venue";
import Parents from "@/components/Parents";
import CopyrightFooter from "@/components/CopyrightFooter";
import EventCountdown from "@/components/EventCountdown";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [weddingDate, setWeddingDate] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeddingDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (weddingDate === "12/28/24") {
      setIsDateValid(true);
    } else {
      alert("Please enter a valid wedding date.");
      setIsDateValid(false);
    }
  };

  return (
    <main className="relative">
      <audio ref={audioRef} src="/song.mp3" loop />
      {!isDateValid ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-100 to-purple-300 relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/assets/background-pattern.png" 
              alt="Background Pattern"
              fill
              className="object-cover"
              priority
              draggable="false"
            />
          </div>
          <h2 className="font-wedding text-5xl mb-4 text-purple-600 text-center font-bold z-10">Please enter the wedding date:</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg z-10">
            <input
              type="text"
              value={weddingDate}
              onChange={handleDateChange}
              placeholder="MM/DD/YY"
              className="border border-gray-400 p-2 rounded mb-4 text-slate-700 w-full max-w-xs"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md transition duration-300 
                         hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 w-screen h-screen z-0">
            <video
              className="w-full h-[50%] sm:h-[60%] md:h-[60%] lg:h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/landing-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 w-full z-10">
            <div className="h-[50%] sm:h-[40vh] md:h-[32vh] lg:h-screen" />
            <div className="relative w-full h-[70vh] sm:h-[40vh] md:h-[70vh] lg:h-screen">
              <div
                className="absolute inset-0 w-full h-full mt-20 sm:mt-10 md:mb-10"
                style={{
                  background:
                    "linear-gradient(to top, #fef1cf 10%, transparent 100%)",
                }}
              >
                <Image
                  src="/assets/image-header.png"
                  alt="Clive & Zyra's Wedding"
                  fill
                  sizes="100vw"
                  className="object-cover mt-32 md:mt-20 lg:mt-0 no-select"
                  priority
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <div className="bg-[#fef1cf] flex flex-col items-center gap-y-16 p-4 pt-40">
              <button
                onClick={handlePlayPause}
                className={`px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md transition duration-300 
                            hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300`}
              >
                {isPlaying ? "Pause Music" : "Play Music"}
              </button>
              <Slideshow />
              <EventCountdown />
              <Venue />
              <Parents />
              <Sponsors />
              <Crew />
              <ReceptionGuest />
              <GiftsChildren />

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl select-none font-wedding font-semibold text-gray-800 tracking-wide">
                RSVP
              </h1>
              <iframe
                title="RSVP Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSduD45efj0H9cTl_ClTztjaJoQM-626YssPMN7PaAI26U1-jA/viewform?embedded=true"
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] border-0 pb-10"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
            <CopyrightFooter />
          </div>
        </>
      )}
    </main>
  );
}