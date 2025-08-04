import { useState, useEffect } from "react";
import TracksSection from "./TracksSection";

export default function TracksPage() {
  const [currentTrack, setCurrentTrack] = useState<"engineering" | "product">(
    "engineering"
  );

  const handleTrackChange = (track: "engineering" | "product") => {
    setCurrentTrack(track);
  };

  // Infinite track transitions every 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTrack(
        currentTrack === "engineering" ? "product" : "engineering"
      );
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [currentTrack]); // Re-run when currentTrack changes

  return (
    <div className="relative">
      {/* Track Content */}
      <div className="transition-all duration-500 ease-in-out">
        <TracksSection track={currentTrack} onTrackChange={handleTrackChange} />
      </div>
    </div>
  );
}
