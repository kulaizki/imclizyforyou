import Hero from "@/components/Hero";
import Crew from "@/components/Crew";
import Sponsors from "@/components/Sponsors";
import Gifts from "@/components/Gifts";
import Children from "@/components/Children";
import Attire from "@/components/Attire";
import Reception from "@/components/Reception";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef1cf] gap-y-16">
      <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/test-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Hero />
      <Crew />
      <Sponsors />
      <Reception />
      <Attire />
      <Gifts />
      <Children />

      <h1 className="text-7xl font-wedding font-semibold text-gray-800 tracking-wide">
        Join us
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
  );
}
