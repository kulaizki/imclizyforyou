"use client";

import Image from "next/image";
import Crew from "@/components/Crew";
import Sponsors from "@/components/Sponsors";
import ReceptionGuest from "@/components/ReceptionGuest";
import GiftsChildren from "@/components/GiftsChildren";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 w-screen h-screen z-0">
        <video
          className="w-full h-[50%] sm:h-[60%] md:h-[60%] lg:h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/32.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 w-full z-10">
        <div className="h-[50%] sm:h-[60%] md:h-[80vh] lg:h-screen" />
        
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-screen">
          <div
            className="absolute inset-0 w-full h-full"
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
              className="object-cover mt-10"
              priority
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-[#fef1cf] flex flex-col items-center gap-y-16 p-4">
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
      </div>
    </main>
  );
}
