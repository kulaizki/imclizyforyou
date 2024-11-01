import Hero from "@/components/Hero";
import Crew from "@/components/Crew";
import Sponsors from "@/components/Sponsors";
import Gifts from "@/components/Gifts";
import Children from "@/components/Children";

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
      <Gifts />
      <Sponsors />
      <Children />
      
      <div className="flex flex-col z-10 text-center px-4 gap-6 max-w-2xl">
        <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
          Guest Attire
        </h1>
        <p className="text-xl font-body text-gray-700 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reprehenderit accusantium minima eum porro laudantium dolor ipsum?
          Tempora, corporis laboriosam, repellendus eligendi ut iusto sunt optio
          sint, magnam magni asperiores?
        </p>
      </div>

      <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
        Reception
      </h1>


      <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
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
