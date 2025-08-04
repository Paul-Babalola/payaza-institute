import { useState, useEffect } from "react";
import TracksSection from "./TracksSection";

export default function TracksPage() {
  const [currentTrack, setCurrentTrack] = useState<"engineering" | "product">(
    "engineering"
  );

  const handleTrackChange = (track: "engineering" | "product") => {
    setCurrentTrack(track);
  };

  // Auto-navigate to Product track after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTrack("product");
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Track Content */}
      <div className="transition-all duration-500 ease-in-out">
        <TracksSection track={currentTrack} onTrackChange={handleTrackChange} />
      </div>
    </div>
  );
}
