"use client";

import Image from "next/image";
import Crew from "@/components/Crew";
import Sponsors from "@/components/Sponsors";
import Gifts from "@/components/Gifts";
import Children from "@/components/Children";
import Attire from "@/components/Attire";
import Reception from "@/components/Reception";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10">
        <div className="h-screen"></div>
        <div className="relative w-full h-screen">
          <div
            className="relative w-full h-full"
            style={{
              background: "linear-gradient(to top, #fef1cf 10%, transparent 100%)", 
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
            }}
          >
            <Image
              src="/assets/image-header.png"
              alt="Clive & Zyra's Wedding"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="bg-[#fef1cf] flex flex-col items-center gap-y-16">
          <Sponsors />
          <Crew />
          <Reception />
          <Attire />
          <Gifts />
          <Children />
          <h1 className="text-7xl select-none font-wedding font-semibold text-gray-800 tracking-wide">
            RSVP
          </h1>
          <iframe
            title="RSVP Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSduD45efj0H9cTl_ClTztjaJoQM-626YssPMN7PaAI26U1-jA/viewform?embedded=true"
            className="w-full h-[580px] border-0 mb-10"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}
