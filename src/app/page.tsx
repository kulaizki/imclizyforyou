export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">

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

      <div className="relative z-10 text-center py-12 px-4">
        <h1 className="text-7xl font-wedding text-gray-800 tracking-wide">
          Clive and Zyra&apos;s Wedding
        </h1>
        <p className="text-xl font-body text-gray-600 mt-4 leading-7">
          Celebrate this special day with us!
        </p>
      </div>

      <div className="relative z-10 text-center py-12 max-w-xl px-4">
        <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
          Venue
        </h1>
        <p className="text-xl font-body text-gray-600 mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit 
          accusantium minima eum porro laudantium dolor ipsum? Tempora, corporis 
          laboriosam, repellendus eligendi ut iusto sunt optio sint, magnam magni 
          asperiores?
        </p>
      </div>

      <div className="relative z-10 text-center py-12 max-w-xl px-4">
        <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
          Attire
        </h1>
        <p className="text-xl font-body text-gray-600 mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit 
          accusantium minima eum porro laudantium dolor ipsum? Tempora, corporis 
          laboriosam, repellendus eligendi ut iusto sunt optio sint, magnam magni 
          asperiores?
        </p>
      </div>

      <div className="relative z-10 text-center py-12 max-w-xl px-4">
        <h1 className="text-5xl font-wedding font-semibold text-gray-800 tracking-wide">
          Join us
        </h1>
        <p className="text-xl font-body text-gray-600 mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit 
          accusantium minima eum porro laudantium dolor ipsum? Tempora, corporis 
          laboriosam, repellendus eligendi ut iusto sunt optio sint, magnam magni 
          asperiores?
        </p>
      </div>
    </div>
  );
}
