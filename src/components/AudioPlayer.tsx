"use client";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasInteracted && audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    const handleUserInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [hasInteracted]);

  return (
    <audio ref={audioRef} src="/song.mp3" muted />
  );
};

export default AudioPlayer;