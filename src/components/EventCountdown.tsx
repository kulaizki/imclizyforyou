import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const eventDate = new Date("2024-12-28T13:30:00+08:00");

    function calculateTimeRemaining() {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    setTimeRemaining(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeRemaining) return null;

  return (
    <div className="flex flex-col items-center gap-8 text-center text-gray-800 py-8 px-4">
      <h2 className="font-wedding text-slate-700  text-3xl sm:text-4xl md:text-7xl font-semibold">
        Countdown to the Big Day
      </h2>
      <div className="flex justify-center gap-4 md:gap-6">
        {Object.entries(timeRemaining).map(([label, value], index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-20 md:w-24 lg:w-28 shadow-lg">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">{value}</span>
            <span className="text-sm md:text-base text-gray-500 mt-1">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
